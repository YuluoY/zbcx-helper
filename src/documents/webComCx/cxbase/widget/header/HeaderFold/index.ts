import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderFoldDocument extends AttDocument {
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
        name: 'folded',
        type: 'Boolean',
        description: '折叠状态',
        values: [],
        default: 'true'
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
        description: '点击折叠状态',
        parameters: 'function()'
      }
    ];

    super(
      'cx-header-fold',
      'Header-折叠',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderFoldDocument(); 