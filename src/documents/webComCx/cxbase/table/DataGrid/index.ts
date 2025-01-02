import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc, MethodDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataGridDocument extends AttDocument {
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
        name: 'datagrid',
        type: 'DataGridCfg',
        description: '数据传递',
        values: [],
        default: ''
      },
      {
        name: 'noIndex',
        type: 'Boolean',
        description: '没有序号列',
        values: [],
        default: 'false'
      },
      {
        name: 'idxSerial',
        type: 'Boolean',
        description: '是否连续序号，false时各页从1开始，true是各页连续编号。noIndex=true时生效',
        values: [],
        default: 'false'
      },
      {
        name: 'rmenus',
        type: 'Array',
        description: '右边键插件',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-click',
        description: '点击行',
        parameters: '(row, column, event) - row 该行数据对象, column 点击的列'
      },
      {
        name: 'row-dblclick',
        description: '双击行',
        parameters: '(row, column, event) - row 该行数据对象, column 点击的列'
      },
      {
        name: 'cell-click',
        description: '点击单元格',
        parameters: '(row, column, cell, event) - row 该行数据对象, column 点击的列, cell 点击的单元格'
      },
      {
        name: 'header-click',
        description: '点击头',
        parameters: '(column, event) - column 点击的列'
      },
      {
        name: 'current-change',
        description: '点击行发生变化',
        parameters: '(currentRow, oldCurrentRow) - currentRow 当前行, oldCurrentRow 旧行'
      },
      {
        name: 'selection-change',
        description: '选择发生变化',
        parameters: '(selection) - row 该行数据对象'
      },
      {
        name: 'sort-change',
        description: '排序发生变化',
        parameters: '(prop, order, column) - order 排序 ASC/DESC, olumn 点击的列'
      },
      {
        name: 'cell-mouse-enter',
        description: '鼠标进入',
        parameters: '(row, column, cell, event) - row 该行数据对象, column 点击的列, cell 点击的单元格'
      },
      {
        name: 'cell-mouse-leave',
        description: '鼠标离开',
        parameters: '(row, column, cell, event) - row 该行数据对象, column 点击的列, cell 点击的单元格'
      },
      {
        name: 'plugin-click',
        description: '点击插件',
        parameters: '(plug, row) - row 该行数据对象'
      },
      {
        name: 'edit-row',
        description: '编辑行切换',
        parameters: '(oldRowIndex, newRowIndex) - oldRowIndex 原始索引, newRowIndex 新的索引'
      },
      {
        name: 'key-enter',
        description: '按下回车',
        parameters: '(event, scope) - scope 数据对象'
      },
      {
        name: 'load-more',
        description: '加载更多',
        parameters: '(context) - context 组件 gridtable 对象'
      },
      {
        name: 'row-contextmenu',
        description: '行右边键',
        parameters: '(row, column, event) - row 该行数据对象, column 点击的列'
      },
      {
        name: 'pagesize-change',
        description: '每页数据量发生变化',
        parameters: '(pagesize) - pagesize 每页显示数据量'
      },
      {
        name: 'page-change',
        description: '当前页发生变化',
        parameters: '(currentPage) - currentPage 当前页码'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分',
        props: []
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'getTable',
        description: '取表格对象(cx-grid-table)',
        parameters: '',
        returns: 'cx-grid-table'
      },
      {
        name: 'getPage',
        description: '取分页对象(cx-grid-page)',
        parameters: '',
        returns: 'cx-grid-page'
      },
      {
        name: 'getRMenu',
        description: '取右边键对象',
        parameters: '',
        returns: 'cx-r-menu'
      }
    ];

    super(
      'cx-data-grid',
      '数据网格',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
}

export default new DataGridDocument(); 