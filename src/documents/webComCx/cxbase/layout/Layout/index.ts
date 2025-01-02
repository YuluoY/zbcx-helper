import { AttDocument } from '../../../../AttDocument';
import { PropDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class LayoutDocument extends AttDocument {
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
        name: 'padding',
        type: 'Boolean',
        description: '是否需要增加 padding',
        values: [],
        default: 'false'
      },
      {
        name: 'fit-content',
        type: 'Boolean',
        description: '是否根据内容自动伸缩，该模式下 layout 和子 region 无滚动条',
        values: [],
        default: 'false'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-layout',
      '布局组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new LayoutDocument(); 