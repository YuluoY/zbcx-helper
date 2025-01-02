import { ComponentDoc } from '@/types/tag-doc';
import BreadCrumb from './BreadCrumb';
import MenuFold from './MenuFold';
import MenuPanel from './MenuPanel';
import MenuStair from './MenuStair';
import MenuTag from './MenuTag';
import RMenu from './RMenu';

// 合并所有菜单组件文档
export const documents: Record<string, ComponentDoc> = {
  BreadCrumb,
  MenuFold,
  MenuPanel,
  MenuStair,
  MenuTag,
  RMenu
}; 