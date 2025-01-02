# 通用文件预览

`cx-file-view` 通用文件预览。

## 基础用法

<preview path="./demo/basic.vue" title="" description=""></preview>

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| src | 文件的url地址，必传！如：'static/test.excel' | String | | |
| filetype | 文件后缀类型，必传！如：flv | String | | |
| title | 文件名称，非必传 | String | | |
| comProps | 自定义传给对应文件预览组件的参数对象 | Object | | |
| comListeners | 自定义传给对应文件预览组件的事件监听注册对象 | Object | | |
| custCom | 自定义的组件配置对象，格式如：`{name: 'cx-file-view'}` | Object | | |
| useIframe | 用以标识是否不用内置组件，而直接用浏览器自带插件去加载文件 | Boolean | true/false | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ----- | ----- | -- |
| match_success | 根据文件类型匹配到对应渲染组件时 | (comCfg) | 渲染组件配置对象，如：`{name: 'cx-excel-view', types: ['xlsx']}` |
| match_failed | 根据文件类型未匹配到对应渲染组件时 | () | |

## 类型定义

```ts
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
    /** 组件名称 */
    name: string;
  };
  /** 是否不用内置组件，而直接用浏览器自带插件去加载文件 */
  useIframe?: boolean;
}

export interface ComponentConfig {
  /** 组件名称 */
  name: string;
  /** 支持的文件类型列表 */
  types: string[];
}
```
