/** HeaderCard组件属性 */
export interface HeaderCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可折叠 */
  foldable?: boolean;
  /** 折叠状态 */
  folded?: boolean;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
} 