import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class LoginDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'config',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'forget',
        description: '忘记密码事件',
        parameters: ''
      },
      {
        name: 'login',
        description: '登录事件',
        parameters: '(ret)'
      }
    ];

    super(
      'cx-login',
      '登录组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new LoginDocument(); 