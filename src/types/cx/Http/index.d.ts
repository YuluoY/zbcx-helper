declare namespace cx {
  type SqlCons = [string, string, any, string];
  type BraSqlCons = [string, ...(SqlCons | BraSqlCons)[]];

  interface UrlConf {
    [key: string]: any;
  }

  interface RequestParams {
    args?: Array<SqlCons | BraSqlCons>;
    [key: string]: any;
  }

  /**
   * HTTP 请求工具类，提供了各种 HTTP 请求方法
   */
  class http {

    /**
     * 静态方法，用于发起 GET 请求
     * @param url URL地址
     * @param params 请求参数
     * @param urlConf 请求的配置数据
     * @returns 返回一个 Promise 对象
     * @description GET方式调用远程服务。可以通过 URL 直接传参,也可以通过 params 对象传参,如果有重复参数,params 中的优先级更高。支持复杂的 SQL 条件构造。
     */
    static get(url: string, params?: RequestParams, urlConf?: UrlConf): Promise<any>;

    /**
     * 静态方法，用于获取授权信息
     * @returns 返回授权信息字符串
     * @description 获取当前的授权信息。通常用于获取已保存的认证令牌或授权凭证。
     */
    static getAuth(): string;

    /**
     * 静态方法，用于初始化 HTTP 服务
     * @description 初始化 HTTP 服务的配置和状态。在使用其他 HTTP 方法之前应该先调用此方法。
     */
    static init(): void;

    /**
     * 静态方法，用于以二进制方式加载资源
     * @param url URL地址
     * @returns 返回一个 Promise 对象
     * @description GET方式调用远程服务，用于加载二进制数据。适用于下载文件、图片等二进制资源。
     */
    static loadBinary(url: string): Promise<ArrayBuffer>;

    /**
     * 静态方法，用于以文本方式加载资源
     * @param url URL地址
     * @returns 返回一个 Promise 对象
     * @description GET方式调用远程服务，用于加载文本数据。适用于获取文本文件、JSON、XML等文本格式的资源。
     */
    static loadText(url: string): Promise<string>;

    /**
     * 静态方法，用于发起 POST 请求
     * @param url URL地址
     * @param params 请求参数
     * @param urlConf 请求的配置数据
     * @returns 返回一个 Promise 对象
     * @description POST方式调用远程服务。通过 params 对象传递请求参数，支持复杂的 SQL 条件构造。适用于需要传递大量数据或敏感数据的场景。
     */
    static post(url: string, params: RequestParams, urlConf?: UrlConf): Promise<any>;

    /**
     * 静态方法，用于设置授权信息
     * @param info 设置授权信息
     * @description 设置 HTTP 请求的授权信息。通常用于设置认证令牌或授权凭证，这些信息会在后续的 HTTP 请求中被使用。
     */
    static setAuth(info: string): void;

    /**
     * 静态方法，用于构造 GET 请求的 URL
     * @param url 基本URL
     * @param cmd 命令
     * @param params 其他参数
     * @returns 返回构造好的 GET 请求 URL
     * @description 根据基本 URL、命令和参数构造完整的 GET 请求 URL。这个方法会将所有参数正确地编码并拼接到 URL 中。
     */
    static urlGet(url: string, cmd: string, params: Record<string, any>): string;
  }
} 