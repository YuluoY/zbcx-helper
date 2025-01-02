export interface TagCfg {
  /** Tag 的类型 */
  type?: '' | 'success' | 'info' | 'warning' | 'danger';
  /** 是否可关闭 */
  closable?: boolean;
  /** 是否禁用渐变动画 */
  disableTransitions?: boolean;
  /** 是否有边框描边 */
  hit?: boolean;
  /** 背景色 */
  color?: string;
  /** Tag 的尺寸 */
  size?: '' | 'large' | 'default' | 'small';
  /** Tag 的主题 */
  effect?: 'dark' | 'light' | 'plain';
  /** Tag 是否为圆形 */
  round?: boolean;
}

export interface DataSketchProps {
  /** 数据标题 */
  title?: string;
  /** 图片是否横向模式，true在独占一列 */
  imgRow?: boolean;
  /** 是否大图片模式，true在独占一行或一列 */
  isBigImg?: boolean;
  /** 默认展示的图片地址 */
  imgUrl?: string;
  /** 数据的标签，TagCfg 配置详情见 el-tag */
  tags?: TagCfg[];
  /** 数据概述 */
  describe?: string;
  /** 展示的概述文字数量，超出部分省略 */
  wordNum?: number;
} 