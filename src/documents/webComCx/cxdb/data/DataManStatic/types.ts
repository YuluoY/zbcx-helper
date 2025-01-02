/** 字段配置 */
interface FieldConfig {
  /** 列名 */
  colname: string;
  /** 中文名称 */
  namec: string;
  /** 查询级别 */
  qrylevel?: number;
}

/** 数据管理组件参数 */
interface DataManParams {
  /** 是否显示查询条件 */
  showExp?: boolean;
}

/** 静态数据管理组件Props */
interface DataManStaticProps {
  /** 自定义字段配置集合 */
  flds: FieldConfig[];
  /** 静态数据集合 */
  data: any[];
  /** 自定义数据过滤钩子函数，会在每次数据更新时调用（初始化、翻页等） */
  filterData?: (data: any[]) => any[];
  /** 是否开始表格自动滚动 */
  autoScroll?: boolean;
  /** 自动滚动的速度，默认为1，即每秒10像素 */
  speed?: number;
  /** cx-tabs组件可接收的参数对象 */
  param?: DataManParams;
  /** cx-tabs组件可接收的事件监听对象 */
  listeners?: Record<string, Function>;
} 