/** 操作项配置 */
export interface OperCfg {
  /** 是否显示标题 */
  showTitle?: boolean;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 下拉图标 */
  iconDropdown?: string;
}

/** 文件卡片组件Props */
export interface FileCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息（文件系统） */
  file: Record<string, any>;
  /** 操作数组（参见 cx-oper-item） */
  opers: any[];
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
  border?: Record<string, any>;
  /** 内容区样式 */
  content?: Record<string, any>;
  /** 信息区样式 */
  info?: Record<string, any>;
  /** 点击 */
  onRowClick?: (args: any) => void;
  /** 点击操作 */
  onPluginClick?: (oper: any, args: any) => void;
  /** 点击复选框 */
  onCheckChange?: (args: any, checked: boolean) => void;
} 