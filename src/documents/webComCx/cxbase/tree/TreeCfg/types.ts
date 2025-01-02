/** 树节点数据 */
interface NodeData {
  /** 节点ID */
  id: string | number;
  /** 节点标签 */
  label: string;
  /** 子节点 */
  children?: NodeData[];
  /** 节点属性 */
  att?: Record<string, any>;
  /** 节点配置 */
  cfg?: {
    /** 节点类型 */
    node: string;
  };
}

/** 插件节点 */
interface PlugNode {
  /** 插件标题 */
  title: string;
  /** 插件图标 */
  icon?: string;
  /** 插件类型 */
  type?: string;
  /** 插件路径 */
  path?: string;
  /** 目标节点ID */
  targetId?: string | number;
}

export interface TreeCfgProps {
  /** 是否懒加载模式 */
  lazy?: boolean;
  /** 需要加载的配置树（cx_resdir 表中的 node 值） */
  node: string;
  /** 传递给查询的值，在查询中，如果树结点查询需要参数，则由该对象提供。对象的key是配置结点的name, 值是该结点需要的查询参数 */
  vals?: Record<string, any>;
  /** 树处理对象 */
  treeHandler?: any;
  /** cx-tree/cx-tree-syn 可以接收的属性 */
  elAtts?: Record<string, any>;
  /** cx-tree/cx-tree-syn 可以接收的事件 */
  elListeners?: Record<string, Function>;
} 