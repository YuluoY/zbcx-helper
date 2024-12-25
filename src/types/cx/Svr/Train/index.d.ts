/**
 * 提供培训相关的服务，包括培训文档的上传、保存、删除、流式输出等功能。
 */
declare namespace cx.svr.train {
  /**
   * 删除培训文档
   * @param params 删除参数
   * @returns 返回删除结果
   */
  function del(params: {
    id: number;
  }): Promise<any>;

  /**
   * 把上传文件保存成培训支持的文件格式
   * @param params 保存参数
   * @returns 返回保存结果
   */
  function save(params: {
    filename: string;
    data: any;
  }): Promise<any>;

  /**
   * 把文件输出到流
   * @param params 输出参数
   * @returns 返回输出结果
   */
  function stream(params: {
    id: number;
  }): Promise<any>;

  /**
   * 把上传文件保存成培训支持的文件格式
   * @param params 保存参数
   * @returns 返回保存结果
   */
  function unzip(params: {
    filename: string;
    data: any;
  }): Promise<any>;

  /**
   * 取服务对应的网址
   * @returns 返回服务地址
   */
  function url(): string;

  /**
   * 取 GET 服务对应的URL
   * @returns 返回GET服务地址
   */
  function urlGet(): string;
}