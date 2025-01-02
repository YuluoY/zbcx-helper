/** 状态配置 */
interface StatusCfg {
  /** 显示名称 */
  label: string;
  /** 显示值 */
  value: string;
}

export interface StatusBarProps {
  /** 状态栏显示内容,每个数据组是一组状态 */
  status: StatusCfg[][];
} 