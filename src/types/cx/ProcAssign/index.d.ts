declare namespace cx {
  /**
   * ProcAssign 类 - 流程指派
   */
  class ProcAssign {
    /**
     * 创建流程指派实例
     * @param data procassi表数据数组
     * @example
     * ```ts
     * const procAssign = new cx.ProcAssign(data);
     * ```
     */
    constructor(data: any[]);

    /**
     * 根据名字，属性取配置
     * @param name 名称
     * @param props 属性对象
     * @example
     * ```ts
     * const config = procAssign.get('name', { key: 'value' });
     * ```
     */
    get(name: string, props: Record<string, any>): any;

    /**
     * 初始化
     * @example
     * ```ts
     * procAssign.init();
     * ```
     */
    init(): void;

    /**
     * 生成参数
     * @param params 参数数组
     * @param props 属性对象
     * @example
     * ```ts
     * const params = procAssign.makeParams(['param1', 'param2'], { key: 'value' });
     * ```
     */
    makeParams(params: any[], props: Record<string, any>): any;

    /**
     * 根据字段名，配置的字段值，传递进来的键值对对象判断是否匹配
     * @param fieldName 字段名
     * @param values 字段值数组
     * @param props 属性对象
     * @example
     * ```ts
     * const isMatch = procAssign.match('fieldName', ['value1', 'value2'], { key: 'value' });
     * ```
     */
    match(fieldName: string, values: any[], props: Record<string, any>): boolean;
  }
} 