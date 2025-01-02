/** 树节点数据 */
interface TreeNode {
  /** 节点ID */
  id: string | number;
  /** 父节点ID */
  pid?: string | number;
  /** 节点标签 */
  label: string;
  /** 子节点 */
  children?: TreeNode[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否禁止拖拽 */
  noDragging?: boolean;
  /** 节点样式 */
  style?: Record<string, string>;
}

export interface StructureTreeProps {
  /** 树节点数据 */
  data: TreeNode;
  /** 自定义渲染内容 */
  renderContent?: (node: TreeNode) => any;
} 