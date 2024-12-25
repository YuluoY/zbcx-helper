declare namespace cx {
  interface ICache {
    [key: string]: HTMLImageElement;
    head: undefined;
    limit: number;
    map: {};
    onRemove: (value: any) => void;
    size: number;
    tail: undefined;
  }

  /**
   * 图片加载器类，提供图片加载和缓存功能
   */
  class ImageLoader {

    /**
     * 缓存对象，用于存储已加载的图片
     */
    static const cache: ICache;

    /**
     * 加载图片
     * @param key 缓存的KEY
     * @param url 图片URL
     * @returns 返回一个 Promise 对象，resolve 时返回加载的图片对象
     * @example
     * ```ts
     * // 加载并缓存图片
     * cx.ImageLoader.load('logo', '/images/logo.png')
     *   .then(image => {
     *     // 使用加载的图片
     *     document.body.appendChild(image);
     *   })
     *   .catch(error => {
     *     console.error('图片加载失败:', error);
     *   });
     * 
     * // 再次加载相同的图片会从缓存返回
     * cx.ImageLoader.load('logo', '/images/logo.png')
     *   .then(image => {
     *     // 直接从缓存获取图片
     *     console.log('从缓存获取图片');
     *   });
     * ```
     */
    static load(key: string, url: string): Promise<HTMLImageElement>;
  }
} 