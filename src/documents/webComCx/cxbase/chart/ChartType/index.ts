import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ChartTypeDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'chartType',
        type: 'String',
        description: '提供的图表组件名',
        default: ''
      },
      {
        name: 'config',
        type: 'Object',
        description: '对应类型组件的配置参数',
        default: '{}'
      },
      {
        name: 'data',
        type: 'Object',
        description: '对应类型组件的数值参数',
        default: '{}'
      },
      {
        name: 'colors',
        type: 'Array',
        description: '对应类型组件的颜色参数',
        default: '[]'
      }
    ];

    super(
      'cx-chart-type',
      '动态图表组件',
      props,
      [],
      [],
      __filename
    );
  }
}

export default new ChartTypeDocument();