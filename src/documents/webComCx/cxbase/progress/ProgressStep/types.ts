export interface ProgressStepProps {
  /** 标题文本 */
  title?: string;
  /** 标题文本样式 */
  titleStyle?: string;
  /** 图标类名（使用我们自己图标库中的图标名） */
  icon?: string;
  /** 图标样式 */
  iconStyle?: string;
  /** 分割线上的文本 */
  dividerTitle?: string;
  /** 分隔线上文本样式 */
  dividerTitleStyle?: string;
  /** 是否显示分割线 */
  showLine?: boolean;
  /** 主题色，会应用到头部标题、图标、底部标题、分割线文本 */
  mainColor?: string;
} 