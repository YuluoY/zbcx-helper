/** 列配置 */
interface Column {
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
  /** 文本是否可编辑 */
  isEdit?: boolean;
  /** checkbox是否可编辑 */
  isCheckBox?: boolean;
  /** Switch是否可编辑 */
  isSwitch?: boolean;
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
  /** 组件 */
  component?: any;
  /** params.format格式化命名，params.visual可视化命名 */
  params?: {
    format?: string;
    visual?: string;
  };
  /** elements/table组件的Table-column属性对象 */
  elAtts?: Record<string, any>;
}

/** 操作列配置 */
interface OperColumn {
  /** 列名 */
  colname: string;
  /** 列标题行显示 */
  title: string;
  /** 操作按钮 */
  btns: any[];
  /** 列宽，不传时自动均分 */
  width?: string | number;
  /** 最大显示操作按钮的数量 */
  max?: number;
  /** 列对齐方式 */
  align?: 'left' | 'center' | 'right';
}

/** 表格配置 */
interface GridTableCfg {
  /** 数据 */
  list: any[];
  /** 列配置 */
  cols: Column[];
  /** 操作列，空时不显示操作列 */
  operCols?: OperColumn[];
  /** 操作列固定位置，操作列显示时才生效 */
  operFix?: 'left' | 'right';
  /** 多选 */
  multiple?: boolean;
  /** 是否可选，multiple=true下才生效 */
  selectable?: (row: any, index: number) => boolean;
  /** 是否双击单元格激活编辑 */
  dbClickEdit?: boolean;
  /** 点击某一行时会触发 select 选择事件 */
  selectOnClick?: boolean;
  /** 是否按宽度自适应 */
  fitWidth?: boolean;
  /** 是否可以添加数据 */
  addable?: boolean;
  /** 如果可以添加新行事，添加新行 */
  addNewRow?: (row: any) => void;
  /** 数据过滤函数 */
  filter?: () => void;
  /** 回调函数-下拉菜单展开之前 */
  beforeDDVisible?: () => void;
  /** elements/table 组件的属性对象 */
  elAtts?: Record<string, any>;
  /** elements/table 组件的事件对象 */
  elEvts?: Record<string, any>;
}

export interface GridTableProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 数据传递 */
  table: GridTableCfg;
  /** 没有序号列 */
  noIndex?: boolean;
  /** 序号列，elements/table组件的Table-column属性对象 */
  indexElAtts?: Record<string, any>;
  /** 序号的构造函数，返回序号值；noIndex=true时生效 */
  indexFunc?: () => number;
} 