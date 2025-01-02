import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderDocument extends AttDocument {
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
        name: 'align',
        type: 'String',
        description: '对齐方式',
        values: ['left', 'center', 'right'],
        default: 'left'
      },
      {
        name: 'title',
        type: 'String',
        description: '标题',
        values: [],
        default: ''
      },
      {
        name: 'icon',
        type: 'String',
        description: '图标',
        values: [],
        default: ''
      },
      {
        name: 'title-style',
        type: 'String',
        description: '标题样式',
        values: [],
        default: ''
      },
      {
        name: 'icon-style',
        type: 'String',
        description: '图标样式',
        values: [],
        default: ''
      },
      {
        name: 'folded',
        type: 'Boolean',
        description: '折叠状态',
        values: [],
        default: 'false'
      },
      {
        name: 'movable',
        type: 'Boolean',
        description: '是否可移动',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'header-click',
        description: '点击 Header',
        parameters: 'function(evt)'
      },
      {
        name: 'title-click',
        description: '点击 标题',
        parameters: 'function(evt)'
      }
    ];

    super(
      'cx-header',
      '头部栏',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderDocument(); 