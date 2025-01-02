import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class OrgUsrTreeDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI 规格',
        values: [],
        default: 'default'
      },
      {
        name: 'plugs',
        type: 'Array.<cx.dc.PlugNode>',
        description: '插件列表',
        values: [],
        default: ''
      },
      {
        name: 'hides',
        type: 'Array.<String>',
        description: '需要隐藏的ID列表',
        values: [],
        default: ''
      },
      {
        name: 'show-disabled',
        type: 'Boolean',
        description: '是否显示禁用的用户',
        values: [],
        default: 'false'
      },
      {
        name: 'show-checkbox',
        type: 'Boolean',
        description: '是否显示checkbox',
        values: [],
        default: 'false'
      },
      {
        name: 'show-filter',
        type: 'Boolean',
        description: '是否显示过滤输入框',
        values: [],
        default: 'false'
      },
      {
        name: 'tree-atts',
        type: 'Object',
        description: '映射 cx-tree 组件的属性',
        values: [],
        default: ''
      }
    ];

    const events = [
      {
        name: 'current-change',
        description: '当前选择发生变化',
        parameters: 'function(data, node)',
        paramsDesc: ''
      },
      {
        name: 'check-change',
        description: 'check 发生变化',
        parameters: 'function(data, checked, childrenChecked)',
        paramsDesc: ''
      },
      {
        name: 'node-expand',
        description: '结点展开',
        parameters: 'function(data, node, context)',
        paramsDesc: ''
      }
    ];

    super(
      'cx-org-usr-tree',
      '部门人员树',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new OrgUsrTreeDocument(); 