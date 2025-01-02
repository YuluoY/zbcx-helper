/** 菜单项配置 */
interface MenusItem {
  /** 菜单唯一标识，必传！ */
  name: string;
  /** 菜单名称，必传！ */
  title: string;
  /** 菜单点击后的回调函数，必传！回调参数：一、如果是无下级选项的根菜单，回调参数为（menu）;二、如果是二级菜单选项，回调参数为（child, parent）,分别为当前二级菜单撇盒子对象和父菜单配置对象 */
  click: Function;
  /** 菜单图标，会绑定到cx-icon组件的icon属性上。如：cx-fi ic-setting */
  icon?: string;
  /** 是否需要在上方添加分割线 */
  divided?: string;
  /** 儿子菜单集合，配置项同父菜单的name、title */
  children?: MenusItem[];
  /** 当包含二级选项时，父菜单需要包含value属性，用于指向当前激活的二级选项的name值，二级选项切换时，需要手动更新value值。 */
  value?: string;
}

export interface UserDropdownProps {
  /** UI规格 */
  size?: string;
  /** 显示的用户名称,不传时会取$g.user.name */
  username?: string;
  /** 自定义过滤菜单数组的函数 - Function(menus) */
  filterMenu?: (menus: MenusItem[]) => MenusItem[];
  /** 下拉菜单触发的方式，默认为click */
  trigger?: string;
  /** 子菜单显示位置 */
  childPlacement?: string;
  /** 子菜单选中状态样式 */
  highStyle?: string;
  /** 自定义菜单组 */
  extraMenus?: MenusItem[];
} 