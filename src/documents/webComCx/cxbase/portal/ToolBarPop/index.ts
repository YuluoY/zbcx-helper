import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ToolBarPopDocument extends AttDocument {
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
        name: 'eltooltip',
        type: 'Object',
        description: 'el-tooltip原生属性',
        values: [],
        default: '{}'
      },
      {
        name: 'placement',
        type: 'String',
        description: 'Tooltip 组件出现的位置（同el-tooltip的placement属性）',
        values: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
        default: 'bottom'
      },
      {
        name: 'type',
        type: 'String',
        description: '弹出框样式（默认模板/自定义）',
        values: ['default', 'custom'],
        default: 'default'
      },
      {
        name: 'data',
        type: 'Array',
        description: '数据',
        values: [],
        default: '[]'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'onclick',
        description: '点击图标',
        parameters: 'att'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '自定义统一的弹窗样式'
      },
      {
        name: 'pop.name',
        description: '自定义不统一的弹窗样式'
      }
    ];

    super(
      'cx-toolbar-pop',
      '工具条弹出框组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new ToolBarPopDocument(); 