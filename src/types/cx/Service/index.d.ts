declare namespace cx {

  interface ServiceConfig {
    /** 主类型 */
    major?: number;
    /** 子类型 */
    minor?: number;
    /** 是否缓存到内存，否则持久化缓存 */
    isMemory?: boolean;
  }

  interface ServiceResult<T = any> {
    /** 请求状态，0为正常 */
    ret: number;
    /** 服务返回的目标数据序列 */
    data: T[];
    /** 目标序列是否一个数据 */
    retType?: number;
    /** 总数 */
    total?: number;
    /** 其他属性 */
    [key: string]: any;
  }

  /**
   * Service 类 - 服务包装类
   * 提供了一系列用于管理服务调用和缓存的静态方法
   */
  class service {

    /**
     * 增加URL
     * @param name 服务名
     * @param url URL
     * @example
     * ```ts
     * cx.service.add('myService', '/api/myService');
     * ```
     */
    static add(name: string, url: string): void;

    /**
     * 删除缓存数据
     * @param cacheKey 缓存标识
     * @param conf 配置对象
     * @example
     * ```ts
     * cx.service.delCache('myCacheKey', {
     *   major: 1,
     *   minor: 2
     * });
     * ```
     */
    static delCache(cacheKey: string, conf?: ServiceConfig): void;

    /**
     * 根据表主子类型批量删除缓存数据
     * @param major 主类型
     * @param minor 子类型
     * @example
     * ```ts
     * await cx.service.delsCache(1, 2);
     * ```
     */
    static delsCache(major?: number, minor?: number): Promise<void>;

    /**
     * 执行后台服务
     * @param url 服务的URL
     * @param cmd 服务的命令码
     * @param params 其他参数
     * @param isFormat 是否整理返回结构
     * @example
     * ```ts
     * const result = await cx.service.execute('/api/myService', 'getData', {
     *   id: 123,
     *   type: 'user'
     * });
     * ```
     */
    static execute<T = any>(
      url: string,
      cmd: string,
      params?: Record<string, any>,
      isFormat?: boolean
    ): Promise<ServiceResult<T>>;

    /**
     * 格式化服务返回数据对象
     * @param ret 服务器请求返回的结果对象
     * @example
     * ```ts
     * const formatted = cx.service.formatRet({
     *   ret: 0,
     *   data: [{ id: 1, name: 'item1' }],
     *   retType: 1
     * });
     * ```
     */
    static formatRet<T = any>(ret: ServiceResult<T>): T | T[];

    /**
     * 获取缓存数据
     * @param cacheKey 缓存标识
     * @param conf 配置对象
     * @example
     * ```ts
     * const data = await cx.service.getCache('myCacheKey', {
     *   major: 1,
     *   minor: 2,
     *   isMemory: true
     * });
     * ```
     */
    static getCache<T = any>(cacheKey: string, conf?: ServiceConfig): Promise<T>;

    /**
     * 构造数据缓存的key
     * @param cacheKey 缓存键
     * @param major 目标表主类型
     * @param minor 目标表子类型
     * @example
     * ```ts
     * const key = cx.service.makeCacheKey('myCache', 1, 2);
     * ```
     */
    static makeCacheKey(cacheKey: string, major?: number | null, minor?: number | null): string;

    /**
     * 添加缓存数据
     * @param cacheKey 缓存标识
     * @param data 缓存数据
     * @param conf 配置对象
     * @example
     * ```ts
     * cx.service.setCache('myCacheKey', { id: 1, name: 'test' }, {
     *   major: 1,
     *   minor: 2,
     *   isMemory: true
     * });
     * ```
     */
    static setCache<T = any>(cacheKey: string, data: T, conf?: ServiceConfig): void;

    /**
     * 根据Key取对应的服务URL
     * @param name 服务名
     * @example
     * ```ts
     * const serviceUrl = cx.service.url('myService');
     * ```
     */
    static url(name: string): string;
  }
} 