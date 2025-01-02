import { ComponentDoc } from '@/types/tag-doc';
import { barDocuments } from './bar';
import { lineDocuments } from './line';
import { pieDocuments } from './pie';
import { barAndLineDocuments } from './barAndLine';
import ChartTypeDocument from './ChartType';
import EchartDocument from './Echart';

// 合并所有图表组件文档
export const documents: Record<string, ComponentDoc> = {
  ...barDocuments,
  ...lineDocuments,
  ...pieDocuments,
  ...barAndLineDocuments,
  ChartType: ChartTypeDocument,
  Echart: EchartDocument
}; 