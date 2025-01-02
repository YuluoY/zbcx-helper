import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class CmdOkCloseDocument extends AttDocument {
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
        name: 'disabled-ok',
        type: 'Boolean',
        description: '是否禁止 - Ok 按钮',
        values: [],
        default: 'false'
      },
      {
        name: 'disabled-close',
        type: 'Boolean',
        description: '是否禁止 - Close 按钮',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'ok-click',
        description: '点击 Ok 按钮',
        parameters: 'function()'
      },
      {
        name: 'cancel-click',
        description: '点击 Close 按钮',
        parameters: 'function()'
      }
    ];

    super(
      'cx-cmd-ok-close',
      '命令-Ok/Close',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new CmdOkCloseDocument(); 