/** 目录授权信息 */
export interface AuthDir {
  /** 是否可增加目录 */
  addable?: boolean;
  /** 是否可编辑目录 */
  editable?: boolean;
  /** 是否可删除目录 */
  removable?: boolean;
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

/** 文档管理组件Props */
export interface DocManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树组件 */
  treeCom?: string | object;
  /** 树结点配置（cx_resdir 配置的 node 名） */
  treeNode: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  treeVals: object;
  /** 是否懒加载模式 */
  lazy?: boolean;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAttrs?: object;
  /** 目录树宽度 */
  treeWidth?: string;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  docPlugs?: string;
  /** 条件计算对象 */
  docExpValues?: any;
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
  /** 回收站文档列表配置名（cx_tabcfg 的 name） */
  docrecybTableCfg?: string;
  /** 文档卡片组件 */
  docCardCom?: string | object;
  /** 文档回收站卡片组件 */
  docrecybCardCom?: string | object;
  /** 目录授权信息 */
  authDir?: AuthDir;
  /** 文件授权信息 */
  authFile?: AuthFile;
} 