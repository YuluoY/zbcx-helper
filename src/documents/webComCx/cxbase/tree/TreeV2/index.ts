import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TreeV2Document extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array.<NodeData>',
        description: '树节点',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'Array.<cx.dc.PlugNode>',
        description: '右边键',
        values: [],
        default: ''
      },
      {
        name: 'tips',
        type: 'Object',
        description: '提示信息',
        values: [],
        default: ''
      },
      {
        name: 'show-checkbox',
        type: 'Boolean',
        description: '显示 checkbox',
        values: [],
        default: 'false'
      },
      {
        name: 'def-expands',
        type: 'Array.<nodeKey>',
        description: '默认展开的结点 Id 序列',
        values: [],
        default: ''
      },
      {
        name: 'def-checked',
        type: 'Array.<nodeKey>',
        description: '默认 checked 的结点 Id 序列',
        values: [],
        default: ''
      },
      {
        name: 'def-current-node',
        type: 'nodeKey',
        description: '默认选中的结点 ID',
        values: [],
        default: ''
      },
      {
        name: 'show-filter',
        type: 'Boolean',
        description: '显示过滤输入框',
        values: [],
        default: 'false'
      },
      {
        name: 'select-first',
        type: 'Boolean',
        description: '选中第一个结点',
        values: [],
        default: 'false'
      },
      {
        name: 'run-plug',
        type: 'Function',
        description: '自定义执行插件 - funciton(plugNode, node)',
        values: [],
        default: ''
      },
      {
        name: 'exp-fld-val',
        type: 'Function',
        description: '生成判断条件的字段信息、值等 - function(flds, values, nodeData, nodeName)',
        values: [],
        default: ''
      },
      {
        name: 'plug-params',
        type: 'Function',
        description: '为插件运行提供参数 - function(key, nodeData)',
        values: [],
        default: ''
      },
      {
        name: 'el-atts',
        type: 'Object',
        description: 'el-tree可以接收的原生属性对象，会通过v-bind绑定到el-tree上，如： {\'check-strictly\': true}',
        values: [],
        default: ''
      },
      {
        name: 'el-listeners',
        type: 'Object',
        description: 'el-tree可以接收的原生事件注册对象，会通过v-on绑定到el-tree上，如： {\'node-drop\': this.onNodeDrop}',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'node-click',
        description: '当节点被点击的时候触发',
        parameters: 'data、node、event - node 节点对象，data 构造节点的数据、e: MouseEvent'
      },
      {
        name: 'current-change',
        description: '当前选中节点变化时触发的事件',
        parameters: 'data、node - node 节点对象，data 构造节点的数据'
      },
      {
        name: 'check-change',
        description: '节点选中状态发生变化时的回调',
        parameters: 'data、checked - data 构造节点的数据，checked 当前节点是否选中'
      },
      {
        name: 'check',
        description: '当复选框被点击的时候触发',
        parameters: '(data: TreeNodeData, info: { checkedKeys,checkedNodes, halfCheckedKeys, halfCheckedNodes})'
      },
      {
        name: 'node-expand',
        description: '节点被展开时触发的事件',
        parameters: 'data、node - node 节点对象，data 构造节点的数据'
      },
      {
        name: 'node-collapse',
        description: '节点被关闭时触发的事件',
        parameters: 'data、node - node 节点对象，data 构造节点的数据'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分，插槽参数 { data: NodeData }',
        props: []
      }
    ];

    super(
      'cx-tree-v2',
      '虚拟树',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new TreeV2Document(); 