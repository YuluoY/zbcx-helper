declare namespace cx {
  /**
   * 字段规则的实现类
   */
  class TabRule {
    /**
     * 创建 TabRule 实例
     * @param rules 规则数组
     * @param flds 字段信息数组
     * @example
     * ```typescript
     * const tabRule = new cx.TabRule(rules, flds);
     * ```
     */
    constructor(rules: any[], flds: any[]);

    /**
     * 应用 change 规则
     * @param fld 字段信息
     * @param flds 编辑字段
     * @param notify 通知对象
     * @example
     * ```typescript
     * const notify = {};
     * tabRule.change(fld, flds, notify);
     * ```
     */
    change(fld: Record<string, any>, flds: any[], notify: Record<string, any>): void;

    /**
     * 应用 finish 规则
     * @param flds 编辑字段
     * @param att 属性对象
     * @returns 检查结果，可能是布尔值或字符串
     * @example
     * ```typescript
     * const result = tabRule.check(flds, att);
     * console.log('检查结果:', result);
     * ```
     */
    check(flds: any[], att: Record<string, any>): boolean | string;

    /**
     * 应用 init 规则
     * @param isNew 是否新��性
     * @param flds 编辑字段
     * @example
     * ```typescript
     * const isNew = true;
     * tabRule.init(isNew, flds);
     * ```
     */
    init(isNew: boolean, flds: any[]): void;
  }
} 