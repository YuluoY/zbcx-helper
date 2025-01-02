import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class CardDocument extends AttDocument {
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
        description: '标题'
      },
      {
        name: 'closable',
        type: 'Boolean',
        description: '是否支持关闭',
        default: 'false'
      },
      {
        name: 'foldable',
        type: 'Boolean',
        description: '是否支持可折叠',
        default: 'true'
      },
      {
        name: 'icon',
        type: 'String',
        description: '标题栏图标 CSS 类名，默认为空'
      },
      {
        name: 'border-com',
        type: 'String/Component',
        description: 'Border 组件名（边框和底纹）',
        default: 'cx-border-regular'
      },
      {
        name: 'header-com',
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

    const events: EventDoc[] = [];

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

    const methods: MethodDoc[] = [];

    super(
      'cx-card',
      '卡片组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
}

export default new CardDocument(); 