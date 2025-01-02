import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class CmdCloseDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'disabled-close',
        type: 'Boolean',
        description: '是否禁止 Close 按钮',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'cancel-click',
        description: '点击 Close 按钮',
        parameters: 'function()'
      }
    ];

    super(
      'cx-cmd-close',
      '命令-Close',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new CmdCloseDocument(); 