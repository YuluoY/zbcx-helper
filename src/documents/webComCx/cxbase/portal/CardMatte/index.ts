import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class CardMatteDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'cardmatte',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: '{}'
      },
      {
        name: 'type',
        type: 'String',
        description: '是否使用自定义插槽（默认模板/自定义）',
        values: ['default', 'custom'],
        default: 'default'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click-detail',
        description: '点击查看详细内容',
        parameters: 'val'
      },
      {
        name: 'click-icon',
        description: '点击图标触发事件',
        parameters: 'val'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'center',
        description: '中间插槽'
      },
      {
        name: 'footer',
        description: '底部插槽'
      }
    ];

    super(
      'cx-card-matte',
      '图片鼠标滑入显示遮罩、详细介绍和相关按钮组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new CardMatteDocument(); 