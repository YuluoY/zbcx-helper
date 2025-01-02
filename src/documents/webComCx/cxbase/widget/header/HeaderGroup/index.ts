import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderGroupDocument extends AttDocument {
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
        name: 'header',
        type: 'Object',
        description: '传递给 cx-header 组件的 v-bind 参数',
        values: [],
        default: '{}'
      }
    ];

    super(
      'cx-header-group',
      'Header-分组',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderGroupDocument(); 