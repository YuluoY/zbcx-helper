export interface ProcTreeSynProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 流程树数据
   */
  data?: Record<string, any>;

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