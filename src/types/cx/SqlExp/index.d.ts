declare namespace cx {

  type SqlCons = [string, string, any, string?];
  type BraSqlCons = [string, ...SqlCons[]];

  interface FieldInfo {
    /** 字段名 */
    colname: string;
    /** 是否数值 */
    isnum?: string | number;
    /** 字段显示类型 */
    type?: string;
    /** 显示类型 */
    disptype?: string | number;
    /** 字段模式 */
    mode?: string;
    /** range模式的第一个值 */
    value1?: string;
    /** range模式的第二个值 */
    value2?: string;
    /** value模式的值 */
    value?: string;
  }

  /**
   * SQL条件表达式类
   * 提供了一系列用于构建和操作SQL条件表达式的静态方法
   */
  class sqlexp {

    /**
     * 条件文本化，传递服务端筛选格式
     * @param args 元子表达式或括号表达式
     * @example
     * ```ts
     * const simpleText = cx.sqlexp.argsText([
     *   ['age', '>', 10],
     *   ['type', '=', 'A', 'AND']
     * ]);
     * ```
     */
    static argsText(args: Array<SqlCons | BraSqlCons>): string;

    /**
     * 通过数据构造SQL条件表达式
     * @param sqlCons SQL条件，格式: [[列,操作符,值,连接符], ...]
     * @param orderby 排序信息
     * @example
     * ```ts
     * const sqlExp = cx.sqlexp.from([
     *   ['column1', '=', 'value1'],
     *   ['column2', '>', 'value2', 'AND']
     * ], 'column1 ASC');
     * ```
     */
    static from(sqlCons: SqlCons[], orderby?: string): SqlEx;

    /**
     * 根据一个字段、值、SQL操作符获取SQL条件表达式信息
     * @param fld 字段信息
     * @param operator 操作符
     * @param value 值
     * @param conc 连接符
     * @param alias 联合查询的别名
     * @example
     * ```ts
     * const colEx = cx.sqlexp.getColEx({ colname: 'age' }, '>', '30');
     * ```
     */
    static getColEx(fld: { colname: string }, operator: string, value: any, conc?: string, alias?: string): SqlColEx;

    /**
     * 取默认的条件表达式
     * @example
     * ```ts
     * const defExp = cx.sqlexp.getDefExp();
     * ```
     */
    static getDefExp(): SqlEx;

    /**
     * 默认条件表达式(completed=1 ORDER BY id DESC)
     * @example
     * ```ts
     * const completedExp = cx.sqlexp.getExpCompleted();
     * ```
     */
    static getExpCompleted(): SqlEx;

    /**
     * 默认条件表达式(id>0 ORDER BY id DESC)
     * @example
     * ```ts
     * const expDef = cx.sqlexp.getExpDef();
     * ```
     */
    static getExpDef(): SqlEx;

    /**
     * 默认条件表达式(effect!=0 ORDER BY id DESC)
     * @example
     * ```ts
     * const expEffect = cx.sqlexp.getExpEffect();
     * ```
     */
    static getExpEffect(): SqlEx;

    /**
     * 根据ID0生成默认条件表达式
     * @param id0 ID0
     * @example
     * ```ts
     * const expGlid = cx.sqlexp.getExpGlid(123);
     * ```
     */
    static getExpGlid(id0: number): SqlEx;

    /**
     * 生成默认条件表达式(inuse=1)
     * @example
     * ```ts
     * const expInuse = cx.sqlexp.getExpInuse();
     * ```
     */
    static getExpInuse(): SqlEx;

    /**
     * 生成默认条件表达式(completed=0)
     * @example
     * ```ts
     * const expUncompleted = cx.sqlexp.getExpUncompleted();
     * ```
     */
    static getExpUncompleted(): SqlEx;

    /**
     * 根据字段信息生成SQL条件表达式
     * @param result SQL条件表达式
     * @param fld 字段信息
     * @param aliasOpt 联合查询的别名
     * @example
     * ```ts
     * const fldExp = cx.sqlexp.getFldExp(result, fld, 'alias');
     * ```
     */
    static getFldExp(result: SqlEx, fld: FieldInfo, aliasOpt?: string): SqlEx;

    /**
     * 根据字段信息生成更详细的SQL条件表达式
     * @param result SQL条件表达式
     * @param fld 字段信息
     * @param aliasOpt 联合查询的别名
     * @example
     * ```ts
     * const fldExpMore = cx.sqlexp.getFldExpMore(result, fld, 'alias');
     * ```
     */
    static getFldExpMore(result: SqlEx, fld: FieldInfo, aliasOpt?: string): SqlEx;

    /**
     * 根据字段及值获取SQL表达式的值类型
     * @param fld 字段信息
     * @param valueOpt 辅助数量类型判断的值
     * @example
     * ```ts
     * const type = cx.sqlexp.getType(fld, 'value');
     * ```
     */
    static getType(fld: { isnum?: number; disptype?: number }, valueOpt?: string): string;

    /**
     * 合并多个条件，返回合并后的条件
     * @param result SQL条件表达式
     * @param argvs 可变参数, SqlEx 条件对象
     * @example
     * ```ts
     * const mergedExp = cx.sqlexp.merge(result, exp1, exp2);
     * ```
     */
    static merge(result: SqlEx, ...argvs: SqlEx[]): SqlEx;

    /**
     * 根据条件表达式对象生成查询对象
     * @param sqlex 条件对象
     * @param pageSizeOpt 分页大小(如果>0则分页, 否则不分页)
     * @example
     * ```ts
     * const queryObject = cx.sqlexp.queryPara(sqlex, 10);
     * ```
     */
    static queryPara(sqlex: SqlEx, pageSizeOpt?: number): Record<string, any>;

    /**
     * SQL的连接符转义
     * @param sqlCon SQL的连接符, 如 and, or, filter, should, must
     * @example
     * ```ts
     * const concValue = cx.sqlexp.transSqlConc('and');
     * ```
     */
    static transSqlConc(sqlCon: string): number;

    /**
     * 获取SQL表达式元素的转义字符串
     * @param sqlCons 元子表达式
     * @example
     * ```ts
     * const consString = cx.sqlexp.transSqlCons(['id', '>', 0]);
     * ```
     */
    static transSqlCons(sqlCons: SqlCons): string;

    /**
     * SQL操作符转义
     * @param sqlOper SQL的操作符, 如 =, !=, >, <, like, in, is null, is not null 等
     * @example
     * ```ts
     * const operValue = cx.sqlexp.transSqlOper('=');
     * ```
     */
    static transSqlOper(sqlOper: string): number;
  }
} 