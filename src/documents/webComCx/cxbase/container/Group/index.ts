import { AttDocument } from '../../../../AttDocument';
import { PropDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class GroupDocument extends AttDocument {
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
        name: 'border-com',
        type: 'String',
        description: 'Border 组件名（边框和底纹）',
        default: 'cx-border-regular'
      },
      {
        name: 'header-com',
        type: 'String',
        description: 'Header 组件名（标题头）',
        default: 'cx-header-group'
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
      },
      {
        name: 'direction',
        type: 'String',
        description: '控制内容方向',
        values: ['vertical', 'horizontal'],
        default: 'vertical'
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
      'cx-group',
      '分组组件',
      props,
      [],
      [],
      __filename,
      slots
    );
  }
}

export default new GroupDocument(); 