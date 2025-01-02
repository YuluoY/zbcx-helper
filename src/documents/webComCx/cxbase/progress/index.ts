import { ComponentDoc } from '@/types/tag-doc';
import ProgressTb from './ProgressTb';
import ProgressStep from './ProgressStep';
import ProgressBattery from './ProgressBattery';

// 合并所有progress组件文档
export const documents: Record<string, ComponentDoc> = {
  ProgressTb,
  ProgressStep,
  ProgressBattery
}; 