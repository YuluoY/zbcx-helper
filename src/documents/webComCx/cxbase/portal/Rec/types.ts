export interface RecItem {
  /** 头部件类型 */
  headType?: 'index' | 'img';
  /** 尾部件类型 */
  footType?: 'index' | 'img' | 'text' | 'btn';
  /** 标题内容 */
  title: string;
  /** 当headType为img时的图片路径 */
  headImg?: string;
  /** 当footType为img时的图片路径 */
  footImg?: string;
  /** 当footType为text时的标题内容 */
  rtitle?: string;
  /** 当footType为btn时的按钮名称 */
  btnText?: string;
  /** 序号颜色 */
  indexColor?: string;
  /** 字体颜色 */
  fontColor?: string;
  /** 背景颜色 */
  bgColor?: string;
}

export interface RecProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 自动滚动数据列表 */
  list?: any[];
  /** 自动滚动时鼠标移上去是否暂停 */
  hover?: boolean;
  /** 自动滚动的速度 */
  step?: number;
  /** 传递给组件的参数 */
  datas: RecItem[];
  /** vue3-seamless-scroll原生属性 */
  elAtts?: Record<string, any>;
  /** 传入的组件 */
  attCom?: Record<string, any>;
  /** 组件类型 */
  componentType?: 'icon' | 'num' | 'scroll';
  /** 是否显示悬浮文字提示 */
  showTip?: boolean;
  /** 是否显示背景 */
  showBackground?: boolean;
  /** 背景颜色 */
  bgColor?: string;
} 