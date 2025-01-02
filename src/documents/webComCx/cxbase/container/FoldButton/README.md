# 折叠按钮

`cx-fold-button` 折叠组件用例，模块化展示数据。
可折叠/展开的div容器, 支持上下左右方向。

## 向下方折叠

使用 `direction=top` 按钮在上。

```vue
<template>
  <cx-fold-button v-bind="opts" style="width: 700px; height: 200px">
    <div>
      折叠按钮在上
      <br>
      下方 内容面板展开、折叠
    </div>
  </cx-fold-button>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        direction: 'top',
        slotStyle: 'width: 100%; height: 100%;background: var(--cx-colorBg4);'
      }
    }
  }
}
</script>
```

## 向右侧折叠

使用 `direction=left` 按钮在左。

```vue
<template>
  <cx-fold-button v-bind="opts">
    <div>
      折叠按钮在左
      <br>
      右侧 内容面板展开、折叠
    </div>
  </cx-fold-button>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        direction: 'left',
        bodyStyle: 'width: 3.5rem;height: 2rem',
        slotStyle: 'width: 100%; height: 100%;background: var(--cx-colorBg4);'
      }
    }
  }
}
</script>
```

## 向左侧折叠

使用 `direction=right` 按钮在右。

```vue
<template>
  <cx-fold-button v-bind="opts">
    <div>
      折叠按钮在右
      <br>
      左侧 内容面板展开、折叠
    </div>
  </cx-fold-button>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        direction: 'right',
        bodyStyle: 'width: 3.5rem;height: 2rem',
        slotStyle: 'width: 100%; height: 100%;background: var(--cx-colorBg4);'
      }
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| defOpen | 默认是否展开 | Boolean | | true |
| direction | 折叠按钮位置 | String | top/right/bottom/left | top |
| bodyStyle | body样式 | String | | false |
| slotStyle | 插槽样式 | String | | false |
| btnStyle | 折叠按钮样式 | String | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| fold-change | 折叠状态变化 | (name) | name: String 当前折叠名称标识 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |

## 类型定义

```ts
export interface FoldButtonProps {
  // 尺寸
  size?: 'large' | 'default' | 'small';
  // 默认是否展开
  defOpen?: boolean;
  // 折叠按钮位置
  direction?: 'top' | 'right' | 'bottom' | 'left';
  // body样式
  bodyStyle?: string;
  // 插槽样式
  slotStyle?: string;
  // 折叠按钮样式
  btnStyle?: string;
}
``` 