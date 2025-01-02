export interface SwiperSlideProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 每页展示个数 */
  slidesPerView?: number;
  /** 卡片间隔 */
  spaceBetween?: string;
  /** 是否为中间激活展示（中间大两边小,固定每页展示3） */
  centeredSlides?: boolean;
  /** 使用插槽传对应组件参数的数组对象 */
  dataList: any[];
  /** swiper原生参数 */
  atts?: Record<string, any>;
} 