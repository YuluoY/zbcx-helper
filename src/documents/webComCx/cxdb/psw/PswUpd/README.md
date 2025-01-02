# 修改密码

`cx-psw-upd` 修改密码

## 基础用法

```vue
<template>
  <cx-psw-upd :highLevel="true" :encode="encode" />
</template>

<script>
default {
  data() {
    return {
      highLevel: true,
      encode: (password) => password
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| rules | 密码规则 | String | | |
| type | 密码显示方式 | String | | password |
| highLevel | 高级 | Boolean | | |
| encode | 密码加密函数 | Function | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | -----------------|
| onChange | 当前选择发生变化 | (value) | value数据项 |
| onEnterKey | 按下回车键 | (input) | input数据项 |
| click | 点击密码图标 | | 切换密码显示/隐藏 |
| onOk | 点击确定按钮，修改密码 | | |

## 类型定义

```ts
interface PswUpdProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 密码规则
   */
  rules?: string;

  /**
   * 密码显示方式
   * @default password
   */
  type?: string;

  /**
   * 高级
   * @required
   */
  highLevel: boolean;

  /**
   * 密码加密函数
   * @required
   */
  encode: (password: string) => string;
} 
```