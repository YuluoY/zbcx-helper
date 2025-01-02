export interface ModuleDef {
  // 模块文件路径。相对 src 目录且不包含它。如：src/ui/frame/Home.vue 传入 ui/frame/Home.vue
  url?: string;
  // 模块的组件对象
  com?: any;
}

export interface TabConf {
  // 名称，唯一 key
  name: string;
  // 显示标题
  title: string;
  // 模块定义 { url:, com: }
  modDef: ModuleDef;
  // 组件参数
  comParams?: Record<string, any>;
  // tab 是否可关闭
  closable?: boolean;
  // 是否选中
  selected?: boolean;
  // 默认内容高度，css的值
  contHeightDef?: string;
  // 组件的事件监听,如：{select: this.onSelect, change: this.onChange}
  comEvents?: Record<string, any>;
}

export interface TabRecord extends TabConf {
  // 内容高度，css的值,控制实际显示尺寸
  contHeight?: string;
  // 面板组件cx-card的参数，{closable：, keepAlive:, selected: }
  uiParams?: Record<string, any>;
  // 获取当前 tabs 组件的句柄函数
  uiHandle?: () => any;
  // 标准化的定义对象
  _def?: any;
}

export interface CollapseProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // tabs 组件的父路由名
  container?: string;
  // 是否手风琴模式，true时只能激活展开一个面板
  accordion?: boolean;
  // tab 页定义
  tabs?: TabConf[];
} 