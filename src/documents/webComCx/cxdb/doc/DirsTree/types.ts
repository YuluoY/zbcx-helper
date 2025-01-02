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

/** 目录参数配置 */
export interface DirParams {
  /** 根目录名 */
  rootLabel: string;
  /** 目录权限信息 */
  authDir?: AuthDir;
  /** 文件权限信息 */
  authFile?: AuthFile;
}

/** 目录配置 */
export interface DirCfg {
  /** 目录（详见cx.svr.file 对目录） */
  dir: string;
  /** 参数 */
  params: DirParams;
}

/** 多目录文件树组件Props */
export interface DirsTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 目录数组 */
  dirs?: Array<DirCfg>;
  /** 插件配置结点（cx_cmdtool 配置的 node 名） */
  plug?: string;
  /** 根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点 */
  rootLabel?: string;
  /** 是否可以拖拽目录 */
  draggable?: boolean;
  /** 条件计算提供值的对象 */
  treeValues?: any;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: object;
} 