import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class CmdbarDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      }
    ];

    super(
      'cx-cmdbar',
      '命令条',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new CmdbarDocument(); 