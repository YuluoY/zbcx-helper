const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// 读取命令行参数
const versionType = process.argv[2] || 'patch'; // major, minor, patch
const updateMessages = process.argv.slice(3); // 获取所有剩余参数作为更新内容
const updateMessage = updateMessages.length > 0 ? updateMessages.join(' ') : '版本更新'; // 如果没有提供更新内容，使用默认值

// 更新 package.json
const packagePath = path.join(__dirname, '../package.json');
const packageJson = require(packagePath);
const currentVersion = packageJson.version;
const newVersion = semver.inc(currentVersion, versionType);
packageJson.version = newVersion;

// 写入新的 package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

// 更新 README.md 中的版本徽章
const readmePath = path.join(__dirname, '../README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');
readmeContent = readmeContent.replace(
  /version-[0-9]+\.[0-9]+\.[0-9]+-blue/,
  `version-${newVersion}-blue`
);
fs.writeFileSync(readmePath, readmeContent);

// 更新 CHANGELOG.md
const changelogPath = path.join(__dirname, '../CHANGELOG.md');
const date = new Date().toISOString().split('T')[0];
const changelogEntry = `## [${newVersion}] - ${date}\n\n### 更新内容\n\n- ${updateMessage}\n\n`;

// 如果CHANGELOG.md不存在，创建一个新的
if (!fs.existsSync(changelogPath)) {
  const initialContent = `# 更新日志\n\n${changelogEntry}`;
  fs.writeFileSync(changelogPath, initialContent);
} else {
  // 读取现有的CHANGELOG.md
  let changelogContent = fs.readFileSync(changelogPath, 'utf8');
  
  // 在第一个标题后插入新的更新日志
  const firstTitleIndex = changelogContent.indexOf('\n## ');
  if (firstTitleIndex === -1) {
    // 如果没有找到任何版本标题，就直接添加到文件末尾
    changelogContent += `\n${changelogEntry}`;
  } else {
    // 在第一个版本标题前插入新的更新日志
    changelogContent = changelogContent.slice(0, firstTitleIndex + 1) + 
                      changelogEntry +
                      changelogContent.slice(firstTitleIndex + 1);
  }
  
  fs.writeFileSync(changelogPath, changelogContent);
}

console.log(`版本已更新: ${currentVersion} -> ${newVersion}`);
console.log(`更新内容: ${updateMessage}`);

// 执行打包命令
console.log('开始打包...');
try {
  // 1. 清理dist目录（使用npm命令）
  execSync('npm run clean', { stdio: 'inherit' });
  
  // 2. webpack打包
  execSync('webpack --config ./webpack.config.js', { stdio: 'inherit' });
  
  // 3. 生成插件文件
  execSync('vsce package --no-dependencies --allow-star-activation', { stdio: 'inherit' });
  
  // 4. Git 操作
  console.log('提交代码并创建标签...');
  try {
    // 添加所有更改的文件
    execSync('git add .', { stdio: 'inherit' });
    
    // 提交更改
    execSync(`git commit -m "release: v${newVersion}"`, { stdio: 'inherit' });
    
    // 创建标签
    execSync(`git tag -a v${newVersion} -m "${updateMessage}"`, { stdio: 'inherit' });
    
    // 推送代码和标签
    execSync('git push', { stdio: 'inherit' });
    execSync('git push --tags', { stdio: 'inherit' });
    
    console.log(`标签 v${newVersion} 已创建并推送到远程仓库`);
  } catch (error) {
    console.error('Git操作失败：', error);
    // Git操作失败不影响打包过程
  }
  
  console.log('打包完成！');
} catch (error) {
  console.error('打包过程中出错：', error);
  process.exit(1);
} 