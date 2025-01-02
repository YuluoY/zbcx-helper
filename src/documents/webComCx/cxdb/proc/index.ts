import { ComponentDoc } from '@/types/tag-doc';
import ProcComment from './ProcComment';
import ProcTree from './ProcTree';
import ProcTreeSyn from './ProcTreeSyn';
import ProcSelect from './ProcSelect';

// 合并所有流程相关组件文档
export const documents: Record<string, ComponentDoc> = {
  ProcComment,
  ProcTree,
  ProcTreeSyn,
  ProcSelect
}; 