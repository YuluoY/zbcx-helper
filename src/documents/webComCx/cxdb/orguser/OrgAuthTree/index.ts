import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class OrgAuthTreeDocument extends AttDocument {
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
      'cx-org-auth-tree',
      '授权部门树',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new OrgAuthTreeDocument(); 