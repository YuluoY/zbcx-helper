/**
 * CacheLru 模块的类型声明
 * @module CacheLru
 */

declare namespace cx {
    interface CacheLruOptions {
        /** 缓存限制数量 */
        limit?: number;
        /** 淘汰时的回调函数 */
        onRemove?: (value: any) => void;
    }

    declare class CacheLru {
        /**
         * 创建一个LRU缓存实例
         * @param {CacheLruOptions} options - 配置参数对象
         * @param {number} [options.limit] - 缓存限制数量
         * @param {Function} [options.onRemove] - 淘汰时的回调函数
         * @example
         * const cache = new cx.CacheLru({
         *   limit: 100,
         *   onRemove: (value) => {
         *     console.log('缓存项被移除:', value);
         *   }
         * });
         */
        constructor(options?: CacheLruOptions);

        /**
         * 清除缓存数据
         * @returns {void}
         * @example
         * cache.clear();
         */
        clear(): void;

        /**
         * 根据键值获取对象
         * @param {string} key - 缓存键
         * @returns {any} 缓存的值
         * @example
         * const value = cache.get('key1');
         */
        get(key: string): any;

        /**
         * 根据键值弹出对象(删除数据但不调用删除销毁函数)
         * @param {string} key - 缓存键
         * @returns {any} 被弹出的值
         * @example
         * const value = cache.pop('key1');
         */
        pop(key: string): any;

        /**
         * 增加键值对
         * @param {string} key - 缓存键
         * @param {any} value - 缓存值
         * @returns {void}
         * @example
         * cache.put('key1', 'value1');
         */
        put(key: string, value: any): void;

        /**
         * 移除最久未用对象
         * @param {string} key - 要移除的缓存键
         * @returns {void}
         * @example
         * cache.remove('key1');
         */
        remove(key: string): void;

        /**
         * 设置最大缓存数量
         * @param {number} limit - 新的缓存限制数量
         * @returns {void}
         * @example
         * cache.setLimit(200);
         */
        setLimit(limit: number): void;
    }
}