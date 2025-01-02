import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TreeCfgDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'lazy',
        type: 'Boolean',
        description: '是否懒加载模式模式',
        values: [],
        default: 'false'
      },
      {
        name: 'node',
        type: 'String',
        description: '需要加载的配置树（cx_resdir 表中的 node 值）',
        values: [],
        default: ''
      },
      {
        name: 'vals',
        type: 'Object',
        description: '传递给查询的值，在查询中，如果树结点查询需要参数，则由该对象提供。对象的key是配置结点的name, 值是该结点需要的查询参数',
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
        name: 'el-atts',
        type: 'Object',
        description: 'cx-tree/cx-tree-syn 可以接收的属性，会通过v-bind绑定到 cx-tree/cx-tree-syn 组件',
        values: [],
        default: ''
      },
      {
        name: 'el-listeners',
        type: 'Object',
        description: 'cx-tree/cx-tree-syn 可以接收的事件，会通过v-on绑定到 cx-tree/cx-tree-syn 组件',
        values: [],
        default: ''
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '默认插槽',
        props: ['data']
      }
    ];

    super(
      'cx-tree-cfg',
      '配置树',
      props,
      [],
      [],
      __filename,
      slots
    );
  }
}

export default new TreeCfgDocument(); 