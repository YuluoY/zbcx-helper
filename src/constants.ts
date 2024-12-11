/**
 * 智博创享代码补全插件的常量定义文件
 * @module constants
 */

/**
 * 文件路径相关常量
 * @constant
 */
export const PATHS = {
    /** 模块目录路径 */
    MODULES_DIR: 'dist/src/modules',
    /** CX根模块名称 */
    CX_ROOT: 'cx',
    /** 索引文件名 */
    INDEX_FILE: 'index.json'
} as const;

/**
 * 支持的编程语言
 * @constant
 */
export const LANGUAGES = {
    /** JavaScript语言 */
    JAVASCRIPT: 'javascript',
    /** Vue语言 */
    VUE: 'vue',
    /** HTML语言 */
    HTML: 'html'
} as const;

/**
 * 代码补全触发字符
 * @constant
 */
export const TRIGGER_CHARACTERS = {
    /** 点号触发 */
    DOT: '.',
    /** c字母触发 */
    C: 'c'
} as const;

/**
 * 模块类型定义
 * @constant
 */
export const MODULE_KINDS = {
    /** 模块类型 */
    MODULE: 'Module',
    /** 函数类型 */
    FUNCTION: 'Function',
    /** 变量类型 */
    VARIABLE: 'Variable',
    /** 方法类型 */
    METHOD: 'Method',
    /** 构造函数类型 */
    CONSTRUCTOR: 'Constructor',
    /** 字段类型 */
    FIELD: 'Field',
    /** 类类型 */
    CLASS: 'Class',
    /** 接口类型 */
    INTERFACE: 'Interface',
    /** 属性类型 */
    PROPERTY: 'Property',
    /** 枚举类型 */
    ENUM: 'Enum',
    /** 常量类型 */
    CONSTANT: 'Constant',
    /** 事件类型 */
    EVENT: 'Event',
    /** 结构体类型 */
    STRUCT: 'Struct',
    /** 类型参数 */
    TYPE_PARAMETER: 'TypeParameter',
    /** 字符串类型 */
    STRING: 'string',
    /** 数字类型 */
    NUMBER: 'number',
    /** 布尔类型 */
    BOOLEAN: 'boolean',
    /** 数组类型 */
    ARRAY: 'array',
    /** 对象类型 */
    OBJECT: 'object',
    /** 任意类型 */
    ANY: 'any',
    /** Markdown类型 */
    MARKDOWN: 'markdown'
} as const;

/**
 * 文档格式定义
 * @constant
 */
export const DOCUMENTATION = {
    /** Markdown格式 */
    MARKDOWN: 'markdown',
    /** TypeScript代码块格式 */
    CODE_BLOCK: 'typescript'
} as const;

/**
 * 参数状态定义
 * @constant
 */
export const PARAMETER_STATUS = {
    /** 必填参数 */
    REQUIRED: '必填',
    /** 可选参数 */
    OPTIONAL: '可选'
} as const;

/**
 * 正则表达式定义
 * @constant
 */
export const REGEX = {
    /** CX模块路径匹配正则 */
    CX_MODULE_PATH: /cx\.([\w.]+)/
} as const;

/**
 * 默认值定义
 * @constant
 */
export const DEFAULTS = {
    /** 缩进空格数 */
    INDENT_SPACES: 2,
    /** 默认类型 */
    TYPE_ANY: 'any'
} as const; 