declare namespace cx.svr.feature {
  /**
   * 批量添加图形和属性对象
   * @param data 要添加的图形和属性对象数组
   * @returns 返回添加结果
   * @example
   * ```javascript
   * const addList = [{ major: 1, minor: 2, gra: {}, att: {} }];
   * await cx.svr.feature.addsAttGra(addList);
   * ```
   */
  function addsAttGra(data: Array<{
    major: number;
    minor: number;
    gra: Record<string, any>;
    att: Record<string, any>;
  }>): Promise<any>;

  /**
   * 批量删除图形和属性对象
   * @param data 要删除的对象数组
   * @returns 返回删除结果
   * @example
   * ```javascript
   * const delList = [{ major: 1, minor: 2, id: 123 }];
   * await cx.svr.feature.delsAttGra(delList);
   * ```
   */
  function delsAttGra(data: Array<{
    major: number;
    minor: number;
    id: number;
  }>): Promise<any>;

  /**
   * 获取点的拓扑线图形属性对象序列
   * @param major 实体（主表）主类型
   * @param minor 实体（主表）子类型
   * @param id 数据ID
   * @returns 返回拓扑线图形属性对象序列
   * @example
   * ```javascript
   * await cx.svr.feature.getTopAttGraph(1, 2, 123);
   * ```
   */
  function getTopAttGraph(major: number, minor: number, id: number): Promise<any>;

  /**
   * 获取拓扑线信息
   * @param major 实体（主表）主类型
   * @param minor 实体（主表）子类型
   * @param id 数据ID
   * @returns 返回拓扑线信息
   * @example
   * ```javascript
   * await cx.svr.feature.getTopInfo(1, 2, 123);
   * ```
   */
  function getTopInfo(major: number, minor: number, id: number): Promise<any>;

  /**
   * 批量查询图形和属性对象
   * @param data 要查询的对象数组
   * @returns 返回查询结果
   * @example
   * ```javascript
   * const qryList = [{ major: 1, minor: 2, id: 123 }];
   * await cx.svr.feature.qrysAttGra(qryList);
   * ```
   */
  function qrysAttGra(data: Array<{
    major: number;
    minor: number;
    id: number;
  }>): Promise<any>;

  /**
   * 批量更新图形和属性对象
   * @param data 要更新的图形和属性对象数组
   * @returns 返回更新结果
   * @example
   * ```javascript
   * const updList = [{ major: 1, minor: 2, gra: {}, att: {} }];
   * await cx.svr.feature.updsAttGra(updList);
   * ```
   */
  function updsAttGra(data: Array<{
    major: number;
    minor: number;
    gra: Record<string, any>;
    att: Record<string, any>;
  }>): Promise<any>;
}