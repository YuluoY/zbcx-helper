import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataColumnsDocument extends AttDocument {
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
        name: 'datas',
        type: 'Array',
        description: '传递给组件的参数',
        values: [],
        default: '[]'
      },
      {
        name: 'elAtts',
        type: 'Object',
        description: 'vue3-seamless-scroll原生属性',
        values: [],
        default: 'null'
      },
      {
        name: 'attCom',
        type: 'Object',
        description: '传入的组件',
        values: [],
        default: 'null'
      },
      {
        name: 'componentType',
        type: 'String',
        description: '组件类型',
        values: ['icon', 'num', 'scroll'],
        default: 'icon'
      },
      {
        name: 'showTip',
        type: 'Boolean',
        description: '是否显示悬浮文字提示',
        values: [],
        default: 'false'
      },
      {
        name: 'showBackground',
        type: 'Boolean',
        description: '是否显示背景',
        values: [],
        default: 'false'
      },
      {
        name: 'bgColor',
        type: 'String',
        description: '背景颜色',
        values: [],
        default: '#fff'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'rec-click',
        description: '点击查看详细内容',
        parameters: 'data'
      },
      {
        name: 'btn-click',
        description: '点击按钮事件',
        parameters: 'data'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'header',
        description: '头部插槽'
      },
      {
        name: 'body',
        description: '中间内容插槽'
      },
      {
        name: 'footer',
        description: '尾部插槽'
      }
    ];

    super(
      'cx-data-columns',
      '数据列展示组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataColumnsDocument(); 