import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';
import type { ChartBarAndLineProps } from './types';

class ChartBarAndLineDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array',
        description: '数据',
        default: '[]'
      },
      {
        name: 'config',
        type: 'Object',
        description: '参数配置',
        default: '{}'
      },
      {
        name: 'colors',
        type: 'Array',
        description: '颜色',
        values: ['blue', 'cyan', 'navy', 'green', 'purple', 'magenta', 'yellow', 'orange', 'red'],
        default: '[]'
      }
    ];

    super(
      'cx-chart-bar-and-line',
      '柱状折线图',
      props,
      [],
      [],
      __filename
    );
  }
}

export default new ChartBarAndLineDocument(); 