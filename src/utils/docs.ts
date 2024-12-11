/**
 * 文档工具函数
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * 读取组件文档
 * @param componentPath 组件路径
 * @returns 文档内容
 */
export function loadComponentDocs(componentPath: string): string {
  try {
    // 尝试从源码目录读取
    const docPath = path.join(componentPath, 'README.md');
    if (fs.existsSync(docPath)) {
      return fs.readFileSync(docPath, 'utf-8');
    }
    return '';
  } catch (error) {
    console.error('读取文档失败:', error);
    return '';
  }
} 