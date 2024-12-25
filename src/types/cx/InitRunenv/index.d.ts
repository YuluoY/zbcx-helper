declare namespace cx {
  interface ILoginAuth {
    authorization: string;
    user: Record<string, any>;
  }

  interface InitOptions {
    /** 用户登录后的许可 */
    authorization: string;
    /** 权限处理对象 */
    access?: any; // cx.IAccess
    /** codeFactory实例对象，默认使用内置对象 */
    codeFactory?: any; // cx.CodeFactory
    /** 属性类对照表 */
    attClass?: string;
    /** 前端缓存数据库名 */
    appDbName?: string;
  }

  /**
   * InitRunenv 类提供了一组静态方法，用于初始化和管理运行环境
   */
  class InitRunenv {
    /**
     * 对解析后的数据预处理
     * @param data 需要预处理的数据
     */
    static doParsedData(data: any[]): void;

    /**
     * 获取初始化的系统号
     * @returns 返回系统号或空字符串
     */
    static getInitSys(): string;

    /**
     * 获取登录后的用户认证信息
     * @returns 返回认证字符串，有值时结构 {authorization: , user: }；未登录时返回空对象
     */
    static getLoginAuth(): ILoginAuth | Record<string, never>;

    /**
     * 初始化运行环境
     * @param sys 系统号
     * @param options 参数对象
     * @returns Promise对象
     */
    static init(sys: number, options: InitOptions): Promise<void>;

    /**
     * 根据数据构造 $g 对象
     * @param ret 调用 initsvr 返回的初始化数据对象
     * @param options 参数对象
     * @returns Promise对象
     */
    static init$g(ret: Record<string, any>, options: InitOptions): Promise<void>;

    /**
     * 解析系统初始化服务返回数据
     * @param data 需要解析的数据
     */
    static parseData(data: any[]): void;

    /**
     * 保存初始化的系统号
     * @param sys 系统号
     * @param time 有效时长，单位分钟（可选，默认值为 0）
     */
    static setInitSys(sys: string, time?: number): void;

    /**
     * 清除或保存登录后的用户认证
     * @param loginAuth 登录成功的认证对象，不传时移除登录状态
     * @param time 有效时长，单位分钟（可选，默认值为 0）
     */
    static setLoginAuth(loginAuth?: ILoginAuth, time?: number): void;

    /**
     * 根据数据库的版本更新本地缓存
     */
    static updCacheByDbVersion(): void;
  }
} 