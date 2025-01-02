import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class BorderSvgDocument extends AttDocument {
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
        name: 'folded',
        type: 'Boolean',
        description: '是否折叠',
        values: [],
        default: 'false'
      },
      {
        name: 'url',
        type: 'String',
        description: 'SVG 文件 URL',
        values: [],
        default: ''
      },
      {
        name: 'border-style',
        type: 'String',
        description: '列数量',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-border-svg',
      'Border-SVG文件边框',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new BorderSvgDocument(); 