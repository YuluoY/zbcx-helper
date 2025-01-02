import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class CmdOkCancelDocument extends AttDocument {
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
        name: 'disabled-cancel',
        type: 'Boolean',
        description: '是否禁止 - Cancel 按钮',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'ok-click',
        description: '点击 Ok 按钮',
        parameters: 'Function()'
      },
      {
        name: 'cancel-click',
        description: '点击 Cancel 按钮',
        parameters: 'Function()'
      }
    ];

    super(
      'cx-cmd-ok-cancel',
      '命令-Ok/Cancel',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new CmdOkCancelDocument(); 