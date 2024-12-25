declare namespace cx.svr.auth {
  /**
   * 缓存对象
   */
  const cache: Record<string, any>;

  /**
   * 取全部表达式授权信息
   * @returns 返回全部表达式授权信息
   * @example
   * ```typescript
   * const authInfo = await cx.svr.auth.allAuthEtt();
   * ```
   */
  function allAuthEtt(): Promise<any>;

  /**
   * 取全部表达式授权信息
   * @returns 返回全部表达式授权信息
   */
  function allAuthExp(): Promise<any>;

  /**
   * 删除角色权限类型为当前type的旧数据
   * @param roleId 角色ID
   * @param type 权限类型
   * @param sys 系统号
   * @returns 返回删除结果
   * @example
   * ```typescript
   * await cx.svr.auth.delRoleObj('role123', 'admin', 'sys1');
   * ```
   */
  function delRoleObj(roleId: string, type: string, sys: string): Promise<any>;

  /**
   * 删除系统号为sys的用户被赋予的角色
   * @param userId 用户ID
   * @param sys 系统号
   * @returns 返回删除结果
   */
  function delUserRole(userId: string, sys: string): Promise<any>;

  /**
   * 取缓存数据
   * @param key 缓存键
   * @returns 返回缓存数据
   */
  function getCache(key: string): Promise<any>;

  /**
   * 取指定组(1个或者多个)里面的所有成员
   * @param groups 组ID数组
   * @returns 返回组成员列表
   */
  function memOfGroup(groups: string[]): Promise<any[]>;

  /**
   * 缓存数据
   * @param key 缓存键
   * @param value 缓存值
   * @returns 返回缓存结果
   */
  function putCache(key: string, value: any): Promise<any>;

  /**
   * 取服务对应的网址
   * @returns 返回服务地址
   * @example
   * ```typescript
   * const serviceUrl = cx.svr.auth.url();
   * ```
   */
  function url(): string;
}