export interface DialogCfg {
  // 对话框标识
  name: string;
  // 对话框标题
  title: string;
  // 对话框宽度 CSS 的值
  width: string;
  // 对话框高度 CSS 的值
  height: string;
  // 对话框位置,CSS 的定位属性
  pos?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  // 标题栏图标 CSS 类名，默认为空
  icon?: string;
  // 是否模态对话框
  modal?: boolean;
  // 是否可以关闭
  closable?: boolean;
  // 是否可以折叠
  foldable?: boolean;
  // 是否可以最小化
  minable?: boolean;
  // 是否可以最大化
  maxable?: boolean;
  // 是否可以可以移动
  movable?: boolean;
  // 是否可以改变大小
  resizeable?: boolean;
  // Border 组件名（边框和底纹）
  borderCom?: string;
  // Header 组件名（标题头）
  headerCom?: string;
  // 最小化时的标题文本
  minTitle?: string;
  // 最小化时的标题文本样式
  minTitleStyle?: string;
  // 最小化时的图标
  minIcon?: string;
  // 最小化时的图标样式
  minIconStyle?: string;
}

export interface DialogProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 对话框参数
  dlg: DialogCfg;
  // 当前激活
  active?: boolean;
  // 组件 Border 的参数
  border?: Record<string, any>;
  // 组件 Header 的参数
  header?: Record<string, any>;
  // 组件 Content 的参数
  content?: Record<string, any>;
} 