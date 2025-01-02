export interface TagCfg {
  /** 唯一 key，词表中检索本地名称 */
  name: string;
  /** 显示名称 */
  title: string;
  /** 是否选中 */
  selected?: boolean;
}

export interface MenuTagProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 菜单对象序列 */
  menus: TagCfg[];
  /** 样式 */
  style?: string;
} 