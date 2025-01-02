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

/** 字段信息 */
export interface Fld {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 字段值 */
  value: string;
  /** 预览展示值 */
  _value: string;
  /** 显示顺序 */
  disporder: number;
  /** 显示类型[cx.consts.DISP] */
  type: number;
  /** 是否数值类型 */
  isnum: boolean;
  /** 是否可编辑 */
  editable: boolean;
  /** 是否必填 */
  required: boolean;
  /** 文本显示行数 */
  rows: number;
  /** 下拉选项 - [{label: String, value: String}] */
  options?: Array<{ label: string; value: string }>;
  /** 配置信息 - (ValButton, SelDyna, SelDepPos) */
  config?: Record<string, any>;
  /** 引用计数器 */
  refChange: number;
  /** 验证信息 */
  valid?: Valid;
}

/** 分组信息 */
export interface Grp {
  // 文档中未定义分组信息的具体属性
}

/** 属性表单组件Props */
export interface FormAttProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 分组信息数组 */
  grps?: Array<Grp>;
  /** 字段信息数组 */
  flds: Array<Fld>;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 模式 0-浏览 1-编辑 2-编辑之后做对比 */
  mode?: 0 | 1 | 2;
  /** 边框组件名 */
  borderCom?: string;
  /** 头组件名 */
  headerCom?: string;
  /** 属性组件名 */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 - function(fld, params) */
  beforeValbtn?: (fld: any, params: any) => void;
  /** ValButton 插件调用之后的回调函数 - function(fld, flds, params) */
  afterValbtn?: (fld: any, flds: any, params: any) => void;
  /** 字段值发生变化 */
  onValuesChange?: (fld: Fld, changed: boolean) => void;
} 