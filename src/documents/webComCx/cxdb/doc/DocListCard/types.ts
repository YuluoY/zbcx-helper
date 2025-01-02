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

/** 文档列表卡片组件Props */
export interface DocListCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息列表（cx_media） */
  files: any[];
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 是否多选模式 */
  multiple?: boolean;
  /** 授权信息 */
  auth?: AuthFile;
  /** 条件计算对象 */
  expValues?: any;
  /** 文档卡片组件名 */
  cardCom?: string;
} 