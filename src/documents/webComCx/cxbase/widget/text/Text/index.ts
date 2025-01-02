import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class TextDocument extends AttDocument {
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
        name: 'text-size',
        type: 'String',
        description: '文本大小',
        values: ['text0', 'text1', 'text2', 'text3', 'text4'],
        default: 'text1'
      },
      {
        name: 'text',
        type: 'String',
        description: '文本',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-text',
      '文本',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new TextDocument(); 