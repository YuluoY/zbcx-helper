declare namespace cx {
  /**
   * URL 工具类
   */
  class url {
    /**
     * 创建 Url 实例
     * @example
     * ```typescript
     * const urlInstance = new cx.url();
     * ```
     */
    constructor();

    /**
     * 下载网址
     * @param url 要下载的URL
     * @example
     * ```typescript
     * cx.url.download('http://example.com');
     * ```
     */
    static download(url: string): void;

    /**
     * 生成http请求的url字符串
     * @param url 基础URL
     * @param params 可变参数对象
     * @returns 生成的请求URL字符串
     * @example
     * ```typescript
     * const requestUrl = cx.url.getRequestUrl('http://example.com', {param1: 'value1'});
     * console.log('请求URL:', requestUrl);
     * ```
     */
    static getRequestUrl(url: string, ...params: Record<string, any>[]): string;

    /**
     * 取系统URL
     * @returns 系统URL
     * @example
     * ```typescript
     * const sysUrl = cx.url.getSysUrl();
     * console.log('系统URL:', sysUrl);
     * ```
     */
    static getSysUrl(): string;

    /**
     * 获取http请求的url中的���数
     * @param url 包含参数的URL
     * @returns 包含解析参数的对象
     * @example
     * ```typescript
     * const params = cx.url.getUrlParams('http://example.com?param1=value1');
     * console.log('URL参数:', params);
     * ```
     */
    static getUrlParams(url: string): Record<string, string>;

    /**
     * Get方式打开网址
     * @param url 要打开的URL
     * @example
     * ```typescript
     * cx.url.open('http://example.com');
     * ```
     */
    static open(url: string): void;

    /**
     * 取url里面的键值
     * @param url 包含键值的URL
     * @param key 要查询的键
     * @returns 键对应的值
     * @example
     * ```typescript
     * const value = cx.url.querySearch('http://example.com?param1=value1', 'param1');
     * console.log('键值:', value);
     * ```
     */
    static querySearch(url: string, key: string): string;
  }
} 