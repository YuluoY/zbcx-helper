import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';
import type { EchartProps } from './types';

class EchartDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'option',
        type: 'Object',
        description: 'echarts的setOption函数可接收的参数对象',
        default: '{}'
      },
      {
        name: 'autoDebounce',
        type: 'Boolean',
        description: '是否启用防抖策略',
        default: 'false'
      },
      {
        name: 'debounceTime',
        type: 'Number',
        description: '防抖间隔，单位ms',
        default: '300'
      },
      {
        name: 'defShow',
        type: 'Boolean',
        description: '是否需要加载默认echarts配置，如果初始option为空，且defShow为true，则会构造随机数据加载echart图表',
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'created',
        description: 'echarts图表渲染完毕后的回调函数',
        parameters: '(echart: ECharts, vm: ComponentInstance)'
      }
    ];

    super(
      'cx-echart',
      'Echart图表组件',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new EchartDocument(); 