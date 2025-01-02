import * as vscode from 'vscode';
import { BaseLanguage } from '../types';

export function getLanguage(env: { language: string }): BaseLanguage {
    return env.language === 'zh-cn' ? 'zh-CN' : 'en-US';
}

export function toKebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function mapComponent(tag: string): string {
    return tag.replace(/^el-/, '');
}

export function getTag(text: string): string | undefined {
    const match = text.match(/<([A-Z][a-zA-Z0-9]*)(?:\s|>)/);
    return match ? match[1] : undefined;
}

export function matchAttr(text: string): string | undefined {
    const match = text.match(/\s([a-zA-Z][a-zA-Z0-9-]*)(?:=|\s|$)/);
    return match ? match[1] : undefined;
}

export function getOfficialWebsite(lang: BaseLanguage): string {
    return lang === 'zh-CN' ? 'https://element-plus.org/zh-CN/' : 'https://element-plus.org/en-US/';
} 