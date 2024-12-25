declare namespace cx.dc {
    /**
     * 数据中心表达式字段类
     * 提供对数据中心表达式字段的基本操作服务，包括字段的设置、清除和类型获取等功能
     */
    declare class ExpFields {
        constructor();

        /**
         * 清除全部字段
         * @returns this对象
         * @example
         * ```typescript
         * const fields = new cx.dc.ExpFields();
         * fields.put('name', cx.consts.DT_STRING);
         * fields.put('age', cx.consts.DT_INT);
         * 
         * // 清除所有字段
         * fields.clear();
         * ```
         */
        clear(): ExpFields;

        /**
         * 设置字段类型
         * @param colname 列名
         * @param type 字段类型(cx.consts.DT_INT / DT_REAL / DT_STRING ...)
         * @example
         * ```typescript
         * const fields = new cx.dc.ExpFields();
         * 
         * // 设置字符串类型字段
         * fields.put('name', cx.consts.DT_STRING);
         * 
         * // 设置整数类型字段
         * fields.put('age', cx.consts.DT_INT);
         * 
         * // 设置浮点数类型字段
         * fields.put('score', cx.consts.DT_REAL);
         * ```
         */
        put(colname: string, type: number): void;

        /**
         * 设置字段及类型
         * @param colname 列名
         * @param type 类型
         * @example
         * ```typescript
         * const fields = new cx.dc.ExpFields();
         * 
         * // 设置字段类型
         * fields.set('name', cx.consts.DT_STRING);
         * fields.set('age', cx.consts.DT_INT);
         * ```
         */
        set(colname: string, type: number): void;

        /**
         * 根据列名取字段类型
         * @param colname 列名
         * @returns 字段类型 (cx.consts.DT_INT / DT_REAL / DT_STRING ...)
         * @example
         * ```typescript
         * const fields = new cx.dc.ExpFields();
         * fields.put('name', cx.consts.DT_STRING);
         * 
         * // 获取字段类型
         * const type = fields.type('name'); // 返回: cx.consts.DT_STRING
         * ```
         */
        type(colname: string): number;
    }
}