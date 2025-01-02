/** 图例项配置 */
interface LegendItem {
  /** 标题 */
  title: string;
  /** 图标路径 */
  img?: string;
  /** 颜色值 */
  color?: string;
  /** 是否可选择颜色 */
  colorPick?: boolean;
  /** 是否可勾选 */
  checkMode?: boolean;
  /** 默认是否勾选 */
  defCheck?: boolean;
}

/** 图例组配置 */
interface LegendGroup {
  /** 标题 */
  title: string;
  /** 是否内联显示 */
  inline?: boolean;
  /** 图例项数组 */
  data: LegendItem[];
  /** 子图例组 */
  children?: LegendGroup[];
  /** 组件事件 */
  comEvts?: {
    /** 颜色改变事件 */
    changeColor?: (color: string, item: LegendItem) => void;
    /** 勾选状态改变事件 */
    check?: (state: boolean, item: LegendItem) => void;
  };
}

export interface LegendProps {
  /** 图例数据 */
  datas: LegendGroup[];
  /** 是否可折叠 */
  foldable?: boolean;
  /** 折叠样式 */
  foldStyle?: string;
} 