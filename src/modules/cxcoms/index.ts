/**
 * 组件配置管理模块
 */

import { ModuleConfigItem } from '../../types';
import { indexConfig as buttonConfig } from './components/button';

// 组件配置映射
export const componentConfigs: Record<string, ModuleConfigItem> = {
  'cx-button': buttonConfig
};

// 获取组件配置
export function getComponentConfig(tagName: string): ModuleConfigItem | undefined {
  return componentConfigs[tagName];
}

// 获取所有组件配置
export function getAllComponentConfigs(): Record<string, ModuleConfigItem> {
  return componentConfigs;
}

// 获取组件文档
export function getComponentDocumentation(tagName: string): string | undefined {
  const config = componentConfigs[tagName];
  return config?.documentation?.value;
}

// 获取组件补全项
export function getComponentCompletionItems(): Array<{
  label: string;
  detail: string;
  documentation: string;
  insertText: string;
}> {
  return Object.entries(componentConfigs).map(([tagName, config]) => ({
    label: tagName,
    detail: config.detail || '',
    documentation: config.documentation?.value || '',
    insertText: getComponentInsertText(tagName, config)
  }));
}

// 获取组件插入文本
function getComponentInsertText(tagName: string, config: ModuleConfigItem): string {
  switch(tagName) {
    case 'cx-button':
      return '<cx-button type="${1|primary,success,warning,danger,info|}">${2:按钮}</cx-button>';
    default:
      return `<${tagName}>\${1:内容}</${tagName}>`;
  }
} 