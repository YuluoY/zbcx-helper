declare namespace cx {
  /**
   * 字段规则的集合实现类
   */
  class TabRules {
    /**
     * 创建 TabRules 实例
     * @param rules 配置的字段规则
     * @example
     * ```typescript
     * const tabRules = new cx.TabRules(rules);
     * ```
     */
    constructor(rules: any[]);

    /**
     * 根据表名获取对应的规则列表
     * @param tabname 表名
     * @returns 规则列表
     * @example
     * ```typescript
     * const ruleList = tabRules.getRules('tableName');
     * console.log('规则列表:', ruleList);
     * ```
     */
    getRules(tabname: string): Array<Record<string, any>>;

    /**
     * 根据表名获取对应的表规则对象
     * @param tabname 表名
     * @param flds 字段信息
     * @returns 表规则对象
     * @example
     * ```typescript
     * const tabRule = tabRules.getTabRule('tableName', flds);
     * console.log('表规则对象:', tabRule);
     * ```
     */
    getTabRule(tabname: string, flds: any[]): cx.TabRule;

    /**
     * 初始化
     * @param rules 配置的字段规则
     * @example
     * ```typescript
     * const newRules = [];
     * tabRules.init(newRules);
     * ```
     */
    init(rules: any[]): void;
  }
} 