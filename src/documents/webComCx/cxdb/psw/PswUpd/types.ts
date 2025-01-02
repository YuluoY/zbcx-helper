export interface PswUpdProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 密码规则
   */
  rules?: string;

  /**
   * 密码显示方式
   * @default password
   */
  type?: string;

  /**
   * 高级
   * @required
   */
  highLevel: boolean;

  /**
   * 密码加密函数
   * @required
   */
  encode: (password: string) => string;
} 