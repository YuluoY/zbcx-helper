export interface FileViewProps {
  /** 文件的url地址 */
  src: string;
  /** 文件后缀类型 */
  filetype: string;
  /** 文件名称 */
  title?: string;
  /** 自定义传给对应文件预览组件的参数对象 */
  comProps?: Record<string, any>;
  /** 自定义传给对应文件预览组件的事件监听注册对象 */
  comListeners?: Record<string, any>;
  /** 自定义的组件配置对象 */
  custCom?: {
    name: string;
  };
  /** 是否不用内置组件，而直接用浏览器自带插件去加载文件 */
  useIframe?: boolean;
} 