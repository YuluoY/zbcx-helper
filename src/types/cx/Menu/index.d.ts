declare namespace cx {
  /**
   * Menu 类提供了菜单相关的功能，包括菜单树的生成和多语言支持
   */
  namespace menu {
    interface MenuItem {
      id: string;
      name: string;
      path?: string;
      children?: MenuItem[];
      [key: string]: any;  // 支持其他属性，如 name_en, name_zh 等
    }

    /**
     * 根据 func 表数据，生成树形层级菜单
     * @param grpName 根的组名称
     * @returns 树形结构的菜单数组
     * @example
     * ```ts
     * // 生成完整的菜单树
     * const fullMenuTree = cx.menu.funcTree();
     * 
     * // 生成指定组的菜单树
     * const adminMenuTree = cx.menu.funcTree('admin');
     * 
     * // 菜单树结构示例
     * // [
     * //   {
     * //     id: '1',
     * //     name: '系统管理',
     * //     children: [
     * //       {
     * //         id: '1-1',
     * //         name: '用户管理',
     * //         path: '/users'
     * //       },
     * //       {
     * //         id: '1-2',
     * //         name: '角色管理',
     * //         path: '/roles'
     * //       }
     * //     ]
     * //   },
     * //   ...
     * // ]
     * ```
     */
    function funcTree(grpName?: string): MenuItem[];

    /**
     * 取多语言字符串
     * @param func 菜单信息对象
     * @returns 当前语言环境下的菜单文本
     * @example
     * ```ts
     * // 获取单个菜单项的多语言文本
     * const menuItem = {
     *   id: '1',
     *   name: '系统管理',
     *   name_en: 'System Management',
     *   name_zh: '系统管理'
     * };
     * const menuText = cx.menu.loc(menuItem);
     * 
     * // 在遍历菜单树时使用
     * const menuTree = cx.menu.funcTree();
     * menuTree.forEach(item => {
     *   const localizedName = cx.menu.loc(item);
     *   console.log(localizedName);
     * });
     * ```
     */
    function loc(func: MenuItem): string;
  }
} 