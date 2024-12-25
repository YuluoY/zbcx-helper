/**
 * 文件上传服务类
 */
declare namespace cx.svr.upload {
  /**
   * 上传文件
   * @param params 上传参数
   * @returns 返回上传结果
   * @example
   * ```typescript
   * const result = await cx.svr.upload.file({
   *   file: fileObject,
   *   type: 'image'
   * });
   * ```
   */
  function file(params: {
    file: File | Blob;
    type?: string;
    onProgress?: (progress: number) => void;
  }): Promise<{
    id: string | number;
    url: string;
    name: string;
    size: number;
    type: string;
  }>;

  /**
   * 批量上传文件
   * @param params 上传参数
   * @returns 返回上传结果
   * @example
   * ```typescript
   * const results = await cx.svr.upload.files({
   *   files: fileList,
   *   type: 'document'
   * });
   * ```
   */
  function files(params: {
    files: Array<File | Blob>;
    type?: string;
    onProgress?: (progress: number) => void;
  }): Promise<Array<{
    id: string | number;
    url: string;
    name: string;
    size: number;
    type: string;
  }>>;

  /**
   * 获取上传配置
   * @returns 返回上传配置
   * @example
   * ```typescript
   * const config = await cx.svr.upload.getConfig();
   * ```
   */
  function getConfig(): Promise<{
    maxSize: number;
    allowTypes: Array<string>;
    uploadPath: string;
  }>;

  /**
   * 取POST服务对应的URL
   * @returns 返回URL地址
   * @example
   * ```typescript
   * const url = cx.svr.upload.url();
   * ```
   */
  function url(): string;

  /**
   * 取GET服务对应的URL
   * @returns 返回URL地址
   */
  function urlGet(): string;
}