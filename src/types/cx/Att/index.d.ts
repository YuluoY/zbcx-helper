declare namespace cx {
  /**
   * 属性操作工具类
   */
  class att {
    /**
     * 缓存属性
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性对象
     * @param cols 列定义（可选）
     * @returns 返回数值类型
     * @example
     * ```typescript
     * cx.att.cacheAtt(1, 2, {name: "test"}, ["id", "name"]);
     * ```
     */
    static cacheAtt(major: number, minor: number, att: Record<string, any>, cols?: string[]): number;

    /**
     * 获取缓存的属性
     * @param major 主类型
     * @param minor 子类型
     * @returns 返回缓存的属性对象
     * @example
     * ```typescript
     * const cachedAtt = cx.att.getCacheAtt(1, 2);
     * ```
     */
    static getCacheAtt(major: number, minor: number): Record<string, any>;
  }
} 