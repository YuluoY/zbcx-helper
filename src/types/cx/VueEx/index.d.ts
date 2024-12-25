declare namespace cx {
  /**
   * VUE 扩展类
   */
  class vueEx {
    /**
     * 创建 VueEx 实例
     * @example
     * ```typescript
     * const vueExInstance = new cx.vueEx();
     * ```
     */
    constructor();

    /**
     * 扩展vue
     * @param appVue vue应用对象
     * @param vueApi vue的Api对象
     * @example
     * ```typescript
     * cx.vueEx.extend(appVue, vueApi);
     * ```
     */
    static extend(appVue: Record<string, any>, vueApi: Record<string, any>): void;

    /**
     * 标记数据对象，使其永远不会转换为proxy
     * @param data 数据对象
     * @returns 标记后的对象本身
     * @example
     * ```typescript
     * const rawData = cx.vueEx.markRaw(data);
     * ```
     */
    static markRaw<T extends Record<string, any>>(data: T): T;
  }
} 