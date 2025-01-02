import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class UserListDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array.<UserData>',
        description: '数据传递',
        values: [],
        default: '[]'
      },
      {
        name: 'addable',
        type: 'Boolean',
        description: '标题',
        values: [],
        default: 'false'
      },
      {
        name: 'isimg',
        type: 'Boolean',
        description: '是否添加图片',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'item-click',
        description: '数据唯一标识',
        parameters: '(user)'
      },
      {
        name: 'item-edit',
        description: '编辑用户',
        parameters: '(user)'
      },
      {
        name: 'item-remove',
        description: '删除用户',
        parameters: '(user)'
      },
      {
        name: 'add',
        description: '增加用户',
        parameters: '(user)'
      }
    ];

    const slots = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-user-list',
      '用户列表组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new UserListDocument(); 