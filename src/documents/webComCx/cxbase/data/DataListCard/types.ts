export interface DataListCardProps {
  /** 属性数据，键值对 */
  data: Record<string, any>;
  /** 是否可关闭，默认可关闭 */
  closeable?: boolean;
  /** 卡片主体样式 */
  mainStyle?: object;
  /** 卡片头部部分样式 */
  headStyle?: object;
  /** 卡片中间部分样式 */
  sectionStyle?: object;
  /** 卡片底部部分样式 */
  footerStyle?: object;
} 