/** 目录授权信息 */
export interface AuthDir {
  /** 是否可增加目录 */
  addable?: boolean;
  /** 是否可编辑目录 */
  editable?: boolean;
  /** 是否可删除目录 */
  removable?: boolean;
}

/** 文档目录树组件Props */
export interface DocTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树结点配置（cx_resdir 配置的 node 名） */
  node?: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  vals?: object;
  /** 是否懒加载模式 */
  lazy?: boolean;
  /** 授权信息 */
  auth?: AuthDir;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: object;
} 