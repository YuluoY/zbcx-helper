export interface ModuleDef {
  url?: string;
  com: any;
}

export interface TabConf {
  name: string;
  title: string;
  modDef: ModuleDef;
  comParams?: Record<string, any>;
  closable?: boolean;
  selected?: boolean;
  keepAlive?: boolean;
  comEvents?: Record<string, Function>;
}

export interface TabRecord {
  name: string;
  title: string;
  modDef: ModuleDef;
  comParams?: Record<string, any>;
  comEvents?: Record<string, Function>;
  uiParams?: {
    closable?: boolean;
    keepAlive?: boolean;
    selected?: boolean;
  };
  uiHandle?: () => any;
  _def?: any;
}

export interface TabsProps {
  size?: 'large' | 'default' | 'small';
  type?: 'card' | 'plain-card' | 'plain';
  position?: 'top' | 'right' | 'bottom' | 'left';
  container?: string;
  allRender?: boolean;
  tabs?: TabConf[];
} 