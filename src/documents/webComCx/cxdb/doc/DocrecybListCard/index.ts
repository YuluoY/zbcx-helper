import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocrecybListCardDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['small', 'default', 'large'],
        default: 'default'
      },
      {
        name: 'files',
        type: 'Array',
        description: '文件信息列表（cx_docrecyb）',
        values: [],
        default: ''
      },
      {
        name: 'card-com',
        type: 'String',
        description: '文档卡片组件名',
        values: [],
        default: 'cx-docrecyb-card'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected) 当前选择项'
      }
    ];

    super(
      'cx-docrecyb-list-card',
      '文档回收站卡片列表组件',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new DocrecybListCardDocument(); 