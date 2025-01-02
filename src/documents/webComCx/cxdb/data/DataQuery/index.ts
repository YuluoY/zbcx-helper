import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataQueryDocument extends AttDocument {
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
        name: 'params',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: '{}'
      },
      {
        name: 'showOk',
        type: 'Boolean',
        description: '是否显示确定按钮',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'ok-click',
        description: '确定按钮事件',
        parameters: '(selected)'
      }
    ];

    super(
      'cx-data-query',
      '数据查询组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new DataQueryDocument(); 