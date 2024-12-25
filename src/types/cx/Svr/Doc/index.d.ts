declare namespace cx.svr.doc {
  /**
   * 下载文档原始文件
   * @param params 下载参数
   * @returns 返回下载结果
   * @example
   * ```typescript
   * await cx.svr.doc.download({ id: '123' });
   * ```
   */
  function download(params: { id: string | number }): Promise<any>;

  /**
   * 下载文档缩略图
   * @param params 下载参数
   * @returns 返回下载结果
   */
  function downloadThumbnail(params: { id: string | number }): Promise<any>;

  /**
   * 生成预览文件
   * @param params 预览参数
   * @returns 返回预览结果
   * @example
   * ```typescript
   * await cx.svr.doc.genPreview({ id: 123 });
   * ```
   */
  function genPreview(params: { id: string | number }): Promise<any>;

  /**
   * 生成缩略图
   * @param params 缩略图参数
   * @returns 返回生成结果
   */
  function genThumbnail(params: { id: string | number }): Promise<any>;

  /**
   * 获取文档存储模式
   * @returns 返回存储模式
   * @example
   * ```typescript
   * const mode = cx.svr.doc.getMode();
   * ```
   */
  function getMode(): string;

  /**
   * 将临时文件存入文档库
   * @param params 保存参数
   * @returns 返回保存结果
   */
  function saveTempFile(params: {
    filename: string;
    data: any;
  }): Promise<any>;

  /**
   * 文档原始文件输出到流
   * @param params 输出参数
   * @returns 返回输出结果
   * @example
   * ```typescript
   * await cx.svr.doc.stream({ id: '123' });
   * ```
   */
  function stream(params: { id: string | number }): Promise<any>;

  /**
   * 文档缩略图输出到流
   * @param params 输出参数
   * @returns 返回输出结果
   */
  function streamPreview(params: { id: string | number }): Promise<any>;

  /**
   * 文档缩略图输出到流
   * @param params 输出参数
   * @returns 返回输出结果
   */
  function streamThumbnail(params: { id: string | number }): Promise<any>;

  /**
   * 取文档缩略图输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function streamThumbnailFile(params: { id: string | number }): string;

  /**
   * 从回收站撤销删除
   * @param params 撤销参数
   * @returns 返回撤销结果
   */
  function unDel(params: { id: string | number }): Promise<any>;

  /**
   * 解压缩文件并在media表写入记录
   * @param params 解压参数
   * @returns 返回解压结果
   */
  function upzip(params: {
    filename: string;
    data: any;
  }): Promise<any>;

  /**
   * 取POST服务对应的URL
   * @returns 返回URL地址
   * @example
   * ```typescript
   * const url = cx.svr.doc.url();
   * ```
   */
  function url(): string;

  /**
   * 取下载文档的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlDownload(params: { id: string | number }): string;

  /**
   * 取下载文档缩略图的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlDownloadThumbnail(params: { id: string | number }): string;

  /**
   * 取GET服务对应的URL
   * @returns 返回URL地址
   */
  function urlGet(): string;

  /**
   * 取文档输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlStream(params: { id: string | number }): string;

  /**
   * 取文档预览文件输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlStreamPreview(params: { id: string | number }): string;

  /**
   * 取文档缩略图输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlStreamThumbnail(params: { id: string | number }): string;

  /**
   * 取文档缩略图输出到流的URL
   * @param params 参数对象
   * @returns 返回URL地址
   */
  function urlStreamThumbnailFile(params: { id: string | number }): string;
}