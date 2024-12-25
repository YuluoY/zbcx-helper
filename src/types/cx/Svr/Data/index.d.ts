declare namespace cx.svr.data {
    /**
     * 添加单条数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} data - 要添加的数据对象
     * @returns {Promise<number>} 返回添加的数据ID
     * @example
     * ```javascript
     * // 添加单条数据
     * const id = await cx.svr.data.add(101, 1, {
     *   name: '测试',
     *   code: 'test'
     * })
     * ```
     */
    function add(major: number, minor: number, data: Record<string, any>): Promise<number>;

    /**
     * 批量添加数据（返回ID）
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Array<Object>} data - 要添加的数据对象数组
     * @returns {Promise<number[]>} 返回添加的数据ID数组
     * @example
     * ```javascript
     * // 批量添加数据并获取ID
     * const ids = await cx.svr.data.adds(101, 1, [
     *   { name: '测试1', code: 'test1' },
     *   { name: '测试2', code: 'test2' }
     * ]);
     * console.log('添加的数据ID:', ids);
     * ```
     */
    function adds(major: number, minor: number, data: Record<string, any>[]): Promise<number[]>;

    /**
     * 批量添加数据（JSON格式）
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Array<Object>} data - 要添加的数据对象数组
     * @returns {Promise<number[]>} 返回添加的数据ID数组
     * @example
     * ```javascript
     * // 使用JSON格式批量添加数据
     * const ids = await cx.svr.data.addsJson(101, 1, [
     *   { name: '测试1', code: 'test1' },
     *   { name: '测试2', code: 'test2' }
     * ]);
     * console.log('添加的数据ID:', ids);
     * ```
     */
    function addsJson(major: number, minor: number, data: Record<string, any>[]): Promise<number[]>;

    /**
     * 批量添加数据（不返回ID）
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Array<Object>} data - 要添加的数据对象数组
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 批量添加数据（不需要返回ID）
     * await cx.svr.data.addsNoId(101, 1, [
     *   { name: '测试1', code: 'test1' },
     *   { name: '测试2', code: 'test2' }
     * ]);
     * ```
     */
    function addsNoId(major: number, minor: number, data: Record<string, any>[]): Promise<void>;

    /**
     * 批量处理数据
     * @param {Object} params - 批处理参数
     * @returns {Promise<any>} 返回批处理结果
     * @example
     * ```javascript
     * // 批量处理数据
     * const result = await cx.svr.data.batch({
     *   sqls: [
     *     'UPDATE table_name SET status = 1 WHERE id = 1',
     *     'DELETE FROM table_name WHERE id = 2'
     *   ]
     * });
     * ```
     */
    function batch(params: Record<string, any>): Promise<any>;

    /**
     * 调用存储过程
     * @param {string} name - 存储过程名称
     * @param {Array<any>} params - 存储过程参数数组
     * @returns {Promise<any>} 返回存储过程执行结果
     * @example
     * ```javascript
     * // 调用存储过程
     * const result = await cx.svr.data.callProc('proc_name', ['param1', 'param2']);
     * console.log('存储过程执行结果:', result);
     * ```
     */
    function callProc(name: string, params: any[]): Promise<any>;

    /**
     * 检查数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} params - ��查参数
     * @returns {Promise<boolean>} 返回检查结果
     * @example
     * ```javascript
     * // 检查数据是否存在
     * const exists = await cx.svr.data.check(101, 1, {
     *   code: 'test',
     *   name: '测试'
     * });
     * if (exists) {
     *   console.log('数据已存在');
     * }
     * ```
     */
    function check(major: number, minor: number, params: Record<string, any>): Promise<boolean>;

    /**
     * 删除单条数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {number} id - 要删除的数据ID
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 删除单条数据
     * await cx.svr.data.del(101, 1, 123);
     * console.log('数据已删除');
     * ```
     */
    function del(major: number, minor: number, id: number): Promise<void>;

    /**
     * 删除数据（支持条件）
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} params - 删除条件参数
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 按条件删除数据
     * await cx.svr.data.deleteData(101, 1, {
     *   status: 0,
     *   type: 'test'
     * });
     * ```
     */
    function deleteData(major: number, minor: number, params: Record<string, any>): Promise<void>;

    /**
     * 批量删除数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Array<number>} ids - 要删除的数据ID数组
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 批量删除数据
     * await cx.svr.data.dels(101, 1, [1, 2, 3, 4, 5]);
     * console.log('批量删除完成');
     * ```
     */
    function dels(major: number, minor: number, ids: number[]): Promise<void>;

    /**
     * 获取单据数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {number} id - 单据ID
     * @returns {Promise<Object>} 返回单据数据
     * @example
     * ```javascript
     * // 获取单据数据
     * const billData = await cx.svr.data.getBill(101, 1, 123);
     * console.log('单据数据:', billData);
     * ```
     */
    function getBill(major: number, minor: number, id: number): Promise<Record<string, any>>;

    /**
     * 获取序列号
     * @param {string} name - 序列名称
     * @returns {Promise<number>} 返回序列号
     * @example
     * ```javascript
     * // 获取序列号
     * const sequence = await cx.svr.data.getSequence('order_no');
     * console.log('获取到的序列号:', sequence);
     * ```
     */
    function getSequence(name: string): Promise<number>;

    /**
     * 初始化系统
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 初始化系统
     * await cx.svr.data.initSys();
     * console.log('系统初始化完成');
     * ```
     */
    function initSys(): Promise<void>;

    /**
     * 执行数据库查询操作
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} params - 查询参数对象
     * @param {string} [params._key] - 表达式名字，对应sqlexp表name
     * @param {string} [params.vals] - 替换sql中有?变量，以separator分隔依次替换
     * @param {string} [params.separator] - vals的分隔符
     * @param {Array<Array<any>>} [params.args] - 自定义SQL条件件对象数组 [[fld1,oper,val,连接符]]
     * @param {string} [params.tables] - 联合查询表名
     * @param {string} [params.cols] - 返回的列名
     * @param {boolean} [params.geometry] - 是否返回空间数据
     * @param {Object} [params.geom] - 范围查询 {type, coordinates}
     * @param {number} [params.r] - 基于geom的缓冲区半径
     * @param {string} [params.orderby] - 排序规则
     * @param {boolean} [params.init] - 分页标记
     * @param {number} [params.pageno] - 页码
     * @param {number} [params.pagesize] - 每页数据条数
     * @returns {Promise<Array<Object>>} 返回查询结果数组
     * @example
     * ```javascript
     * cx.svr.data.query(101, 1, {
     *   args: [['id', '>', 0], ['name', '=', '测试', 'AND']],
     *   pagesize: '10'
     * })
     * ```
     */
    function query(major: number, minor: number, params: {
        _key?: string;
        vals?: string;
        separator?: string;
        args?: Array<[string, string, any, string?]>;
        tables?: string;
        cols?: string;
        geometry?: boolean;
        geom?: { type: string; coordinates: any[] };
        r?: number;
        orderby?: string;
        init?: boolean;
        pageno?: number;
        pagesize?: number | string;
        [key: string]: any;
    }): Promise<Array<Record<string, any>>>;

    /**
     * 查询所有数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} params - 查询参数
     * @returns {Promise<Array<Object>>} 返回查询结果数组
     * @example
     * ```javascript
     * // 查询所有数据
     * const allData = await cx.svr.data.queryAll(101, 1, {
     *   status: 1,
     *   orderby: 'create_time desc'
     * });
     * console.log('查询结果:', allData);
     * ```
     */
    function queryAll(major: number, minor: number, params: Record<string, any>): Promise<Array<Record<string, any>>>;

    /**
     * 根据ID查询数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {number} id - 数据ID
     * @returns {Promise<Object>} 返回查询结果
     * @example
     * ```javascript
     * // 根据ID查询数据
     * const data = await cx.svr.data.queryId(101, 1, 123);
     * console.log('查询结果:', data);
     * ```
     */
    function queryId(major: number, minor: number, id: number): Promise<Record<string, any>>;

    /**
     * 根据ID查询数据（不带缓存）
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {number} id - 数据ID
     * @returns {Promise<Object>} 返回查询结果
     * @example
     * ```javascript
     * // 根据ID查询数据（不使用缓存）
     * const data = await cx.svr.data.queryId0(101, 1, 123);
     * console.log('查询结果:', data);
     * ```
     */
    function queryId0(major: number, minor: number, id: number): Promise<Record<string, any>>;

    /**
     * 执行SQL查询
     * @param {string} sql - SQL语句
     * @returns {Promise<Array<Object>>} 返回查询结果数组
     * @example
     * ```javascript
     * // 执行自定义SQL查询
     * const result = await cx.svr.data.querySql(
     *   'SELECT * FROM table_name WHERE status = 1 ORDER BY create_time DESC'
     * );
     * console.log('查询结果:', result);
     * ```
     */
    function querySql(sql: string): Promise<Array<Record<string, any>>>;

    /**
     * 重新加载数据
     * @param {Object} params - 重载参数
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 重新加载数据
     * await cx.svr.data.reload({
     *   table: 'table_name',
     *   type: 'all'
     * });
     * console.log('数据重载完成');
     * ```
     */
    function reload(params: Record<string, any>): Promise<void>;

    /**
     * 统计数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Object} params - 统计参数
     * @returns {Promise<Object>} 返回统计结果
     * @example
     * ```javascript
     * // 统计数据
     * const statResult = await cx.svr.data.stat(101, 1, {
     *   group: 'status',
     *   count: 'id'
     * });
     * console.log('统计结果:', statResult);
     * ```
     */
    function stat(major: number, minor: number, params: Record<string, any>): Promise<Record<string, any>>;

    /**
     * 更新单条数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {number} id - 数据ID
     * @param {Object} data - 更新的数据对象
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 更新单条数据
     * await cx.svr.data.update(101, 1, 123, {
     *   name: '新名称',
     *   status: 2
     * });
     * console.log('数据更新完成');
     * ```
     */
    function update(major: number, minor: number, id: number, data: Record<string, any>): Promise<void>;

    /**
     * 批量更新数据
     * @param {number} major - 实体（主表）主类型
     * @param {number} minor - 实体（主表）子类型
     * @param {Array<Object>} data - 更新的数据对象数组
     * @returns {Promise<void>}
     * @example
     * ```javascript
     * // 批量更新数据
     * await cx.svr.data.updates(101, 1, [
     *   { id: 1, status: 2 },
     *   { id: 2, status: 2 }
     * ]);
     * console.log('批量更新完成');
     * ```
     */
    function updates(major: number, minor: number, data: Array<Record<string, any>>): Promise<void>;

    /**
     * 获取URL
     * @param {string} name - URL名称
     * @returns {Promise<string>} 返回URL
     * @example
     * ```javascript
     * // 获取指定名称的URL
     * const apiUrl = await cx.svr.data.url('api_name');
     * console.log('API URL:', apiUrl);
     * ```
     */
    function url(name: string): Promise<string>;

    /**
     * 获取版本信息
     * @returns {Promise<string>} 返回版本号
     * @example
     * ```javascript
     * // 获取版本信息
     * const version = await cx.svr.data.version();
     * console.log('当前版本:', version);
     * ```
     */
    function version(): Promise<string>;
} 