declare namespace cx {
    class Fields {
        /** 字段列表 */
        fld: Array<any>;
        /** 字段取值列表 */
        fldvalue: Array<any>;

        /**
         * 初始化 Fields 实例
         * @param {Object} data - 初始化数据
         * @param {Array} data.fld - 字段列表
         * @param {Array} data.fldvalue - 字段取值列表
         * @example
         * ```javascript
         * const fields = new cx.Fields({
         *   fld: [
         *     { tabname: 'user', colname: 'name', title: '姓名', type: 'string' }
         *   ],
         *   fldvalue: []
         * });
         * ```
         */
        constructor(data: {
            fld: Array<any>;
            fldvalue: Array<any>;
        });

        /**
         * 根据表名、字段名取字段信息
         * @param {string} tabname - 表名
         * @param {string} colname - 字段名
         * @returns {Object} 返回字段信息对象
         * @example
         * ```javascript
         * const nameField = fields.getFld('user', 'name');
         * ```
         */
        getFld(tabname: string, colname: string): Object;

        /**
         * 根据主类型，子类型，字段名取字段信息
         * @param {number} major - 主类型
         * @param {number} minor - 子类型
         * @param {string} [colname] - 列名，没传值时返回空数组
         * @returns {Object} 返回字段信息对象
         * @example
         * ```javascript
         * const codeField = fields.getFld2(1, 1, 'code');
         * ```
         */
        getFld2(major: number, minor: number, colname?: string): {
            fld: Array<Object>;
            fldvalue: Array<Object>;
        };

        /**
         * 根据表名取字段信息
         * @param {string} [tabname] - 表名。如果提供,则只返回该表的字段
         * @returns {Array<Object>} 返回字段对象列表
         * @example
         * ```javascript
         * const userFields = fields.getFlds('user');
         * ```
         */
        getFlds(tabname?: string): Array<Object>;

        /**
         * 根据表名，取fld和fldvalue数据，并缓存到该类对象
         * @param {string} tabName - 表名
         * @param {boolean} [dbPrior] - 是否优先从数据库获取
         * @returns {Promise<Object>} 返回包含fld和fldvalue的对象
         */
        getFldValsDb(tabName: string, dbPrior?: boolean): Promise<{
            fld: Array<Object>;
            fldvalue: Array<Object>;
        }>;

        /**
         * 根据表名，字段名、字段值取字段取值信息
         * @param {string} tabname - 表名
         * @param {string} colname - 字段名
         * @param {*} dbValue - 字段值
         * @returns {Object|null} 返回字段取值信息对象
         * @example
         * ```javascript
         * const statusValue = fields.getFldvalue('user', 'status', 1);
         * ```
         */
        getFldvalue(tabname: string, colname: string, dbValue: any): Object | null;

        /**
         * 根据表名，字段名取字段取值信息
         * @param {string} tabname - 表名
         * @param {string} [colname] - 列名，没传值时返回空数组
         * @returns {Array<Object>} 返回字段取值信息对象序列
         * @example
         * ```javascript
         * const statusValues = fields.getFldvalues('user', 'status');
         * ```
         */
        getFldvalues(tabname: string, colname?: string): Array<Object>;

        /**
         * 根据表名，字段名取字段取值，转换成 option 结构
         * @param {string} tabname - 表名
         * @param {string} [colname] - 列名
         * @returns {Array<Object>} 返回选项对象列表
         * @example
         * ```javascript
         * const options = fields.getOptions('user', 'status');
         * ```
         */
        getOptions(tabname: string, colname?: string): Array<{
            value: string;
            label: string;
            options?: Object;
        }>;

        /**
         * 用public构造tabname表colname字段的fldvalue对象序列
         * @param {string} tabname - 表名
         * @param {string} colname - 字段名
         * @returns {Array} 返回fldvalue对象序列
         */
        getPublicValue(tabname: string, colname: string): Array<any>;

        /**
         * 判断字段是否需要fldvalue配置
         * @param {number} disptype - 字段的显示类型
         * @returns {boolean} 返回判断结果
         * @example
         * ```javascript
         * const needFldvalue = fields.isNeedFldvalue(1);
         * ```
         */
        isNeedFldvalue(disptype: number): boolean;

        /**
         * 取字段的多语言值
         * @param {Object} fld - 字段信息对象
         */
        locFld(fld: Object): void;

        /**
         * 取字段值的多语言值
         * @param {Object} fldval - 字段取值信息对象
         */
        locFldval(fldval: Object): void;
    }
}; 