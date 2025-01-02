import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class BindFormDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'type',
        type: 'Number',
        description: '尺寸',
        values: ['cx.consts.LOGIN_MAIL', 'cx.consts.LOGIN_CELL'],
        default: ''
      },
      {
        name: 'bindAtt',
        type: 'Object',
        description: '绑定参数',
        values: [],
        default: '{}'
      },
      {
        name: 'sendCode',
        type: 'Function',
        description: '发送验证码函数',
        values: [],
        default: ''
      },
      {
        name: 'getRules',
        type: 'Function',
        description: '获取规则校验函数',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'on-sucess',
        description: '绑定/解绑成功回调',
        parameters: '(ret)'
      }
    ];

    super(
      'cx-bind-form',
      '账号绑定表单组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new BindFormDocument(); 