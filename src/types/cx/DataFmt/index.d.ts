declare namespace cx {
    interface IDataFmtBase {
        // 基础数据格式化接口
        format(value: any): any;
    }

    interface DataFmtConfig {
        name: string;
        type: string;
        params: Record<string, any>;
    }

    namespace datafmt {
        /**
         * 增加一个数据格式化对象（采用引用计数方式）
         * @param {string} name - 格式化对象的命名
         * @param {IDataFmtBase} dataFmt - 数据格式化对象
         * @example
         * ```javascript
         * // 创建一个日期格式化对象
         * const dateFmt = new cx.FmtDate({
         *   format: 'YYYY-MM-DD'
         * });
         * 
         * // 添加到系统中
         * cx.datafmt.add('myDateFormat', dateFmt);
         * 
         * // 使用格式化对象
         * const formattedDate = cx.datafmt.format(new Date(), 'myDateFormat');
         * console.log(formattedDate); // 输出: 2024-01-18
         * ```
         */
        function add(name: string, dataFmt: IDataFmtBase): void;

        /**
         * 删除一个数据格式化对象
         * @param {string} name - 数据格式命名
         * @example
         * ```javascript
         * // 添加一个格式化对象
         * const dateFmt = new cx.FmtDate({
         *   format: 'YYYY-MM-DD'
         * });
         * cx.datafmt.add('myDateFormat', dateFmt);
         * 
         * // 使用格式化对象
         * const formattedDate = cx.datafmt.format(new Date(), 'myDateFormat');
         * console.log(formattedDate);
         * 
         * // 当不再需要时，删除格式化对象
         * cx.datafmt.del('myDateFormat');
         * ```
         */
        function del(name: string): void;

        /**
         * 格式化数据
         * @param {*} value - 需要格式化的数据值
         * @param {string} name - 数据格式命名，见 cx_datafmt 表的 name
         * @returns {string} 格式化后的字符串
         * @example
         * ```javascript
         * // 日期格式化
         * const date = new Date();
         * const formattedDate = cx.datafmt.format(date, 'dateFormat');
         * console.log(formattedDate); // 输出: 2024-01-18
         * 
         * // 数字格式化
         * const number = 1234567.89;
         * const formattedNumber = cx.datafmt.format(number, 'numberFormat');
         * console.log(formattedNumber); // 输出: 1,234,567.89
         * 
         * // 文件大小格式化
         * const fileSize = 1024 * 1024;
         * const formattedSize = cx.datafmt.format(fileSize, 'fileSize');
         * console.log(formattedSize); // 输出: 1MB
         * 
         * // 时长格式化
         * const duration = 3600;
         * const formattedDuration = cx.datafmt.format(duration, 'duration');
         * console.log(formattedDuration); // 输出: 1小时
         * ```
         */
        function format(value: any, name: string): string;

        /**
         * 获取数据格式化对象
         * @param {string} name - 数据格式命名
         * @returns {IDataFmtBase | undefined} 返回指定名称的数据格式化对象
         * @example
         * ```javascript
         * // 添加一个格式化对象
         * const dateFmt = new cx.FmtDate({
         *   format: 'YYYY-MM-DD'
         * });
         * cx.datafmt.add('myDateFormat', dateFmt);
         * 
         * // 获取格式化对象
         * const fmt = cx.datafmt.get('myDateFormat');
         * if (fmt) {
         *   // 使用格式化对象
         *   const result = fmt.format(new Date());
         *   console.log(result); // 输出: 2024-01-18
         * }
         * 
         * // 检查格式化对象是否存在
         * const unknownFmt = cx.datafmt.get('unknownFormat');
         * if (!unknownFmt) {
         *   console.log('格式化对象不存在');
         * }
         * ```
         */
        function get(name: string): IDataFmtBase | undefined;

        /**
         * 初始化数据格式配置对象列表
         * @param {Array<DataFmtConfig>} data - 配置对象列表
         * @example
         * ```javascript
         * // 初始化多个格式化配置
         * cx.datafmt.init([
         *   {
         *     name: 'dateFormat',
         *     type: 'Date',
         *     params: {
         *       format: 'YYYY-MM-DD'
         *     }
         *   },
         *   {
         *     name: 'numberFormat',
         *     type: 'Number',
         *     params: {
         *       decimals: 2,
         *       thousands: true
         *     }
         *   },
         *   {
         *     name: 'currencyFormat',
         *     type: 'Currency',
         *     params: {
         *       symbol: '￥',
         *       decimals: 2
         *     }
         *   }
         * ]);
         * 
         * // 使用初始化的格式化对象
         * const date = new Date();
         * console.log(cx.datafmt.format(date, 'dateFormat')); // 2024-01-18
         * 
         * const number = 1234567.89;
         * console.log(cx.datafmt.format(number, 'numberFormat')); // 1,234,567.89
         * 
         * const price = 99.99;
         * console.log(cx.datafmt.format(price, 'currencyFormat')); // ￥99.99
         * ```
         */
        function init(data: Array<DataFmtConfig>): void;

        /**
         * 解析数据格式配置对象
         * @param {DataFmtConfig} dFmtCfg - 数据格式配置对象
         * @returns {IDataFmtBase} 返回解析后的数据格式化对象
         * @example
         * ```javascript
         * // 解析日期格式配置
         * const dateFmtCfg = {
         *   name: 'dateFormat',
         *   type: 'Date',
         *   params: {
         *     format: 'YYYY-MM-DD'
         *   }
         * };
         * const dateFmt = cx.datafmt.parse(dateFmtCfg);
         * 
         * // 解析数字格式配置
         * const numberFmtCfg = {
         *   name: 'numberFormat',
         *   type: 'Number',
         *   params: {
         *     decimals: 2,
         *     thousands: true
         *   }
         * };
         * const numberFmt = cx.datafmt.parse(numberFmtCfg);
         * 
         * // 使用解析后的格式化对象
         * if (dateFmt) {
         *   console.log(dateFmt.format(new Date())); // 2024-01-18
         * }
         * 
         * if (numberFmt) {
         *   console.log(numberFmt.format(1234567.89)); // 1,234,567.89
         * }
         * ```
         */
        function parse(dFmtCfg: DataFmtConfig): IDataFmtBase;
    }
} 