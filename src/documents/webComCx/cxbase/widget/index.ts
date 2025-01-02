import { ComponentDoc } from '../../../../types/tag-doc';

// 导入各个子模块
import { documents as borderDocuments } from './border/index';
import { documents as buttonDocuments } from './button/index';
import { documents as cmdbarDocuments } from './cmdbar/index';
import { documents as headerDocuments } from './header/index';
import { documents as iconDocuments } from './icon/index';
import { documents as operDocuments } from './oper/index';
import { documents as textDocuments } from './text/index';

// 合并所有组件文档
export const documents: Record<string, ComponentDoc> = {
  ...borderDocuments,
  ...buttonDocuments,
  ...cmdbarDocuments,
  ...headerDocuments,
  ...iconDocuments,
  ...operDocuments,
  ...textDocuments
}; 