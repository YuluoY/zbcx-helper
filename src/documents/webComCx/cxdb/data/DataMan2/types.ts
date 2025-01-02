/** 操作按钮配置 */
interface OperCfg {
  /** 按钮名称 */
  name: string;
  /** 点击事件 */
  onClick?: (context: any) => void;
}

/** 数据管理组件参数 */
interface DataMan2Params {
  /** 实体主类型 */
  major?: number;
  /** 实体子类型 */
  minor?: number;
  /** 配置名称 */
  tabCfgName?: string;
  /** 是否可编辑 */
  editable?: boolean;
  /** 固定条件 */
  fixedExp?: any;
}

/** 数据管理组件Props */
interface DataMan2Props {
  /** 给 IDataMan2 的参数对象，major、minor和tabCfgName 两组参数二选一必传 */
  params: DataMan2Params;
  /** 传递给cx-exp-input组件的参数对象 */
  expParams?: object;
  /** 传递给cx-exp-input组件的事件监听对象 */
  expEvents?: Record<string, Function>;
  /** 传递给cx-data-grid组件的参数对象 */
  dgParams?: object;
  /** 传递给cx-data-grid组件的事件监听对象 */
  dgEvents?: Record<string, Function>;
  /** 是否显示搜索部件 */
  showExp?: boolean;
  /** 是否显示表格字段过滤 */
  showColFilter?: boolean;
  /** 是否显示按钮文本，false时只显示按钮图标 */
  showBtnTitle?: boolean;
  /** 查询行显示按钮的数量，大于时以折叠展示 */
  maxExpOper?: number;
  /** 构造cx-exp-input组件同行显示按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数 */
  makeExpOpers?: (defBtns: OperCfg[], context: any) => OperCfg[];
  /** 构造exp条件字段序列，返回条件对象序列 */
  makeExpFlds?: (defFlds: any[], context: any) => any[];
  /** 查询行下行显示按钮的数量，大于时以折叠展示 */
  maxBarOper?: number;
  /** 构造cx-exp-input组件下独占一行的按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数。序列>1时才显示按钮条 */
  makeBarOpers?: (defBtns: OperCfg[], context: any) => OperCfg[];
  /** 构造table数据行操作列和按钮，返回 opercol 对象序列，每个 opercol.btns是操作按钮 */
  makeTabOpers?: (defBtns: any[], context: any) => any[];
  /** 构造table数据列序列，返回 表列 对象序列 */
  makeTabCols?: (defCols: any[], context: any) => any[];
  /** 添加入库前回调 */
  befAdd?: (att: any, plug: any) => Promise<any>;
  /** 添加入库后回调 */
  aftAdd?: (att: any) => void;
  /** 删除入库前回调 */
  befDel?: (att: any) => Promise<any>;
  /** 删除入库后回调 */
  aftDel?: (att: any) => void;
  /** 修改入库前回调 */
  befUpd?: (att: any) => Promise<any>;
  /** 修改入库后回调 */
  aftUpd?: (att: any) => void;
  /** 查询前回调 */
  befQry?: (queryPara: any, context: any) => void;
  /** 自定义查询，覆盖IDataMan2的runSvr方法，返回Promise和数据结果 */
  qryCust?: (context: any) => Promise<any>;
  /** 查询后原始数据处理 */
  procQryData?: (data: any, context: any) => Promise<any>;
  /** 查询后回调 */
  aftQry?: (context: any) => void;
  /** 模板导出前回调 */
  befTempExport?: (params: any, context: any) => any[];
  /** 导出前回调 */
  befExport?: (params: any, context: any) => void;
  /** 导入前回调 */
  befImport?: (params: any, context: any) => void;
} 