declare namespace cx.svr.grpc {
  /**
   * 调用gRPC服务
   * @param params 调用参数
   * @returns 返回调用结果
   * @example
   * ```typescript
   * const result = await cx.svr.grpc.call({
   *   service: 'MyService',
   *   method: 'MyMethod',
   *   data: { key: 'value' }
   * });
   * ```
   */
  function call(params: {
    service: string;
    method: string;
    data?: any;
  }): Promise<any>;

  /**
   * 获取gRPC服务列表
   * @returns 返回服务列表
   * @example
   * ```typescript
   * const services = await cx.svr.grpc.getServices();
   * ```
   */
  function getServices(): Promise<Array<string>>;

  /**
   * 获取gRPC服务方法列表
   * @param params 查询参数
   * @returns 返回方法列表
   */
  function getMethods(params: { service: string }): Promise<Array<string>>;

  /**
   * 取POST服务对应的URL
   * @returns 返回URL地址
   * @example
   * ```typescript
   * const url = cx.svr.grpc.url();
   * ```
   */
  function url(): string;

  /**
   * 取GET服务对应的URL
   * @returns 返回URL地址
   */
  function urlGet(): string;
}
