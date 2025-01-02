/** BorderSvg组件属性 */
export interface BorderSvgProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否折叠 */
  folded?: boolean;
  /** SVG 文件 URL */
  url: string;
  /** 边框样式 */
  borderStyle?: string;
} 