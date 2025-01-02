import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc, MethodDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TreeDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'nodes',
        type: 'Array.<cx.dc.TreeNode>',
        description: '树结构数组，通过cx.dc.TreeNode/TreeLeaf构成树结构',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'Array.<cx.dc.PlugNode>',
        description: '右边键插件，通过cx.dc.PlugNode构成树状结构，显示成菜单',
        values: [],
        default: ''
      },
      {
        name: 'show-checkbox',
        type: 'Boolean',
        description: '显示checkbox',
        values: [],
        default: 'false'
      },
      {
        name: 'show-tip',
        type: 'Boolean',
        description: '显示提示信息',
        values: [],
        default: 'false'
      },
      {
        name: 'expand-root',
        type: 'Boolean',
        description: '展开根节点',
        values: [],
        default: 'false'
      },
      {
        name: 'expand-all',
        type: 'Boolean',
        description: '展开全部结点',
        values: [],
        default: 'false'
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
        name: 'check-node',
        type: 'Function',
        description: '是否 check 结点，返回值 true - 选中',
        values: [],
        default: ''
      },
      {
        name: 'hide-node',
        type: 'Function',
        description: '是否隐藏结点，返回值 true - 隐藏',
        values: [],
        default: ''
      },
      {
        name: 'disable-node',
        type: 'Function',
        description: '是否禁能结点，返回值 true - 禁能',
        values: [],
        default: ''
      },
      {
        name: 'expand-node',
        type: 'Function',
        description: '是否展开结点，返回值 true - 禁能',
        values: [],
        default: ''
      },
      {
        name: 'tree-handler',
        type: 'cx.dc.ITreeHandler',
        description: '树处理对象',
        values: [],
        default: ''
      },
      {
        name: 'exp-fld-val',
        type: 'Function',
        description: '生成判断条件的字段信息、值等',
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
        name: 'current-change',
        description: '当前选中结点发生变化',
        parameters: '(data, node) - 结点上的data，结点'
      },
      {
        name: 'node-click',
        description: '点击树结点',
        parameters: '(node, data, dom, event) - 结点，结点上的data，dom 元素，event事件'
      },
      {
        name: 'check-change',
        description: '树上 check 发生变化',
        parameters: '(data, checked, childrenChecked) - 结点上的data，checked 当前节点是否选中，childrenChecked 儿子节点是否选中'
      },
      {
        name: 'node-expand',
        description: '展开结点',
        parameters: '(data, node, context) - 结点上的data，结点，上下文'
      },
      {
        name: 'node-collapse',
        description: '折叠结点',
        parameters: '(data, node, context) - 结点上的data，结点，上下文'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '默认插槽',
        props: ['data']
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'getTree',
        description: '获取树的组件对象，返回el-tree对象',
        parameters: '()',
        returns: '{el-tree}'
      },
      {
        name: 'plugParams',
        description: '插件运行时取对象里面的各种对象，key支持：\'{context}\', \'{tree}\', \'{values}\', \'{curNode}\', \'{curSel}\'',
        parameters: '(key)',
        returns: ''
      },
      {
        name: 'addNode',
        description: '根据属性，树结点配置，父节点 生成结点并添加到树',
        parameters: '(att, cfg, pnode)',
        returns: ''
      },
      {
        name: 'delNode',
        description: '根据结点上的数据，删除结点',
        parameters: '(data)',
        returns: ''
      },
      {
        name: 'updNode',
        description: '根据结点数据，修改结点属性（含label）',
        parameters: '(att, data)',
        returns: ''
      }
    ];

    super(
      'cx-tree',
      '树-异步',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
}

export default new TreeDocument(); 