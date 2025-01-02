import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class MenuPanelDocument extends AttDocument {
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
        name: 'maxCols',
        type: 'Number',
        description: '一行中的列数',
        values: [],
        default: '8'
      },
      {
        name: 'grpWidth',
        type: 'String',
        description: '一列菜单组的宽度，默认使用组件样式宽度, 如：1rem',
        values: [],
        default: ''
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
      }
    ];

    super(
      'cx-menu-panel',
      '面板菜单组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new MenuPanelDocument(); 