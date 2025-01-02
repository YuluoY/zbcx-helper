import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class MapLegendDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'eventPrefix',
        type: 'String',
        description: '推送消息名的前缀',
        values: [],
        default: 'MapLegend'
      },
      {
        name: 'defFold',
        type: 'Boolean',
        description: '是否默认收缩卡片',
        values: [],
        default: 'false'
      },
      {
        name: 'autoOpen',
        type: 'Boolean',
        description: '是否在添加图例时自动展开卡片面板',
        values: [],
        default: 'true'
      },
      {
        name: 'legendOption',
        type: 'Object',
        description: '传递给cx-legend组件的自定义参数对象',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-map-legend',
      'MapLegend地图图例组件',
      props,
      [], // 无事件
      [], // 无方法
      __filename
    );
  }
}

export default new MapLegendDocument(); 