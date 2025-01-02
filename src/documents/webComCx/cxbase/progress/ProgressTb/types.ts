export interface ProgressTbProps {
  /** 尺寸 */
  size?: string;
  /** 色系 */
  color?: string;
  /** 位置 */
  position?: 'top' | 'overlap' | 'bottom';
  /** 进度 */
  percentage?: string | number;
  /** 进度条宽度（上下高度） */
  strokeWidth?: string | number;
  /** 进度条背景宽度（上下高度） */
  bgWidth?: string | number;
  /** 进度条宽度 */
  width?: string | number;
  /** 是否显示进度条文字内容 */
  showText?: boolean;
  /** 文本样式 */
  textStyle?: string | Record<string, any>;
  /** 指定进度条文字内容 */
  format?: (percentage: number) => string;
} 