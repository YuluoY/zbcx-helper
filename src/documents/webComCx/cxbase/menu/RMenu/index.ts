import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

interface MethodDoc {
  name: string;
  description: string;
  parameters: string;
  returnValue: string;
}

class RMenuDocument extends AttDocument {
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
        type: 'Array',
        description: '菜单对象序列',
        values: [],
        default: '[]'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'item-click',
        description: '菜单点击事件',
        parameters: 'menu: RmenuCfg 是菜单数据对象'
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'hide',
        description: '隐藏右键菜单',
        parameters: 'event: Event 鼠标事件对象',
        returnValue: ''
      },
      {
        name: 'show',
        description: '显示右键菜单',
        parameters: 'event: Event 鼠标事件对象',
        returnValue: ''
      }
    ];

    super(
      'cx-r-menu',
      '右键菜单组件',
      props,
      events,
      methods,
      __filename
    );
  }
}

export default new RMenuDocument(); 