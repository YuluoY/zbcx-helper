/** 操作项配置 */
export interface OperCfg {
  /** 是否显示标题 */
  showTitle?: boolean;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 下拉图标 */
  iconDropdown?: string;
}

/** 操作项 */
export interface OperItem {
  /** 标题 */
  title: string;
  /** 是否显示 */
  show: boolean | (() => boolean);
  /** 图标 */
  icon: string;
  /** 点击事件 */
  onClick: () => void;
  /** 样式 */
  style?: string;
}

/** 文档卡片组件Props */
export interface DocCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息（cx_media） */
  file: object;
  /** 操作数组（参见 cx-oper-item） */
  opers: OperItem[];
  /** 操作项设置 */
  operCfg?: OperCfg;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 计算插件的状态(visible,disabled) */
  pluginState?: (plug: any, args: any) => void;
  /** 下拉菜单展开之前的操作 */
  beforeVisible?: (args: any) => void;
  /** 边框组件名（边框和底纹） */
  borderCom?: string;
  /** 边框样式 */
  border?: object;
  /** 内容区样式 */
  content?: object;
  /** 信息区样式 */
  info?: object;
} 