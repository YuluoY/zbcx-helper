export interface DataCfg {
  /** 数据唯一标识 */
  id: string | number;
  /** 项显示文本 */
  title: string;
}

export interface GrpListProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 数据传递 */
  data: DataCfg[];
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 当前激活菜单id */
  activeId?: string;
} 