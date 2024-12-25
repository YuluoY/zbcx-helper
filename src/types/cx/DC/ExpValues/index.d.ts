declare namespace cx.dc {
    /**
     * 数据中心表达式值类
     * 提供对数据中心表达式值的基本操作服务，包括值的设置、清除和获取等功能
     */
    declare class ExpValues {
        constructor();

        /**
         * 清除全部值
         * @returns this对象
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * values.put('name', 'John');
         * values.put('age', 25);
         * 
         * // 清除所有值
         * values.clear();
         * ```
         */
        clear(): ExpValues;

        /**
         * 设置字段值
         * @param colname 字段名
         * @param value 值
         * @returns this对象
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * 
         * // 设置字符串值
         * values.put('name', 'John');
         * 
         * // 设置数字值
         * values.put('age', 25);
         * 
         * // 设置布尔值
         * values.put('active', true);
         * ```
         */
        put(colname: string, value: any): ExpValues;

        /**
         * 取引用的值，如: "userid=={_userId}",取_userId的值
         * @param key key
         * @param ret 返回值 {type: Number, val: String}
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * values.put('_userId', '12345');
         * 
         * // 获取引用值
         * const ret = { type: 0, val: '' };
         * values.refer('_userId', ret);
         * // ret = { type: cx.consts.DT_STRING, val: '12345' }
         * ```
         */
        refer(key: string, ret: { type: number; val: string }): void;

        /**
         * 设置值
         * @param colname 列名
         * @param key 键
         * @param value 值
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * 
         * // 设置表达式值
         * values.set('user', 'id', new cx.exp.ExpItem('12345', cx.consts.DT_STRING));
         * values.set('user', 'name', new cx.exp.ExpItem('John', cx.consts.DT_STRING));
         * ```
         */
        set(colname: string, key: string, value: cx.exp.ExpItem): void;

        /**
         * 设置值
         * @param colname 列名
         * @param value 值
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * 
         * // 设置表达式值
         * values.setValue('userId', new cx.exp.ExpItem('12345', cx.consts.DT_STRING));
         * values.setValue('userName', new cx.exp.ExpItem('John', cx.consts.DT_STRING));
         * ```
         */
        setValue(colname: string, value: cx.exp.ExpItem): void;

        /**
         * 根据字段名取值
         * @param colname 字段名
         * @returns 字段值
         * @example
         * ```typescript
         * const values = new cx.dc.ExpValues();
         * values.put('name', 'John');
         * 
         * // 获取字段值
         * const name = values.value('name'); // 返回: 'John'
         * ```
         */
        value(colname: string): any;
    }
}