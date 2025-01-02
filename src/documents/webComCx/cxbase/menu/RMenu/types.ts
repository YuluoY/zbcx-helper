export interface RmenuCfg {
  /** 唯一值，作为 key */
  id: any;
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 是否可见，默认不可见 */
  visible?: boolean;
  /** 是否禁止 */
  disabled?: boolean;
  /** 配置信息 */
  uicfg?: {
    /** 是否在上方方显示分隔条 */
    divided?: boolean;
  };
  /** 子菜单(递归) */
  children?: RmenuCfg[];
}

export interface RMenuProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 菜单对象序列 */
  data: RmenuCfg[];
} 