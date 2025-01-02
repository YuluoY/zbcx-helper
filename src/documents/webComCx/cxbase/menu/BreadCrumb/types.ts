export interface CrumbConf {
  /** 名称 */
  name: string;
  /** 路由 */
  path: string;
  /** 是否留下记录 */
  replace?: boolean;
}

export interface BreadCrumbProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 分隔符 */
  separator?: string;
  /** 图标分隔符的组件或组件名 */
  separatorIcon?: string | object;
  /** 面包屑对象列表 */
  lists?: CrumbConf[];
} 