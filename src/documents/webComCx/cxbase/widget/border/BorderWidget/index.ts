import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class BorderWidgetDocument extends AttDocument {
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
        name: 'border-style',
        type: 'String',
        description: '边框样式',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-border-widget',
      'Border-小组件边框',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new BorderWidgetDocument(); 