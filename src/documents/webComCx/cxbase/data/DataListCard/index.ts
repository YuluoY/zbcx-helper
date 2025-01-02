import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataListCardDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Object',
        description: '属性数据，键值对',
        values: [],
        default: '{}'
      },
      {
        name: 'closeable',
        type: 'Boolean',
        description: '是否可关闭，默认可关闭',
        values: [],
        default: 'true'
      },
      {
        name: 'mainStyle',
        type: 'Object',
        description: '卡片主体样式',
        values: [],
        default: '{}'
      },
      {
        name: 'headStyle',
        type: 'Object',
        description: '卡片头部部分样式',
        values: [],
        default: '{}'
      },
      {
        name: 'sectionStyle',
        type: 'Object',
        description: '卡片中间部分样式',
        values: [],
        default: '{}'
      },
      {
        name: 'footerStyle',
        type: 'Object',
        description: '卡片底部部分样式',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'close',
        description: '关闭',
        parameters: '(context)'
      }
    ];

    const slots = [
      {
        name: 'default',
        description: '内容部分，自定义内容样式'
      },
      {
        name: 'header',
        description: '头部插槽'
      },
      {
        name: 'footer',
        description: '末尾插槽'
      }
    ];

    super(
      'cx-data-list-card',
      '数据键值列卡片组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataListCardDocument(); 