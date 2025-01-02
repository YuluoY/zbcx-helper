export interface SysHeaderProps {
  /**
   * 头部系统logo路径
   */
  sysLogo?: string;

  /**
   * 用户下拉cx-user-dropdown组件参数
   */
  attUserDrop?: {
    /**
     * 过滤下拉选项，返回过滤后结果
     */
    filterMenus?: (items: any[]) => any[];
    [key: string]: any;
  };
} 