/** Header组件属性 */
export interface HeaderProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
  /** 标题 */
  title?: string;
  /** 图标 */
  icon?: string;
  /** 标题样式 */
  titleStyle?: string;
  /** 图标样式 */
  iconStyle?: string;
  /** 折叠状态 */
  folded?: boolean;
  /** 是否可移动 */
  movable?: boolean;
} 