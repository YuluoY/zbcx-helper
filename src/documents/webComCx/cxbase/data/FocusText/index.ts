import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class FocusTextDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI规格',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'color',
        type: 'String',
        description: '色系',
        values: [],
        default: ''
      },
      {
        name: 'icon',
        type: 'String',
        description: '图标类名',
        values: [],
        default: ''
      },
      {
        name: 'focus',
        type: 'String',
        description: '焦点文本',
        values: [],
        default: ''
      },
      {
        name: 'topic',
        type: 'String',
        description: '主题文本',
        values: [],
        default: ''
      },
      {
        name: 'unit',
        type: 'String',
        description: '单位',
        values: [],
        default: ''
      },
      {
        name: 'cfg',
        type: 'Object',
        description: '配置信息',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click',
        description: '点击事件',
        parameters: ''
      }
    ];

    super(
      'cx-focus-text',
      '焦点文本组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new FocusTextDocument(); 