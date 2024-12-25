declare namespace cx {
  /**
   * Router 路由管理类
   * 所有添加的路由记录组件必须通过makeComponent函数处理
   */
  namespace router {
    interface ModuleDef {
      /** 模块文件路径，相对src目录且不包含它 */
      url: string;
      /** 模块的组件对象，可为空 */
      com?: Record<string, any>;
    }

    interface RouteOpt {
      /** 路由名，唯一标识 */
      name: string;
      /** 路由名称 */
      title: string;
      /** 模块定义 */
      modDef: ModuleDef;
      /** 父路由名（可选） */
      container?: string;
      /** 默认的子路由名（可选） */
      defchild?: string;
      /** 默认运行参数（可选） */
      params?: Record<string, any>;
    }

    interface RouteRecord {
      /** 路由路径 */
      path: string;
      /** 路由名 */
      name: string;
      /** 元数据，包含_def原始定义 */
      meta: {
        _def: Record<string, any>;
      };
      /** 组件对象 */
      component: any;
      /** 子路由记录序列 */
      children?: RouteRecord[];
    }

    /**
     * 给pRouteName父路由添加datas定义的子路由
     * @param datas 路由数据数组
     * @param pRouteName 父路由名
     * @param glContainer 关联父路由名，有值时递归构建，无值时只构建数组第一层
     * @example
     * ```ts
     * cx.router.addRoutes([{
     *   name: 'home',
     *   title: '首页',
     *   modDef: {
     *     url: 'src/ui/frame/Home.vue'
     *   }
     * }], 'parent');
     * ```
     */
    function addRoutes(datas: RouteOpt[], pRouteName?: string, glContainer?: string): void;

    /**
     * 根据plugin表数据添加整套路由记录，container为嵌套标识，值为root时是根路由
     * @param plugDefs 插件定义对象序列
     * @param restoreRoute 待还原的路由序列
     * @example
     * ```ts
     * cx.router.addRoutesByPlug([{
     *   name: 'main',
     *   namec: '主页面',
     *   container: 'root',
     *   url: 'src/ui/frame/Main.vue',
     *   uitype: 3
     * }], []);
     * ```
     */
    function addRoutesByPlug(
      plugDefs: Array<{
        name: string;
        namec: string;
        container: string;
        defchild?: string;
        url: string;
        uitype: number;
        params?: Record<string, any>;
      }>,
      restoreRoute: RouteOpt[]
    ): void;

    /**
     * 给router对象添加路由记录
     * @param routeRecords 待添加的RouteRecord路由记录集合
     * @param pRouteName 父路由的名称
     * @example
     * ```ts
     * cx.router.addToRouter([{
     *   path: '/home',
     *   name: 'home',
     *   meta: {
     *     _def: { name: 'home', title: '首页' }
     *   },
     *   component: HomeComponent
     * }], 'main');
     * ```
     */
    function addToRouter(routeRecords: RouteRecord[], pRouteName?: string): void;

    /**
     * 判断name的路由是否存在，同$router.hasRoute
     * @param name 路由名
     * @returns 路由是否存在
     * @example
     * ```ts
     * const exists = cx.router.hasRoute('home');
     * ```
     */
    function hasRoute(name: string): boolean;

    /**
     * 构造路由的组件对象，并注入getIdentity方法获取文件路径
     * @param modDef 模块定义
     * @returns 模块加载的Promise，返回模块对象
     * @example
     * ```ts
     * const component = await cx.router.makeComponent({
     *   url: 'src/ui/frame/Home.vue',
     *   com: {}
     * });
     * ```
     */
    function makeComponent(modDef: ModuleDef): Promise<any>;

    /**
     * 构造路由的组件url，统一处理成src/后的地址
     * @param url 组件路径
     * @returns 格式化组件url地址
     * @example
     * ```ts
     * const url = cx.router.makeComponentUrl('ui/frame/Home.vue');
     * // 返回: src/ui/frame/Home.vue
     * ```
     */
    function makeComponentUrl(url: string): string;

    /**
     * 构造规范的原始定义数据
     * @param routeOpt 路由数据
     * @returns 标准化后的定义
     * @example
     * ```ts
     * const def = cx.router.makeDefNormalized({
     *   name: 'home',
     *   title: '首页',
     *   modDef: {
     *     url: 'src/ui/frame/Home.vue'
     *   }
     * });
     * ```
     */
    function makeDefNormalized(routeOpt: RouteOpt): {
      name: string;
      title: string;
      url: string;
      uitype: number;
      src: Record<string, any>;
    };

    /**
     * 根据数据构造路由记录
     * @param routeOpt 路由数据
     * @returns 路由记录
     * @example
     * ```ts
     * const route = cx.router.makeRouteRecord({
     *   name: 'home',
     *   title: '首页',
     *   modDef: {
     *     url: 'src/ui/frame/Home.vue'
     *   }
     * });
     * ```
     */
    function makeRouteRecord(routeOpt: RouteOpt): RouteRecord;

    /**
     * 根据数据构造路由记录，并递归处理子路由
     * @param datas 路由数据对象序列
     * @param glContainer 关联父路由名
     * @returns 路由记录序列
     * @example
     * ```ts
     * const routes = cx.router.makeRouteRecordRecursive([{
     *   name: 'home',
     *   title: '首页',
     *   modDef: {
     *     url: 'src/ui/frame/Home.vue'
     *   }
     * }], 'main');
     * ```
     */
    function makeRouteRecordRecursive(datas: RouteOpt[], glContainer: string): RouteRecord[];

    /**
     * 移除路由
     * @param names 路由名数组
     * @example
     * ```ts
     * cx.router.removeRoutes(['home', 'about']);
     * ```
     */
    function removeRoutes(names: string[]): void;
  }
} 