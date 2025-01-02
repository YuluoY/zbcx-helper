import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataListDocument extends AttDocument {
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
        name: 'table',
        type: 'GridTableCfg',
        description: '必填属性，加粗显示',
        values: [],
        default: '{}'
      },
      {
        name: 'noIndex',
        type: 'Boolean',
        description: '没有序号列',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-click',
        description: '点击行',
        parameters: '(row, column, event)'
      },
      {
        name: 'row-dblclick',
        description: '双击行',
        parameters: '(row, column, event)'
      },
      {
        name: 'cell-click',
        description: '点击单元格',
        parameters: '(row, column, cell, event)'
      },
      {
        name: 'header-click',
        description: '点击头',
        parameters: '(column, event)'
      },
      {
        name: 'current-change',
        description: '点击行发生变化',
        parameters: '(currentRow, oldCurrentRow)'
      },
      {
        name: 'selection-change',
        description: '选择发生变化',
        parameters: '(selection)'
      },
      {
        name: 'sort-change',
        description: '排序发生变化',
        parameters: '({ column, prop, order })'
      },
      {
        name: 'cell-mouse-enter',
        description: '鼠标进入',
        parameters: '(row, column, cell, event)'
      },
      {
        name: 'cell-mouse-leave',
        description: '鼠标离开',
        parameters: '(row, column, cell, event)'
      },
      {
        name: 'button-click',
        description: '按下按钮',
        parameters: '(btn, row)'
      },
      {
        name: 'edit-row',
        description: '编辑行切换',
        parameters: '(oldRowIndex, newRowIndex)'
      },
      {
        name: 'key-enter',
        description: '按下回车',
        parameters: '(event, scope)'
      },
      {
        name: 'load-more',
        description: '加载更多',
        parameters: '(context)'
      },
      {
        name: 'row-contextmenu',
        description: '行右边键',
        parameters: '(row, column, event)'
      },
      {
        name: 'pagesize-change',
        description: '每页数据量发生变化',
        parameters: '(pagesize)'
      },
      {
        name: 'page-change',
        description: '当前页发生变化',
        parameters: '(currentPage)'
      }
    ];

    super(
      'cx-data-list',
      '数据列表组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new DataListDocument(); 