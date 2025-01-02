import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ExpInputDocument extends AttDocument {
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
      },
      {
        name: 'show-more',
        type: 'Boolean',
        description: '是否显示more',
        values: [],
        default: 'true'
      },
      {
        name: 'clearable',
        type: 'Boolean',
        description: '是否可清除',
        values: [],
        default: 'true'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'fld-change',
        description: '字段值发生变化',
        parameters: 'state:选中状态,val:选中对象'
      },
      {
        name: 'exp-search',
        description: '按条件搜索',
        parameters: ''
      },
      {
        name: 'exp-clear',
        description: '清除条件',
        parameters: ''
      },
      {
        name: 'exp-more',
        description: '更多条件',
        parameters: ''
      }
    ];

    super(
      'cx-exp-input',
      '属性条件输入搜索组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new ExpInputDocument(); 