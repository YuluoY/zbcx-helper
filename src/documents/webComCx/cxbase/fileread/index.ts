import { ComponentDoc } from '@/types/tag-doc';
import ReadFile from './ReadFile';
import ReadExcel from './ReadExcel';
import ReadKml from './ReadKml';
import ReadShape from './ReadShape';

// 合并所有文件读取组件文档
export const documents: Record<string, ComponentDoc> = {
  ReadFile,
  ReadExcel,
  ReadKml,
  ReadShape
}; 