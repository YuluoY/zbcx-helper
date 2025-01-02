import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocrecybListTableDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'files',
        type: 'Array',
        description: '文件列表(cx_docrecyb 表)',
        values: [],
        default: ''
      },
      {
        name: 'table-cfg',
        type: 'String',
        description: '表格配置名(cx_tabcfg 的 name)',
        values: [],
        default: 'DocRecyb'
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
      'cx-docrecyb-list-table',
      '文档回收站数据表组件',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new DocrecybListTableDocument(); 