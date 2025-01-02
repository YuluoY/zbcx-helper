/** 文件授权信息 */
export interface AuthFile {
  /** 是否可下载文档 */
  downloadable?: boolean;
  /** 是否可上载文档 */
  uploadable?: boolean;
  /** 是否可编辑文档 */
  editable?: boolean;
  /** 是否可删除文档 */
  removable?: boolean;
  /** 是否可分享文档 */
  sharable?: boolean;
}

/** 文件数据表组件Props */
export interface FileListTableProps {
  /** 文件列表（文件系统） */
  files: any[];
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 授权信息 */
  auth?: AuthFile;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 条件计算对象 */
  expValues?: string | any;
  /** 点击行 */
  onRowClick?: (row: any, column: any, event: any) => void;
  /** 选择发生变化 */
  onSelectionChange?: (selection: any[]) => void;
  /** 排序发生变化 */
  onSortChange?: (params: { column: any; prop: string; order: string }) => void;
  /** 删除某行（UI层删除） */
  onRowRemove?: (selected: any) => void;
} 