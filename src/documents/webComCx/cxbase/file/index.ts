import { ComponentDoc } from '@/types/tag-doc';
import ExcelView from './ExcelView';
import FileView from './FileView';
import ImageView from './ImageView';
import PdfView from './PdfView';
import PptView from './PptView';
import TxtView from './TxtView';
import VideoView from './VideoView';
import WordView from './WordView';

// 合并所有文件预览组件文档
export const documents: Record<string, ComponentDoc> = {
  ExcelView,
  FileView,
  ImageView,
  PdfView,
  PptView,
  TxtView,
  VideoView,
  WordView
}; 