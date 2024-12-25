/**
 * cx.AttFactory 类 - 属性工厂类，用于创建和管理属性对象
 */
declare namespace cx {
  interface AttFactoryOptions {
    /**
     * 属性类对照表(major, minor, className)
     */
    attClass?: [number, number, string][];
  }

  interface ByMajMinOptions {
    /**
     * 表名（不传的时候，根据major、minor取entity中的属性表配置）
     */
    tabname?: string;
    /**
     * 字段列表
     */
    flds?: string[];
    /**
     * 字段列表值
     */
    fldVals?: any[];
  }

  class AttFactory {
    /**
     * 创建属性工厂实例
     * @param options - 配置选项
     */
    constructor(options?: AttFactoryOptions);

    /**
     * 构建属性框操作对象
     * @param major - 主类型
     * @param minor - 子类型
     * @param options - 其他参数，直接传给AttBase等类
     * @returns 返回属性处理对象
     */
    byMajMin(major: number, minor: number, options?: ByMajMinOptions): Promise<cx.AttBase>;
  }
}