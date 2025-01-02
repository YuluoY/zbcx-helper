export interface EditorCfg {
  /** 编辑器高度 */
  height?: string;
  /** 编辑器宽度 */
  width?: string;
  /** 是否只读 */
  readonly?: boolean;
  /** 占位符文本 */
  placeholder?: string;
  /** 工具栏配置 */
  toolbar?: {
    /** 是否显示工具栏 */
    show?: boolean;
    /** 自定义工具栏项目 */
    items?: string[];
  };
  /** 样式配置 */
  style?: object;
}

export interface EditorProps {
  /** 编辑器值 */
  value?: string;
  /** 编辑器类型 */
  type?: 'rich' | 'markdown' | 'simple';
  /** 主题 */
  theme?: 'light' | 'dark';
  /** 语言 */
  lang?: string;
  /** 配置信息 */
  cfg?: EditorCfg;
} 