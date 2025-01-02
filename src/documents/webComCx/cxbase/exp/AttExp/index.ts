import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class AttExpDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI规格',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'flds',
        type: 'Array',
        description: '字段信息数组',
        values: [],
        default: '[]'
      },
      {
        name: 'item-width',
        type: 'Number',
        description: '输入框大小(像素为单位)',
        values: [],
        default: '125'
      },
      {
        name: 'show-label',
        type: 'Boolean',
        description: '是否显示标签',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'fld-change',
        description: '字段值发生变化',
        parameters: 'fld: 当前触发的字段对象'
      }
    ];

    super(
      'cx-att-exp',
      '属性条件查询输入框组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new AttExpDocument(); 