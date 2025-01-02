import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class OperItemDocument extends AttDocument {
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
        name: 'oper',
        type: 'OperCfg',
        description: '操作配置',
        values: [],
        default: ''
      },
      {
        name: 'args',
        type: 'Array',
        description: '传递给操作的参数（如表格里面的每一行数据）',
        values: [],
        default: ''
      },
      {
        name: 'plugin-state',
        type: 'Function(plug,args)',
        description: '计算插件的状态(visible,disabled)',
        values: [],
        default: ''
      },
      {
        name: 'el-atts',
        type: 'Object',
        description: '传递给 el-button 的属性',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click',
        description: '点击操作',
        parameters: '(oper, args) - 操作配置, 传递给该组件的参数'
      }
    ];

    super(
      'cx-oper-item',
      '操作项',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new OperItemDocument(); 