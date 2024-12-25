declare namespace cx {
  /**
   * 属性处理操作服务类
   */
  namespace svr {
    /**
     * 提供对数据属性的基本操作服务，包括插入、更新、删除等功能。
     */
    namespace attOper {
      /**
       * 删除操作
       * @param major 实体（主表）主类型
       * @param minor 实体（主表）子类型
       * @param data 删除参数
       * @returns 返回是否删除成功
       * @example
       * ```typescript
       * await cx.svr.attOper.del(1, 2, { id: 1 });
       * ```
       */
      function del(major: number, minor: number, data: { id: number }): Promise<boolean>;

      /**
       * 批量删除操作
       * @param major 实体（主表）主类型
       * @param minor 实体（主表）子类型
       * @param data 批量删除参数数组
       * @returns 返回是否全部删除成功
       * @example
       * ```typescript
       * await cx.svr.attOper.dels(1, 2, [{ id: 1 }, { id: 2 }]);
       * ```
       */
      function dels(major: number, minor: number, data: Array<{ id: number }>): Promise<boolean>;

      /**
       * 插入操作(不带ID)
       * @param major 实体（主表）主类型
       * @param minor 实体（主表）子类型
       * @param data 插入数据对象
       * @returns 返回新增数据的ID
       * @example
       * ```typescript
       * await cx.svr.attOper.insert(1, 2, { name: "test" });
       * ```
       */
      function insert(major: number, minor: number, data: Record<string, any>): Promise<number>;

      /**
       * 更新操作
       * @param major 实体（主表）主类型
       * @param minor 实体（主表）子类型
       * @param newData 新数据对象
       * @param oldData 原数据对象
       * @returns 返回是否更新成功
       * @example
       * ```typescript
       * await cx.svr.attOper.update(1, 2, { name: "new_name" }, { id: 1, name: "old_name" });
       * ```
       */
      function update(major: number, minor: number, newData: Record<string, any>, oldData: { id: number } & Record<string, any>): Promise<boolean>;
    }
  }
} 