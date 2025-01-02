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

/** 文档列表管理组件Props */
export interface DocListTableProps {
  /** 文件列表(cx_media 表) */
  files: any[];
  /** 授权信息 */
  auth?: AuthFile;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 表格配置名(cx_tabcfg 的 name) */
  tableCfg?: string;
} 