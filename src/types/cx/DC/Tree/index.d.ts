declare namespace cx.dc {
    /**
     * 数据中心树类
     * 提供数据中心树相关的功能，包括树节点的创建、解析、排序等操作
     */
    declare class Tree {

        constructor();

        /**
         * 判断配置树节点，是否是指定的表
         * @param node 树节点
         * @param major 表的主类型
         * @param minor 表的子类型
         * @returns 是否是指定的表
         * @example
         * ```typescript
         * const node = cx.dc.Tree.treeNode('table', '表格', cx.consts.DCS_TABLE, {
         *   major: 99,
         *   minor: 'TAB_ORGAN'
         * });
         * 
         * // 判断是否是指定表
         * const isTargetTable = cx.dc.Tree.isTable(node, 99, 'TAB_ORGAN'); // true
         * ```
         */
        static isTable(node: DcTreeNode | DcTreeLeaf, major: number, minor: number | string): boolean;

        /**
         * 把白关联的数据生成树树结构
         * @param ret 返回结果
         * @param list 数组数据
         * @param rootExp 判断一个结点是不是根节点(function(item))
         * @param childExp 判断一个结点是不是根(function(item, parent))
         * @param makeNode 生成结点数据(function(att, parent) - return {id: String|Number, isLeaf: Boolean, label: String, disabled: Boolean, icon: String})
         * @returns 树结构数据
         * @example
         * ```typescript
         * const list = [
         *   { id: 1, pid: null, name: '根节点' },
         *   { id: 2, pid: 1, name: '子节点1' },
         *   { id: 3, pid: 1, name: '子节点2' }
         * ];
         * 
         * const result = [];
         * cx.dc.Tree.listToTreeData(
         *   result,
         *   list,
         *   item => item.pid === null,
         *   (item, parent) => item.pid === parent.id,
         *   (att, parent) => ({
         *     id: att.id,
         *     isLeaf: true,
         *     label: att.name,
         *     disabled: false,
         *     icon: 'xl-icon-folder'
         *   })
         * );
         * ```
         */
        static listToTreeData(
            ret: any[],
            list: any[],
            rootExp: (item: any) => boolean,
            childExp: (item: any, parent: any) => boolean,
            makeNode: (att: any, parent: any) => {
                id: string | number;
                isLeaf: boolean;
                label: string;
                disabled: boolean;
                icon: string;
            }
        ): any[];

        /**
         * 解析配置的内存对象
         * @param str 如("global.init.func") - JSON对象不支持$这样的符号，只能自己解析
         * @returns 解析后的数组
         * @example
         * ```typescript
         * // 解析内存对象配置
         * const result = cx.dc.Tree.parseObj('global.init.func');
         * // 返回: ['global', 'init', 'func']
         * ```
         */
        static parseObj(str: string): any[];

        /**
         * 解析数据源
         * @param srcType 数据源类型
         * @param source 数据源描述
         * @returns 解析后的数据源对象
         * @example
         * ```typescript
         * // 解析文件系统数据源
         * const fileSource = cx.dc.Tree.parseSource(cx.consts.DCS_FILESYS, {
         *   dir: 'data:tttt/'
         * });
         * 
         * // 解析内存对象数据源
         * const memSource = cx.dc.Tree.parseSource(cx.consts.DCS_MEMOBJ, {
         *   obj: {$: 'organ', major: 99, minor: 'TAB_ORGAN'}
         * });
         * ```
         */
        static parseSource(srcType: DcSourceType, source: any): any;

        /**
         * 对数据进行排序
         * @param data 待排序的数组
         * @param orderby 排序对象 {key: String, desc: Boolean}
         * @example
         * ```typescript
         * const data = [
         *   { name: 'b', value: 2 },
         *   { name: 'a', value: 1 },
         *   { name: 'c', value: 3 }
         * ];
         * 
         * // 按name字段升序排序
         * cx.dc.Tree.sortData(data, { key: 'name', desc: false });
         * 
         * // 按value字段降序排序
         * cx.dc.Tree.sortData(data, { key: 'value', desc: true });
         * ```
         */
        static sortData(data: any[], orderby: { key: string; desc: boolean }): void;

        /**
         * 数据库配置的资源目录转换成内存对象树
         * @param result 返回结果(数组: DcTreeNode / DcTreeLeaf)
         * @param dbNodes cx_resdir 对象列表
         * @param vals table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值}
         * @returns 树结构数据
         * @example
         * ```typescript
         * const result = [];
         * const dbNodes = [
         *   { node: 'root', label: '根节点', srcType: 1 },
         *   { node: 'child1', label: '子节点1', srcType: 1 },
         *   { node: 'child2', label: '子节点2', srcType: 1 }
         * ];
         * 
         * // 转换成树结构
         * cx.dc.Tree.tree(result, dbNodes, {
         *   'node.name': 'test'
         * });
         * ```
         */
        static tree(result: Array<DcTreeNode | DcTreeLeaf>, dbNodes: any[], vals?: { [key: string]: any }): Array<DcTreeNode | DcTreeLeaf>;

        /**
         * 得到数据中心树配置叶子
         * @param node 配置结点命名
         * @param label 结点标题
         * @param srcType 数据源类型
         * @param source 数据源信息
         * @returns 叶子节点对象
         * @example
         * ```typescript
         * // 创建基本叶子节点
         * const leaf = cx.dc.Tree.treeLeaf('department', '部门', 1);
         * 
         * // 创建文件系统叶子节点
         * const fileLeaf = cx.dc.Tree.treeLeaf('files', '文件', cx.consts.DCS_FILESYS, {
         *   dir: 'data:tttt/'
         * });
         * ```
         */
        static treeLeaf(node: string, label: string, srcType: number, source?: any): DcTreeNode;

        /**
         * 得到数据中心树配置结点
         * @param node 配置结点命名
         * @param label 结点标题
         * @param srcType 数据源类型
         * @param source 数据源信息
         * @param recursive 是否递归构造树结点
         * @returns 树节点对象
         * @example
         * ```typescript
         * // 创建基本节点
         * const node = cx.dc.Tree.treeNode('department', '部门', 1);
         * 
         * // 创建文件系统节点
         * const fileNode = cx.dc.Tree.treeNode('files', '文件', cx.consts.DCS_FILESYS, {
         *   dir: 'data:tttt/'
         * });
         * 
         * // 创建内存对象节点
         * const memNode = cx.dc.Tree.treeNode('orgList', '组织列表', cx.consts.DCS_MEMOBJ, {
         *   obj: {$: 'organ', major: 99, minor: 'TAB_ORGAN'}
         * });
         * ```
         */
        static treeNode(node: string, label: string, srcType: number, source?: any, recursive?: number): DcTreeNode;

        /**
         * 根据配置node取配置的插件(设置了缓存，从缓存取；没有设置缓存数据，从数据库取)
         * @param node 配置的节点 (resdir.node = node)
         * @param vals table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值}
         * @returns Promise对象，返回树结构对象
         * @example
         * ```typescript
         * // 从缓存或数据库获取树结构
         * const treeData = await cx.dc.Tree.trees('department', {
         *   'node.name': 'test'
         * });
         * ```
         */
        static trees(node: string, vals?: { [key: string]: any }): Promise<DcTreeNode>;

        /**
         * 根据配置node取配置的资源目录(从缓存取)
         * @param node 配置的节点 (resdir.node = node)
         * @param vals table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值}
         * @returns Promise对象，返回树结构对象
         * @example
         * ```typescript
         * // 从缓存获取树结构
         * const treeData = await cx.dc.Tree.treesCached('department', {
         *   'node.name': 'test'
         * });
         * ```
         */
        static treesCached(node: string, vals?: { [key: string]: any }): Promise<DcTreeNode>;

        /**
         * 根据配置node取配置的资源目录(从数据库取)
         * @param node 配置的节点 (resdir.node = node)
         * @param vals table模式数据源条件args或key对应SqlExp参数值，传递给查询的值{node.name: 查询值}
         * @returns Promise对象，返回树结构对象
         * @example
         * ```typescript
         * // 从数据库获取树结构
         * const treeData = await cx.dc.Tree.treesDb('department', {
         *   'node.name': 'test'
         * });
         * ```
         */
        static treesDb(node: string, vals?: { [key: string]: any }): Promise<DcTreeNode>;
    }
}

 /**
     * 数据中心树叶子节点类
     */
 class DcTreeLeaf {
    /** 配置结点命名 */
    node: string;
    /** 结点标题 */
    label: string;
    /** 数据源类型 */
    srcType: number;
    /** 数据源信息 */
    source: any;
    /** 图标 */
    icon: string;
    /** 缓存配置 */
    caches: Array<string | ((parent: any) => any)>;
    /** 配置属性 */
    cfgAtt: Record<string, any>;
    /** 过滤器配置 */
    filters: Array<string | ((item: any) => boolean) | string[]>;
    /** 图标配置 */
    icons: Array<string>;
    /** 键值 */
    key: string | ((item: any) => any) | null;
    /** 排序配置 */
    orderby: { key: string; desc: boolean } | null;
    /** 参数配置 */
    params: Record<string, any>;
    /** 重定向节点 */
    resdirNode: string | undefined;
    /** 数据值 */
    values: any | null;
    /** 类型标识 */
    type: number;

    constructor(node: string, label: string, srcType: number, source?: any, opts?: Record<string, any>);

    /**
     * 设置缓存信息
     * @param index 对应的缓存(0, 1)
     * @param cache 缓存信息
     * @returns 当前节点对象(this)
     */
    setCache(index: number, cache: string | ((parent: any) => any)): this;

    /**
     * 设置缓存
     * @param cacheRoot 根节点的缓存
     * @param cacheNotRoot 非根节点的缓存
     * @returns 当前节点对象(this)
     */
    setCaches(cacheRoot?: string | ((parent: any) => any) | string[], cacheNotRoot?: string | ((parent: any) => any) | string[]): this;

    /**
     * 设置过滤函数或表达式
     * @param index 对应的过滤函数(0, 1)
     * @param exp 非根节点的过滤条件
     * @returns 当前节点对象(this)
     */
    setFilter(index: number, exp: string | ((item: any) => boolean) | string[]): this;

    /**
     * 设置过滤函数或表达式
     * @param expRoot 根节点的过滤条件
     * @param expNotRoot 非根节点的过滤条件
     * @returns 当前节点对象(this)
     */
    setFilters(expRoot?: string | ((item: any) => boolean) | string[], expNotRoot?: string | ((item: any) => boolean) | string[]): this;

    /**
     * 设置Key信息
     * @param key Key信息
     * @returns 当前节点对象(this)
     */
    setKey(key: string | ((item: any) => any)): this;

    /**
     * 设置标题信息
     * @param label 标题信息
     * @returns 当前节点对象(this)
     */
    setLabel(label: string | { text: string; icon: string } | ((data: any) => string)): this;

    /**
     * 根据属性取图标
     * @param index 图标序号 (0, 1)
     * @param att 属性
     * @returns 图标字符串
     */
    getIcon(index: number, att: Record<string, any>): string;
}

/**
 * 数据中心树节点类
 */
class DcTreeNode {
    /** 配置结点命名 */
    node: string;
    /** 结点标题 */
    label: string;
    /** 数据源类型 */
    srcType: number;
    /** 数据源信息 */
    source: any;
    /** 是否递归构造树结点 */
    recursive: number;
    /** 子节点数组 */
    children: Array<any>;
    /** 图标 */
    icon: string;
    /** 缓存配置 */
    caches: Array<string | ((parent: any) => any)>;
    /** 配置属性 */
    cfgAtt: Record<string, any>;
    /** 过滤器配置 */
    filters: Array<string | ((item: any) => boolean) | string[]>;
    /** 图标配置 */
    icons: Array<string>;
    /** 键值 */
    key: string | ((item: any) => any);
    /** 排序配置 */
    orderby: { key: string; desc: boolean } | null;
    /** 参数配置 */
    params: Record<string, any>;
    /** 重定向节点 */
    resdirNode: string | undefined;
    /** 数据值 */
    values: any;

    constructor(node: string, label: string, srcType: number, source?: any, recursive?: number, opts?: Record<string, any>);

    /**
     * 增加子节点或数据
     * @param child 子结点或者数据节点
     * @returns 当前节点对象(this)
     */
    add(child: DcTreeNode | DcTreeLeaf): this;

    /**
     * 设置缓存信息
     * @param index 对应的缓存(0, 1)
     * @param cache 缓存信息
     * @returns 当前节点对象(this)
     */
    setCache(index: number, cache: string | ((parent: any) => any)): this;

    /**
     * 设置缓存
     * @param cacheRoot 根节点的缓存
     * @param cacheNotRoot 非根节点的缓存
     * @returns 当前节点对象(this)
     */
    setCaches(cacheRoot?: string | ((parent: any) => any) | string[], cacheNotRoot?: string | ((parent: any) => any) | string[]): this;

    /**
     * 设置过滤函数或表达式
     * @param index 对应的过滤函数(0, 1)
     * @param exp 非根节点的过滤条件
     * @returns 当前节点对象(this)
     */
    setFilter(index: number, exp: string | ((item: any) => boolean) | string[]): this;

    /**
     * 设置过滤函数或表达式
     * @param expRoot 根节点的过滤条件
     * @param expNotRoot 非根节点的过滤条件
     * @returns 当前节点对象(this)
     */
    setFilters(expRoot?: string | ((item: any) => boolean) | string[], expNotRoot?: string | ((item: any) => boolean) | string[]): this;

    /**
     * 设置Key信息
     * @param key Key信息
     * @returns 当前节点对象(this)
     */
    setKey(key: string | ((item: any) => any)): this;

    /**
     * 设置标题信息
     * @param label 标题信息
     * @returns 当前节点对象(this)
     */
    setLabel(label: string | { text: string; icon: string } | ((data: any) => string)): this;

    /**
     * 根据属性取图标
     * @param index 图标序号 (0, 1)
     * @param att 属性
     * @returns 图标字符串
     */
    getIcon(index: number, att: Record<string, any>): string;
}