import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class MenuTagDocument extends AttDocument {
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
        name: 'menus',
        type: 'Array',
        description: '菜单对象序列',
        values: [],
        default: '[]'
      },
      {
        name: 'style',
        type: 'String',
        description: '样式',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'item-click',
        description: '菜单点击事件',
        parameters: 'menu: TagCfg 是菜单数据对象'
      }
    ];

    super(
      'cx-menu-tag',
      '标签菜单项组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new MenuTagDocument(); 