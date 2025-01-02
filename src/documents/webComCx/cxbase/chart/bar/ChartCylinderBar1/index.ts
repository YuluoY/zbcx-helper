import { AttDocument, MethodDoc } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';
import type { ChartCylinderBar1Props } from './types';

class ChartCylinderBar1Document extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const methods: MethodDoc[] = [];
    
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array',
        description: '图表数据',
        default: '[]'
      },
      {
        name: 'config',
        type: 'Object',
        description: '图表配置',
        default: '{}'
      },
      {
        name: 'color',
        type: 'String',
        description: '柱状图颜色',
        default: 'blue'
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
      'cx-chart-cylinder-bar1',
      '单圆柱形柱状图',
      props,
      events,
      methods,
      __filename
    );
  }
}

export default new ChartCylinderBar1Document(); 