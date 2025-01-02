export interface OrgUsrStrictTreeParams {
  /**
   * 是否展示禁用用户
   * @default false
   */
  showDisabled?: boolean;

  /**
   * 是否展示勾选框
   * @default false
   */
  showCheckbox?: boolean;

  /**
   * 是否展示搜索框
   * @default false
   */
  showFilter?: boolean;

  /**
   * 是否展示用户,默认只展示部门
   * @default false
   */
  showUser?: boolean;

  /**
   * 是否根据当前登录用户所在的部门显示
   * @default true
   */
  orgByCur?: boolean;

  /**
   * 是否显示父部门(严格模式下)
   * @default false
   */
  showParent?: boolean;

  /**
   * 需要隐藏的用户结点，数组内为userid
   * @default []
   */
  hides?: Array<number>;

  /**
   * 默认选中的结点，数组内为结点key值，结点key默认为id
   * @default []
   */
  defChecked?: Array<number>;

  /**
   * 是否只显示自己创建的用户和自己
   * @default false
   */
  showMyAdd?: number;
}

export interface OrgUsrStrictTreeProps {
  /**
   * UI 规格
   * @default default
   */
  size?: string;

  /**
   * 插件列表
   */
  plugs?: Array<any>;

  /**
   * 需要禁能的ID列表
   */
  disables?: string;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;

  /**
   * 传递的参数对象
   */
  params?: OrgUsrStrictTreeParams;
} 