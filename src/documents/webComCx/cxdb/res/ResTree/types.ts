/** 授权信息 */
export interface AuthDir {
  /**
   * 是否可增加目录
   * @default true
   */
  addable?: boolean;

  /**
   * 是否可编辑目录
   * @default true
   */
  editable?: boolean;

  /**
   * 是否可删除目录
   * @default true
   */
  removable?: boolean;
}

export interface ResTreeProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'small' | 'default' | 'large';

  /**
   * 树结点配置（cx_resdir 配置的 node 名）
   * @required
   */
  node: string;

  /**
   * 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值
   * @required
   */
  vals: Record<string, any>;

  /**
   * 是否懒加载模式
   * @default true
   */
  lazy?: boolean;

  /**
   * 授权信息
   */
  auth?: AuthDir;

  /**
   * 树控件处理对象
   * @default cx.dc.DocTreeHandler
   */
  treeHandler?: any;

  /**
   * 传递给 el-tree 的属性
   * @default { selectFirst: true }
   */
  treeAtts?: Record<string, any>;
} 