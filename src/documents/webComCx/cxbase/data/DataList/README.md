# 数据列表

`cx-data-list` 由 `cx-grid-table` 实现列表形式展示数据。

## 基础用法

使用 `table` 属性配置表格数据和列信息，可以通过 `size` 控制尺寸，`noIndex` 控制是否显示序号列。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **table** | 必填属性，加粗显示 | GridTableCfg | | |
| noIndex | 没有序号列 | Boolean | true / false | false |

## GridTableCfg

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----------------| ----- | ----- |
| list | 数据 | Array | | |
| cols | 表列,每个对象中的 overflowTooltip 为 true 时，一行显示不完时弹气泡显示；否则换行显示 | Array.<Column> | | |
| operCols | 操作列，空时不显示操作列 | Array.<Column> | | |
| operFix | 操作列固定位置，操作列显示时才生效 | String | left / right | right |
| dbClickEdit | 是否双击单元格激活编辑 | Boolean | true / false | false |
| multiple | 多选 | Boolean | true / false | false |
| selectOnClick | 点击某一行时会触发 select 选择事件 | Boolean | true / false | true |
| fitWidth | 是否按宽度自适应 | Boolean | true / false | false |
| addable | 是否可以添加数据 | Boolean | true / false | false |
| addNewRow | 添加新行 - function(row) | Function | | |
| elAtts | elements/table 组件的属性对象 | Object | | |
| elEvts | elements/table 组件的属性对象 | Object | | |

## Column 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **colname** | 列名 | String | | |
| **title** | 列标题行显示 | String | | |
| disporder | 显示顺序 >0 才显示 | Number | | |
| align | 列对齐方式，空时 el-table-column 默认 left | String | left / center / right | left |
| width | 列宽，不传时自动均分 | String / Number | | |
| sortable | 是否排序 | Boolean | true / false | false |
| overflowTooltip | 超出部分是否提示 | Boolean | true / false | false |
| isEdit | 是否可编辑 | Boolean | true / false | false |
| isSelect | 是否下拉选择 | Boolean | true / false | false |
| isCascader | 是否级联选择 | Boolean | true / false | false |
| selOptions | 下拉选项,用于 isSelect,isCascader, ({value, label}) | Array | | |
| isDate | 是否日期选择器 | Boolean | true / false | false |
| dateFormat | 日期格式 | String | | |
| isDateTime | 是否日期时间选择器 | Boolean | true / false | false |
| dateTimeFormat | 日期时间格式 | String | | |
| isHtml | 是否HTML文本 | Boolean | true / false | false |
| btns | 操作按钮 | Array | | |
| params | params.format格式化命名，params.visual可视化命名 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| row-click | 点击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| row-dblclick | 双击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| cell-click | 点击单元格 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| header-click | 点击头 | (column, event) | column 点击的列 |
| current-change | 点击行发生变化 | (currentRow, oldCurrentRow) | currentRow 当前行, oldCurrentRow 旧行 |
| selection-change | 选择发生变化 | (selection) | row 该行数据对象 |
| sort-change | 排序发生变化 | ({ column, prop, order }) | column 点击的列 |
| cell-mouse-enter | 鼠标进入 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| cell-mouse-leave | 鼠标离开 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| button-click | 按下按钮 | (btn, row) | row 该行数据对象 |
| edit-row | 编辑行切换 | (oldRowIndex, newRowIndex) | oldRowIndex 原始索引, newRowIndex 新的索引 |
| key-enter | 按下回车 | (event, scope) | scope 数据对象 |
| load-more | 加载更多 | (context) | context 组件 gridtable 对象 |
| row-contextmenu | 行右边键 | (row, column, event) | row 该行数据对象, column 点击的列 |
| pagesize-change | 每页数据量发生变化 | (pagesize) | row 该行数据对象, column 点击的列 |
| page-change | 当前页发生变化 | (currentPage) | row 该行数据对象, column 点击的列 |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 组件尺寸类型 */
type ComponentSize = 'large' | 'default' | 'small';

/** 对齐方式类型 */
type AlignType = 'left' | 'center' | 'right';

/** 固定位置类型 */
type FixedType = 'left' | 'right';

/** 排序方向类型 */
type SortOrder = 'ascending' | 'descending' | null;

/** 按钮类型 */
type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';

/** 选项接口 */
interface SelectOption {
  /** 选项值 */
  value: string | number;
  /** 选项标签 */
  label: string;
  /** 子选项，用于级联选择 */
  children?: SelectOption[];
  /** 是否禁用 */
  disabled?: boolean;
}

/** 按钮配置接口 */
interface ButtonConfig {
  /** 按钮文本 */
  text: string;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮图标 */
  icon?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮大小 */
  size?: ComponentSize;
  /** 是否显示 */
  show?: boolean | ((row: any) => boolean);
}

/** 列参数接口 */
interface ColumnParams {
  /** 格式化函数名 */
  format?: string;
  /** 可视化函数名 */
  visual?: string;
}

/** 列配置接口 */
interface Column {
  /** 列名 */
  colname: string;
  /** 列标题 */
  title: string;
  /** 显示顺序 */
  disporder?: number;
  /** 对齐方式 */
  align?: AlignType;
  /** 列宽 */
  width?: string | number;
  /** 是否可排序 */
  sortable?: boolean;
  /** 是否显示提示 */
  overflowTooltip?: boolean;
  /** 是否可编辑 */
  isEdit?: boolean;
  /** 是否下拉选择 */
  isSelect?: boolean;
  /** 是否级联选择 */
  isCascader?: boolean;
  /** 选择选项 */
  selOptions?: SelectOption[];
  /** 是否日期选择 */
  isDate?: boolean;
  /** 日期格式 */
  dateFormat?: string;
  /** 是否日期时间选择 */
  isDateTime?: boolean;
  /** 日期时间格式 */
  dateTimeFormat?: string;
  /** 是否HTML文本 */
  isHtml?: boolean;
  /** 操作按钮 */
  btns?: ButtonConfig[];
  /** 列参数 */
  params?: ColumnParams;
  /** 是否固定列 */
  fixed?: boolean | FixedType;
  /** 列的最小宽度 */
  minWidth?: string | number;
  /** 对应列是否可以通过拖动改变宽度 */
  resizable?: boolean;
  /** 当内容过长被隐藏时显示 tooltip */
  showOverflowTooltip?: boolean;
  /** 列的 className */
  className?: string;
  /** 列的样式 */
  style?: Record<string, string | number>;
}

/** 表格配置接口 */
interface GridTableConfig {
  /** 数据列表 */
  list: any[];
  /** 列配置 */
  cols: Column[];
  /** 操作列配置 */
  operCols?: Column[];
  /** 操作列固定位置 */
  operFix?: FixedType;
  /** 是否双击编辑 */
  dbClickEdit?: boolean;
  /** 是否多选 */
  multiple?: boolean;
  /** 是否点击选择 */
  selectOnClick?: boolean;
  /** 是否宽度自适应 */
  fitWidth?: boolean;
  /** 是否可添加数据 */
  addable?: boolean;
  /** 添加新行函数 */
  addNewRow?: (row: any) => void;
  /** Element Table 属性 */
  elAtts?: Record<string, any>;
  /** Element Table 事件 */
  elEvts?: Record<string, Function>;
}

/** 数据列表组件属性接口 */
interface DataListProps {
  /** 组件尺寸 */
  size?: ComponentSize;
  /** 表格配置 */
  table: GridTableConfig;
  /** 是否显示序号列 */
  noIndex?: boolean;
}

/** 行事件参数接口 */
interface RowEventParams {
  /** 行数据 */
  row: any;
  /** 列配置 */
  column: Column;
  /** 事件对象 */
  event: Event;
}

/** 单元格事件参数接口 */
interface CellEventParams extends RowEventParams {
  /** 单元格元素 */
  cell: HTMLElement;
}

/** 排序变更参数接口 */
interface SortChangeParams {
  /** 列配置 */
  column: Column;
  /** 排序属性 */
  prop: string;
  /** 排序方向 */
  order: SortOrder;
}

/** 编辑行切换参数接口 */
interface EditRowParams {
  /** 原行索引 */
  oldRowIndex: number;
  /** 新行索引 */
  newRowIndex: number;
}

/** 按钮点击参数接口 */
interface ButtonClickParams {
  /** 按钮配置 */
  btn: ButtonConfig;
  /** 行数据 */
  row: any;
}

/** 组件事件处理器接口 */
interface ComponentHandlers {
  /** 行点击事件 */
  onRowClick?: (params: RowEventParams) => void;
  /** 行双击事件 */
  onRowDblclick?: (params: RowEventParams) => void;
  /** 单元格点击事件 */
  onCellClick?: (params: CellEventParams) => void;
  /** 表头点击事件 */
  onHeaderClick?: (column: Column, event: Event) => void;
  /** 当前行变化事件 */
  onCurrentChange?: (currentRow: any, oldCurrentRow: any) => void;
  /** 选择变化事件 */
  onSelectionChange?: (selection: any[]) => void;
  /** 排序变化事件 */
  onSortChange?: (params: SortChangeParams) => void;
  /** 单元格鼠标进入事件 */
  onCellMouseEnter?: (params: CellEventParams) => void;
  /** 单元格鼠标离开事件 */
  onCellMouseLeave?: (params: CellEventParams) => void;
  /** 按钮点击事件 */
  onButtonClick?: (params: ButtonClickParams) => void;
  /** 编辑行切换事件 */
  onEditRow?: (params: EditRowParams) => void;
  /** 回车按键事件 */
  onKeyEnter?: (event: KeyboardEvent, scope: any) => void;
  /** 加载更多事件 */
  onLoadMore?: (context: any) => void;
  /** 行右键菜单事件 */
  onRowContextmenu?: (params: RowEventParams) => void;
  /** 每页数量变化事件 */
  onPagesizeChange?: (pageSize: number) => void;
  /** 当前页变化事件 */
  onPageChange?: (currentPage: number) => void;
}
```
