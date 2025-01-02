export interface FocusTextCfg {
  /** 图标位置 */
  iconPosition?: 'left' | 'right' | 'top' | 'bottom' | 'center';
  /** 图标宽度 */
  iconWidth?: string;
  /** 图标高度 */
  iconHeight?: string;
  /** 文本显示顺序 */
  textOrder?: number;
  /** 样式-图标 */
  iconStyle?: object;
  /** 样式-焦点文本 */
  focusStyle?: object;
  /** 样式-主题文本 */
  topicStyle?: object;
  /** 样式-单位文本 */
  unitStyle?: object;
}

export interface FocusTextProps {
  /** UI规格 */
  size?: 'large' | 'default' | 'small';
  /** 色系 */
  color?: string;
  /** 图标类名 */
  icon?: string;
  /** 焦点文本 */
  focus?: string;
  /** 主题文本 */
  topic?: string;
  /** 单位 */
  unit?: string;
  /** 配置信息 */
  cfg?: FocusTextCfg;
} 