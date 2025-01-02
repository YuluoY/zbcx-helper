/** OperCfg属性 */
export interface OperCfg {
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 是否可见 */
  show?: boolean | ((...args: any[]) => boolean);
  /** 是否使能 */
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

/** OperItem组件属性 */
export interface OperItemProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 操作配置 */
  oper: OperCfg;
  /** 传递给操作的参数 */
  args?: any[];
  /** 计算插件的状态 */
  pluginState?: (plug: any, args: any[]) => any;
  /** 传递给 el-button 的属性 */
  elAtts?: Record<string, any>;
} 