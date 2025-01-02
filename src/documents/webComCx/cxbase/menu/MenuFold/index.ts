import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class MenuFoldDocument extends AttDocument {
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
        description: '菜单对象序列，必填',
        values: [],
        default: '[]'
      },
      {
        name: 'defActive',
        type: 'Object',
        description: '默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致',
        values: [],
        default: '{}'
      },
      {
        name: 'isCollapse',
        type: 'Boolean',
        description: '是否展示折叠按钮，vertical 模式才生效',
        values: [],
        default: 'true'
      },
      {
        name: 'foldTitle',
        type: 'String',
        description: '折叠按钮的标题，this.$t(\'cx.base.fold\')=折叠',
        values: [],
        default: ''
      },
      {
        name: 'elAtts',
        type: 'Object',
        description: '配置对象，参数见 element-plus/Menu',
        values: [],
        default: '{\'mode\':\'vertical\'}'
      },
      {
        name: 'inverse',
        type: 'Boolean',
        description: '是否反色显示',
        values: ['false', 'true'],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'menu-click',
        description: '菜单点击事件',
        parameters: '{ menu }: menu: MenuCfg 是菜单数据对象'
      },
      {
        name: 'collapse',
        description: '纵向菜单侧向折叠',
        parameters: 'collapse: Boolean 是折叠状态'
      }
    ];

    super(
      'cx-menu-fold',
      '折叠菜单组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new MenuFoldDocument(); 