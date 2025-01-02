export interface GroupProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 标题
  title: string;
  // Border 组件名（边框和底纹）
  borderCom?: string;
  // Header 组件名（标题头）
  headerCom?: string;
  // 组件 Border 的参数（请参考具体的组件传递）
  border?: Record<string, any>;
  // 组件 Header 的参数（请参考具体的组件传递）
  header?: Record<string, any>;
  // 组件 Content 的参数（请参考具体的组件传递）
  content?: Record<string, any>;
  // 控制内容方向
  direction?: 'vertical' | 'horizontal';
} 