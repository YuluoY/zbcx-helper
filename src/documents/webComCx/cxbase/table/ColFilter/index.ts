import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ColFilterDocument extends AttDocument {
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
        name: 'params',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'check-change',
        description: '选中发生变化',
        parameters: '(state, val) - state:选中状态,val:选中对象'
      },
      {
        name: 'drag-finish',
        description: '拖拽后监听',
        parameters: '{cols, draggingNode, dropNode, dropType, event} - cols:拖拽调整顺序后的字段列表,draggingNode:拖拽节点,dropNode:完成节点,dropType:拖拽类型, event:事件'
      }
    ];

    super(
      'cx-col-filter',
      '列过滤',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new ColFilterDocument(); 