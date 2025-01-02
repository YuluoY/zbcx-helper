export interface VerifiCodeProps {
  /**
   * 尺寸
   * @default default
   */
  currentCaptchaId?: 'large' | 'default' | 'small';

  /**
   * 密码规则
   */
  currentCaptchaConfig?: string;
} 