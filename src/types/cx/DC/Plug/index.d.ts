declare namespace cx.dc {
    /**
     * 数据中心插件类
     * 提供数据中心插件相关的操作功能，包括插件定义、执行、状态管理等
     */
    declare class Plug {
        constructor();

        /**
         * 取插件默认信息
         * @param key 词条/图标的默认名（如 add, remove, edit, ..., 词条采用 cx.base.key, 图标用 cx.config.icon.key）
         * @param node 执行该插件的结点
         * @param plug 插件名 或者 执行函数
         * @returns 插件节点对象
         * @example
         * ```typescript
         * // 创建一个添加操作的插件
         * const addPlug = cx.dc.Plug.defPlug('add', 'userNode', 'addUser');
         * 
         * // 创建一个编辑操作的插件，使用自定义函数
         * const editPlug = cx.dc.Plug.defPlug('edit', 'userNode', (params) => {
         *   console.log('Editing user:', params);
         * });
         * ```
         */
        static defPlug(key: string, node: string, plug: string | ((params: any) => void)): DcPlugNode;

        /**
         * 运行某个具体的功能项
         * @param plugNode 工具/菜单项
         * @param getPlugValue 取字符串中的变量的值的函数 - function(key)
         * @param curNode 当前结点
         * @example
         * ```typescript
         * const plugNode = cx.dc.Plug.defPlug('edit', 'userNode', 'editUser');
         * 
         * // 执行插件
         * await cx.dc.Plug.execute(
         *   plugNode,
         *   (key) => ({ userId: '12345', userName: 'John' })[key],
         *   { id: '12345', name: 'John' }
         * );
         * ```
         */
        static execute(plugNode: DcPlugNode, getPlugValue: (key: string) => any, curNode: any): Promise<void>;

        /**
         * 得到一个数据中心插件的对象
         * @param title 标题
         * @param show 显示该插件的条件表达式或者判断函数 - function(values)
         * @param enable 使能该插件的条件表达式或者判断函数 - function(values)
         * @param plugin 插件名称 或者 回调函数 - function(values)
         * @param node 指定使用的树节点
         * @param icon 图标
         * @returns 插件节点对象
         * @example
         * ```typescript
         * // 创建一个基本的插件节点
         * const plugNode = cx.dc.Plug.plugNode(
         *   '编辑用户',
         *   'true',
         *   'status == 1',
         *   'editUser',
         *   'userNode',
         *   'xl-icon-edit'
         * );
         * 
         * // 使用函数作为条件和执行器
         * const customPlugNode = cx.dc.Plug.plugNode(
         *   '删除用户',
         *   (values) => values.status === 1,
         *   (values) => !values.isLocked,
         *   (values) => {
         *     console.log('Deleting user:', values);
         *   },
         *   'userNode',
         *   'cx-fi cx-del'
         * );
         * ```
         */
        static plugNode(
            title: string,
            show: string | ((values: any) => boolean),
            enable: string | ((values: any) => boolean),
            plugin: string | ((values: any) => void),
            node: string,
            icon?: string
        ): DcPlugNode;

        /**
         * 根据配置node取配置的插件(设置了缓存，从缓存取；没有设置缓存数据，从数据库取)
         * @param plugNodes 配置的节点数组
         * @returns Promise对象
         * @example
         * ```typescript
         * // 获取插件配置
         * const plugins = await cx.dc.Plug.plugs(['userAdd', 'userEdit', 'userDelete']);
         * ```
         */
        static plugs(plugNodes: string[]): Promise<DcPlugNode[]>;

        /**
         * 根据配置node取配置的插件(从缓存取)
         * @param plugNodes 配置的节点数组
         * @returns Promise对象
         * @example
         * ```typescript
         * // 从缓存获取插件配置
         * const plugins = await cx.dc.Plug.plugsCached(['userAdd', 'userEdit', 'userDelete']);
         * ```
         */
        static plugsCached(plugNodes: string[]): Promise<DcPlugNode[]>;

        /**
         * 根据配置node取配置的插件(从数据库取)
         * @param plugNodes 配置的节点数组
         * @returns Promise对象
         * @example
         * ```typescript
         * // 从数据库获取插件配置
         * const plugins = await cx.dc.Plug.plugsDb(['userAdd', 'userEdit', 'userDelete']);
         * ```
         */
        static plugsDb(plugNodes: string[]): Promise<DcPlugNode[]>;

        /**
         * 根据当前的状态，确定菜单、工具条的状态
         * @param plugTree 配置插件（构造成菜单树结构）
         * @param values 当前结点提供的数据
         * @param flds 当前结点提供的信息
         * @param nodeName 当前选中的结点的名字
         * @example
         * ```typescript
         * const plugTree = [
         *   cx.dc.Plug.plugNode('编辑', 'true', 'status == 1', 'edit', 'node1'),
         *   cx.dc.Plug.plugNode('删除', 'true', '!isLocked', 'delete', 'node1')
         * ];
         * 
         * // 更新插件状态
         * cx.dc.Plug.state(
         *   plugTree,
         *   { status: 1, isLocked: false },
         *   { id: '12345', name: 'Test' },
         *   'node1'
         * );
         * ```
         */
        static state(plugTree: DcPlugNode[], values: any, flds: any, nodeName: string): void;

        /**
         * 根据当前的状态，确定菜单、工具条的状态
         * @param plug 插件
         * @param values 当前结点提供的数据
         * @param flds 当前结点提供的信息
         * @returns 状态对象 {visible: boolean, disabled: boolean}
         * @example
         * ```typescript
         * const plug = cx.dc.Plug.plugNode('编辑', 'true', 'status == 1', 'edit', 'node1');
         * 
         * // 获取插件状态
         * const state = cx.dc.Plug.state2(
         *   plug,
         *   { status: 1 },
         *   { id: '12345', name: 'Test' }
         * );
         * // 返回: { visible: true, disabled: false }
         * ```
         */
        static state2(plug: DcPlugNode, values: any, flds: any): { visible: boolean; disabled: boolean };

        /**
         * 根据当前的状态，确定菜单、工具条的状态
         * @param plug 插件
         * @param values 当前结点提供的数据
         * @param flds 当前结点提供的信息
         * @param nodeName 当前选中的结点的名字
         * @example
         * ```typescript
         * const plug = cx.dc.Plug.plugNode('编辑', 'true', 'status == 1', 'edit', 'node1');
         * 
         * // 更新单个插件状态
         * cx.dc.Plug.stateNode(
         *   plug,
         *   { status: 1 },
         *   { id: '12345', name: 'Test' },
         *   'node1'
         * );
         * ```
         */
        static stateNode(plug: DcPlugNode, values: any, flds: any, nodeName: string): void;

        /**
         * 把记录数据配置的插件变成树状结构(用于菜单、共具体、右边键)
         * @param result 返回结果
         * @param dbPlugs 数据库配置的插件列表(详细见表 cx-cmdtool)
         * @param rootGrpName 组名
         * @returns 树结构数组
         * @example
         * ```typescript
         * const result = [];
         * const dbPlugs = [
         *   { node: 'userAdd', title: '添加用户', group: 'user' },
         *   { node: 'userEdit', title: '编辑用户', group: 'user' },
         *   { node: 'userDelete', title: '删除用户', group: 'user' }
         * ];
         * 
         * // 转换成树结构
         * const tree = cx.dc.Plug.tree(result, dbPlugs, 'user');
         * ```
         */
        static tree(result: DcPlugNode[], dbPlugs: any[], rootGrpName: string): DcPlugNode[];

        /**
         * 给树状结构的对象增加ID
         * @param tree 树结构对象
         * @example
         * ```typescript
         * const tree = [
         *   cx.dc.Plug.plugNode('编辑', 'true', 'status == 1', 'edit', 'node1'),
         *   cx.dc.Plug.plugNode('删除', 'true', '!isLocked', 'delete', 'node1')
         * ];
         * 
         * // 添加ID
         * cx.dc.Plug.treeId(tree);
         * ```
         */
        static treeId(tree: DcPlugNode[]): void;
    }
}
 /**
     * 数据中心插件配置结点类
     * 提供数据中心插件配置相关的功能
     */
 class DcPlugNode {

    /** 标题 */
    title: string | undefined;

    /** 是否显示，显示该插件的条件表达式或者判断函数 - function(values) */
    show: string | ((values: any) => boolean) | undefined;

    /** 是否启用，使能该插件的条件表达式或者判断函数 - function(values) */
    enable: string | ((values: any) => boolean) | undefined;

    /** 插件名称，对应的插件名或回调函数 - function(values) */
    plugin: string | ((values: any) => any) | undefined;

    /** 节点名称，用于标识不同结点用不同的插件 */
    node: string | undefined;

    /** 图标 */
    icon: string | undefined;

    /** 是否显示分隔线 */
    divider: boolean;

    /** 参数配置 */
    params: Record<string, any> | null;

    /** 是否可见，该值由 show 属性来维护 */
    visible: boolean;

    /** 是否禁用，该值由 enable 属性来维护 */
    disabled: boolean;

    /** UI配置 */
    uicfg: Record<string, any> | null;

    /**
     * 构造函数
     * @param title 标题
     * @param show 显示该插件的条件表达式或者判断函数
     * @param enable 使能该插件的条件表达式或者判断函数
     * @param plugin 对应的插件名或回调函数
     * @param node 用于标识不同结点用不同的插件
     * @param icon 图标
     */
    constructor(
        title: string,
        show?: string | ((values: any) => boolean),
        enable?: string | ((values: any) => boolean),
        plugin?: string | ((values: any) => any),
        node?: string,
        icon?: string
    );

    /**
     * 增加子结点或者数据
     * @param child 子结点或者数据节点
     * @returns 当前节点对象(this)
     */
    add(child: PlugNode): this;
}