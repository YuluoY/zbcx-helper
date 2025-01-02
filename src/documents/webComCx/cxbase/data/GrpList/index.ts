import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class GrpListDocument extends AttDocument {
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
        name: 'data',
        type: 'Array.<DataCfg>',
        description: '数据传递',
        values: [],
        default: '[]'
      },
      {
        name: 'title',
        type: 'String',
        description: '标题',
        values: [],
        default: ''
      },
      {
        name: 'icon',
        type: 'String',
        description: '图标',
        values: [],
        default: ''
      },
      {
        name: 'activeId',
        type: 'String',
        description: '当前激活菜单id',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'item-click',
        description: '点击',
        parameters: '(id, title)'
      }
    ];

    const slots = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-grp-list',
      '分组列表组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new GrpListDocument(); 