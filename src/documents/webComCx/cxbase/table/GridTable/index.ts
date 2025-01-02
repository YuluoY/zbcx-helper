import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, MethodDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class GridTableDocument extends AttDocument {
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
        name: 'indexElAtts',
        type: 'Object',
        description: '序号列，elements/table组件的Table-column属性对象',
        values: [],
        default: '{}'
      },
      {
        name: 'indexFunc',
        type: 'Function',
        description: '序号的构造函数，返回序号值；noIndex=true时生效',
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
        name: 'selection-change',
        description: '选择发生变化',
        parameters: '(selection) - row 该行数据对象'
      },
      {
        name: 'sort-change',
        description: '排序发生变化',
        parameters: '({ column, prop, order }) - olumn 点击的列'
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
        name: 'change-select',
        description: '下拉选中值发生变化时触发',
        parameters: '(scop) - scop 数据对象'
      },
      {
        name: 'change-check',
        description: 'check选中值发生变化时触发',
        parameters: '(scop) - scop 数据对象'
      },
      {
        name: 'change-switch',
        description: 'switch选中值发生变化时触发',
        parameters: '(scop) - scop 数据对象'
      },
      {
        name: 'visible-change',
        description: '下拉框出现/隐藏时触发',
        parameters: '(scop) - scop 是否可见'
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'getElTable',
        description: '获取table对象',
        parameters: '',
        returns: ''
      },
      {
        name: 'handleEdit',
        description: '编辑处理',
        parameters: '(scope, isDbClick) - scope:编辑对象，isDbClick:点击状态',
        returns: ''
      },
      {
        name: 'keyRight',
        description: '消息响应函数-Right 弹起',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      },
      {
        name: 'keyLeft',
        description: '消息响应函数- Left 弹起',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      },
      {
        name: 'keyUp',
        description: '消息响应函数-Up 弹起',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      },
      {
        name: 'keyDown',
        description: '消息响应函数-Down 弹起',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      },
      {
        name: 'keyTab',
        description: '消息响应函数-Tab 弹起',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      },
      {
        name: 'focus',
        description: '设置编辑焦点',
        parameters: '(event, scope) - sevent:事件信息，scope:单元格相关信息',
        returns: ''
      }
    ];

    super(
      'cx-grid-table',
      '网格表',
      props,
      events,
      methods,
      __filename
    );
  }
}

export default new GridTableDocument(); 