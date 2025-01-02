export interface RegionProps {
  /** 布局的区域 */
  region: 'north' | 'west' | 'center' | 'east' | 'south';
  /** 宽度, east、west 两个 region 定义宽度，不传时根据内容自动填充，高度自适应父容器 */
  width?: string;
  /** 高度, north、south 两个 region 定义高度，不传时根据内容自动填充，宽度自适应父容器 */
  height?: string;
  /** 区域的附加样式 */
  style?: string;
  /** 区域的附加样式类 */
  class?: string;
  /** region 是否有边线，和区域的关系：north 下方、south 上方、west 右方、east 左方 */
  border?: boolean;
  /** region 间是否有分隔槽，和区域的关系：north 下方、south 上方、west 右方、east 左方 */
  gutter?: boolean;
  /** 分隔槽是否可拖拽，修改 region 尺寸，有 gutter 时才生效 */
  splitable?: boolean;
}

export interface DragOverEvent {
  /** 拖拽的偏移量 */
  offset: number;
  /** 区域的尺寸 */
  regSize: number;
} 