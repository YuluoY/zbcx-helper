import { MenuCfg } from '../MenuFold/types';

export interface MenuStairProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 菜单对象序列，必填。见`cx-menufold`中说明 */
  menus: MenuCfg[];
  /** 默认激活菜单，只表现激活状态，不触发激活消息；结构与 menus 数据项一致 */
  defActive?: MenuCfg;
  /** 展示模式，水平 horizontal 或 垂直 */
  mode?: 'horizontal' | 'vertical';
  /** 激活菜单 border 显示位置 */
  borderPosition?: 'top' | 'right' | 'bottom' | 'left';
  /** 是否反色显示 */
  inverse?: boolean;
} 