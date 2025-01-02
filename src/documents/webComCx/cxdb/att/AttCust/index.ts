import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class AttCustDocument extends AttDocument {
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
        name: 'values-change',
        description: '字段值发生变化',
        parameters: '(fld, changed)'
      }
    ];

    super(
      'cx-att-cust',
      '自定义属性编辑',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new AttCustDocument(); 