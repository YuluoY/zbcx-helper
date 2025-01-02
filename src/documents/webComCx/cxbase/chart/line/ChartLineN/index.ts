import { AttDocument, MethodDoc } from '../../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

export class ChartLineNDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const methods: MethodDoc[] = [];

    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array',
        description: '数据'
      },
      {
        name: 'config',
        type: 'Object',
        description: '参数配置'
      },
      {
        name: 'colors',
        type: 'Array',
        description: '颜色',
        values: ['blue', 'cyan', 'navy', 'green', 'purple', 'magenta', 'yellow', 'orange', 'red']
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click',
        description: '点击',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'dblclick',
        description: '双击',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'mousedown',
        description: '当鼠标指针移动到元素上方，并按下鼠标左键时',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'mousemove',
        description: '当鼠标指针在指定的元素中移动',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'mouseup',
        description: '当在元素上放松鼠标按钮时',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'mouseover',
        description: '鼠标指针位于元素上方时',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      },
      {
        name: 'mouseout',
        description: '当鼠标指针从元素上移开时',
        parameters: '(params: { componentType: string; seriesType: string; seriesIndex: number; seriesName: string; name: string; dataIndex: number; value: number; color: string })'
      }
    ];

    const slots: SlotDoc[] = [];

    super(
      'cx-chart-linen',
      '多折线图组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
}

export default new ChartLineNDocument(); 