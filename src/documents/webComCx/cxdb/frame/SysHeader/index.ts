import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class SysHeaderDocument extends AttDocument {
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
        name: 'attUserDrop',
        type: 'Object',
        description: '用户下拉cx-user-dropdown组件参数',
        values: [],
        default: ''
      },
      {
        name: 'attUserDrop.filterMenus',
        type: 'Function(items)',
        description: '过滤下拉选项，返回过滤后结果',
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
        name: 'menu',
        description: '嵌入菜单的插槽区域'
      },
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
      'cx-sys-header',
      '系统头部导航',
      props,
      events,
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new SysHeaderDocument(); 