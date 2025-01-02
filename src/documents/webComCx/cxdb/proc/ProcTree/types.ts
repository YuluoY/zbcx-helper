export interface ProcTreeProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 树节点
   */
  nodes?: string;

  /**
   * 插件名
   */
  plugs?: string;

  /**
   * 映射 cx-tree 组件的属性
   * @required
   */
  treeAtts: Record<string, any>;
} 