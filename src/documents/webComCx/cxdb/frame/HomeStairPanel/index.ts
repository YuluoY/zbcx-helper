import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class HomeStairPanelDocument extends AttDocument {
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
        default: 'cx-sysnav-stair'
      },
      {
        name: 'menus',
        type: 'Array',
        description: '菜单数据对象，结构见 menufold',
        values: [],
        default: ''
      },
      {
        name: 'attMenuPanel',
        type: 'Object',
        description: 'menuspanel组件的参数对象',
        values: [],
        default: ''
      },
      {
        name: 'maxRunNum',
        type: 'Number',
        description: '最多在运行状态插件数,超出按队列销毁',
        values: [],
        default: '3'
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
      'cx-home-stair-panel',
      '面板菜单 系统首页',
      props,
      events,
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new HomeStairPanelDocument(); 