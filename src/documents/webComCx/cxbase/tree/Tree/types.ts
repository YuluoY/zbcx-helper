/** 树节点数据源类型 */
type DataSourceType = 'MemObj' | 'DbObj';

/** 树节点类型 */
type NodeType = 'node' | 'leaf';

/** 树节点配置 */
interface TreeNodeConfig {
  /** 节点ID */
  id: number;
  /** 节点名称 */
  node: string;
  /** 节点分组 */
  grp: string;
  /** 节点类型 */
  type: NodeType;
  /** 节点标签表达式 */
  label: string;
  /** 数据源类型 */
  srctype: DataSourceType;
  /** 数据源 */
  source: Record<string, any>;
  /** 是否递归 */
  recursive: 0 | 1;
  /** 根节点过滤表达式 */
  rootexp: string;
  /** 子节点过滤表达式 */
  childexp: string;
  /** 排序字段 */
  orderby: string;
  /** 节点图标 */
  icon: string;
  /** 插件配置 */
  plugs: string;
}

/** 树节点数据 */
interface TreeNode {
  /** 节点ID */
  id: string | number;
  /** 节点标签 */
  label: string;
  /** 子节点 */
  children?: TreeNode[];
  /** 节点属性 */
  att?: Record<string, any>;
  /** 节点配置 */
  cfg?: TreeNodeConfig;
  /** 节点图标 */
  icon?: string;
}

/** 插件节点 */
interface PlugNode {
  /** 插件标题 */
  title: string;
  /** 插件图标 */
  icon: string;
  /** 插件类型 */
  type: string;
  /** 插件路径 */
  path: string;
  /** 目标节点ID */
  targetId?: string | number;
}

export interface TreeHandler {
  getTree(): any;
  plugParams(key: string): any;
  addNode(att: Record<string, any>, cfg: TreeNodeConfig, pnode: TreeNode): void;
  delNode(data: Record<string, any>): void;
  updNode(att: Record<string, any>, data: Record<string, any>): void;
} 