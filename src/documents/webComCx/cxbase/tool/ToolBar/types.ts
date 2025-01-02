/** 工具配置 */
interface ToolConf {
  /** 唯一key */
  name: string;
  /** 显示名称，词表中检索本地名称 */
  title: string;
  /** 中文名称，名称备注 */
  namec?: string;
  /** 图标，配置样式class名 或 基于static/img的目录 */
  icon?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 工具绑定的插件名。有插件值的节点才能激活，否则作为组节点处理ui */
  plugin?: string;
  /** 工具绑定响应方法，与plugin二选一。有函数的节点才能激活，否则作为组节点处理ui */
  click?: Function;
  /** 参数对象，传入运行的插件 */
  params?: Record<string, any>;
  /** 该工具样式，设置对应工具项的dom样式 */
  style?: string;
  /** 子菜单对象序列 */
  children?: ToolConf[];
}

export interface ToolBarProps {
  /** 工具菜单组序列，即为二维数组。每个组由ToolConf对象序列组成 */
  tools: ToolConf[][];
  /** 展示模式 */
  mode?: 'horizontal' | 'vertical';
  /** 工具条起始边缘，mode方向与父容器的贴边位置 */
  startHem?: 'left' | 'right' | 'top' | 'bottom';
  /** 子工具条展示模式 */
  subToolMode?: 'horizontal' | 'vertical';
  /** 子工具条显示位置 */
  subToolPlace?: 'top' | 'bottom' | 'left' | 'right';
  /** 点击父亲节点关闭子节点 */
  isCloseByFold?: boolean;
  /** 点击完自动折叠隐藏子节点 */
  isAutoFold?: boolean;
  /** 按钮是否显示tip，false按钮有文字且没tip; true按钮无文字有tip */
  showTip?: boolean;
  /** el中tooltip配置对象，默认使用cx.config.tooltip */
  elTooltip?: Record<string, any>;
  /** 文字在图标右侧同行显示，false时在图标下发显示 */
  textInline?: boolean;
  /** 按钮宽度，单位px，默认内容自适应 */
  toolWidth?: number;
  /** 按钮高度，单位px，默认内容自适应 */
  toolHeight?: number;
  /** 文字大小 */
  fontSize?: string;
  /** 图标大小 */
  iconSize?: string;
  /** 组之间的间距 */
  grpGap?: string;
} 