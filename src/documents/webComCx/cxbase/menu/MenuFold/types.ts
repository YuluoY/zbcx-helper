export interface MenuCfg {
  /** 唯一 key，词表中检索本地名称 */
  name: string;
  /** 显示名称 */
  title: string;
  /** 中文名称，名称备注方便维护 */
  namec?: string;
  /** 菜单图标，样式`class`名或基于`public/static`的文件路径。如：cx-fi ic-qry 或 img/ui/pnt.svg */
  icon?: string;
  /** 菜单组，与 name 形成自关联，根节点 grp='' */
  grp?: string;
  /** 相同 grp 中的显示顺序 */
  disporder?: number;
  /** 菜单运行的路由插件名 */
  plugin?: string;
  /** 参数对象，传入运行的插件 */
  params?: Record<string, any>;
  /** 子菜单对象序列 */
  children?: MenuCfg[];
}

export interface MenuFoldProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 菜单对象序列，必填 */
  menus: MenuCfg[];
  /** 默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致 */
  defActive?: MenuCfg;
  /** 是否展示折叠按钮，vertical 模式才生效 */
  isCollapse?: boolean;
  /** 折叠按钮的标题，this.$t('cx.base.fold')=折叠 */
  foldTitle?: string;
  /** 配置对象，参数见 element-plus/Menu */
  elAtts?: Record<string, any>;
  /** 是否反色显示 */
  inverse?: boolean;
} 