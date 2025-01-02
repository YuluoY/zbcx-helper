import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocListTableDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'files',
        type: 'Array',
        description: '文件列表(cx_media 表)',
        values: [],
        default: ''
      },
      {
        name: 'auth',
        type: 'Object',
        description: '授权信息',
        values: [],
        default: ''
      },
      {
        name: 'multiple',
        type: 'Boolean',
        description: '是否支持多选',
        values: [],
        default: 'false'
      },
      {
        name: 'table-cfg',
        type: 'String',
        description: '表格配置名(cx_tabcfg 的 name)',
        values: [],
        default: 'DocFile'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-click',
        description: '点击行',
        parameters: '(row, column, event) row 该行数据对象, column 点击的列'
      },
      {
        name: 'selection-change',
        description: '选择发生变化',
        parameters: '(selection) row 该行数据对象'
      },
      {
        name: 'sort-change',
        description: '排序发生变化',
        parameters: '({ column, prop, order }) olumn 点击的列'
      },
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected) 当前选择项'
      }
    ];

    super(
      'cx-doc-list-table',
      '文档列表管理组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new DocListTableDocument(); 