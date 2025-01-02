export interface ComConfig {
  // component的is参数值，可以是Vue组件对象，也可以是已注册的组件名，如：'el-button'
  com: string;
  // 传递给组件的参数对象，会使用v-bind绑定到组件上
  param?: Record<string, any>;
  // 传递给组件的事件监听对象，会使用v-on绑定到组件上
  listeners?: Record<string, any>;
  // 组件标题，会放在组件标签内
  title?: string;
}

export interface SplitScreenProps {
  // 组件配置集合，分屏数量等于comList的长度
  comList: ComConfig[];
  // 分屏数量
  userRowNum?: number;
} 