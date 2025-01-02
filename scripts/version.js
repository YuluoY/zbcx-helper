const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// 文件备份与恢复
class FileBackup {
  constructor() {
    this.backups = new Map();
  }

  backup(filePath) {
    if (fs.existsSync(filePath)) {
      this.backups.set(filePath, fs.readFileSync(filePath, 'utf8'));
      console.log(`已备份文件: ${path.basename(filePath)}`);
    }
  }

  restore() {
    console.log('正在恢复文件...');
    for (const [filePath, content] of this.backups.entries()) {
      try {
        fs.writeFileSync(filePath, content);
        console.log(`已恢复文件: ${path.basename(filePath)}`);
      } catch (error) {
        console.error(`恢复文件失败 ${path.basename(filePath)}:`, error);
      }
    }
  }
}

// Git操作类
class GitOperations {
  constructor(version) {
    this.version = version;
  }

  // 回退所有Git更改
  async rollback() {
    console.log('正在回退Git更改...');
    try {
      // 1. 重置工作区和暂存区
      await this.execCommand('git reset --hard HEAD');
      
      // 2. 删除本地标签
      await this.execCommand(`git tag -d v${this.version}`, true);
      
      // 3. 删除远程标签
      await this.execCommand(`git push origin :refs/tags/v${this.version}`, true);
      
      console.log('Git更改已回退');
    } catch (error) {
      console.error('回退Git更改时出错：', error);
      throw error;
    }
  }

  async execCommand(command, ignoreError = false) {
    try {
      execSync(command, { stdio: 'inherit' });
    } catch (error) {
      if (!ignoreError) {
        throw error;
      }
    }
  }
}

// 构建产物清理
class BuildCleaner {
  constructor(version) {
    this.version = version;
  }

  clean() {
    console.log('正在清理构建产物...');
    try {
      // 1. 删除vsix文件
      const vsixFile = path.join(__dirname, `../zbcx-helper-${this.version}.vsix`);
      if (fs.existsSync(vsixFile)) {
        try {
          fs.unlinkSync(vsixFile);
          console.log(`已删除文件: zbcx-helper-${this.version}.vsix`);
        } catch (e) {
          console.warn(`警告: 无法删除 ${vsixFile}`);
        }
      }

      // 2. 清理dist目录
      const distDir = path.join(__dirname, '../dist');
      if (fs.existsSync(distDir)) {
        try {
          // 使用rimraf直接删除目录
          require('rimraf').sync(distDir);
          console.log('已清理dist目录');
        } catch (e) {
          console.warn('警告: 无法清理dist目录，可能需要手动删除');
        }
      }
    } catch (error) {
      console.error('清理构建产物时出现警告:', error);
      // 不抛出错误，让流程继续
    }
  }
}

// 版本回退管理器
class VersionRollback {
  constructor(version) {
    this.version = version;
    this.fileBackup = new FileBackup();
    this.gitOps = new GitOperations(version);
    this.buildCleaner = new BuildCleaner(version);
  }

  // 备份文件
  backupFiles(files) {
    console.log('开始备份文件...');
    files.forEach(file => this.fileBackup.backup(file));
  }

  // 执行回退
  async rollback() {
    console.log('开始执行回退操作...');
    try {
      // 1. 恢复文件
      this.fileBackup.restore();

      // 2. 清理构建产物
      this.buildCleaner.clean();

      // 3. 回退Git更改
      await this.gitOps.rollback();

      console.log('回退操作完成');
    } catch (error) {
      console.error('回退操作失败:', error);
      throw error;
    }
  }
}

// Git 操作相关函数
function gitAdd(files) {
  try {
    // 先检查工作区状态
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!status) {
      console.log('没有文件需要提交');
      return;
    }

    // 添加所有修改的文件
    execSync('git add .', { stdio: 'inherit' });
    console.log('已暂存所有更改');
  } catch (error) {
    throw new Error(`添加文件到暂存区失败: ${error.message}`);
  }
}

function gitCommit(message) {
  // 检查是否有文件在暂存区
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (!status) {
    console.log('没有文件需要提交');
    return;
  }
  
  try {
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log('已提交更改');
  } catch (error) {
    throw new Error(`提交更改失败: ${error.message}`);
  }
}

function gitTag(version, message) {
  try {
    execSync(`git tag -a v${version} -m "${message}"`, { stdio: 'inherit' });
    console.log(`已创建标签: v${version}`);
  } catch (error) {
    throw new Error(`创建标签失败: ${error.message}`);
  }
}

function gitPush() {
  try {
    execSync('git push', { stdio: 'inherit' });
    execSync('git push --tags', { stdio: 'inherit' });
    console.log('已推送到远程仓库');
  } catch (error) {
    throw new Error(`推送到远程仓库失败: ${error.message}`);
  }
}

// 版本更新管理器
class VersionManager {
  constructor(options) {
    const { versionType, updateMessage, files } = options;
    this.versionType = versionType;
    this.updateMessage = updateMessage;
    this.files = files;
    this.currentVersion = require(files.packagePath).version;
    this.newVersion = semver.inc(this.currentVersion, versionType);
    this.rollbackManager = new VersionRollback(this.currentVersion);
  }

  // 更新package.json
  updatePackageJson() {
    console.log('更新package.json...');
    const packageJson = require(this.files.packagePath);
    packageJson.version = this.newVersion;
    fs.writeFileSync(this.files.packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  }

  // 更新README.md
  updateReadme() {
    console.log('更新README.md...');
    let readmeContent = fs.readFileSync(this.files.readmePath, 'utf8');
    readmeContent = readmeContent.replace(
      /version-[0-9]+\.[0-9]+\.[0-9]+-blue/,
      `version-${this.newVersion}-blue`
    );
    fs.writeFileSync(this.files.readmePath, readmeContent);
  }

  // 更新CHANGELOG.md
  updateChangelog() {
    console.log('更新CHANGELOG.md...');
    const date = new Date().toISOString().split('T')[0];
    const changelogEntry = `## [${this.newVersion}] - ${date}\n\n### 更新内容\n\n- ${this.updateMessage}\n\n`;

    if (!fs.existsSync(this.files.changelogPath)) {
      const initialContent = `# 更新日志\n\n${changelogEntry}`;
      fs.writeFileSync(this.files.changelogPath, initialContent);
    } else {
      let changelogContent = fs.readFileSync(this.files.changelogPath, 'utf8');
      const firstTitleIndex = changelogContent.indexOf('\n## ');
      if (firstTitleIndex === -1) {
        changelogContent += `\n${changelogEntry}`;
      } else {
        changelogContent = changelogContent.slice(0, firstTitleIndex + 1) + 
                          changelogEntry +
                          changelogContent.slice(firstTitleIndex + 1);
      }
      fs.writeFileSync(this.files.changelogPath, changelogContent);
    }
  }

  // 执行构建
  async build() {
    console.log('开始构建...');
    execSync('npm run clean', { stdio: 'inherit' });
    execSync('webpack --config ./webpack.config.js', { stdio: 'inherit' });
    execSync('vsce package --no-dependencies --allow-star-activation', { stdio: 'inherit' });
  }

  // 执行Git操作
  async gitOperations() {
    console.log('执行Git操作...');
    
    // 删除已存在的标签
    try {
      execSync(`git tag -d v${this.newVersion}`, { stdio: 'pipe' });
      execSync(`git push origin :refs/tags/v${this.newVersion}`, { stdio: 'pipe' });
    } catch (e) {
      // 忽略错误，标签可能不存在
    }

    const filesToCommit = ['package.json', 'README.md', 'CHANGELOG.md'];
    gitAdd(filesToCommit);
    gitCommit(`release: v${this.newVersion}`);
    gitTag(this.newVersion, this.updateMessage);
    gitPush();
  }

  // 执行版本更新流程
  async execute() {
    try {
      // 1. 备份文件
      this.rollbackManager.backupFiles([
        this.files.packagePath,
        this.files.readmePath,
        this.files.changelogPath
      ]);

      // 2. 更新文件
      this.updatePackageJson();
      this.updateReadme();
      this.updateChangelog();

      // 3. 构建
      await this.build();

      // 4. Git操作
      await this.gitOperations();

      console.log(`版本已更新: ${this.currentVersion} -> ${this.newVersion}`);
      console.log('发布流程完成！');
    } catch (error) {
      console.error('执行过程中出错：', error);
      await this.rollbackManager.rollback();
      throw error;
    }
  }
}

async function __main__() {
  try {
    // 1. 解析命令行参数
    const versionType = process.argv[2] || 'patch';
    const updateMessages = process.argv.slice(3);
    const updateMessage = updateMessages.length > 0 ? updateMessages.join(' ') : '版本更新';

    // 2. 初始化文件路径
    const files = {
      packagePath: path.join(__dirname, '../package.json'),
      readmePath: path.join(__dirname, '../README.md'),
      changelogPath: path.join(__dirname, '../CHANGELOG.md')
    };

    // 3. 创建版本管理器
    const versionManager = new VersionManager({
      versionType,
      updateMessage,
      files
    });

    // 4. 执行版本更新流程
    await versionManager.execute();
  } catch (error) {
    console.error('版本更新失败：', error);
    process.exit(1);
  }
}

// 执行主函数
__main__(); 