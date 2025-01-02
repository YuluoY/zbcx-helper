/** HeaderDialog组件属性 */
export interface HeaderDialogProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可最小化 */
  minable?: boolean;
  /** 是否可最大化 */
  maxable?: boolean;
  /** 是否可以关闭 */
  closable?: boolean;
  /** 是否可移动 */
  movable?: boolean;
  /** 是否可折叠 */
  foldable?: boolean;
  /** 最小化状态 */
  minimized?: boolean;
  /** 最大化状态 */
  maximized?: boolean;
  /** 折叠状态 */
  folded?: boolean;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
} 