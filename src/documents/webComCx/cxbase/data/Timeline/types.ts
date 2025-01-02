export interface ElAtts {
  /** 时间戳 */
  timestamp?: string;
  /** 是否隐藏时间戳 */
  hideTimestamp?: boolean;
  /** 是否垂直居中 */
  center?: boolean;
  /** 时间戳位置 */
  placement?: 'top' | 'bottom';
  /** 节点类型 */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** 节点颜色 */
  color?: string;
  /** 节点尺寸 */
  size?: 'normal' | 'large';
  /** 自定义图标 */
  icon?: string | object;
  /** 是否空心点 */
  hollow?: boolean;
}

export interface ComItem {
  /** 每项是element-plus的Timeline-Item参数信息 */
  elAtts: ElAtts;
  /** 组件名称，data 序列中要唯一 */
  name: string;
  /** 内容组件对象，为空时无内容 */
  component: object;
  /** 组件接收参数，v-bind的形式绑定到component */
  params?: object;
  /** 组件绑定事件，v-on的形式绑定到component */
  evts?: object;
}

export interface TimelineProps {
  /** 数据列表 */
  data: ComItem[];
} 