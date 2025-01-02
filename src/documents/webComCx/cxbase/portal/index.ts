import { ComponentDoc } from '@/types/tag-doc';
import ToolBarPop from './ToolBarPop';
import SwiperSlide from './SwiperSlide';
import Rec from './Rec';
import NewsList from './NewsList';
import DataColumns from './DataColumns';
import CardMatte from './CardMatte';
import CardDisplay from './CardDisplay';

// 合并所有portal组件文档
export const documents: Record<string, ComponentDoc> = {
  ToolBarPop,
  SwiperSlide,
  Rec,
  NewsList,
  DataColumns,
  CardMatte,
  CardDisplay
}; 