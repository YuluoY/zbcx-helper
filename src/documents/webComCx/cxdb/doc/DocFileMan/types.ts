/** 查询条件配置 */
export interface QueryCfg {
  /** 条件表达式参数 */
  args: any[];
  /** 排序信息 */
  orderby?: string;
}

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

/** 文档文件管理组件Props */
export interface DocFileManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 查询条件(cx.svr.data.query() 查询条件) */
  exp: QueryCfg;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 条件计算对象 */
  expValues?: any;
  /** 授权信息 */
  auth?: AuthFile;
  /** 文件列表方式 */
  listType?: 'list' | 'card' | 'icon';
  /** 当上载文件的时候，根据文件设置cx_media 表其他信息 */
  setData?: (data: any, file: any) => void;
  /** 上载文件完成之后的处理 */
  afterUpload?: (ret: any) => void;
  /** 自定义的上载函数，设置这个函数，则上载由该函数完成 */
  upload?: () => void;
  /** 文档列表配置名（cx_tabcfg 的 name） */
  docTableCfg?: string;
  /** 文档回收站列表配置名（cx_tabcfg 的 name） */
  docrecybTableCfg?: string;
  /** 文档卡片组件 */
  docCardCom?: string | object;
  /** 文档回收站卡片组件 */
  docrecybCardCom?: string | object;
} 