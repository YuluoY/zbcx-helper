import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProcTreeDocument extends AttDocument {
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
        name: 'nodes',
        type: 'String',
        description: '树节点',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'String',
        description: '插件名',
        values: [],
        default: ''
      },
      {
        name: 'treeAtts',
        type: 'Object<value>',
        description: '映射 cx-tree 组件的属性',
        values: [],
        default: ''
      }
    ];

    const events = [
      {
        name: 'current-change',
        description: '当前选择发生变化',
        parameters: '(data)',
        paramsDesc: 'data数据项'
      }
    ];

    super(
      'cx-proc-tree',
      '流程树',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new ProcTreeDocument(); 