import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ExpInputBtnBarDocument extends AttDocument {
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
        name: 'exp-atts',
        type: 'Object',
        description: '组件cx-exp-input的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'exp-evts',
        type: 'Object',
        description: '组件cx-exp-input的事件监听对象',
        values: [],
        default: '{}'
      },
      {
        name: 'opers',
        type: 'Array',
        description: '组件cx-oper-group的opers参数',
        values: [],
        default: '[]'
      },
      {
        name: 'oper-el-att',
        type: 'Object',
        description: '组件cx-oper-group中el-button的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'max-num',
        type: 'Number',
        description: '组件cx-oper-group显示的最多按钮数',
        values: [],
        default: '3'
      },
      {
        name: 'inline',
        type: 'Boolean',
        description: '组件cx-oper-group是否和exp同行显示',
        values: [],
        default: 'false'
      }
    ];

    super(
      'cx-exp-input-btn-bar',
      '属性条件输入搜索按钮条组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new ExpInputBtnBarDocument(); 