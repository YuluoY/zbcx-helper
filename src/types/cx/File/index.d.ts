declare namespace cx {
    namespace file {
        /**
         * 检查文件名是否有效
         * @param {string} filename - 文件名
         * @returns {boolean} 如果文件名有效返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.checkFilename('test.txt');
         * ```
         */
        function checkFilename(filename: string): boolean;

        /**
         * 默认的目录授权信息
         * @param {boolean} editable - 是否可编辑
         * @returns {Object} 返回授权信息对象
         * @example
         * ```javascript
         * cx.file.defAuthDir(true);
         * ```
         */
        function defAuthDir(editable: boolean): {
            addable: boolean;
            removable: boolean;
            editable: boolean;
        };

        /**
         * 默认的文件授权信息
         * @param {boolean} editable - 是否可编辑
         * @returns {Object} 返回授权信息对象
         * @example
         * ```javascript
         * cx.file.defAuthFile(true);
         * ```
         */
        function defAuthFile(editable: boolean): {
            addable: boolean;
            removable: boolean;
            editable: boolean;
        };

        /**
         * 下载文件
         * @param {string} url - URL
         * @example
         * ```javascript
         * cx.file.download('http://example.com/file.pdf');
         * ```
         */
        function download(url: string): void;

        /**
         * 取文件名（去掉目录）
         * @param {string} filename - 文件名
         * @returns {string} 返回去掉目录后的文件名
         * @example
         * ```javascript
         * cx.file.getFileName('/path/to/file.txt');
         * ```
         */
        function getFileName(filename: string): string;

        /**
         * 获取文件的类型
         * @param {string} filename - 文件名
         * @returns {string} 返回文件的类型字符串
         * @example
         * ```javascript
         * cx.file.getFileType('test.pdf');
         * ```
         */
        function getFileType(filename: string): string;

        /**
         * 根据文件名取图标字符串
         * @param {string} type - 文件类型
         * @returns {string} 返回对应的图标字符串
         * @example
         * ```javascript
         * cx.file.getIcon('pdf');
         * ```
         */
        function getIcon(type: string): string;

        /**
         * 获取文件的短名称
         * @param {string} filename - 文件名
         * @returns {string} 返回文件的短名称
         * @example
         * ```javascript
         * cx.file.getShortName('very_long_filename.txt');
         * ```
         */
        function getShortName(filename: string): string;

        /**
         * 判断文件名是否是音频文件
         * @param {string} filename - 文件名
         * @returns {boolean} 如果是音频文件返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.isAudio('music.mp3');
         * ```
         */
        function isAudio(filename: string): boolean;

        /**
         * 判断文件名是否是文档文件
         * @param {string} filename - 文件名
         * @returns {boolean} 如果是文档文件返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.isDoc('document.docx');
         * ```
         */
        function isDoc(filename: string): boolean;

        /**
         * 判断文件名是否是图片文件
         * @param {string} filename - 文件名
         * @returns {boolean} 如果是图片文件返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.isImage('photo.jpg');
         * ```
         */
        function isImage(filename: string): boolean;

        /**
         * 判断文件名是否是PDF文件
         * @param {string} filename - 文件名
         * @returns {boolean} 如果是PDF文件返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.isPdf('document.pdf');
         * ```
         */
        function isPdf(filename: string): boolean;

        /**
         * 判断文件名是否是视频文件
         * @param {string} filename - 文件名
         * @returns {boolean} 如果是视频文件返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.isVideo('movie.mp4');
         * ```
         */
        function isVideo(filename: string): boolean;

        /**
         * 取文件的类型(cx.consts.FILE_***)
         * @param {string} filename - 文件名
         * @returns {number} 返回文件类型常量值
         * @example
         * ```javascript
         * cx.file.type('image.jpg');
         * ```
         */
        function type(filename: string): number;

        /**
         * 判断文件类型是否是音频文件
         * @param {string} type - 文件类型(小写)
         * @returns {boolean} 如果是音频文件类型返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.typeAudio('mp3');
         * ```
         */
        function typeAudio(type: string): boolean;

        /**
         * 判断文件类型是否是文档文件
         * @param {string} type - 文件类型(小写)
         * @returns {boolean} 如果是文档文件类型返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.typeDoc('docx');
         * ```
         */
        function typeDoc(type: string): boolean;

        /**
         * 判断文件类型是否是图片文件
         * @param {string} type - 文件类型(小写)
         * @returns {boolean} 如果是图片文件类型返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.typeImage('jpg');
         * ```
         */
        function typeImage(type: string): boolean;

        /**
         * 判断文件类型是否是视频文件
         * @param {string} type - 文件类型(小写)
         * @returns {boolean} 如果是视频文件类型返回true，否则返回false
         * @example
         * ```javascript
         * cx.file.typeVideo('mp4');
         * ```
         */
        function typeVideo(type: string): boolean;
    }
}; 