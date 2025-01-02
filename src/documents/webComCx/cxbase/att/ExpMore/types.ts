export interface Fld {
  colname: string;    // 列名（必需）
  title: string;      // 显示标题（必需）
  value: string;      // 字段值（必需）
  disporder: number;  // 显示顺序（必需）
  type: number;       // 显示类型（必需）
  isnum: boolean;     // 是否数值类型（必需）
  options?: Array<{ label: string; value: string }>;  // 下拉选项
  config?: Record<string, any>;  // 配置信息
  refChange: number;  // 引用计数器（必需）
} 