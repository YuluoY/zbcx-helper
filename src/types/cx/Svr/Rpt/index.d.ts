/**
 * 提供报表导出相关的服务，包括单报表导出、多报表导出以及通过SQL导出报表等功能。
 */
declare namespace cx.svr.rpt {
  /**
   * 导出单报表
   * @param params 导出参数
   * @returns 返回导出结果
   */
  function getRpt(params: {
    major: number;
    minor: number;
    data: Record<string, any>;
  }): Promise<any>;

  /**
   * 利用usersql导出报表
   * @param params 导出参数
   * @returns 返回导出结果
   */
  function getRptBySql(params: {
    sql: string;
    args?: any[];
  }): Promise<any>;

  /**
   * 导出多报表
   * @param params 导出参数
   * @returns 返回导出结果
   */
  function getRpts(params: {
    reports: Array<{
      major: number;
      minor: number;
      data: Record<string, any>;
    }>;
  }): Promise<any>;

  /**
   * 取服务对应的网址
   * @returns 返回服务地址
   */
  function url(): string;
}