import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class MenuStairDocument extends AttDocument {
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
        description: '菜单对象序列，必填。见cx-menu-fold中说明',
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
        name: 'mode',
        type: 'String',
        description: '展示模式，水平 horizontal 或 垂直',
        values: ['horizontal', 'vertical'],
        default: 'horizontal'
      },
      {
        name: 'borderPosition',
        type: 'String',
        description: '激活菜单 border 显示位置',
        values: ['top', 'right', 'bottom', 'left'],
        default: '水平 bottom，垂直 right'
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
        name: 'menu-mouseover',
        description: '鼠标移入菜单事件',
        parameters: '{ menu }: menu: MenuCfg 是菜单数据对象'
      },
      {
        name: 'menu-mouseout',
        description: '鼠标移出菜单事件',
        parameters: '{ menu }: menu: MenuCfg 是菜单数据对象'
      },
      {
        name: 'menu-contextmenu',
        description: '菜单右键点击事件',
        parameters: '{ menu }: menu: MenuCfg 是菜单数据对象'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'menu-suffix',
        description: '菜单后缀插槽， 参数为 { menu } 是菜单数据对象'
      }
    ];

    super(
      'cx-menu-stair',
      '一级菜单组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new MenuStairDocument(); 