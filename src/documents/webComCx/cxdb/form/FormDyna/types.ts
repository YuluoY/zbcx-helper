/** 验证信息 */
export interface Valid {
  /** 最小长度 */
  minlen?: number;
  /** 最大长度 */
  maxlen?: number;
  /** 固定长度 */
  len?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 正则表达式 */
  pattern?: RegExp;
  /** 函数验证 */
  func?: string;
}

/** 分组属性 */
export interface Grp {
  /** 分组命名 */
  name: string;
  /** 分组标题 */
  title: string;
}

/** 字段信息 */
export interface Fld {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 是否数值类型 */
  isnum: boolean;
  /** 显示类型[cx.consts.DISP] */
  type: number;
  /** 显示顺序 */
  disporder: number;
  /** 是否必填 */
  required: boolean;
  /** 字段值 */
  value: string;
  /** 预览展示值 */
  _value: string;
  /** 分组命名,对应的是组里面的命名，（如果 grps 有数组，grp 不在grps里面的，会单独分到一个其他组里面） */
  grp: string;
  /** 显示行数 */
  rows: number;
  /** 默认值 */
  defval: string;
  /** 下拉选项 - [{label: String, value: String}] */
  options?: Array<{ label: string; value: string }>;
  /** 配置信息 - (ValButton, SelDyna, SelDepPos) */
  config?: Record<string, any>;
  /** 参数 */
  params?: Record<string, any>;
  /** 验证信息（详情见valid属性） */
  valid?: Valid;
  /** 是否可编辑 */
  editable: boolean;
}

/** 按钮属性 */
export interface Btn {
  /** 命名 */
  name: string;
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 按钮类型 */
  type?: string;
  /** 按钮是否禁用 */
  disabled?: boolean;
  /** 点击执行函数 */
  onClick?: () => void;
}

/** 附件设置 */
export interface Attach {
  /** 存储位置 */
  saveto?: boolean;
  /** 允许上载 */
  uploadable?: boolean;
  /** 允许编辑 */
  editable?: boolean;
  /** 允许删除 */
  removable?: boolean;
  /** 允许下载 */
  downloadable?: boolean;
  /** 下载地址 */
  dir?: Record<string, any>;
  /** 上载的时候设置数据 */
  setData?: () => void;
}

/** 上载设置 */
export interface Upload {
  /** 支持的文件类型 */
  accept?: string;
  /** 支持多选 */
  multiple?: boolean;
  /** 上载文件数量 */
  limit?: number;
  /** 上传协议类型 (ws/http) */
  uploadType?: 'ws' | 'http';
}

/** 文件列表配置 */
export interface Doc {
  /** 主类型 */
  major?: number;
  /** 子类型 */
  minor?: number;
  /** 实体ID */
  entityid?: number;
  /** 流程结点 */
  task?: string;
  /** 流程中的业务类型 */
  bustype?: string;
}

/** 属性设置 */
export interface Attr {
  /** 指定主类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  major?: number;
  /** 指定子类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  minor?: number;
  /** 指定实体ID（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  id?: number;
  /** 分组信息 */
  grps?: Array<Grp>;
  /** 字段列表 */
  flds?: Array<Fld>;
  /** 属性（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  att?: Record<string, any>;
  /** 列数量 */
  colNum?: number;
  /** 编辑/浏览模式 */
  mode?: number;
  /** 是否可以切换到编辑模式 */
  editable?: boolean;
  /** 是否需要对数据进行解密 */
  decode?: boolean;
  /** Border 组件名（边框和底纹）(详情见cx-form-grp) */
  borderCom?: string;
  /** Header 组件名（标题头(详情见cx-form-grp)） */
  headerCom?: string;
  /** 属性组件名(详情见cx-form-grp) */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 - function(fld, params) */
  beforeValbtn?: (fld: any, params: any) => void;
  /** ValButton 插件调用之后的回调函数 - function(fld, flds, params) */
  afterValbtn?: (fld: any, flds: any, params: any) => void;
}

/** 动态表单组件Props */
export interface FormDynaProps {
  /** 属性设置 */
  attr?: Attr;
  /** 附件设置 */
  attach?: Attach;
  /** 上载设置 */
  upload?: Upload;
  /** 文件列表配置 */
  doc?: Doc;
  /** 其他参数 */
  params?: Record<string, any>;
  /** 命令行 */
  cmdbar?: boolean;
  /** 命令行组件 */
  cmdCom?: string;
  /** 按钮数组 */
  cmds?: Array<Btn>;
  /** 字段值发生变化 */
  onValuesChange?: (fld: Fld, changed: boolean) => void;
  /** 添加附件 */
  onDocAdd?: (doc: any) => void;
  /** 移除附件 */
  onDocRemove?: (doc: any) => void;
} 