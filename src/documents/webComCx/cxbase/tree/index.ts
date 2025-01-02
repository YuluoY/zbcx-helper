import { ComponentDoc } from '@/types/tag-doc';
import TreeV2 from './TreeV2';
import TreeSyn from './TreeSyn';
import TreeCfg from './TreeCfg';
import Tree from './Tree';

// 合并所有tree组件文档
export const documents: Record<string, ComponentDoc> = {
  TreeV2,
  TreeSyn,
  TreeCfg,
  Tree
}; 