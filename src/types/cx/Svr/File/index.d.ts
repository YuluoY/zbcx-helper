declare namespace cx.svr.file {
  /**
   * 下载文件
   * @param params 下载参数
   * @returns 返回下载结果
   * @example
   * ```typescript
   * await cx.svr.file.download({ id: '123' });
   * ```
   */
  function download(params: { id: string | number }): Promise<any>;

  /**
   * 获取文件存储模式
   * @returns 返回存储模式
   * @example
   * ```typescript
   * const mode = cx.svr.file.getMode();
   * ```
   */
  function getMode(): string;

  /**
   * 将临时文件存入文件库
   * @param params 保存参数
   * @returns 返回保存结果
   */
  function saveTempFile(params: {
    filename: string;
    data: any;
  }): Promise<any>;

  /**
   * 文件输出到流
   * @param params 输出参数
   * @returns 返回输出结果
   * @example
   * ```typescript
   * await cx.svr.file.stream({ id: '123' });
   * ```
   */
  function stream(params: { id: string | number }): Promise<any>;

  /**
   * 从回收站撤销删除
   * @param params 撤销参数
   * @returns 返回撤销结果
   */
  function unDel(params: { id: string | number }): Promise<any>;

  /**
   * 取POST服务对应的URL
   * @returns 返回URL地址
   * @example
   * ```typescript
   * const url = cx.svr.file.url();
   * ```
   */
  function url(): string;

  /**
   * 取下载文件的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlDownload(params: { id: string | number }): string;

  /**
   * 取GET服务对应的URL
   * @returns 返回URL地址
   */
  function urlGet(): string;

  /**
   * 取文件输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlStream(params: { id: string | number }): string;
}