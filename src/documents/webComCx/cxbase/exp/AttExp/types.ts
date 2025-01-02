export interface FldExpCfg {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 显示顺序 */
  disporder: number;
  /** 显示类型 */
  type: number;
  /** 下拉选项 */
  options?: Array<{
    label: string;
    value: string;
  }>;
  /** 引用计数器 */
  refChange?: number;
  /** 字段值 */
  value?: string;
  /** 字段值1，值域时用 */
  value1?: string;
  /** 字段值2，值域时用 */
  value2?: string;
}

export interface AttExpProps {
  /** UI规格 */
  size?: 'large' | 'default' | 'small';
  /** 字段信息数组 */
  flds: FldExpCfg[];
  /** 输入框大小(像素为单位) */
  itemWidth?: number;
  /** 是否显示标签 */
  showLabel?: boolean;
} 