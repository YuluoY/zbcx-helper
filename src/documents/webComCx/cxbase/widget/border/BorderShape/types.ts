/** BorderShape组件属性 */
export interface BorderShapeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 绘制函数 - function(width, height, borderRadius, borderRounds) */
  shape: (width: number, height: number, borderRadius: number, borderRounds: number[]) => string;
  /** 圆角半径 */
  borderRadius?: number;
  /** 依次标识每个角是否圆角(顺序： 左上、右上、右下、左下) */
  borderRounds?: number[];
  /** 是否折叠 */
  folded?: boolean;
  /** 边框样式 */
  borderStyle?: string;
} 