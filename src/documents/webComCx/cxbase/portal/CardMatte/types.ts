export interface ContentItem {
  /** 名称 */
  namec: string;
  /** 图标 */
  icon: string;
}

export interface CardMatteConfig {
  /** 背景图片 */
  img: string;
  /** 内容 */
  content: ContentItem[];
  /** 简介 */
  briefintro: string;
  /** 按钮名称 */
  buttonname: string;
}

export interface CardMatteProps {
  /** 传递给组件的参数 */
  cardmatte: CardMatteConfig;
  /** 是否使用自定义插槽（默认模板/自定义） */
  type?: 'default' | 'custom';
} 