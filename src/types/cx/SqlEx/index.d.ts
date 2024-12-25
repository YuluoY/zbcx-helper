declare namespace cx {
  /**
   * SQL表达式类
   * 提供了一系列用于构建和操作SQL表达式的方法
   */
  class SqlEx {
    /**
     * 创建 SqlEx 实例
     * @example
     * ```ts
     * const sqlEx = new cx.SqlEx();
     * ```
     */
    constructor();

    /**
     * 增加SQL列条件对象
     * @param sqlCon SQL列条件对象，格式: SqlEx 或 SqlColEx 或 [列,操作符,值,连接符]
     * @example
     * ```ts
     * const sqlEx = new cx.SqlEx();
     * sqlEx.add(['column', '=', 'value']);
     * 
     * const sqlColEx = new cx.SqlColEx('column', '=', 'value');
     * sqlEx.add(sqlColEx);
     * ```
     */
    add(sqlCon: SqlEx | SqlColEx | [string, string, any, string?]): void;

    /**
     * 通过数据构造SQL条件表达式
     * @param sqlCons SQL条件，格式: [[列,操作符,值,连接符], ...]
     * @param orderby 排序信息
     * @example
     * ```ts
     * const sqlEx = new cx.SqlEx();
     * sqlEx.from([
     *   ['column1', '=', 'value1'],
     *   ['column2', '>', 'value2', 'AND']
     * ], 'column1 ASC');
     * ```
     */
    from(sqlCons: Array<[string, string, any, string?]>, orderby?: string): void;

    /**
     * 判断条件是否为空
     * @returns 判断结果，true表示条件为空
     * @example
     * ```ts
     * const sqlEx = new cx.SqlEx();
     * const isEmpty = sqlEx.isExpEmpty();
     * ```
     */
    isExpEmpty(): boolean;

    /**
     * 是否为SQL表达式元素
     * @param sqlCons 元子表达式，格式: [列, 操作符, 值, 连接符]
     * @returns 判断结果
     * @example
     * ```ts
     * const isCons = cx.SqlEx.isSqlCons(['column', '=', 'value']);
     * ```
     */
    static isSqlCons(sqlCons: [string, string, any, string?]): boolean;
  }
} 

/**
   * SQL列条件表达式类
   */
class SqlColEx {
  /**
   * 创建 SqlColEx 实例
   * @param column 列名
   * @param operator 操作符
   * @param value 值
   * @param connector 连接符
   */
  constructor(column: string, operator: string, value: any, connector?: string);
}