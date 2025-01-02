export interface NewsItem {
  /** 新闻图片 */
  imgUrl: string;
  /** 新闻标题 */
  name: string;
  /** 新闻简介 */
  introduce: string;
  /** 新闻标签 */
  label: string[];
  /** 底部数据 */
  footer: Record<string, any>;
}

export interface NewsListConfig {
  /** 数据列表 */
  newlist: NewsItem[];
  /** 上行列高(新闻标题) */
  titleheight?: string;
  /** 下行列高(新闻标签) */
  labelheight?: string;
}

export interface NewsListProps {
  /** 数据 */
  newlist: NewsListConfig;
} 