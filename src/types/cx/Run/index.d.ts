declare namespace cx {
  interface RunInfo {
    /** 运行实例id */
    runId: string;
    /** 运行状态，runPlug完成并返回实例对象时为true */
    runFinish: boolean;
    /** 插件标识名 */
    name: string;
    /** 插件ui类型 */
    uitype: number;
    /** 插件文件路径 */
    url: string;
    /** 插件的组件对象，只有加载运行成功后才有值 */
    component: any | null;
    /** 插件父容器插件名 */
    container: string;
  }

  interface RunInstance {
    /** 删除该实例 */
    remove(): void;
    /** 实例是否正在运行 */
    isReady(): boolean;
    /** 获取插件的运行参数 */
    getParams(): Record<string, any>;
    /** 获取运行实例的组件对象 */
    getComponent(): any;
    /** 设置运行实例的组件对象 */
    setComponent(component: any): void;
    /** 获取插件的对话框容器组件 */
    getWrapDialogs(): any;
    /** 设置插件的对话框容器组件 */
    setWrapDialogs(component: any): void;
    /** 获取插件的容器组件 */
    getWrapDynaComs(name?: string): any;
    /** 设置插件的容器组件 */
    setWrapDynaComs(component: any, name?: string): void;
    /** 获取插件的单页面容器组件 */
    getWrapSinglePages(): any;
    /** 设置插件的单页面容器组件 */
    setWrapSinglePages(component: any): void;
    /** 运行实例数据对象 */
    data: {
      runInfo: RunInfo;
      uiWrap: Record<string, any>;
      params: Record<string, any>;
    } | null;
  }

  interface PlugDef {
    /** 插件名 */
    name: string;
    /** 插件ui类型 */
    uitype: number;
    /** 多实例类型 */
    runn: number;
    /** 插件地址 */
    url: string;
    /** 插件父容器插件名 */
    container?: string;
  }
  /**
   * Run 类 - 运行插件
   * 提供了一系列用于管理插件运行的静态方法
   */
  class run {

    /**
     * 判断是否可多实例运行，只有叶子插件可以多实例运行
     * @param plugDef 插件定义对象
     * @example
     * ```ts
     * const canMulti = cx.run.canMultRun(plugDef);
     * ```
     */
    static canMultRun(plugDef: PlugDef): boolean;

    /**
     * 关闭在运行的UI_DIALOG、UI_TABPAGE、UI_COM非路由类型插件
     * @param runInfo 插件运行信息对象或插件名
     * @param success 关闭成功回调函数
     * @example
     * ```ts
     * cx.run.closeRun({
     *   runId: 'instance123',
     *   runFinish: true,
     *   name: 'myPlugin',
     *   uitype: 1,
     *   url: 'path/to/plugin',
     *   component: {},
     *   container: 'parentPlugin'
     * });
     * ```
     */
    static closeRun(runInfo: RunInfo | string, success?: () => void): void;

    /**
     * 获取全部监管的已运行插件实例
     * @example
     * ```ts
     * const instances = cx.run.getAllInstance();
     * ```
     */
    static getAllInstance(): Record<string, RunInstance>;

    /**
     * 获取保存当前路由序列
     * @example
     * ```ts
     * const routes = cx.run.getCacheCurrentRoute();
     * ```
     */
    static getCacheCurrentRoute(): any[];

    /**
     * 获取当前$route的组件对象
     * @example
     * ```ts
     * const component = cx.run.getCurRouteComponent();
     * ```
     */
    static getCurRouteComponent(): any;

    /**
     * 用路由$route对象redirectedFrom属性向父路由遍历，查找name路由对象
     * @param name 路由名
     * @example
     * ```ts
     * const route = cx.run.getRouteByRedirectedFrom('sourcePage');
     * ```
     */
    static getRouteByRedirectedFrom(name: string): any | null;

    /**
     * 获取路由的运行参数
     * @param name 路由名
     * @example
     * ```ts
     * const params = cx.run.getRouteRunParams('myRoute');
     * ```
     */
    static getRouteRunParams(name: string): Record<string, any>;

    /**
     * 获取已运行插件实例
     * @param name 插件名
     * @example
     * ```ts
     * const instance = cx.run.getRunInstance('myPlugin');
     * ```
     */
    static getRunInstance(name: string): RunInstance | null;

    /**
     * 是否多实例运行模式
     * @param runInfo 实例信息对象
     * @example
     * ```ts
     * const isMultMode = cx.run.isMultRunMode(runInfo);
     * ```
     */
    static isMultRunMode(runInfo: RunInfo): boolean;

    /**
     * 判断运行参数是否相同
     * @param name 插件名
     * @param newParams 插件新运行参数
     * @example
     * ```ts
     * const isSame = cx.run.isRunParamsSame('myPlugin', 123);
     * ```
     */
    static isRunParamsSame(name: string, newParams: any): boolean;

    /**
     * 生成运行实例id
     * @example
     * ```ts
     * const runId = cx.run.makeRunId();
     * ```
     */
    static makeRunId(): string;

    /**
     * 生成运行信息对象
     * @param def 插件定义信息
     * @example
     * ```ts
     * const runInfo = cx.run.makeRunInfo({
     *   name: 'myPlugin',
     *   uitype: 1,
     *   runn: 0,
     *   url: '/plugins/myPlugin'
     * });
     * ```
     */
    static makeRunInfo(def: PlugDef): RunInfo;

    /**
     * 生成运行参数
     * @param params 插件的运行参数对象
     * @param runInfo 插件的运行信息对象
     * @example
     * ```ts
     * const runParams = cx.run.makeRunParams({ key: 'value' }, runInfo);
     * ```
     */
    static makeRunParams(params: Record<string, any> | null, runInfo: RunInfo | null): Record<string, any>;

    /**
     * 恢复当前路由
     * @param routeRecord 跳转的目标路由记录
     * @example
     * ```ts
     * cx.run.restoreCurrentRoute(routeRecord);
     * ```
     */
    static restoreCurrentRoute(routeRecord: any): void;

    /**
     * 运行插件
     * @param plug 插件定义对象或插件名
     * @param runParams 插件运行参数
     * @param overDef 覆盖插件定义的参数
     * @example
     * ```ts
     * cx.run.runPlug({
     *   name: 'myPlugin',
     *   uitype: 1,
     *   runn: 0,
     *   url: '/plugins/myPlugin'
     * }, { width: 800 });
     * ```
     */
    static runPlug(
      plug: PlugDef | string,
      runParams?: Record<string, any>,
      overDef?: Record<string, any>
    ): Promise<RunInfo>;

    /**
     * 保存当前路由
     * @example
     * ```ts
     * cx.run.saveCurrentRoute();
     * ```
     */
    static saveCurrentRoute(): void;

    /**
     * 使用插件库
     * @param libs 插件库序列
     * @example
     * ```ts
     * cx.run.usePlugLib([{
     *   lib: {
     *     'plugin1': '/path/to/module1',
     *     'plugin2': '/path/to/module2'
     *   }
     * }]);
     * ```
     */
    static usePlugLib(libs: Array<{ lib: Record<string, string> }>): void;
  }
}