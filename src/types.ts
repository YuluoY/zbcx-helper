/**
 * 智博创享代码补全插件的类型定义文件
 * @module types
 */

import { MODULE_KINDS } from './constants';

/**
 * 文档配置接口
 */
export interface Documentation {
    /** 文档类型（如markdown） */
    kind: string;
    /** 文档内容 */
    value: string;
}

/**
 * 参数配置接口
 */
export interface Parameter {
    /** 参数标签 */
    label: string;
    /** 参数类型 */
    type: string;
    /** 参数详细说明 */
    detail: string;
    /** 是否必填 */
    required: boolean;
    /** 默认值 */
    default?: any;
    /** 参数属性配置（如果参数是对象类型） */
    properties?: { [key: string]: PropertyConfig };
    /** 是否为可重复参数 */
    repeatable?: boolean;
}

/**
 * 返回值类型配置接口
 */
export interface ReturnType {
    /** 返回值类型 */
    type: string;
    /** 返回值详细说明 */
    detail: string;
    /** 返回值文档说明 */
    documentation?: string;
    /** 返回值子属性配置（如果返回值是对象类型） */
    children?: { [key: string]: PropertyConfig };
}

/**
 * 属性配置接口
 */
export interface PropertyConfig {
    /** 属性类型 */
    type?: string;
    /** 属性描述 */
    description?: string;
    /** 属性详细说明 */
    detail?: string;
    /** 是否必填 */
    required?: boolean;
    /** 是否可选 */
    optional?: boolean;
    /** 默认值 */
    default?: any;
    /** 子属性配置 */
    properties?: { [key: string]: PropertyConfig };
    /** 数组项配置 */
    items?: {
        /** 数组项类型 */
        type?: string;
        /** 数组项描述 */
        description?: string;
        /** 数组项的属性配置 */
        properties?: { [key: string]: PropertyConfig };
    };
    /** 属性标签 */
    label?: string;
    /** 属性种类 */
    kind?: string;
    /** 文档配置 */
    documentation?: string | Documentation;
    /** 参数列表 */
    parameters?: Parameter[];
}

/**
 * 基础配置项接口
 */
export interface BaseConfigItem {
    /** 配置项类型 */
    type: string;
    /** 配置项种类 */
    kind: (typeof MODULE_KINDS)[keyof typeof MODULE_KINDS];
    /** 配置项标签 */
    label: string;
    /** 配置项详细说明 */
    detail: string;
    /** 文档配置 */
    documentation?: Documentation;
}

/**
 * 函数配置项接口
 */
export interface FunctionConfigItem extends BaseConfigItem {
    /** 参数列表 */
    parameters?: Parameter[];
    /** 返回值类型 */
    returnType?: ReturnType;
}

/**
 * 模块配置项接口
 */
export interface ModuleConfigItem extends BaseConfigItem {
    /** 子项配置 */
    children: { [key: string]: string | BaseConfigItem };
}

/**
 * 配置项类型
 */
export type ConfigItem = FunctionConfigItem | ModuleConfigItem;

/**
 * 模块配置接口
 */
export interface ModuleConfig {
    /** 子项配置映射 */
    children?: {
        [key: string]: string | ConfigItem;
    };
    /** 排序文本映射 */
    sortTexts?: {
        [key: string]: string;
    };
} 