declare namespace cx {
    class datetime {
        /**
         * 拷贝一个日期对象
         * @param {Date} timestamp - Timestamp对象
         * @returns {Date} 返回拷贝的日期对象
         * @example
         * ```typescript
         * const date = new Date();
         * const copiedDate = cx.datetime.copy(date);
         * ```
         */
        static copy(timestamp: Date): Date;

        /**
         * 获取指定时间范围
         * @param {number} type - 类型(cx.consts.THISMONTH, LASTMONTH,...)
         * @returns {Array} 返回时间范围数组
         * @example
         * ```typescript
         * const range = cx.datetime.getRange(cx.consts.THISMONTH);
         * ```
         */
        static getRange(type: number): Array<string>;

        /**
         * 获取当前时间
         * @returns {Date} 返回当前日期时间
         * @example
         * ```typescript
         * const currentTime = cx.datetime.now();
         * ```
         */
        static now(): Date;

        /**
         * 根据字符串解析日期+时间(格式: 2017-10-26 09:00:00)(IE的Date类不能识别Timestamp字符串, 切记!!)
         * @param {string} str - 日期+时间字符串
         * @returns {Date} 返回解析后的日期对象
         * @example
         * ```typescript
         * const date = cx.datetime.parse('2017-10-26 09:00:00');
         * ```
         */
        static parse(str: string): Date;

        /**
         * 根据给定的时间戳获取对应月份的时间范围
         * @param {Date} timestamp - Timestamp对象
         * @returns {Date} 返回时间范围
         * @example
         * ```typescript
         * const date = new Date();
         * const monthRange = cx.datetime.rangeMonth(date);
         * ```
         */
        static rangeMonth(timestamp: Date): [string, string];
    }
} 