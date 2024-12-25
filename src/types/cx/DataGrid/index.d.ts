declare namespace cx {
    namespace datagrid {
        /**
         * 产生DataGrid列信息
         * @param {string} colname - 列名
         * @param {string} title - 显示标题
         * @param {number} width - 列宽度
         * @param {string} [align] - 对齐方式(ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT), 默认值: cx.consts.ALIGN_CENTER
         * @param {boolean} [sortable] - 是否可排序, 默认值: true
         * @returns {Object} 对象
         * @example
         * ```typescript
         * const col = cx.datagrid.getCol('name', '姓名', 100, cx.consts.ALIGN_CENTER, true);
         * ```
         */
        function getCol(colname: string, title: string, width: number, align?: string, sortable?: boolean): Record<string, any>;

        /**
         * 取得默认的列信息
         * @param {Array} flds - 字段信息列表
         * @param {boolean} [sortable] - 表格中字段列是否可以排序, 默认值: false
         * @param {number} [align] - 表格中字段列对齐方式, 默认值: cx.consts.ALIGN_CENTER
         * @returns {Array<Object>} 构造好的列对象序列
         * @example
         * ```typescript
         * const cols = cx.datagrid.getDefCols(['name', 'age', 'gender'], true, cx.consts.ALIGN_CENTER);
         * ```
         */
        function getDefCols(flds: Array<string>, sortable?: boolean, align?: number): Array<Record<string, any>>;

        /**
         * 取得默认的列信息
         * @param {Array} flds - 字段信息列表
         * @param {Object} tabCfg - 表格配置
         * @param {Array} tabCfg.flds - 配置的字段信息
         * @param {Array} tabCfg.disp - 默认显示列(,分隔)
         * @returns {Array<Object>} 构造好的列对象序列
         * @example
         * ```typescript
         * const cols = cx.datagrid.getDefCols2(['name', 'age'], {
         *   flds: ['name', 'age', 'gender'],
         *   disp: ['name', 'age']
         * });
         * ```
         */
        function getDefCols2(flds: Array<string>, tabCfg: { flds: Array<string>, disp: Array<string> }): Array<Record<string, any>>;

        /**
         * 根据可编辑列信息，取可编辑列的字段值
         * @param {Array<Fld>} cols - Datagrid字段信息
         * @param {Object} row - Datagrid行数据
         * @returns {Object} 返回属性对象
         * @example
         * ```typescript
         * const editValue = cx.datagrid.getEditVal(gridColumns, rowData);
         * ```
         */
        function getEditVal(cols: Array<Record<string, any>>, row: Record<string, any>): Record<string, any>;

        /**
         * 产生DataGrid操作信息
         * @param {string} name - 名称
         * @param {string} title - 显示标题
         * @param {string} icon - 图标Class
         * @returns {Object} 操作信息对象
         * @example
         * ```typescript
         * const oper = cx.datagrid.getOper('edit', '编辑', 'icon-edit');
         * ```
         */
        function getOper(name: string, title: string, icon: string): Record<string, any>;

        /**
         * 产生DataGrid操作列信息
         * @param {string} colname - 列名
         * @param {string} title - 显示标题
         * @param {number} width - 列宽度
         * @param {string} [align] - 对齐方式(ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT), 默认值: cx.consts.ALIGN_CENTER
         * @returns {Object} 操作列信息对象
         * @example
         * ```typescript
         * const operCol = cx.datagrid.getOperCol('operation', '操作', 100, cx.consts.ALIGN_CENTER);
         * ```
         */
        function getOperCol(colname: string, title: string, width: number, align?: string): Record<string, any>;

        /**
         * 判断一列是否可编辑
         * @param {Object} col - Datagrid字段信息
         * @returns {boolean} 是否可编辑
         * @example
         * ```typescript
         * const editable = cx.datagrid.isEditable(column);
         * ```
         */
        function isEditable(col: Record<string, any>): boolean;

        /**
         * 产生列信息
         * @param {Array} cols - 列数组({title, colname, width, align = cx.consts.HORIZEN_CENTER, sortable = true})
         * @param {Array} colInfs - 列信息({[colname], width, align = consts.HORIZEN_CENTER, sortable = true})
         * @param {Array} flds - 字段信息(主要用于设置title)
         * @example
         * ```typescript
         * cx.datagrid.makeCols(
         *   [{title: '姓名', colname: 'name', width: 100}],
         *   [{colname: 'name', width: 100}],
         *   ['name']
         * );
         * ```
         */
        function makeCols(cols: Array<Record<string, any>>, colInfs: Array<Record<string, any>>, flds: Array<string>): void;

        /**
         * 根据列名和列数据计算各列的宽，返回一个新的cols
         * @param {Array<Object>} cols - 列对象数组(支持已构造好的表cols)
         * @param {Array<Object>} tabDatas - 表格待展示数据
         * @param {number} [colMaxWidth=400] - 列的最大宽度
         * @param {number} [fontSize=13] - 字体大小
         * @param {number} [padding=21] - 内容左右边距和
         * @returns {Array<Object>} 返回一个新的cols
         * @example
         * ```typescript
         * const newCols = cx.datagrid.makeColsFitWidth(
         *   [{colname: 'name', title: '姓名'}],
         *   [{name: 'John'}, {name: 'Alice'}],
         *   500,
         *   14,
         *   30
         * );
         * ```
         */
        function makeColsFitWidth(cols: Array<Record<string, any>>, tabDatas: Array<Record<string, any>>, colMaxWidth?: number, fontSize?: number, padding?: number): Array<Record<string, any>>;
    }
} 