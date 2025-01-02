import { ComponentDoc } from '@/types/tag-doc';
import AttExp from './AttExp';
import ExpInput from './ExpInput';
import ExpInput2 from './ExpInput2';
import ExpInputBtnBar from './ExpInputBtnBar';

// 合并所有表达式组件文档
export const documents: Record<string, ComponentDoc> = {
  AttExp,
  ExpInput,
  ExpInput2,
  ExpInputBtnBar
}; 