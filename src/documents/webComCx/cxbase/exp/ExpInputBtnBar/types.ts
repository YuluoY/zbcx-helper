import { FldExpCfg } from '../AttExp/types';

export interface OperCfg {
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 是否可见 */
  show?: boolean | ((...args: any[]) => boolean);
  /** 是否使用 */
  enable?: boolean | ((...args: any[]) => boolean);
  /** 按钮类型 */
  type?: string;
  /** 是否显示标题 */
  showTitle?: boolean;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 点击响应函数 */
  onClick?: (...args: any[]) => void;
  /** 点击运行的插件名称 */
  plugin?: string;
  /** 配置信息 */
  uicfg?: {
    /** 按钮配置信息 */
    button?: Record<string, any>;
    /** 是否在上方显示分隔条 */
    divided?: boolean;
  };
}

export interface ExpInputBtnBarProps {
  /** UI规格 */
  size?: 'large' | 'default' | 'small';
  /** 组件cx-exp-input的参数对象 */
  expAtts?: {
    /** 字段信息数组 */
    flds: FldExpCfg[];
    /** 输入框大小(像素为单位) */
    itemWidth?: number;
    /** 是否显示标签 */
    showLabel?: boolean;
    /** 是否显示more */
    showMore?: boolean;
    /** 是否可清除 */
    clearable?: boolean;
  };
  /** 组件cx-exp-input的事件监听对象 */
  expEvts?: {
    /** 字段值发生变化 */
    'fld-change'?: (state: any, val: any) => void;
    /** 按条件搜索 */
    'exp-search'?: () => void;
    /** 清除条件 */
    'exp-clear'?: () => void;
    /** 更多条件 */
    'exp-more'?: () => void;
  };
  /** 组件cx-oper-group的opers参数 */
  opers?: OperCfg[];
  /** 组件cx-oper-group中el-button的参数对象 */
  operElAtt?: Record<string, any>;
  /** 组件cx-oper-group显示的最多按钮数 */
  maxNum?: number;
  /** 组件cx-oper-group是否和exp同行显示 */
  inline?: boolean;
} 