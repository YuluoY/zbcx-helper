# 验证码

`cx-verifi-code` 验证码

## 基础用法

```vue
<template>
  <div>
    <cx-verifi-code
      currentCaptchaId="default"
      @vaild="onVaild"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onVaild(param) {
      console.log('onVaild =>', param)
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| currentCaptchaId | 尺寸 | String | large / default /small | default |
| currentCaptchaConfig | 密码规则 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | -----------------|
| vaild | 校验 | (param) | param数据项 |

## 类型定义

```ts
export interface VerifiCodeProps {
  /**
   * 尺寸
   * @default default
   */
  currentCaptchaId?: 'large' | 'default' | 'small';

  /**
   * 密码规则
   */
  currentCaptchaConfig?: string;
} 