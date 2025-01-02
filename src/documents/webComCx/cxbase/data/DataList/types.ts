export interface Column {
  /** 列名 */
  colname: string;
  /** 列标题行显示 */
  title: string;
  /** 显示顺序 >0 才显示 */
  disporder?: number;
  /** 列对齐方式，空时 el-table-column 默认 left */
  align?: 'left' | 'center' | 'right';
  /** 列宽，不传时自动均分 */
  width?: string | number;
  /** 是否排序 */
  sortable?: boolean;
  /** 超出部分是否提示 */
  overflowTooltip?: boolean;
  /** 是否可编辑 */
  isEdit?: boolean;
  /** 是否下拉选择 */
  isSelect?: boolean;
  /** 是否级联选择 */
  isCascader?: boolean;
  /** 下拉选项,用于 isSelect,isCascader, ({value, label}) */
  selOptions?: Array<{ value: any; label: string }>;
  /** 是否日期选择器 */
  isDate?: boolean;
  /** 日期格式 */
  dateFormat?: string;
  /** 是否日期时间选择器 */
  isDateTime?: boolean;
  /** 日期时间格式 */
  dateTimeFormat?: string;
  /** 是否HTML文本 */
  isHtml?: boolean;
  /** 操作按钮 */
  btns?: any[];
  /** params.format格式化命名，params.visual可视化命名 */
  params?: {
    format?: string;
    visual?: string;
  };
}

export interface GridTableCfg {
  /** 数据 */
  list: any[];
  /** 表列,每个对象中的 overflowTooltip 为 true 时，一行显示不完时弹气泡显示；否则换行显示 */
  cols: Column[];
  /** 操作列，空时不显示操作列 */
  operCols?: Column[];
  /** 操作列固定位置，操作列显示时才生效 */
  operFix?: 'left' | 'right';
  /** 是否双击单元格激活编辑 */
  dbClickEdit?: boolean;
  /** 多选 */
  multiple?: boolean;
  /** 点击某一行时会触发 select 选择事件 */
  selectOnClick?: boolean;
  /** 是否按宽度自适应 */
  fitWidth?: boolean;
  /** 是否可以添加数据 */
  addable?: boolean;
  /** 添加新行 - function(row) */
  addNewRow?: (row: any) => void;
  /** elements/table 组件的属性对象 */
  elAtts?: object;
  /** elements/table 组件的属性对象 */
  elEvts?: object;
}

export interface DataListProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 必填属性，加粗显示 */
  table: GridTableCfg;
  /** 没有序号列 */
  noIndex?: boolean;
} 