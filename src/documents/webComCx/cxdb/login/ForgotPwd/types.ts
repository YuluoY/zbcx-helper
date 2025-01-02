/** 忘记密码组件配置参数 */
export interface ForgotPwdConfig {
  /** 支持的验证类型（1-手机号验证，2-邮箱验证） */
  types: number[];
  /** 手机号，邮箱等用户信息加密函数 */
  encodeUser?: (key: string) => string;
  /** 登录信息加密函数 */
  encodeLogin?: (key: string) => string;
  /** 登录信息解密函数 */
  decodeLogin?: (key: string) => string;
}

/** 忘记密码组件Props */
export interface ForgotPwdProps {
  /** 配置参数 */
  config: ForgotPwdConfig;
} 