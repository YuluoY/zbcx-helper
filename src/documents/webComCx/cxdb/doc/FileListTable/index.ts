import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FileListTableDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'files',
        type: 'Array',
        description: '文件列表（文件系统）',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'String',
        description: '配置插件名（cx_cmdtool 的 node）,多个用逗号分隔',
        values: [],
        default: 'File'
      },
      {
        name: 'auth',
        type: 'AuthFile',
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
        name: 'exp-values',
        type: 'String / cx.dc.IDcValuesBase',
        description: '条件计算对象',
        values: [],
        default: 'cx.dc.FileValues'
      }
    ];

    const events = [
      {
        name: 'row-click',
        description: '点击行',
        parameters: '(row: any, column: any, event: any) => void',
        paramsDesc: 'row 该行数据对象, column 点击的列'
      },
      {
        name: 'selection-change',
        description: '选择发生变化',
        parameters: '(selection: any[]) => void',
        paramsDesc: 'row 该行数据对象'
      },
      {
        name: 'sort-change',
        description: '排序发生变化',
        parameters: '({ column, prop, order }: { column: any; prop: string; order: string }) => void',
        paramsDesc: 'column 点击的列'
      },
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected: any) => void',
        paramsDesc: '当前选择项'
      }
    ];

    super(
      'cx-file-list-table',
      '文件数据表',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new FileListTableDocument(); 