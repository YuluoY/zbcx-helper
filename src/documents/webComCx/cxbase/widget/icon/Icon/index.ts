import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class IconDocument extends AttDocument {
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
        name: 'icon',
        type: 'String',
        description: '图标',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-icon',
      '图标',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new IconDocument(); 