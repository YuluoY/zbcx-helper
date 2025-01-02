/** 树节点数据 */
interface NodeData {
  /** 节点ID */
  id: string | number;
  /** 节点标签 */
  label: string;
  /** 是否叶子 */
  isLeaf?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标 */
  icon?: string;
  /** 子节点 */
  children?: NodeData[];
  /** 实体属性 */
  att?: Record<string, any>;
  /** 树结点配置对象 */
  cfg?: Record<string, any>;
}

/** 提示信息 */
interface Tips {
  /** 是否展示tips */
  showTip?: boolean;
  /** 显示位置 */
  tipPlace?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /** 风格 */
  effect?: 'dark' | 'light';
}

/** 插件节点 */
interface PlugNode {
  /** 插件标题 */
  title: string;
  /** 插件图标 */
  icon?: string;
  /** 插件类型 */
  type?: string;
}

export interface TreeSynProps {
  /** 树节点数据 */
  data: NodeData[];
  /** 插件列表 */
  plugs?: PlugNode[];
  /** 提示信息 */
  tips?: Tips;
  /** tip配置 */
  tipConf?: {
    effect?: 'dark' | 'light';
    placement?: 'right';
  };
  /** 缩略文本函数 */
  tipEllipsis?: (text: string) => string;
  /** 是否显示复选框 */
  showCheckbox?: boolean;
  /** 是否展开根节点 */
  expandRoot?: boolean;
  /** 是否展开全部结点 */
  expandAll?: boolean;
  /** 是否显示过滤输入框 */
  showFilter?: boolean;
  /** 是否选中第一个结点 */
  selectFirst?: boolean;
  /** 默认展开的结点 Id 序列 */
  defExpands?: (string | number)[];
  /** 默认 checked 的结点 Id 序列 */
  defChecked?: (string | number)[];
  /** 默认选中的结点 ID */
  defCurrentNode?: string | number;
  /** 是否 check 结点 */
  checkNode?: (data: NodeData) => boolean;
  /** 是否隐藏结点 */
  hideNode?: (data: NodeData) => boolean;
  /** 是否禁能结点 */
  disableNode?: (data: NodeData) => boolean;
  /** 是否展开结点 */
  expandNode?: (data: NodeData) => boolean;
  /** Element Plus Tree组件属性 */
  elAtts?: Record<string, any>;
  /** Element Plus Tree组件事件 */
  elListeners?: Record<string, Function>;
  /** 树处理对象 */
  treeHandler?: any;
  /** 生成判断条件的字段信息、值等 */
  expFldVal?: (fields: string[], values: any[], nodeData: NodeData, nodeName: string) => void;
} 