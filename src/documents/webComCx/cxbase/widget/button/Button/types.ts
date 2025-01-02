/** Button组件属性 */
export interface ButtonProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 图标样式 */
  icon?: string;
  /** 类型（参见 el-button 的 type） */
  type?: string;
  /** 是否禁能 */
  disabled?: boolean;
  /** 传递给 el-button 的属性 */
  elAtts?: Record<string, any>;
} 