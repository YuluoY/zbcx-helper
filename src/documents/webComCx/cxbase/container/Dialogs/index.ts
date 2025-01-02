import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DialogsDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'plugName',
        type: 'String',
        description: '所属插件名，IPlugBase 中定义了 plugName 变量'
      }
    ];

    super(
      'cx-dialogs',
      '对话框插件容器',
      props,
      [],
      [],
      __filename
    );
  }
}

export default new DialogsDocument();