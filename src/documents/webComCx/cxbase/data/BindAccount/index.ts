import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class BindAccountDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'bindVals',
        type: 'Array.<BindVal>',
        description: '绑定参数',
        values: [],
        default: '[]'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'on-sucess',
        description: '绑定or解绑成功回调',
        parameters: '(ret)'
      }
    ];

    super(
      'cx-bind-account',
      '账号绑定组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new BindAccountDocument(); 