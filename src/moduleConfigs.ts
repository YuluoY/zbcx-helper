/**
 * 智博创享代码补全插件的模块配置文件
 * @module moduleConfigs
 */

import { LANGUAGES } from './constants';

/**
 * 模块配置接口
 * @interface ModuleConfig
 */
export interface ModuleConfig {
    /** 模块名称 */
    name: string;
    /** 模块显示名称 */
    displayName: string;
    /** 模块描述 */
    description: string;
    /** 支持的语言 */
    supportedLanguages: string[];
    /** 模块根目录 */
    rootDir: string;
    /** 触发字符数组 */
    triggerCharacters: string[];
}

/**
 * 模块配置列表
 * @constant
 */
export const MODULE_CONFIGS: { [key: string]: ModuleConfig } = {
    /** CX基础模块配置 */
    cx: {
        name: 'cx',
        displayName: '智博创享基础模块',
        description: '智博创享基础模块，提供基础功能和服务器交互功能。',
        supportedLanguages: [
            LANGUAGES.JAVASCRIPT,
            LANGUAGES.VUE
        ],
        rootDir: 'cx',
        triggerCharacters: ['c', 'C', 'cx', 'CX']
    },
    /** CXCOMS组件模块配置 */
    cxcoms: {
        name: 'cxcoms',
        displayName: '智博创享组件库',
        description: '智博创享组件库，提供UI组件功能。',
        supportedLanguages: [
            LANGUAGES.HTML,
            LANGUAGES.VUE
        ],
        rootDir: 'cxcoms',
        triggerCharacters: ['<', 'c', '<cx', 'cx-', '<cx-']
    }
} as const;

/**
 * 获取指定语言支持的所有模块
 * @param {string} language - 语言标识符
 * @returns {ModuleConfig[]} 支持该语言的模块配置列表
 */
export function getModulesByLanguage(language: string): ModuleConfig[] {
    return Object.values(MODULE_CONFIGS).filter(config => 
        config.supportedLanguages.includes(language)
    );
}

/**
 * 根据触发字符获取模块配置
 * @param {string} trigger - 触发字符
 * @returns {ModuleConfig|undefined} 模块配置或undefined
 */
export function getModuleByTrigger(trigger: string): ModuleConfig | undefined {
    return Object.values(MODULE_CONFIGS).find(config => 
        config.triggerCharacters.includes(trigger)
    );
}

/**
 * 根据模块名称获取模块配置
 * @param {string} name - 模块名称
 * @returns {ModuleConfig|undefined} 模块配置或undefined
 */
export function getModuleByName(name: string): ModuleConfig | undefined {
    return MODULE_CONFIGS[name];
} 