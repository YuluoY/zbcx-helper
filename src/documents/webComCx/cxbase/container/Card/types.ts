export interface CardHeaderProps {
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  // 图标
  icon?: string;
  // 标题
  title?: string;
  // 自定义样式
  style?: string;
}

export interface CardBorderProps {
  // 自定义样式
  style?: string;
  // SVG文件URL
  url?: string;
  // SVG形状函数
  shape?: (width: number, height: number) => string;
}

export interface CardContentProps {
  // 自定义样式
  style?: string;
}

export interface CardProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 标题
  title?: string;
  // 是否支持关闭
  closable?: boolean;
  // 是否支持可折叠
  foldable?: boolean;
  // 标题栏图标 CSS 类名
  icon?: string;
  // Border 组件名（边框和底纹）
  borderCom?: string | any;
  // Header 组件名（标题头）
  headerCom?: string | any;
  // 组件 Border 的参数
  border?: CardBorderProps;
  // 组件 Header 的参数
  header?: CardHeaderProps;
  // 组件 Content 的参数
  content?: CardContentProps;
} 