import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class OrgTreeDocument extends AttDocument {
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
        name: 'no-cache',
        type: 'String',
        description: '是否不进行缓存',
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
        parameters: 'function(data)',
        paramsDesc: ''
      }
    ];

    super(
      'cx-org-tree',
      '部门组织树',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new OrgTreeDocument(); 