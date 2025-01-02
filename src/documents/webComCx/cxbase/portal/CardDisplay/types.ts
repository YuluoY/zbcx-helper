export interface CardDisplayData {
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 图片 */
  img: string;
  /** 时间 */
  time: string;
}

export interface CardDisplayProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  datas: CardDisplayData[];
  /** 卡片列表中每个盒子的高度 */
  divHeight?: string;
  /** 卡片列表中每个盒子下面内容的高度 */
  cardHeight?: string;
} 