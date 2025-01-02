import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class OperGroupDocument extends AttDocument {
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
        name: 'opers',
        type: 'Array.<OperCfg>',
        description: '操作数组',
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
        name: 'max',
        type: 'Number',
        description: '显示操作的最大数量',
        values: [],
        default: '3'
      },
      {
        name: 'dropdown',
        type: 'DropdownCfg',
        description: '用于下拉的按钮控制',
        values: [],
        default: ''
      },
      {
        name: 'el-atts',
        type: 'Object',
        description: '传递给 el-button 的属性',
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
        name: 'before-visible',
        type: 'Function(args)',
        description: '下拉菜单展开之前的操作',
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
      'cx-oper-group',
      '操作组',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new OperGroupDocument(); 