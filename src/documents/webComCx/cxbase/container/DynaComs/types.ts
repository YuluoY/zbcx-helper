export interface ModuleDef {
  url?: string;
  com?: object | string;
}

export interface ComConf {
  name: string;
  modDef: ModuleDef;
  comParams?: object;
  comEvents?: object;
}

export interface DynaComsProps {
  plugName: string;
  name?: string;
  isSingle?: boolean;
} 