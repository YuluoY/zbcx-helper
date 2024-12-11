const fs = require('fs');
const path = require('path');

// 计算相对路径
function getRelativePath(from, to) {
  return path.relative(path.dirname(from), to)
    .replace(/\\/g, '/') // 将Windows路径分隔符转换为Unix风格
    .replace(/^(?!\.\.?\/)/, './'); // 确保路径以./或../开头
}

// 调整导入路径
function adjustImportPaths(content, filePath) {
  // 计算到src目录的相对路径
  const srcPath = path.resolve(__dirname, '../src');
  const fileDir = path.dirname(filePath);
  
  // 计算新文件相对于src的路径层级
  // 因为文件会被移动到子文件夹中，所以需要多加一层 ../
  const levels = path.relative(srcPath, fileDir).split(path.sep).length + 1;
  const upPath = '../'.repeat(levels);
  
  // 将所有导入路径统一为相对于src的路径
  return content
    .replace(/from ['"]@\/([^'"]+)['"]/g, `from "${upPath}$1"`)
    .replace(/from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g, `from "${upPath}$1"`)
    .replace(/from ['"]\.\.\/\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g, `from "${upPath}$1"`)
    .replace(/from ['"]\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g, `from "${upPath}$1"`)
    .replace(/from ['"]([^'"]+)\/types['"]/g, `from "${upPath}types"`)
    .replace(/from ['"]([^'"]+)\/constants['"]/g, `from "${upPath}constants"`);
}

// 将ts文件转换为文件夹结构
function convertTsToFolder(filePath) {
  try {
    // 跳过index.ts
    if (path.basename(filePath) === 'index.ts') {
      return;
    }

    const dirPath = filePath.replace(/\.ts$/, '');
    const fileName = path.basename(filePath, '.ts');
    
    // 读取原始文件内容
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 提取documentation部分
    const docMatch = content.match(/documentation:\s*{[^}]*value:\s*"([^"]+)"/);
    const documentation = docMatch ? docMatch[1].replace(/\\n/g, '\n') : '';
    
    // 创建目录
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // 创建README.md
    const readmePath = path.join(dirPath, 'README.md');
    fs.writeFileSync(readmePath, documentation);
    
    // 修改ts文件内容，使用loadComponentDocs函数
    let modifiedContent = content.replace(
      /(documentation:\s*{[^}]*value:\s*)"([^"]+)"/,
      (match, p1) => `${p1}loadComponentDocs(__dirname)`
    );
    
    // 调整所有导入路径
    modifiedContent = adjustImportPaths(modifiedContent, filePath);
    
    // 计算到src目录的相对路径层级
    const srcPath = path.resolve(__dirname, '../src');
    const fileDir = path.dirname(filePath);
    const levels = path.relative(srcPath, fileDir).split(path.sep).length + 1; // 增加一层
    const upPath = '../'.repeat(levels);
    
    // 确保文件顶部有必要的导入
    const imports = [
      `import { loadComponentDocs } from "${upPath}utils/docs";`
    ];
    
    const finalContent = content.includes('loadComponentDocs')
      ? modifiedContent
      : `${imports.join('\n')}\n\n${modifiedContent}`;
    
    // 复制修改后的ts文件到index.ts
    const newPath = path.join(dirPath, 'index.ts');
    fs.writeFileSync(newPath, finalContent);
    
    // 删除原始文件
    fs.unlinkSync(filePath);
    
    console.log(`Converted ${filePath} to folder structure`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

// 处理目录下的所有ts文件
function processDirectory(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (path.extname(file) === '.ts' && file !== 'index.ts') {
        convertTsToFolder(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
  }
}

// 开始处理
const cxPath = path.resolve(__dirname, '../src/modules/cx');
console.log('Starting conversion from:', cxPath);
processDirectory(cxPath); 