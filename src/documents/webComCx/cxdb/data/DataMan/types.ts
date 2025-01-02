/** SQL配置 */
interface SqlCfg {
  /** sqlexp 表的 name */
  key?: string;
  /** 传递给 sqlexp 的值 */
  vals?: string;
  /** 排序信息 */
  orderby?: string;
}

/** 联合查询参数 */
interface UnionQuery {
  /** 主表别名(例如: "a") */
  mainAlias: string;
}

/** 数据管理组件参数 */
interface DataManParams {
  /** 实体主类型 */
  major: number;
  /** 实体子类型 */
  minor: number;
  /** 要创建的的字段对象序列，没传入该属性时，就是用major和minor对应表的字段数据 */
  flds?: any[];
  /** 是否可编辑 */
  editable?: boolean;
  /** 是否启用属性查询条件输入 */
  useExp?: boolean;
  /** 是否启用属性查询条件输入(More) */
  useExpMore?: boolean;
  /** 没有查询条件显示所有数据 */
  noExpDispAll?: boolean;
  /** 条件输入里面用于输入范围的列列表 */
  expRange?: string[];
  /** 条件输入里面排除的列列表 */
  expExclude?: string[];
  /** 固定条件(任何时候都加上的条件) */
  fixedExp?: any;
  /** 默认条件(有自定义条件之后即删除) */
  defExp?: any;
  /** 联合查询参数 */
  unionQuery?: UnionQuery;
  /** 插入/修改是否返回数据 */
  retAtt?: number;
  /** 是否启用列排序(列名边上的排序箭头，会影响到宽度计算) */
  sortable?: boolean;
  /** 最大列宽（dynaWidth=true时用于计算列宽）*/
  maxColWidth?: number;
  /** 默认字体大小(dynaWidth=true时用于计算列宽) */
  fontSize?: number;
  /** padding值(dynaWidth=true时用于计算列宽) */
  padding?: number;
  /** 动态计算列宽，根据数据内容计算宽度，覆盖字段设置宽度 */
  dynaWidth?: boolean;
  /** 实体对象 */
  entity?: object;
  /** 属性对象 */
  attObj?: any;
  /** 是否初始化完成，尤其attObj是异步创建，必须ready后使用 */
  ready?: boolean;
  /** 条件表达式字段列表 */
  expFlds?: any[];
  /** 条件表达式对象 */
  attExp?: object;
  /** 排序，asc(升序) desc(降序) */
  orderby?: string;
  /** SQL查询参数 */
  queryPara?: object;
  /** 数据 */
  list?: any[];
  /** 操作列表-便于计算各种操作的enable, show */
  opers?: any[];
  /** 当前选中的行 */
  selected?: object;
  /** 复选框选中的全部行 */
  selection?: object[];
  /** SQL 配置 */
  sqlCfg?: SqlCfg;
}

/** 数据管理组件Props */
interface DataManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: DataManParams;
} 