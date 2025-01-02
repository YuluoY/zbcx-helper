import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ForgotPwdDocument extends AttDocument {
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
        name: 'success',
        description: '忘记密码成功回调',
        parameters: '(form)'
      }
    ];

    super(
      'cx-forgot-pwd',
      '忘记密码组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new ForgotPwdDocument(); 