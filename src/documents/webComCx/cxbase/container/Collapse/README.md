# 手风琴折叠

`cx-collapse` 折叠展示内容，每个折叠面板使用cx-card。

## 功能说明
1. 基于 Container 和 HeaderCard 组件进行扩展
2. 支持 可折叠、最小化，关闭
3. 支持 更换 Border
4. 支持 更换 Header

## 基础用法

可拖拽、可调整尺寸、可关闭对话框。

```vue
<template>
  <div style="width:500px;height: 500px;">
    <cx-collapse ref="tabs1" v-if="param" v-bind="param" style="height:100%"></cx-collapse>
  </div>
</template>

<script>
import { h } from 'vue'

export default {
  data() {
    return {
      param: {
        tabs: this.getMenus('size: default').map(tab => ({ ...tab })),
        accordion: false,
        size: 'default'
      }
    }
  },
  methods: {
    getMenus(txt = '') {
      let myCom = {
        render() {
          return h('div', { innerHTML: this.comParams.title + '<br/><br/>' + txt })
        },
        props: { comParams: { type: Object } }
      }
      return [
        {
          name: 'menu1',
          title: '非手风琴-多激活',
          modDef: { url: '', com: myCom },
          closable: false,
          selected: true,
          comParams: {
            title: '卡片1内容: accordion: false'
          }
        }
      ]
    }
  }
}
</script>
```

## 单折叠

使用 `accordion=true` 单折叠面板。

```vue
<template>
  <div style="width:500px;height: 500px;">
    <cx-collapse ref="tabs1" v-if="param" v-bind="param" style="height:100%"></cx-collapse>
  </div>
</template>

<script>
import { h } from 'vue'

export default {
  data() {
    return {
      param: {
        tabs: this.getMenus('size: default').map(tab => ({ ...tab })),
        accordion: true,
        size: 'default'
      }
    }
  },
  methods: {
    getMenus(txt = '') {
      let myCom = {
        render() {
          return h('div', { innerHTML: this.comParams.title + '<br/><br/>' + txt })
        },
        props: { comParams: { type: Object } }
      }
      return [
        {
          name: 'menu1',
          title: '手风琴-单激活',
          modDef: { url: '', com: myCom },
          closable: false,
          selected: true,
          comParams: {
            title: '卡片1内容: accordion: true'
          }
        }
      ]
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| container | tabs 组件的父路由名 | String | | |
| accordion | 是否手风琴模式，true时只能激活展开一个面板 | Boolean | | false |
| tabs | tab 页定义 | `Array.<TabConf>` | | [] |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| add | 增加 tab 项。在外部组件通过 $ref.tabs.add 方式添加 tab | (tabConf) | tabConf: `TabConf`标签配置对象 | |
| remove | 移除 tab 页 | (name) | name: String标签标识名 | |
| makeTabRecord | 内部函数 根据tab配置构造 tabRecord 数据，comParams 和 component 都转换为对象 | (tabConf) | tabConf: `TabConf`标签配置对象 | TabRecord |
| makeTabComponent | 内部函数 根据新增 tab 的 component 属性，获取对应的组件配置对象 | (com) | com: `Object|String`组件注册名（如：CxCardDialog）,或者组件配置对象 | 检索到的 tabRecord: Object |
| getTabRecord | 内部函数 根据新增 tab 的 component 属性，获取对应的组件配置对象 | (name) | name: String标签标识名 | `TabRecord|Null` |
| openTab | 内部函数 展开tab页 | (tabConf) | TabRecord 对象 | |
| foldTab | 内部函数 折叠tab页 | (tabConf) | TabRecord 对象 | |

## 类型定义

```ts
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
```