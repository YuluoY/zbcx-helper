import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class CardDlgDocument extends AttDocument {
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
        name: 'closable',
        type: 'Boolean',
        description: '是否可以关闭',
        default: 'true'
      },
      {
        name: 'minable',
        type: 'Boolean',
        description: '是否可以最小化',
        default: 'true'
      },
      {
        name: 'foldable',
        type: 'Boolean',
        description: '是否支持可折叠',
        default: 'true'
      },
      {
        name: 'titleFolded',
        type: 'Boolean',
        description: '折叠时只显示当前选项卡标题，false时显示全部',
        default: 'true'
      },
      {
        name: 'tabPosition',
        type: 'String',
        description: 'tab选项卡的位置，一个选项卡时不显示',
        values: ['left', 'right'],
        default: 'left'
      },
      {
        name: 'minFoldStyle',
        type: 'String',
        description: '折叠或最小化时样式，可设置位置'
      },
      {
        name: 'minTooltip',
        type: 'Object',
        description: '最小化或折叠的时候标题的el-tooltip参数对象'
      },
      {
        name: 'defFold',
        type: 'Boolean',
        description: '是否默认折叠',
        default: 'false'
      },
      {
        name: 'defMin',
        type: 'Boolean',
        description: '是否默认最小化',
        default: 'false'
      },
      {
        name: 'borderCom',
        type: 'String/Component',
        description: 'Border 组件名（边框和底纹）',
        default: 'cx-border-regular'
      },
      {
        name: 'headerCom',
        type: 'String/Component',
        description: 'Header 组件名（标题头）',
        default: 'cx-header-card'
      },
      {
        name: 'border',
        type: 'Object',
        description: '组件 Border 的参数（请参考具体的组件传递）'
      },
      {
        name: 'header',
        type: 'Object',
        description: '组件 Header 的参数（请参考具体的组件传递）'
      },
      {
        name: 'content',
        type: 'Object',
        description: '组件 Content 的参数（请参考具体的组件传递）'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'min',
        description: '最小化时',
        parameters: ''
      },
      {
        name: 'max',
        description: '从最小化还原为正常界面时',
        parameters: ''
      },
      {
        name: 'folded',
        description: '折叠状态发生变化',
        parameters: ''
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      },
      {
        name: 'header-preappend',
        description: '标题之前'
      },
      {
        name: 'header-append',
        description: '标题之后'
      },
      {
        name: 'header-title',
        description: '标题附加'
      }
    ];

    super(
      'cx-card-dlg',
      '卡片对话框组件',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new CardDlgDocument(); 