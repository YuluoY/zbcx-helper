const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// 备份文件内容
let backupFiles = {};

// 读取文件
function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`读取文件失败: ${filePath}`, error);
        throw error;
    }
}

// 写入文件
function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf8');
    } catch (error) {
        console.error(`写入文件失败: ${filePath}`, error);
        throw error;
    }
}

// 备份文件
function backupFile(filePath) {
    backupFiles[filePath] = readFile(filePath);
}

// 恢复文件
function restoreFile(filePath) {
    if (backupFiles[filePath]) {
        writeFile(filePath, backupFiles[filePath]);
        delete backupFiles[filePath];
    }
}

// 回滚所有更改
function revertChanges() {
    Object.keys(backupFiles).forEach(filePath => {
        restoreFile(filePath);
    });
}

// 更新版本号
function updateVersion(type, message) {
    const packagePath = path.resolve(__dirname, '../package.json');
    const readmePath = path.resolve(__dirname, '../README.md');
    const changelogPath = path.resolve(__dirname, '../CHANGELOG.md');

    try {
        // 备份所有文件
        backupFile(packagePath);
        backupFile(readmePath);
        backupFile(changelogPath);

        // 更新 package.json
        const packageJson = JSON.parse(readFile(packagePath));
        const oldVersion = packageJson.version;
        const newVersion = semver.inc(oldVersion, type);
        packageJson.version = newVersion;

        console.log(`版本号更新: ${oldVersion} -> ${newVersion}`);

        // 更新 README.md
        let readmeContent = readFile(readmePath);
        
        // 更新版本号
        readmeContent = readmeContent.replace(
            /version-\d+\.\d+\.\d+-blue/,
            `version-${newVersion}-blue`
        );
        
        // 在更新日志部分添加新版本信息
        const date = new Date().toISOString().split('T')[0];
        const readmeEntry = `\n\n### v${newVersion} (${date})\n- ${message}`;
        
        // 直接将新的更新日志追加到文件末尾
        readmeContent = readmeContent.trim() + readmeEntry + '\n';

        // 更新 CHANGELOG.md
        let changelogContent = readFile(changelogPath);
        const changelogEntry = `## [${newVersion}] - ${date}\n- ${message}\n`;
        changelogContent = changelogContent.trim() + '\n\n' + changelogEntry;

        // 写入文件
        writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
        writeFile(readmePath, readmeContent);
        writeFile(changelogPath, changelogContent);

        // 运行构建
        try {
            execSync('pnpm run build', {
                stdio: 'inherit',
                cwd: path.resolve(__dirname, '..')
            });
        } catch (error) {
            console.error('构建失败:', error);
            revertChanges();
            process.exit(1);
        }

        // 运行 vsce package
        try {
            execSync('vsce package --no-dependencies', {
                stdio: 'inherit',
                cwd: path.resolve(__dirname, '..')
            });
        } catch (error) {
            console.error('打包失败:', error);
            revertChanges();
            process.exit(1);
        }

    } catch (error) {
        console.error('更新版本时发生错误:', error);
        revertChanges();
        process.exit(1);
    }
}

// 主函数
function main() {
    try {
        const args = process.argv.slice(2);
        const type = args[0];

        // 处理回退命令
        if (type === 'revert') {
            const packagePath = path.resolve(__dirname, '../package.json');
            const readmePath = path.resolve(__dirname, '../README.md');
            const changelogPath = path.resolve(__dirname, '../CHANGELOG.md');

            // 读取当前版本
            const packageJson = JSON.parse(readFile(packagePath));
            const currentVersion = packageJson.version;

            // 读取 CHANGELOG 获取上一个版本
            let changelogContent = readFile(changelogPath);
            const versions = changelogContent.match(/## \[(\d+\.\d+\.\d+)\]/g)
                .map(v => v.match(/\[(\d+\.\d+\.\d+)\]/)[1]);
            
            if (versions.length < 2) {
                console.error('错误：找不到上一个版本');
                process.exit(1);
            }

            // 找到当前版本的索引
            const currentIndex = versions.indexOf(currentVersion);
            if (currentIndex <= 0) {
                console.error('错误：当前版本不存在或已是最早版本');
                process.exit(1);
            }

            // 获取上一个版本号
            const previousVersion = versions[currentIndex - 1];

            // 更新 package.json
            packageJson.version = previousVersion;
            writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

            // 更新 README.md
            let readmeContent = readFile(readmePath);
            // 更新版本号
            readmeContent = readmeContent.replace(
                /version-\d+\.\d+\.\d+-blue/,
                `version-${previousVersion}-blue`
            );
            // 删除最后一个版本的更新日志
            const readmeVersionPattern = new RegExp(`### v${currentVersion} \\([^)]+\\)[^]*?(?=###|$)`);
            readmeContent = readmeContent.replace(readmeVersionPattern, '');
            // 移除多余的空行
            readmeContent = readmeContent.replace(/\n{3,}/g, '\n\n');
            writeFile(readmePath, readmeContent);

            // 更新 CHANGELOG.md
            const lastEntryPattern = new RegExp(`\\n\\n## \\[${currentVersion}\\][^]*$`);
            changelogContent = changelogContent.replace(lastEntryPattern, '');
            writeFile(changelogPath, changelogContent.trim() + '\n');

            console.log(`版本已回退: ${currentVersion} -> ${previousVersion}`);

            // 运行构建
            try {
                execSync('pnpm run build', {
                    stdio: 'inherit',
                    cwd: path.resolve(__dirname, '..')
                });
            } catch (error) {
                console.error('构建失败:', error);
                process.exit(1);
            }

            // 运行 vsce package
            try {
                execSync('vsce package --no-dependencies', {
                    stdio: 'inherit',
                    cwd: path.resolve(__dirname, '..')
                });
            } catch (error) {
                console.error('打包失败:', error);
                process.exit(1);
            }

            return;
        }

        // 验证参数数量必须为2
        if (args.length !== 2) {
            console.error('错误：参数格式不正确');
            console.error('正确格式: npm run package:[type] "更新消息"');
            console.error('示例: npm run package:patch "修复了xxx问题"');
            process.exit(1);
        }

        // 验证版本类型
        if (!type || !['major', 'minor', 'patch'].includes(type)) {
            console.error('错误：无效的版本类型');
            console.error('正确格式: npm run package:[type] "更新消息"');
            console.error('示例: npm run package:patch "修复了xxx问题"');
            process.exit(1);
        }

        // 获取并验证消息
        const message = args[1];
        if (!message) {
            console.error('错误：必须提供更新消息');
            console.error('正确格式: npm run package:[type] "更新消息"');
            console.error('示例: npm run package:patch "修复了xxx问题"');
            process.exit(1);
        }

        // 验证消息长度
        if (message.length < 2) {
            console.error('错误：更新消息不能为空或太短');
            console.error('正确格式: npm run package:[type] "更新消息"');
            console.error('示例: npm run package:patch "修复了xxx问题"');
            process.exit(1);
        }

        // 执行更新
        updateVersion(type, message);
    } catch (error) {
        console.error('发生错误:', error);
        revertChanges();
        process.exit(1);
    }
}

main();