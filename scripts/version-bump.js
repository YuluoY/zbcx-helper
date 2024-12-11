const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// 获取命令行参数
const args = process.argv.slice(2);
const updateType = args[0] || 'patch';

// 验证参数格式
if (args.length > 2) {
    console.error('错误：参数格式不正确');
    console.error('正确格式: npm run package:[type] "更新消息"');
    console.error('示例: npm run package:patch "修复了xxx问题"');
    process.exit(1);
}

// 验证更新消息格式
if (args.length === 2) {
    const message = args[1];
    // 移除可能存在的外层引号
    const cleanMessage = message.replace(/^["']|["']$/g, '');
    
    // 如果消息为空，说明格式不正确
    if (!cleanMessage.trim()) {
        console.error('错误：更新消息不能为空');
        console.error('正确格式: npm run package:[type] "更新消息"');
        console.error('示例: npm run package:patch "修复了xxx问题"');
        process.exit(1);
    }
    
    // 使用清理后的消息，并处理换行符
    args[1] = cleanMessage.replace(/\\n/g, '\n');
}

// 获取自定义消息
const customMessage = args.length > 1 ? args[1].trim() : null;

// 版本更新说明
const UPDATE_MESSAGES = {
    patch: '修复bug',
    minor: '新特性',
    major: '版本升级'
};

// 读取package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const package = require(packagePath);

// 获取当前版本
const currentVersion = package.version;

// 验证当前版本号格式
if (!semver.valid(currentVersion)) {
    console.error(`错误：当前版本号 "${currentVersion}" 格式不正确`);
    process.exit(1);
}

// 解析当前版本号
const currentParts = currentVersion.split('.');
if (currentParts.length !== 3) {
    console.error('错误：版本号必须是 x.y.z 格式');
    process.exit(1);
}

// 根据不同类型更新版本号
let newVersion;
switch (updateType) {
    case 'major':
        // 主版本号加1，次版本号和补丁号清零
        newVersion = semver.inc(currentVersion, 'major');
        break;
    case 'minor':
        // 次版本号加1，补丁号清零
        newVersion = semver.inc(currentVersion, 'minor');
        break;
    case 'patch':
        // 补丁号加1
        newVersion = semver.inc(currentVersion, 'patch');
        break;
    default:
        console.error('���误：无效的更新类型，必须是 major、minor 或 patch');
        process.exit(1);
}

// 验证新版本号格式
if (!semver.valid(newVersion)) {
    console.error(`错误：新版本号 "${newVersion}" 格式不正确`);
    process.exit(1);
}

// 验证版本号递增是否正确
if (!semver.gt(newVersion, currentVersion)) {
    console.error(`错误：新版本号 "${newVersion}" 必须大于当前版本号 "${currentVersion}"`);
    process.exit(1);
}

// 验证版本号格式是否符合规范
const newParts = newVersion.split('.');
switch (updateType) {
    case 'major':
        if (newParts[1] !== '0' || newParts[2] !== '0') {
            console.error('错误：major 更新时，次版本号和补丁号必须为 0');
            process.exit(1);
        }
        break;
    case 'minor':
        if (newParts[2] !== '0') {
            console.error('错误：minor 更新时，补丁号必须为 0');
            process.exit(1);
        }
        break;
}

// 更新package.json中的版本号
package.version = newVersion;

// 写入package.json
fs.writeFileSync(packagePath, JSON.stringify(package, null, 2) + '\n');

// 处理更新消息
const updateMessage = customMessage || UPDATE_MESSAGES[updateType];
console.log(`版本已从 ${currentVersion} 更新到 ${newVersion} (${updateMessage})`);

// 格式化日期
const date = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}).replace(/\//g, '-');

// 执行打包命令
try {
    execSync('vsce package --no-dependencies', { stdio: 'inherit' });
    
    // 打包成功后更新文档
    
    // 创建版本记录
    const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');
    // 将消息中的换行符转换为列表项
    const messageLines = updateMessage.split('\n').map(line => `- ${line.trim()}`).join('\n');
    const changelogEntry = `\n## [${newVersion}] - ${date}\n${messageLines}\n`;

    // 更新CHANGELOG.md
    if (fs.existsSync(changelogPath)) {
        const changelog = fs.readFileSync(changelogPath, 'utf8');
        fs.writeFileSync(changelogPath, changelog + changelogEntry);
    } else {
        fs.writeFileSync(changelogPath, `# 更新日志\n${changelogEntry}`);
    }

    // 更新README.md中的版本信息
    const readmePath = path.join(__dirname, '..', 'README.md');
    if (fs.existsSync(readmePath)) {
        let readme = fs.readFileSync(readmePath, 'utf8');
        
        // 更新版本徽章
        readme = readme.replace(
            /version-[\d.]+?-blue/,
            `version-${newVersion}-blue`
        );
        
        // 在文件末尾添加更新记录（先添加空行）
        const readmeEntry = `\n\n### v${newVersion} (${date})\n${messageLines}`;
        readme += readmeEntry;
        
        // 写入更新后的README
        fs.writeFileSync(readmePath, readme);
        console.log('文档已更新');
    }
} catch (error) {
    // 打包失败，回滚版本号
    console.error('打包失败:', error.message);
    package.version = currentVersion;
    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2) + '\n');
    console.log(`版本已回滚到 ${currentVersion}`);
    process.exit(1);
}