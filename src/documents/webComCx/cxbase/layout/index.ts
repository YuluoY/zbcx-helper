import { ComponentDoc } from '@/types/tag-doc';
import Layout from './Layout';
import LayoutGrid from './LayoutGrid';
import Region from './Region';

// 合并所有布局组件文档
export const documents: Record<string, ComponentDoc> = {
  Layout,
  LayoutGrid,
  Region
}; 