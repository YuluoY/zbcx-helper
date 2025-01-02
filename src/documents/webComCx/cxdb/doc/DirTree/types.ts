/** 文件目录树组件Props */
export interface DirTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树结点配置（cx_resdir 配置的 node 名） */
  node: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  vals: Record<string, any>;
  /** 是否可以拖拽目录 */
  draggable?: boolean;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: Record<string, any>;
} 