import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class AttTabDocument extends AttDocument {
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
        name: 'flds',
        type: 'Array.<Fld>',
        description: '字段信息数组'
      },
      {
        name: 'col-num',
        type: 'Number',
        description: '列数量',
        values: ['1', '2', '3'],
        default: '2'
      },
      {
        name: 'mode',
        type: 'Number',
        description: '模式（0-浏览 1-编辑 2-编辑之后做对比）',
        values: ['0', '1', '2'],
        default: '0'
      },
      {
        name: 'before-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之前的回调函数 - function(fld, params)'
      },
      {
        name: 'after-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之后的回调函数 - function(fld, flds, params)'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'values-change',
        description: '字段值发生变化',
        parameters: 'fld: Fld, changed: boolean'
      }
    ];

    const slots: SlotDoc[] = [];

    const methods: MethodDoc[] = [];

    super(
      'cx-att-tab',
      '属性表单(Table 模式)，支持单、多列展示。',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
} 