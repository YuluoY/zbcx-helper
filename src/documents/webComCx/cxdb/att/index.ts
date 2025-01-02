import { ComponentDoc } from '@/types/tag-doc';
import AttEdit from './AttEdit';
import AttEditGrp from './AttEditGrp';
import AttCust from './AttCust';

// 合并所有属性编辑组件文档
export const documents: Record<string, ComponentDoc> = {
  AttEdit,
  AttEditGrp,
  AttCust
}; 