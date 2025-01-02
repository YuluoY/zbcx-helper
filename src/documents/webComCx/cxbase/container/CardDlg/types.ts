export interface CardDlgHeaderProps {
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  // 标题
  title?: string;
  // 自定义样式
  style?: string;
}

export interface CardDlgBorderProps {
  // 自定义样式
  style?: string;
}

export interface CardDlgContentProps {
  // 自定义样式
  style?: string;
}

export interface CardDlgProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 是否可以关闭
  closable?: boolean;
  // 是否可以最小化
  minable?: boolean;
  // 是否支持可折叠
  foldable?: boolean;
  // 折叠时只显示当前选项卡标题，false时显示全部
  titleFolded?: boolean;
  // tab选项卡的位置，一个选项卡时不显示
  tabPosition?: 'left' | 'right';
  // 折叠或最小化时样式，可设置位置
  minFoldStyle?: string;
  // 最小化或折叠的时候标题的el-tooltip参数对象
  minTooltip?: Record<string, any>;
  // 是否默认折叠
  defFold?: boolean;
  // 是否默认最小化
  defMin?: boolean;
  // Border 组件名（边框和底纹）
  borderCom?: string | any;
  // Header 组件名（标题头）
  headerCom?: string | any;
  // 组件 Border 的参数
  border?: CardDlgBorderProps;
  // 组件 Header 的参数
  header?: CardDlgHeaderProps;
  // 组件 Content 的参数
  content?: CardDlgContentProps;
} 