import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderCardDocument extends AttDocument {
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
        name: 'title',
        type: 'String',
        description: '标题',
        values: [],
        default: ''
      },
      {
        name: 'foldable',
        type: 'Boolean',
        description: '是否可折叠',
        values: [],
        default: 'false'
      },
      {
        name: 'folded',
        type: 'Boolean',
        description: '折叠状态',
        values: [],
        default: 'false'
      },
      {
        name: 'header',
        type: 'Object',
        description: '传递给 cx-header 组件的 v-bind 参数',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'fold-change',
        description: '折叠状态发生了变化',
        parameters: 'function()'
      }
    ];

    super(
      'cx-header-card',
      'Header-卡片',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderCardDocument(); 