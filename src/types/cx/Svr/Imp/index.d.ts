declare namespace cx {
  /**
   * 数据导入服务类
   */
  namespace svr {
    /**
     * 提供数据导入相关的服务，包括Excel表格导入、压缩包导入等功能。
     */
    namespace imp {
      /**
       * 获取表数据
       * @param params 参数对象
       * @returns 返回表数据
       * @example
       * ```typescript
       * await cx.svr.imp.getXlsData({ 
       *   filename: 'path/to/excel.xlsx'
       * });
       * ```
       */
      function getXlsData(params: {
        filename: string;
      }): Promise<any>;

      /**
       * 获取表头
       * @param params 参数对象
       * @returns 返回表头数据
       * @example
       * ```typescript
       * await cx.svr.imp.getXlsHeader({ 
       *   filename: 'path/to/excel.xlsx'
       * });
       * ```
       */
      function getXlsHeader(params: {
        filename: string;
      }): Promise<any>;

      /**
       * 导入Excel
       * @param params 导入参数
       * @returns 返回导入结果
       * @example
       * ```typescript
       * await cx.svr.imp.impXls({ 
       *   filename: 'path/to/excel.xlsx',
       *   data: [{
       *     _major: 1,
       *     _minor: 2,
       *     index: 0,
       *     header: {
       *       0: 'name',
       *       1: 'age',
       *       2: 'department'
       *     }
       *   }],
       *   prj_id: 123,
       *   attachfld: {
       *     prj_name: "测试项目",
       *     reg: "120101"
       *   }
       * });
       * ```
       */
      function impXls(params: {
        filename: string;
        data: Array<{
          _major: number;
          _minor: number;
          index: number;
          header: Record<number, string>;
        }>;
        prj_id: number;
        attachfld?: Record<string, any>;
      }): Promise<any>;

      /**
       * 导入压缩包
       * @param entity 实体名称
       * @param type 实体类型
       * @param params 导入参数
       * @returns 返回导入结果
       * @example
       * ```typescript
       * await cx.svr.imp.impZip('entity', 1, { 
       *   fld: 'name',
       *   filename: 'path/to/archive.zip',
       *   dir: 'path/to/extract'
       * });
       * ```
       */
      function impZip(entity: string, type: number, params: {
        fld: string;
        filename: string;
        dir: string;
      }): Promise<any>;

      /**
       * 取服务对应的网址
       * @returns 返回服务地址
       * @example
       * ```typescript
       * const serviceUrl = cx.svr.imp.url();
       * ```
       */
      function url(): string;
    }
  }
} 