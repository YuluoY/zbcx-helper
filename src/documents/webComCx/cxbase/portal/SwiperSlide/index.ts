import { AttDocument } from '../../../../AttDocument';
import { PropDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class SwiperSlideDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'slidesPerView',
        type: 'Number',
        description: '每页展示个数',
        values: [],
        default: '4'
      },
      {
        name: 'spaceBetween',
        type: 'String',
        description: '卡片间隔',
        values: [],
        default: '0%'
      },
      {
        name: 'centeredSlides',
        type: 'Boolean',
        description: '是否为中间激活展示（中间大两边小,固定每页展示3）',
        values: [],
        default: 'false'
      },
      {
        name: 'dataList',
        type: 'Array',
        description: '使用插槽传对应组件参数的数组对象',
        values: [],
        default: '[]'
      },
      {
        name: 'atts',
        type: 'Object',
        description: 'swiper原生参数',
        values: [],
        default: '{}'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'card',
        description: '卡片插槽'
      }
    ];

    super(
      'cx-swiper-slide',
      '轮播图组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new SwiperSlideDocument(); 