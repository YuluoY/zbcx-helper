declare namespace cx {
  /**
   * IndexDb 是一个用于操作 IndexedDB 的工具类
   */
  class IndexDb {
    /**
     * IndexDb 构造函数
     * @param options 配置选项
     */
    constructor(options: {
      dbName: string;
      dbVersion?: string;
    });

    /** 默认的存储对象主键字段名 */
    readonly defStoreKeyPath: string;

    /** 默认的存储对象表名 */
    readonly defStoreName: string;

    /**
     * 增加数据
     * @param options 参数对象
     * @example
     * ```ts
     * await db.add({
     *   name: 'storeName',
     *   data: { key: 'uniqueKey', value: 'someValue' }
     * });
     * ```
     */
    add(options: {
      name?: string;
      data: { key: string; value: any };
      keyFunc?: (data: any) => any;
    }): Promise<void>;

    /**
     * 批量添加数据
     * @param options 参数对象
     */
    adds(options: {
      name?: string;
      datas: Array<{ key: string; value: any }>;
      keyFunc?: (data: any) => any;
    }): Promise<void>;

    /**
     * 清空表数据
     * @param name 表名
     */
    clear(name?: string): Promise<void>;

    /** 关闭数据库 */
    closeDb(): void;

    /** 创建数据库 */
    createDb(): Promise<void>;

    /**
     * 创建存储对象
     * @param storeConf 存储配置
     */
    createStores(storeConf: {
      name: string;
      conf?: {
        keyPath?: string;
        autoIncrement?: boolean;
      };
      indexs?: Array<{
        name: string;
        conf?: {
          unique?: boolean;
        };
      }>;
    }): Promise<void>;

    /**
     * 删除数据
     * @param options 参数对象
     */
    delete(options: {
      name?: string;
      key: string;
    }): Promise<void>;

    /**
     * 删除数据表
     * @param names 要删除的表名数组
     */
    deleteStores(names: string[]): Promise<void>;

    /**
     * 批量删除数据
     * @param options 参数对象
     */
    dels(options: {
      name?: string;
      keys: string[];
    }): Promise<void>;

    /**
     * 查询指定表的所有数据
     * @param name 表名
     */
    getAlldata(name?: string): Promise<any[]>;

    /**
     * 获取表 IDBObjectStore 对象
     * @param name 表名
     * @param opertype 操作类型
     */
    getStore(name?: string, opertype?: 'readonly' | 'readwrite'): IDBObjectStore | null;

    /**
     * 获取表的主键字段名
     * @param name 表名
     */
    getStoreKeyPath(name?: string): string;

    /**
     * 查询数据
     * @param options 参数对象
     */
    query(options: {
      name?: string;
      key?: string;
      index?: {
        name: string;
        value: string;
      };
    }): Promise<any>;

    /**
     * 根据索引查询数据
     * @param options 参数对象
     */
    queryByIndexs(options: {
      name?: string;
      indexs: Array<{
        name: string;
        value: string;
      }>;
    }): Promise<any[]>;

    /**
     * 根据主键查询数据
     * @param options 参数对象
     */
    queryByKeys(options: {
      name?: string;
      keys: string[];
      indexs?: Array<{
        name: string;
        value: string;
      }>;
    }): Promise<any[]>;

    /**
     * 更新数据
     * @param options 参数对象
     */
    update(options: {
      name?: string;
      data: {
        key: string;
        value: any;
      };
    }): Promise<void>;

    /**
     * 批量更新数据
     * @param options 参数对象
     */
    updates(options: {
      name?: string;
      datas: Array<{
        key: string;
        value: any;
      }>;
    }): Promise<void>;
  }
} 