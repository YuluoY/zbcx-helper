import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class LegendDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'datas',
        type: 'Array',
        description: '图例数据',
        values: [],
        default: '[]'
      },
      {
        name: 'foldable',
        type: 'Boolean',
        description: '是否可折叠',
        values: [],
        default: 'false'
      },
      {
        name: 'foldStyle',
        type: 'String',
        description: '折叠样式',
        values: [],
        default: "''"
      }
    ];

    super(
      'cx-legend',
      '图例组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new LegendDocument(); 