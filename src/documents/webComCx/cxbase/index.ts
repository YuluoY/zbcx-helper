import { ComponentDoc } from '@/types/tag-doc';
import { documents as attDocuments } from './att';
import { documents as bpmDocuments } from './bpm';
import { documents as chartDocuments } from './chart';
import { documents as containerDocuments } from './container';
import { documents as dataDocuments } from './data';
import { documents as expDocuments } from './exp';
import { documents as fileDocuments } from './file';
import { documents as filereadDocuments } from './fileread';
import { documents as layoutDocuments } from './layout';
import { documents as menuDocuments } from './menu';
import { documents as portalDocuments } from './portal';
import { documents as progressDocuments } from './progress';
import { documents as searchDocuments } from './search';
import { documents as toolDocuments } from './tool';
import { documents as treeDocuments } from './tree';
import { documents as uploadDocuments } from './upload';
import { documents as widgetDocuments } from './widget';
import { documents as tableDocuments } from './table';

// 合并所有基础组件文档
export const documents = {
  ...attDocuments,
  ...bpmDocuments,
  ...chartDocuments,
  ...containerDocuments,
  ...dataDocuments,
  ...expDocuments,
  ...fileDocuments,
  ...filereadDocuments,
  ...layoutDocuments,
  ...menuDocuments,
  ...portalDocuments,
  ...progressDocuments,
  ...searchDocuments,
  ...toolDocuments,
  ...treeDocuments,
  ...uploadDocuments,
  ...widgetDocuments,
  ...tableDocuments
}; 