export interface LayoutGridItem {
  /** 栅格中元素的ID, 必须唯一 */
  i: string;
  /** 标识栅格元素位于第几列 */
  x: number;
  /** 标识栅格元素位于第几行 */
  y: number;
  /** 标识栅格元素的初始宽度 */
  w: number;
  /** 标识栅格元素的初始高度 */
  h: number;
  /** 每个栅格的具名插槽 */
  slotName: string;
}

export interface LayoutGridProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 栅格的初始布局 */
  layout: LayoutGridItem[];
  /** 定义栅格系统的列数,其值需为自然数 */
  colNum?: number;
  /** 每行的高度，单位像素 */
  rowHeight?: number;
  /** 定义栅格中的元素边距值。必须是包含两个 Number的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素 */
  margin?: [number, number];
  /** 标识栅格中的元素是否可拖拽 */
  draggable?: boolean;
  /** 标识栅格中的元素是否可调整大小 */
  resizable?: boolean;
} 