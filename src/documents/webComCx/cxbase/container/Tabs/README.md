# 选项卡

`cx-tabs` 选项卡组件，渲染全部页面。

## 基础用法

使用 `position=top` , `type=card` 定义卡片。

```vue
<template>
  <span>top 切换</span> <el-button style="width:1rem;margin-bottom:.1rem;" @click="changetType">切换type</el-button> <span>{{ param?.type }}</span>
  <div style="width:700px;height: 200px">
    <cx-tabs ref="tabs1" v-if="param" v-bind="param" @click="onSelect"></cx-tabs>
  </div>
</template>

<script>
import { h } from 'vue'

export default {
  data() {
    return {
      param: {
        tabs: this.getMenus('size: default, type: card').map(tab => ({ ...tab })),
        allRender: true,
        size: 'default',
        position: 'top',
        type: 'card'
      }
    }
  },
  methods: {
    changetType() {
      const temp = this.param
      this.param = null
      temp.type = temp.type === 'card' ? 'border-card' : 'card'
      temp.tabs = this.getMenus(\`size:default, type: \\${temp.type}\\`).map(tab => ({ ...tab, closable: true }))
      this.param = temp
    },
    onSelect(data) {
      console.log('clickTab', data)
    },
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
          title: '卡片1',
          modDef: { url: '', com: myCom },
          closable: false,
          selected: true,
          comParams: {
            title: '卡片1内容'
          }
        },
        {
          name: 'menu2',
          title: '卡片2',
          closable: true,
          modDef: { url: '', com: 'CxCard' },
          comParams: {
            title: '卡片2-card组件',
            closable: true,
            foldable: true
          }
        },
        {
          name: 'menu3',
          title: '卡片3',
          modDef: { url: '', com: myCom },
          closable: true,
          comParams: {
            innerHTML: '卡片3内容'
          }
        }
      ]
    }
  }
}
</script>
```

## 底部切换

修改 `position=bottom`。

```vue
<template>
  <span>bottom 切换</span> <el-button style="width:1rem;margin-bottom:.1rem;" @click="changetType">切换type</el-button> <span>{{ param?.type }}</span>
  <div style="width:700px;height: 200px">
    <cx-tabs ref="tabs1" v-if="param" v-bind="param" @click="onSelect"></cx-tabs>
  </div>
</template>

<script>
// 代码同上，仅修改 position: 'bottom'
</script>
```

## 左侧切换

修改 `position=left`。

```vue
<template>
  <span>left 切换</span> <el-button style="width:1rem;margin-bottom:.1rem;" @click="changetType">切换type</el-button> <span>{{ param?.type }}</span>
  <div style="width:700px;height: 200px">
    <cx-tabs ref="tabs1" v-if="param" v-bind="param" @click="onSelect"></cx-tabs>
  </div>
</template>

<script>
// 代码同上，仅修改 position: 'left'
</script>
```

## 右侧切换

修改 `position=right`。

```vue
<template>
  <span>right 切换</span> <el-button style="width:1rem;margin-bottom:.1rem;" @click="changetType">切换type</el-button> <span>{{ param?.type }}</span>
  <div style="width:700px;height: 200px">
    <cx-tabs ref="tabs1" v-if="param" v-bind="param" @click="onSelect"></cx-tabs>
  </div>
</template>

<script>
// 代码同上，仅修改 position: 'right'
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| type | tab的风格 | String | card / plain-card / plain | card |
| position | 菜单栏的摆放位置 | String | top / right/bottom/left | top |
| container | tabs组件的父路由名 | String | | |
| allRender | container为空组件形式运行tab页时，是否全部运行页面组件 | Boolean | | false |
| tabs | tab页定义 | `Array<TabConf>` | | [] |

## TabConf 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **name** | 名称，唯一key | String | | |
| **title** | 显示标题 | String | | |
| **modDef** | 模块定义 { url:, com: } | Object | | |
| comParams | 组件参数 | Object | | |
| closable | tab是否可关闭 | Boolean | | |
| selected | 是否选中 | Boolean | | true |
| keepAlive | tab页是否切换时不重绘，可在uicfg中配置 | Boolean | | true |
| comEvents | 非路由 - 组件的事件监听,如：`{select: this.onSelect, change: this.onChange}` | Object | | |

## TabRecord 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | tab标识名 | String | | |
| title | tab显示名称，组件使用 | String | | |
| modDef | 模块定义 | ModuleDef | | |
| comParams | 组件运行参数 | Object | | |
| comEvents | 组件的事件监听 | Object | | |
| uiParams | tabs组件参数，`{closable：, keepAlive:, selected: }` | Object | | |
| uiHandle | 获取当前tabs组件的句柄函数 | Function | | |
| _def | 标准化的定义对象 | Object | | |

## ModuleDef 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| url | 模块文件路径。相对src目录且不包含它。如：src/ui/frame/Home.vue 传入 ui/frame/Home.vue | String | | |
| com | 模块的组件对象 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| click | 选中tab | ({ curTab , oldTab }, component) | curTab，oldTab的点击或之前tab数据对象，component是tabs组件对象 |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| add | 增加tab项。在外部组件通过$ref.tabs.add方式添加tab | (tabConf) | tabConf: `TabConf`标签配置对象 | |
| remove | 移除tab页 | (name) | name: String标签标识名 | |
| makeTabRecord | 内部函数 根据tab配置构造tabRecord数据，comParams和component都转换为对象 | (tabConf) | tabConf: `TabConf`标签配置对象 | TabRecord |
| makeTabComponent | 内部函数 根据新增tab的component属性，获取对应的组件配置对象 | (com) | com: `Object|String`组件注册名（如：CxCardDialog）,或者组件配置对象 | 检索到的tabRecord: Object |
| getTabRecord | 内部函数 根据新增tab的component属性，获取对应的组件配置对象 | (name) | name: String标签标识名 | `TabRecord|Null` |
| setCurrentTab | 内部函数 设置当前选中的tab页 | (tabConf) | TabRecord对象 | |
| showCloseIcon | 内部函数 设置标签关闭图标是否显示 | (name) | name: String标签标识名 | Boolean是否显示关闭图标 |

## 类型定义

```ts
export interface ModuleDef {
  // 模块文件路径，相对src目录且不包含它。如：src/ui/frame/Home.vue 传入 ui/frame/Home.vue
  url?: string;
  // 模块的组件对象
  com: any;
}

export interface TabConf {
  // 名称，唯一key
  name: string;
  // 显示标题
  title: string;
  // 模块定义 { url:, com: }
  modDef: ModuleDef;
  // 组件参数
  comParams?: Record<string, any>;
  // tab是否可关闭
  closable?: boolean;
  // 是否选中
  selected?: boolean;
  // tab页是否切换时不重绘，可在uicfg中配置
  keepAlive?: boolean;
  // 非路由 - 组件的事件监听,如：{select: this.onSelect, change: this.onChange}
  comEvents?: Record<string, Function>;
}

export interface TabRecord {
  // tab标识名
  name: string;
  // tab显示名称，组件使用
  title: string;
  // 模块定义
  modDef: ModuleDef;
  // 组件运行参数
  comParams?: Record<string, any>;
  // 组件的事件监听
  comEvents?: Record<string, Function>;
  // tabs组件参数，{closable：, keepAlive:, selected: }
  uiParams?: {
    closable?: boolean;
    keepAlive?: boolean;
    selected?: boolean;
  };
  // 获取当前tabs组件的句柄函数
  uiHandle?: () => any;
  // 标准化的定义对象
  _def?: any;
}

export interface TabsProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // tab的风格
  type?: 'card' | 'plain-card' | 'plain';
  // 菜单栏的摆放位置
  position?: 'top' | 'right' | 'bottom' | 'left';
  // tabs组件的父路由名
  container?: string;
  // container为空组件形式运行tab页时，是否全部运行页面组件
  allRender?: boolean;
  // tab页定义
  tabs?: TabConf[];
}
``` 