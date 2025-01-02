import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class StructureTreeDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'TreeNode',
        description: '树节点数据',
        values: [],
        default: ''
      },
      {
        name: 'renderContent',
        type: 'Function(node)',
        description: '自定义渲染内容',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [];

    const slots: SlotDoc[] = [
      {
        name: 'card',
        description: '自定义卡片内容'
      }
    ];

    super(
      'cx-structure-tree',
      '组织结构树',
      props,
      events,
      [], // 无方法
      __filename,
      slots
    );
  }
} 