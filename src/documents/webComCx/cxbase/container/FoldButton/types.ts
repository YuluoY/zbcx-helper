export interface FoldButtonProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 默认是否展开
  defOpen?: boolean;
  // 折叠按钮位置
  direction?: 'top' | 'right' | 'bottom' | 'left';
  // body样式
  bodyStyle?: string;
  // 插槽样式
  slotStyle?: string;
  // 折叠按钮样式
  btnStyle?: string;
} 