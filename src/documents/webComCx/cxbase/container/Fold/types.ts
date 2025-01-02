export interface PlugCfg {
  name: string;
  com: object;
  def: object;
  params?: object;
}

export interface FoldProps {
  size?: 'large' | 'default' | 'small';
  title: string;
  folded?: boolean;
  addable?: boolean;
  icon?: string;
  data?: PlugCfg;
  borderCom?: string;
  headerCom?: string;
  border?: Record<string, any>;
  header?: Record<string, any>;
  content?: Record<string, any>;
} 