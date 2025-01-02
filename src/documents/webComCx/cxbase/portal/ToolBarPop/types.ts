export interface PopConfig {
  /** 弹出框名称(自定义样式，且样式不统一时使用) */
  name?: string;
  /** 弹出框外框样式(默认样式时使用) */
  style?: string;
  /** 弹出框顶部标题(默认样式时使用) */
  title?: string;
  /** 弹出框中部高亮信息(默认样式时使用) */
  info?: string;
  /** 弹出框中部图片路径(默认样式时使用) */
  src?: string;
  /** 弹出框底部小字信息(默认样式时使用) */
  detail?: string;
}

export interface DataItem {
  /** 图标路径 */
  url: string;
  /** 图标标题 */
  title: string;
  /** 禁用弹出框 */
  disabled?: boolean;
  /** 弹出框信息 */
  pop?: PopConfig;
}

export interface ToolBarPopProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** el-tooltip原生属性 */
  eltooltip?: Record<string, any>;
  /** Tooltip 组件出现的位置（同el-tooltip的placement属性） */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /** 弹出框样式（默认模板/自定义） */
  type?: 'default' | 'custom';
  /** 数据 */
  data: DataItem[];
} 