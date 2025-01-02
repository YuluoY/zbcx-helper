export interface OrgTreeProps {
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
   * 是否不进行缓存
   * @default false
   */
  noCache?: string;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;
} 