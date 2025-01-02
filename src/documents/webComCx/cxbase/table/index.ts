import { ComponentDoc } from '@/types/tag-doc';
import GridPage from './GridPage';
import DataGrid from './DataGrid';
import ColFilter from './ColFilter';
import GridTable from './GridTable';

// 合并所有table组件文档
export const documents: Record<string, ComponentDoc> = {
  GridPage,
  DataGrid,
  ColFilter,
  GridTable
}; 