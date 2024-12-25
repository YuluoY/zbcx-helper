declare namespace cx.svr.fullText {
  /**
   * 删除索引
   * @param params 删除参数
   * @returns 返回删除结果
   * @example
   * ```typescript
   * await cx.svr.fulltext.del({ id: '123' });
   * ```
   */
  function del(params: { id: string | number }): Promise<any>;

  /**
   * 批量删除索引
   * @param params 删除参数
   * @returns 返回删除结果
   */
  function dels(params: { ids: Array<string | number> }): Promise<any>;

  /**
   * 获取索引内容
   * @param params 查询参数
   * @returns 返回索引内容
   * @example
   * ```typescript
   * const content = await cx.svr.fulltext.get({ id: '123' });
   * ```
   */
  function get(params: { id: string | number }): Promise<any>;

  /**
   * 插入索引
   * @param params 插入参数
   * @returns 返回插入结果
   */
  function insert(params: {
    id: string | number;
    content: string;
    type?: string;
  }): Promise<any>;

  /**
   * 搜索索引
   * @param params 搜索参数
   * @returns 返回搜索结果
   * @example
   * ```typescript
   * const results = await cx.svr.fulltext.search({ keyword: 'test' });
   * ```
   */
  function search(params: {
    keyword: string;
    type?: string;
    page?: number;
    pageSize?: number;
  }): Promise<any>;

  /**
   * 更新索引
   * @param params 更新参数
   * @returns 返回更新结果
   */
  function update(params: {
    id: string | number;
    content: string;
    type?: string;
  }): Promise<any>;

  /**
   * 取POST服务对应的URL
   * @returns 返回URL地址
   * @example
   * ```typescript
   * const url = cx.svr.fulltext.url();
   * ```
   */
  function url(): string;

  /**
   * 取GET服务对应的URL
   * @returns 返回URL地址
   */
  function urlGet(): string;
}