# 对话框

`cx-dialog` 对话框组件用例。

## 功能说明
1. 基于 Container 和 HeaderCard 组件进行扩展
2. 支持 可折叠、最小化，关闭
3. 支持 更换 Border
4. 支持 更换 Header

## 基础用法

可拖拽、可调整尺寸、可关闭对话框。

```vue
<template>
  <el-button @click="showDialog1">带按钮,可拖拽</el-button>

  <cx-dialog v-if="show" :dlg="dlg" @close="onClose">
    <span>
      可拖拽
      <br>
      可折叠、可关闭
    </span>
  </cx-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      dlg: {
        name: '默认对话框',
        title: '默认对话框',
        width: '500px',
        height: '250px',
        foldable: true,
        minable: true,
        maxable: true,
        minTitle: '最小化标题'
      }
    }
  },
  methods: {
    showDialog1() {
      this.show = true
    },
    onClose() {
      this.show = false
    }
  }
}
</script>
```

## 不可拖拽

使用`closable`属性控制是否可关闭，使用`minable`属性控制是否可最小化，使用`maxable`属性控制是否可最大化，使用`movable`属性控制是否可拖拽移动，使用`resizeable`属性控制是否可调整尺寸大小。

```vue
<template>
  <el-button @click="showDialog1">不可拖拽</el-button>

  <cx-dialog v-if="show" :dlg="dlg" @close="onClose">
    <span>这是一个不带按钮，不可拖拽对话框</span>
  </cx-dialog>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
  data() {
    return {
      dlg: {
        name: '不可拖拽对话框',
        title: '不可拖拽对话框',
        width: '500px',
        height: '250px',
        closable: true,
        minable: false,
        maxable: false,
        movable: false
      },
      show: false
    }
  },
  methods: {
    onClose() {
      ElMessageBox.confirm('Are you confirm to chose ?')
        .then(() => {
          this.show = false
        })
        .catch(() => {
          // catch error
        })
    },
    showDialog1() {
      this.show = !this.show
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| dlg | 对话框参数 | dlgCfg | | |
| active | 当前激活 | Boolean | true / false | false |
| border | 组件 Border 的参数（请参考具体的组件传递） | Object | — | — |
| header | 组件 Header 的参数（请参考具体的组件传递） | Object | — | — |
| content | 组件 Content 的参数（请参考具体的组件传递） | Object | — | — |

## dlgCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| name | 对话框标识 | String | | |
| title | 对话框标题 | String | | |
| width | 对话框宽度 CSS 的值 | String | | |
| height | 对话框高度 CSS 的值 | String | | |
| pos | 对话框位置,CSS 的定位属性 | Object | left / right / top / bottom | |
| icon | 标题栏图标 CSS 类名，默认为空 | String | | |
| modal | 是否模态对话框 | Boolean | | false |
| closable | 是否可以关闭 | Boolean | | true |
| foldable | 是否可以折叠 | Boolean | | false |
| minable | 是否可以最小化 | Boolean | | false |
| maxable | 是否可以最大化 | Boolean | | false |
| movable | 是否可以可以移动 | Boolean | | true |
| resizeable | 是否可以改变大小 | Boolean | | true |
| borderCom | Border 组件名（边框和底纹） | String | | cx-border-regular |
| headerCom | Header 组件名（标题头） | String | | cx-header-card |
| minTitle | 最小化时的标题文本 | String | | |
| minTitleStyle | 最小化时的标题文本样式 | String | | |
| minIcon | 最小化时的图标 | String | | |
| minIconStyle | 最小化时的图标样式 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| min-change | 最小化状态发生变化 | | |
| max-change | 最大化状态发生变化 | | |
| close | 关闭对话框 | | |
| dlg-active | 对话框激活 | (dlg) | dlg: component对话框组件对象 |
| DlgResizeEnd | 对话框大小变化消息，通过 cx.evnets.publish('DlgResizeEnd', this) | (dlg) | dlg: component对话框组件对象 |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| close | 关闭对话框 | | | |
| show | 是否显示对话框 | (visible) | visible: Boolean是否显示 | |
| setZIndex | 是否显示对话框 | (index) | index: Number叠加的z_index 值 | |
| minimize | 最小化对话框 | (newVal) | newVal: Boolean是否最小化 | |
| maximize | 最大化对话框 | (newVal) | newVal: Boolean是否最大化 | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |
| min-title | 最小化时的面板内容 | |

## 类型定义

```ts
export interface DialogCfg {
  // 对话框标识
  name: string;
  // 对话框标题
  title: string;
  // 对话框宽度 CSS 的值
  width: string;
  // 对话框高度 CSS 的值
  height: string;
  // 对话框位置,CSS 的定位属性
  pos?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  // 标题栏图标 CSS 类名，默认为空
  icon?: string;
  // 是否模态对话框
  modal?: boolean;
  // 是否可以关闭
  closable?: boolean;
  // 是否可以折叠
  foldable?: boolean;
  // 是否可以最小化
  minable?: boolean;
  // 是否可以最大化
  maxable?: boolean;
  // 是否可以可以移动
  movable?: boolean;
  // 是否可以改变大小
  resizeable?: boolean;
  // Border 组件名（边框和底纹）
  borderCom?: string;
  // Header 组件名（标题头）
  headerCom?: string;
  // 最小化时的标题文本
  minTitle?: string;
  // 最小化时的标题文本样式
  minTitleStyle?: string;
  // 最小化时的图标
  minIcon?: string;
  // 最小化时的图标样式
  minIconStyle?: string;
}

export interface DialogProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 对话框参数
  dlg: DialogCfg;
  // 当前激活
  active?: boolean;
  // 组件 Border 的参数
  border?: Record<string, any>;
  // 组件 Header 的参数
  header?: Record<string, any>;
  // 组件 Content 的参数
  content?: Record<string, any>;
}
```
