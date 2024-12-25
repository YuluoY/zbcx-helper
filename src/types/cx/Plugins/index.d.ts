declare namespace cx {
  /**
   * Plugins 类提供了插件管理功能
   */
  class Plugins {
    /**
     * 创建插件管理实例
     * @param data 插件数据
     * @example
     * ```ts
     * const plugins = new cx.Plugins(data);
     * ```
     */
    constructor(data?: Record<string, any>);

    /**
     * 根据名称取对应的插件数据对象，返回数据副本
     * @param name 插件名称
     * @example
     * ```ts
     * const plugin = plugins.byName('myPlugin');
     * ```
     */
    byName(name: string): Record<string, any>;

    /**
     * 销毁对象
     * @example
     * ```ts
     * plugins.destroy();
     * ```
     */
    destroy(): void;

    /**
     * 取图标的CSS类名
     * @param type 类型
     * @param name 图标名称
     * @param size 图标大小
     * @example
     * ```ts
     * const iconClass = plugins.getIconCls('plugins', 'myIcon', 16);
     * ```
     */
    getIconCls(type: string, name: string, size: number): string;

    /**
     * 根据路径和文件名取完整的路径
     * @param type 类型
     * @param filename 文件名
     * @example
     * ```ts
     * const fullPath = plugins.getPath('plugins', 'config.json');
     * ```
     */
    getPath(type: string, filename: string): string;

    /**
     * 初始化
     */
    init(): void;
  }
} 