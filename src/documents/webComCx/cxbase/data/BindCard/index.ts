import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class BindCardDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'item',
        type: 'Object',
        description: '账户安全数组子项',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'on-bind',
        description: '绑定事件',
        parameters: '(item)'
      },
      {
        name: 'un-bind',
        description: '解除绑定事件',
        parameters: '(item)'
      }
    ];

    super(
      'cx-bind-card',
      '账号绑定子组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new BindCardDocument(); 