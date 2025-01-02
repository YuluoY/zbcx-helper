export interface Config {
  type: number;      // 按钮类型（必需）：-2详情，-1退回到某个流程环节，0同意，1不同意，2当前环节移交给别人处理，3选择下一步的办理人，其他自定义
  title: string;     // 按钮标题（必需）
  icon?: string;     // 自定义按钮图标
  callback?: () => void;  // 自定义按钮回调函数
} 