export interface ProcSelectProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 传递给组件的流程编码
   * @required
   */
  value: string;
} 