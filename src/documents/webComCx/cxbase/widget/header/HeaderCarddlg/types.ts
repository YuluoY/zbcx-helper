/** HeaderCarddlg组件属性 */
export interface HeaderCarddlgProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可折叠 */
  foldable?: boolean;
  /** 是否可最小化 */
  minable?: boolean;
  /** 是否可以关闭 */
  closable?: boolean;
  /** 折叠状态 */
  folded?: boolean;
  /** 是否最小化 */
  minimized?: boolean;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
} 