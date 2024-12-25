declare namespace cx {
    /**
     * 列定义接口
     */
    interface IColumn {
        colname: string;      // 列名
        title: string;        // 标题
        disporder: number;    // 显示顺序
        type: number;         // 类型
        value: string;        // 值
        isnum: boolean;       // 是否数值型
        editable: boolean;    // 是否可编辑
        required: boolean;    // 是否必填
        rows: number;         // 行数
        disped: boolean;      // 是否显示
        refChange: number;    // 引用变更
    }

    class column {
        /**
         * 数据库fld转为colnum对象
         * @param {number} fld - fld表中数据对象
         * @returns {IColumn} column对象
         * @example
         * const columnObj = cx.column.dbFld2Col(fldData);
         */
        static dbFld2Col(fld: number): IColumn;

        /**
         * 得到一个默认的内存字段对象
         * @returns {IColumn} 返回一个包含默认值的列对象
         * @example
         * const defaultColumn = cx.column.defCol();
         */
        static defCol(): IColumn;

        /**
         * 得到一个内存字段对象
         * @param {number} disporder - 显示顺序( < 1 不显示)
         * @param {string} colname - 列名
         * @param {string} title - 标题
         * @param {number} disptype - 显示类型(cx.consts.DISP_*)
         * @param {boolean} isnum - 是否数值型
         * @param {boolean} required - 是否必填项
         * @param {string} [strCfg] - 配置信息字符串(当类型为 VALBUTTON / SELDYNA 时的配置信息，如:"plugin:'SelRoad',field:mc,#{id1}:id")
         * @returns {IColumn} 返回一个配置好的列对象
         * @example
         * const column = cx.column.getCol(1, 'name', '姓名', cx.consts.DISP_TEXT, false, true);
         */
        static getCol(
            disporder: number,
            colname: string,
            title: string,
            disptype: number,
            isnum: boolean,
            required: boolean,
            strCfg?: string
        ): IColumn;
    }
} 