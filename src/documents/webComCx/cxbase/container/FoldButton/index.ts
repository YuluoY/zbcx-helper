import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class FoldButtonDocument extends AttDocument {
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
        name: 'defOpen',
        type: 'Boolean',
        description: '默认是否展开',
        default: 'true'
      },
      {
        name: 'direction',
        type: 'String',
        description: '折叠按钮位置',
        values: ['top', 'right', 'bottom', 'left'],
        default: 'top'
      },
      {
        name: 'bodyStyle',
        type: 'String',
        description: 'body样式',
        default: 'false'
      },
      {
        name: 'slotStyle',
        type: 'String',
        description: '插槽样式',
        default: 'false'
      },
      {
        name: 'btnStyle',
        type: 'String',
        description: '折叠按钮样式',
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'fold-change',
        description: '折叠状态变化',
        parameters: '(name: String) 当前折叠名称标识'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-fold-button',
      '折叠按钮组件',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new FoldButtonDocument(); 