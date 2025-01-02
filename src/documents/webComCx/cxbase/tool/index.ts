import { ComponentDoc } from '@/types/tag-doc';
import UserDropdown from './UserDropdown';
import ToolBar from './ToolBar';
import StatusBar from './StatusBar';
import Legend from './Legend';
import FldsRelation from './FldsRelation';

// 合并所有tool组件文档
export const documents: Record<string, ComponentDoc> = {
  UserDropdown,
  ToolBar,
  StatusBar,
  Legend,
  FldsRelation
}; 