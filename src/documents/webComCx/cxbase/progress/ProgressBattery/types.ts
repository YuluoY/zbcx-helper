export interface ProgressBatteryProps {
  /** UI规格 */
  size?: string;
  /** 进度 */
  percentage?: number;
  /** 进度条宽度（上下高度） */
  strokeWidth?: string | number;
  /** 进度条宽度 */
  width?: string | number;
  /** 色系 */
  color?: string;
  /** 是否显示进度条文字内容 */
  showText?: boolean;
  /** 文本样式 */
  textStyle?: string | Record<string, any>;
  /** 指定进度条文字内容 */
  format?: (percentage: number) => string;
} 