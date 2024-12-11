/**
 * 自动生成的TypeScript配置文件转换脚本
 */

const fs = require('fs');
const path = require('path');

// 递归遍历目录
function traverseDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
            traverseDir(fullPath);
        } else if (entry.name.endsWith('.json')) {
            convertJsonToTs(fullPath);
        }
    }
}

// 将JSON文件转换为TypeScript文件
function convertJsonToTs(jsonPath) {
    try {
        const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const relativePath = path.relative(path.join(rootDir, 'src'), jsonPath);
        const tsContent = generateTsContent(jsonContent, path.basename(jsonPath, '.json'), relativePath);
        const tsPath = jsonPath.replace(/\.json$/, '.ts');
        fs.writeFileSync(tsPath, tsContent);
        console.log(`Converted ${jsonPath} to ${tsPath}`);
    } catch (error) {
        console.error(`Error converting ${jsonPath}:`, error);
    }
}

// 生成TypeScript内容
function generateTsContent(json, name) {
    const imports = [
        'import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from \'@/types\';',
        'import { MODULE_KINDS, DOCUMENTATION } from \'@/constants\';'
    ];

    // 预处理 JSON 对象
    const processedJson = JSON.parse(JSON.stringify(json));
    
    // 处理类型名称
    function processType(type) {
        if (!type) return type;
        // 基本类型名称规范化
        const typeMap = {
            'string': 'string',
            'String': 'string',
            'number': 'number',
            'Number': 'number',
            'boolean': 'boolean',
            'Boolean': 'boolean',
            'object': 'object',
            'Object': 'object',
            'function': 'Function',
            'Function': 'Function',
            'array': 'Array',
            'Array': 'Array'
        };
        return typeMap[type] || type;
    }

    // 递归处理所有类型
    function processObject(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        
        Object.keys(obj).forEach(key => {
            if (key === 'type' && typeof obj[key] === 'string') {
                if (obj[key] === 'Function' || obj[key] === 'Module') {
                    obj[key] = `MODULE_KINDS.${obj[key].toUpperCase()}`;
                } else {
                    obj[key] = processType(obj[key]);
                }
            }
            if (key === 'kind') {
                if (obj[key] === 'markdown') {
                    obj[key] = 'DOCUMENTATION.MARKDOWN';
                } else if (typeof obj[key] === 'string') {
                    obj[key] = `MODULE_KINDS.${obj[key].toUpperCase()}`;
                }
            }
            if (typeof obj[key] === 'object') {
                processObject(obj[key]);
            }
        });
        return obj;
    }

    // 自定义 JSON.stringify 替换函数
    function customStringify(obj, indent = 2) {
        if (typeof obj !== 'object' || obj === null) {
            return JSON.stringify(obj);
        }

        const isArray = Array.isArray(obj);
        const items = Object.entries(obj).map(([key, value]) => {
            const needQuotes = /[^a-zA-Z0-9_]/.test(key) || key === '';
            const keyStr = needQuotes ? `"${key}"` : key;
            const valueStr = customStringify(value, indent + 2);
            return isArray ? valueStr : `${' '.repeat(indent)}${keyStr}: ${valueStr}`;
        });

        const bracket = isArray ? '[]' : '{}';
        if (items.length === 0) return bracket;

        return isArray
            ? `[${items.join(', ')}]`
            : `{\n${items.join(',\n')}\n${' '.repeat(indent - 2)}}`;
    }

    processObject(processedJson);

    let content;
    if (json.type === 'Function') {
        content = `export const ${name}Config: FunctionConfigItem = ${customStringify(processedJson)};`;
    } else if (json.type === 'Module') {
        content = `export const ${name}Config: ModuleConfigItem = ${customStringify(processedJson)};`;
    } else {
        content = `export const ${name}Config: ConfigItem = ${customStringify(processedJson)};`;
    }

    // 移除引号，使其成为有效的 TypeScript 枚举引用
    content = content.replace(/"MODULE_KINDS\.(.*?)"/g, 'MODULE_KINDS.$1');
    content = content.replace(/"DOCUMENTATION\.(.*?)"/g, 'DOCUMENTATION.$1');

    return `/**
 * 自动生成的TypeScript配置文件
 * @module ${name}
 */

${imports.join('\n')}

${content}
`;
}

// 获取项目根目录
const scriptDir = __dirname;
const rootDir = path.resolve(scriptDir, '..');

// 开始转换
console.log('Starting conversion...');
console.log('Root directory:', rootDir);

const modulesDir = path.join(rootDir, 'src', 'modules');
console.log('Modules directory:', modulesDir);

if (!fs.existsSync(modulesDir)) {
    console.error('Error: Modules directory not found:', modulesDir);
    process.exit(1);
}

traverseDir(modulesDir);

console.log('Conversion completed!'); 