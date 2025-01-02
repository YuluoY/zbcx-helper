import { Component } from 'vue';

export interface HomeStairPanelProps {
  /**
   * 头部系统logo路径
   */
  sysLogo?: string;

  /**
   * 头部的样式
   */
  headerStyle?: string;

  /**
   * 头部组件
   * @default cx-sysnav-stair
   */
  headerCom?: string | Component;

  /**
   * 菜单数据对象，结构见 menufold
   */
  menus?: any[];

  /**
   * menuspanel组件的参数对象
   */
  attMenuPanel?: Record<string, any>;

  /**
   * 最多在运行状态插件数,超出按队列销毁
   * @default 3
   */
  maxRunNum?: number;
} 