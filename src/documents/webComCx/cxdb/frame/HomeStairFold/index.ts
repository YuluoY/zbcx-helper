import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class HomeStairFoldDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'sysLogo',
        type: 'String',
        description: '头部系统logo路径',
        values: [],
        default: ''
      },
      {
        name: 'headerStyle',
        type: 'String',
        description: '头部的样式',
        values: [],
        default: ''
      },
      {
        name: 'headerCom',
        type: 'String / Component',
        description: '头部组件',
        values: [],
        default: 'cx-sys-header'
      },
      {
        name: 'attUserDrop',
        type: 'Object',
        description: '用户下拉cx-user-dropdown组件参数，见cx-sys-header组件',
        values: [],
        default: ''
      },
      {
        name: 'menus',
        type: 'Array',
        description: '菜单数据对象，结构见 menufold',
        values: [],
        default: ''
      },
      {
        name: 'plugDef',
        type: 'Object',
        description: '所在的插件对象',
        values: [],
        default: ''
      },
      {
        name: 'attMenuStair',
        type: 'Object',
        description: 'menustair组件的参数对象',
        values: [],
        default: ''
      },
      {
        name: 'attMenuFold',
        type: 'Object',
        description: 'menufold组件的参数对象',
        values: [],
        default: ''
      }
    ];

    const events = [
      {
        name: 'logo-click',
        description: '系统logo点击时间',
        parameters: '',
        paramsDesc: ''
      },
      {
        name: 'logout',
        description: '系统退出',
        parameters: '',
        paramsDesc: ''
      },
      {
        name: 'help',
        description: '帮助',
        parameters: '',
        paramsDesc: ''
      }
    ];

    const slots = [
      {
        name: 'pre-util',
        description: '右侧工具前插槽区域'
      },
      {
        name: 'aft-util',
        description: '右侧工具后插槽区域'
      }
    ];

    super(
      'cx-home-stair-fold',
      '厂字形 系统首页',
      props,
      events,
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new HomeStairFoldDocument(); 