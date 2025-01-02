import { ComponentDoc } from '@/types/tag-doc';
import DocAttach from './DocAttach';
import DocCard from './DocCard';
import DocFileMan from './DocFileMan';
import DocList from './DocList';
import DocListCard from './DocListCard';
import DocListTable from './DocListTable';
import DocListWs from './DocListWs';
import DocTree from './DocTree';
import DocrecybCard from './DocrecybCard';
import DocrecybListCard from './DocrecybListCard';
import DocrecybListTable from './DocrecybListTable';
import DirFileMan from './DirFileMan';
import DirsTree from './DirsTree';
import DocMan from './DocMan';
import FileMan from './FileMan';
import FilesMan from './FilesMan';
import FileListCard from './FileListCard';
import FileCard from './FileCard';
import FileListTable from './FileListTable';
import DirTree from './DirTree';

// 合并所有文档相关组件文档
export const documents: Record<string, ComponentDoc> = {
  DocAttach,
  DocCard,
  DocFileMan,
  DocList,
  DocListCard,
  DocListTable,
  DocListWs,
  DocTree,
  DocrecybCard,
  DocrecybListCard,
  DocrecybListTable,
  DirFileMan,
  DirsTree,
  DocMan,
  FileMan,
  FilesMan,
  FileListCard,
  FileCard,
  FileListTable,
  DirTree
}; 