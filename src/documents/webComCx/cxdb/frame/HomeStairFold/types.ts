import { Component } from 'vue';

/** 厂字形系统首页组件Props */
export interface HomeStairFoldProps {
  /** 头部系统logo路径 */
  sysLogo?: string;
  /** 头部的样式 */
  headerStyle?: string;
  /** 头部组件 */
  headerCom?: string | Component;
  /** 用户下拉cx-user-dropdown组件参数，见cx-sys-header组件 */
  attUserDrop?: Record<string, any>;
  /** 菜单数据对象，结构见 menufold */
  menus?: any[];
  /** 所在的插件对象 */
  plugDef?: Record<string, any>;
  /** menustair组件的参数对象 */
  attMenuStair?: Record<string, any>;
  /** menufold组件的参数对象 */
  attMenuFold?: Record<string, any>;
  /** 系统logo点击事件 */
  onLogoClick?: () => void;
  /** 系统退出 */
  onLogout?: () => void;
  /** 帮助 */
  onHelp?: () => void;
} 