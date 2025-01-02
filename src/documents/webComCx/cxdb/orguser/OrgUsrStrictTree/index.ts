import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class OrgUsrStrictTreeDocument extends AttDocument {
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
        name: 'disables',
        type: 'String',
        description: '需要禁能的ID列表',
        values: [],
        default: ''
      },
      {
        name: 'tree-atts',
        type: 'Object',
        description: '映射 cx-tree 组件的属性',
        values: [],
        default: ''
      },
      {
        name: 'params',
        type: 'Object.<Params>',
        description: '传递的参数对象',
        values: [],
        default: ''
      },
      {
        name: 'params.showDisabled',
        type: 'Boolean',
        description: '是否展示禁用用户',
        values: [],
        default: 'false'
      },
      {
        name: 'params.showCheckbox',
        type: 'Boolean',
        description: '是否展示勾选框',
        values: [],
        default: 'false'
      },
      {
        name: 'params.showFilter',
        type: 'Boolean',
        description: '是否展示搜索框',
        values: [],
        default: 'false'
      },
      {
        name: 'params.showUser',
        type: 'Boolean',
        description: '是否展示用户,默认只展示部门',
        values: [],
        default: 'false'
      },
      {
        name: 'params.orgByCur',
        type: 'Boolean',
        description: '是否根据当前登录用户所在的部门显示',
        values: [],
        default: 'true'
      },
      {
        name: 'params.showParent',
        type: 'Boolean',
        description: '是否显示父部门(严格模式下)',
        values: [],
        default: 'false'
      },
      {
        name: 'params.hides',
        type: 'Array.<Number>',
        description: '需要隐藏的用户结点，数组内为userid',
        values: [],
        default: '[]'
      },
      {
        name: 'params.defChecked',
        type: 'Array.<Number>',
        description: '默认选中的结点，数组内为结点key值，结点key默认为id',
        values: [],
        default: '[]'
      },
      {
        name: 'params.showMyAdd',
        type: 'Number',
        description: '是否只显示自己创建的用户和自己',
        values: [],
        default: 'false'
      }
    ];

    const events = [
      {
        name: 'current-change',
        description: '当前选择发生变化',
        parameters: 'function(data)',
        paramsDesc: ''
      }
    ];

    super(
      'cx-org-usr-strict-tree',
      '根据用户所在部门展示组织结构树',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new OrgUsrStrictTreeDocument(); 