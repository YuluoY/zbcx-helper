declare namespace cx {
    class FileLoader {
        /**
         * 初始化
         * @example
         * ```javascript
         * cx.FileLoader.init();
         * ```
         */
        static init(): void;

        /**
         * GET方式调用，加载二进制文件
         * @param {string} url - URL
         * @returns {Promise} 返回Promise对象
         * @example
         * ```javascript
         * cx.FileLoader.loadBinary('http://example.com/file.bin')
         *   .then(response => {
         *     // 处理二进制数据
         *   });
         * ```
         */
        static loadBinary(url: string): Promise<any>;
    }
}; 