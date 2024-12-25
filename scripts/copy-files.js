const fs = require('fs');
const path = require('path');

// 创建 dist/modules/cx 目录
const modulesDir = path.join(__dirname, '../dist/modules/cx');
if (!fs.existsSync(modulesDir)) {
    fs.mkdirSync(modulesDir, { recursive: true });
}

// 复制 src/modules/cx 到 dist/modules/cx
const srcModulesDir = path.join(__dirname, '../src/modules/cx');
fs.cpSync(srcModulesDir, modulesDir, { recursive: true });

// 创建 dist/types 目录
const typesDir = path.join(__dirname, '../dist/types');
if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
}

// 复制 src/types 到 dist/types
const srcTypesDir = path.join(__dirname, '../src/types');
fs.cpSync(srcTypesDir, typesDir, { recursive: true });

// 复制 package.json 到 dist 目录
const packageJsonPath = path.join(__dirname, '../package.json');
const distPackageJsonPath = path.join(__dirname, '../dist/package.json');
fs.copyFileSync(packageJsonPath, distPackageJsonPath);

console.log('Files copied successfully!'); 