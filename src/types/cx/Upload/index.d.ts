declare namespace cx {
  /**
   * 上传文件的辅助对象
   */
  class upload {
    /**
     * 创建 Upload 实例
     * @example
     * ```typescript
     * const uploadInstance = new cx.upload();
     * ```
     */
    constructor();

    /**
     * 取上传对象默认字段
     * @returns 默认字段对象
     * @example
     * ```typescript
     * const defVal = cx.upload.getDefVal();
     * console.log('默认字段:', defVal);
     * ```
     */
    static getDefVal(): Record<string, any>;
  }
} 