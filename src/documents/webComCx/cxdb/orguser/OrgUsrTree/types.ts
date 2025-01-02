export interface OrgUsrTreeProps {
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
   * 需要隐藏的ID列表
   */
  hides?: Array<string>;

  /**
   * 是否显示禁用的用户
   * @default false
   */
  showDisabled?: boolean;

  /**
   * 是否显示checkbox
   * @default false
   */
  showCheckbox?: boolean;

  /**
   * 是否显示过滤输入框
   * @default false
   */
  showFilter?: boolean;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;
} 