import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class CardDisplayDocument extends AttDocument {
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
        name: 'datas',
        type: 'Array',
        description: '传递给组件的参数',
        values: [],
        default: '[]'
      },
      {
        name: 'divHeight',
        type: 'String',
        description: '卡片列表中每个盒子的高度',
        values: [],
        default: '1.2rem'
      },
      {
        name: 'cardHeight',
        type: 'String',
        description: '卡片列表中每个盒子下面内容的高度',
        values: [],
        default: '0.8rem'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click-evnt',
        description: '点击查看详细内容',
        parameters: 'data: 点击的卡片数据'
      }
    ];

    super(
      'cx-card-display',
      '卡片列表上下展示组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new CardDisplayDocument(); 