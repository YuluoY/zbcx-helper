# 审核意见

`cx-proc-comment` 审核意见，展示流程各个环节的办理人员、办理意见等信息。

## 基础用法

```vue
<template>
  <cx-proc-comment ref='procComment' :data="data" :apply="apply"></cx-proc-comment>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { message: '张三@:同意@:总经理审核', time: '2022-06-25 10:00:00' }
      ],
      apply: {
        applyUser: '李四',
        applyTime: '2022-06-24 12:00:00',
        task: '发起'
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
| data | 传递给组件的参数 | `Object<data>` | | |
| apply | 传递给组件的参数 | `Object<apply>` | | |

## data 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| message | 办理详情信息，包含name（名称）、comment（意见）、task（工单环节） | String | | |
| time | 办理时间 | datetime | | |

## apply 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| applyUser | 发起人 | String | | |
| applyTime | 发起时间 | datetime | | |
| task | 工单环节 | String | | |

## 类型定义

```ts
export interface ProcCommentData {
  /**
   * 办理详情信息，包含name（名称）、comment（意见）、task（工单环节）
   * @required
   */
  message: string;

  /**
   * 办理时间
   * @required
   */
  time: string;
}

export interface ProcCommentApply {
  /**
   * 发起人
   * @required
   */
  applyUser: string;

  /**
   * 发起时间
   * @required
   */
  applyTime: string;

  /**
   * 工单环节
   * @required
   */
  task: string;
}

export interface ProcCommentProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 传递给组件的参数
   * @required
   */
  data: ProcCommentData;

  /**
   * 传递给组件的参数
   * @required
   */
  apply: ProcCommentApply;
} 