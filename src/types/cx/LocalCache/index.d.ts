declare namespace cx {
  /**
   * LocalCache 类 - 本地缓存对象。用于localStorage 和 sessionStorage存储
   */
  namespace localCache {
    type StorageType = 'localStorage' | 'sessionStorage';

    /**
     * 清除所有缓存数据
     * @returns this
     * @example
     * ```ts
     * // 清除所有缓存数据
     * cx.localCache.clear();
     * ```
     */
    function clear(): typeof LocalCache;

    /**
     * 根据键获取对应的值
     * @param key 键
     * @param storage 存储类型，值是localStorage 或 sessionStorage
     * @returns 存储的值
     * @example
     * ```ts
     * // 从localStorage获取数据
     * const data = cx.localCache.get('userInfo');
     * 
     * // 从sessionStorage获取数据
     * const tempData = cx.localCache.get('tempData', 'sessionStorage');
     * ```
     */
    function get(key: string, storage?: StorageType): any;

    /**
     * 获取格式化后的键名
     * @param key 键
     * @returns 格式化后的键名
     * @example
     * ```ts
     * // 获取格式化后的键名
     * const formattedKey = cx.localCache.key('userInfo');
     * // 如果设置了前缀 'app_'，返回 'app_userInfo'
     * ```
     */
    function key(key: string): string;

    /**
     * 根据键删除对应的值
     * @param key 键
     * @param storage 存储类型，值是localStorage 或 sessionStorage
     * @returns this
     * @example
     * ```ts
     * // 从localStorage删除数据
     * cx.localCache.remove('userInfo');
     * 
     * // 从sessionStorage删除数据
     * cx.localCache.remove('tempData', 'sessionStorage');
     * ```
     */
    function remove(key: string, storage?: StorageType): typeof LocalCache;

    /**
     * 以键值存储
     * @param key 键
     * @param value 值
     * @param duration 有效时长，单位为秒，不传则永久有效
     * @param storage 存储类型，值是localStorage 或 sessionStorage
     * @returns this
     * @example
     * ```ts
     * // 永久存储在localStorage
     * cx.localCache.set('userInfo', { name: 'Tom', age: 18 });
     * 
     * // 存储在sessionStorage，有效期1小时
     * cx.localCache.set('tempData', { token: 'abc123' }, 3600, 'sessionStorage');
     * 
     * // 存储在localStorage，有效期30分钟
     * cx.localCache.set('authToken', 'xyz789', 1800);
     * ```
     */
    function set(
      key: string,
      value: any,
      duration?: number,
      storage?: StorageType
    ): typeof LocalCache;

    /**
     * 设置key的前缀
     * @param prefix 前缀
     * @example
     * ```ts
     * // 设置存储键的前缀为 'app_'
     * cx.localCache.setPrefix('app_');
     * 
     * // 之后的存储操作会自动添加前缀
     * cx.localCache.set('userInfo', data); // 实际存储的键为 'app_userInfo'
     * cx.localCache.get('userInfo');       // 实际获取的键为 'app_userInfo'
     * ```
     */
    function setPrefix(prefix: string): void;
  }
} 