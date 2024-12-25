declare namespace cx {
  namespace svr {
    /**
     * 数据服务类
     */
    namespace data {
      /**
       * 批量执行SQL语句
       * @param params 执行参数
       * @returns 返回执行结果
       * @example
       * ```typescript
       * await cx.svr.data.batch({
       *   sqls: ['UPDATE table SET field = 1', 'DELETE FROM table WHERE id = 1']
       * });
       * ```
       */
      function batch(params: { sqls: string[] }): Promise<any>;

      /**
       * 调用存储过程
       * @param params 调用参数
       * @returns 返回调用结果
       * @example
       * ```typescript
       * const result = await cx.svr.data.callProc({
       *   name: 'proc_name',
       *   params: ['param1', 'param2']
       * });
       * ```
       */
      function callProc(params: {
        name: string;
        params?: any[];
      }): Promise<any>;

      /**
       * 检查数据是否存在
       * @param params 检查参数
       * @returns 返回检查结果
       */
      function check(params: {
        table: string;
        where: Record<string, any>;
      }): Promise<boolean>;

      /**
       * 删除数据
       * @param params 删除参数
       * @returns 返回删除结果
       * @example
       * ```typescript
       * await cx.svr.data.del({
       *   table: 'table_name',
       *   where: { id: 1 }
       * });
       * ```
       */
      function del(params: {
        table: string;
        where: Record<string, any>;
      }): Promise<any>;

      /**
       * 批量删除数据
       * @param params 删除参数
       * @returns 返回删除结果
       */
      function dels(params: {
        table: string;
        where: Record<string, any>;
      }): Promise<any>;

      /**
       * 获取单据数据
       * @param params 查询参数
       * @returns 返回单据数据
       * @example
       * ```typescript
       * const bill = await cx.svr.data.getBill({
       *   table: 'table_name',
       *   id: 1
       * });
       * ```
       */
      function getBill(params: {
        table: string;
        id: string | number;
      }): Promise<any>;

      /**
       * 获取序列号
       * @param params 序列参数
       * @returns 返回序列号
       */
      function getSequence(params: {
        name: string;
        length?: number;
      }): Promise<string>;

      /**
       * 初始化系统
       * @param params 初始化参数
       * @returns 返回初始化结果
       */
      function initSys(params: {
        major: number;
        minor: number;
        data: Record<string, any>;
      }): Promise<any>;

      /**
       * 查询数据
       * @param params 查询参数
       * @returns 返回查询结果
       * @example
       * ```typescript
       * const data = await cx.svr.data.query({
       *   table: 'table_name',
       *   where: { status: 1 }
       * });
       * ```
       */
      function query(params: {
        table: string;
        where?: Record<string, any>;
        order?: string | string[];
        page?: number;
        pageSize?: number;
      }): Promise<any>;

      /**
       * 查询所有数据
       * @param params 查询参数
       * @returns 返回查询结果
       */
      function queryAll(params: {
        table: string;
        where?: Record<string, any>;
        order?: string | string[];
      }): Promise<any[]>;

      /**
       * 根据ID查询数据
       * @param params 查询参数
       * @returns 返回查询结果
       */
      function queryId(params: {
        table: string;
        id: string | number;
      }): Promise<any>;

      /**
       * 根据ID查询数据(返回第一条)
       * @param params 查询参数
       * @returns 返回查询结果
       */
      function queryId0(params: {
        table: string;
        id: string | number;
      }): Promise<any>;

      /**
       * 执行SQL查询
       * @param params 查询参数
       * @returns 返回查询结果
       * @example
       * ```typescript
       * const data = await cx.svr.data.querySql({
       *   sql: 'SELECT * FROM table WHERE status = 1'
       * });
       * ```
       */
      function querySql(params: {
        sql: string;
        page?: number;
        pageSize?: number;
      }): Promise<any>;

      /**
       * 重新加载数据
       * @returns 返回重载结果
       */
      function reload(): Promise<any>;

      /**
       * 统计数据
       * @param params 统计参数
       * @returns 返回统计结果
       */
      function stat(params: {
        table: string;
        where?: Record<string, any>;
      }): Promise<number>;

      /**
       * 更新数据
       * @param params 更新参数
       * @returns 返回更新结果
       * @example
       * ```typescript
       * await cx.svr.data.updates({
       *   table: 'table_name',
       *   data: { status: 2 },
       *   where: { id: 1 }
       * });
       * ```
       */
      function updates(params: {
        table: string;
        data: Record<string, any>;
        where: Record<string, any>;
      }): Promise<any>;

      /**
       * 取POST服务对应的URL
       * @returns 返回URL地址
       * @example
       * ```typescript
       * const url = cx.svr.data.url();
       * ```
       */
      function url(): string;

      /**
       * 取GET服务对应的URL
       * @returns 返回URL地址
       */
      function urlGet(): string;

      /**
       * 获取版本信息
       * @returns 返回版本信息
       */
      function version(): Promise<{
        major: number;
        minor: number;
        data: Record<string, any>;
      }>;
    }
  }
} 