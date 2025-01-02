import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderDialogDocument extends AttDocument {
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
        name: 'minable',
        type: 'Boolean',
        description: '是否可最小化',
        values: [],
        default: 'false'
      },
      {
        name: 'maxable',
        type: 'Boolean',
        description: '是否可最大化',
        values: [],
        default: 'false'
      },
      {
        name: 'closable',
        type: 'Boolean',
        description: '是否可以关闭',
        values: [],
        default: 'true'
      },
      {
        name: 'movable',
        type: 'Boolean',
        description: '是否可移动',
        values: [],
        default: 'true'
      },
      {
        name: 'foldable',
        type: 'Boolean',
        description: '是否可折叠',
        values: [],
        default: 'false'
      },
      {
        name: 'minimized',
        type: 'Boolean',
        description: '最小化状态',
        values: [],
        default: 'false'
      },
      {
        name: 'maximized',
        type: 'Boolean',
        description: '最大化状态',
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
        name: 'header-click',
        description: '点击标题头',
        parameters: 'function(evt)'
      },
      {
        name: 'min-change',
        description: '最小化状态发生了变化',
        parameters: 'function()'
      },
      {
        name: 'max-change',
        description: '最大化状态发生了变化',
        parameters: 'function()'
      },
      {
        name: 'close',
        description: '关闭',
        parameters: 'function()'
      }
    ];

    super(
      'cx-header-dialog',
      'Header-对话框',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderDialogDocument(); 