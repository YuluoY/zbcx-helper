/** 列配置 */
interface ColCfg {
  /** 列字段名 */
  colname: string;
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
  /** 列标题 */
  title: string;
  /** 是否可见 */
  visible?: number;
  /** 列宽度 */
  width?: string | number;
  /** 是否固定列 */
  fixed?: boolean | 'left' | 'right';
  /** 自定义渲染函数 */
  render?: (row: any, column: any, cellValue: any, index: number) => any;
}

/** 表格配置 */
interface TableCfg {
  /** 数据列表 */
  list: any[];
  /** 列配置 */
  cols: ColCfg[];
  /** 是否显示边框 */
  border?: boolean;
  /** 是否显示斑马纹 */
  stripe?: boolean;
  /** 是否高亮当前行 */
  highlightCurrentRow?: boolean;
  /** 表格高度 */
  height?: string | number;
  /** 表格最大高度 */
  maxHeight?: string | number;
}

/** 分页配置 */
interface PageCfg {
  /** 总条数 */
  total: number;
  /** 每页条数 */
  pageSize: number;
  /** 每页条数选项 */
  pageSizes: number[];
  /** 分页布局 */
  layout?: string;
  /** 当前页码 */
  currentPage?: number;
}

/** 数据网格配置 */
interface DataGridCfg {
  /** 表格对象，详情见cx-grid-table */
  table: TableCfg;
  /** 是否分页 */
  pages?: boolean;
  /** 分页对象，详情见cx-grid-page */
  page?: PageCfg;
}

export interface DataGridProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 数据传递 */
  datagrid: DataGridCfg;
  /** 没有序号列 */
  noIndex?: boolean;
  /** 是否连续序号，false时各页从1开始，true是各页连续编号。noIndex=true时生效 */
  idxSerial?: boolean;
  /** 右边键插件 */
  rmenus?: any[];
} 