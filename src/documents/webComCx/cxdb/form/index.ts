import { ComponentDoc } from '@/types/tag-doc';
import FormAtt from './FormAtt';
import FormDyna from './FormDyna';
import FormGrp from './FormGrp';
import FormInput from './FormInput';

// 合并所有表单相关组件文档
export const documents: Record<string, ComponentDoc> = {
  FormAtt,
  FormDyna,
  FormGrp,
  FormInput
}; 