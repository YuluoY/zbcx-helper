import { ComponentDoc } from '@/types/tag-doc';
import Login from './Login';
import ForgotPwd from './ForgotPwd';

// 合并所有登录相关组件文档
export const documents: Record<string, ComponentDoc> = {
  Login,
  ForgotPwd
}; 