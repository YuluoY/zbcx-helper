import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class CmdSaveDocument extends AttDocument {
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
        name: 'disabled-save',
        type: 'Boolean',
        description: '是否禁止 Save 按钮',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'ok-click',
        description: '点击 Save 按钮',
        parameters: 'function()'
      }
    ];

    super(
      'cx-cmd-save',
      '命令-Save',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new CmdSaveDocument(); 