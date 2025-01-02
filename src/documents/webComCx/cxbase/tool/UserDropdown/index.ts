import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class UserDropdownDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI规格',
        values: [],
        default: 'default'
      },
      {
        name: 'username',
        type: 'String',
        description: '显示的用户名称,不传时会取$g.user.name',
        values: [],
        default: ''
      },
      {
        name: 'filterMenu',
        type: 'Function',
        description: '自定义过滤菜单数组的函数 - Function(menus)',
        values: [],
        default: ''
      },
      {
        name: 'trigger',
        type: 'String',
        description: '下拉菜单触发的方式，默认为click',
        values: [],
        default: 'click'
      },
      {
        name: 'childPlacement',
        type: 'String',
        description: '子菜单显示位置',
        values: [],
        default: 'left'
      },
      {
        name: 'highStyle',
        type: 'String',
        description: '子菜单选中状态样式',
        values: [],
        default: 'background: var(--cx-color-text-active);color:var(--cx-color-light-8)'
      },
      {
        name: 'extraMenus',
        type: 'Array.<MenusItem>',
        description: '自定义菜单组',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'show-userinfo',
        description: '显示用户个人信息',
        parameters: 'Function(this)'
      },
      {
        name: 'sys-config',
        description: '打开系统设置',
        parameters: 'Function(this)'
      },
      {
        name: 'pswEdit',
        description: '修改密码',
        parameters: 'Function(this)'
      },
      {
        name: 'help',
        description: '帮助',
        parameters: 'Function(this)'
      },
      {
        name: 'exit',
        description: '退出登录',
        parameters: 'Function(this)'
      },
      {
        name: 'locale-change',
        description: '语言发生切换',
        parameters: 'Function(locale,this)'
      },
      {
        name: 'theme-change',
        description: '主题发生切换',
        parameters: 'Function(theme,this)'
      },
      {
        name: 'size-change',
        description: '全局尺寸发生切换',
        parameters: 'Function(size,this)'
      }
    ];

    super(
      'cx-user-dropdown',
      '用户自定义快捷菜单',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new UserDropdownDocument(); 