import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class VerifiCodeDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'currentCaptchaId',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'currentCaptchaConfig',
        type: 'String',
        description: '密码规则',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'vaild',
        description: '校验',
        parameters: '(param) param数据项'
      }
    ];

    super(
      'cx-verifi-code',
      '验证码',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new VerifiCodeDocument(); 