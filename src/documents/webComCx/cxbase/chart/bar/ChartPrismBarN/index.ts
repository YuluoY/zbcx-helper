import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';
import type { ChartPrismBarNProps } from './types';

class ChartPrismBarNDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Object',
        description: '图表数据，包含 values（数据系列）和 axises（坐标轴）',
        default: '{}'
      },
      {
        name: 'config',
        type: 'Object',
        description: '图表配置',
        default: '{}'
      },
      {
        name: 'colors',
        type: 'Array',
        description: '柱状图颜色数组',
        default: "['blue', 'green', 'red']"
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click',
        description: '点击事件',
        parameters: 'Event'
      },
      {
        name: 'dblclick',
        description: '双击事件',
        parameters: 'Event'
      },
      {
        name: 'mousedown',
        description: '鼠标按下事件',
        parameters: 'Event'
      },
      {
        name: 'mousemove',
        description: '鼠标移动事件',
        parameters: 'Event'
      },
      {
        name: 'mouseup',
        description: '鼠标释放事件',
        parameters: 'Event'
      },
      {
        name: 'mouseover',
        description: '鼠标进入事件',
        parameters: 'Event'
      },
      {
        name: 'mouseout',
        description: '鼠标离开事件',
        parameters: 'Event'
      }
    ];

    super(
      'cx-chart-prism-bar-n',
      '多棱柱形柱状图',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new ChartPrismBarNDocument(); 