export interface LayoutProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否需要增加 padding */
  padding?: boolean;
  /** 是否根据内容自动伸缩，该模式下 layout 和子 region 无滚动条 */
  fitContent?: boolean;
} 