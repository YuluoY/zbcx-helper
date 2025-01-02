import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class SearchPoiDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'params',
        type: 'Object',
        description: '参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'params.types',
        type: 'Array.<Object>',
        description: '推荐的类型列表',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click-tpye',
        description: '点推荐类型的卡片，返回当前选择的卡片对象',
        parameters: 'data'
      },
      {
        name: 'searchpoi',
        description: '点击搜索按钮的事件，返回输入的内容',
        parameters: 'searchInp'
      },
      {
        name: 'clear-poi',
        description: '点击清除按钮的事件',
        parameters: ''
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '搜索结果展示插槽'
      }
    ];

    super(
      'cx-search-poi',
      '兴趣点检索组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new SearchPoiDocument(); 