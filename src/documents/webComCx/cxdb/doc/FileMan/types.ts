/** 文件管理组件Props */
export interface FileManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树组件 */
  treeCom?: string | Record<string, any>;
  /** 树结点配置（cx_resdir 配置的 node 名） */
  treeNode: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  treeVals?: Record<string, any>;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: Record<string, any>;
  /** 目录树宽度 */
  treeWidth?: string;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  filePlugs?: string;
  /** 条件计算对象 */
  fileExpValues?: string | any;
  /** 文件列表方式 */
  listType?: 'list' | 'card' | 'icon';
  /** 当上载文件的时候，根据文件设置cx_media 表其他信息 */
  setData?: (data: any, file: any) => void;
  /** 上载文件完成之后的处理 */
  afterUpload?: (ret: any) => void;
  /** 自定义的上载函数，设置这个函数，则上载由该函数完成 */
  upload?: () => void;
  /** 文档卡片组件 */
  fileCardCom?: string | Record<string, any>;
} 