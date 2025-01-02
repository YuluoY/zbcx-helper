# 录入表单

`cx-form-input`  新增，编辑基本信息，通过major、minor快速来获取表单配置，基于cx-form-dyna 开发

## 功能说明
1. 支持 基本表单展示
2. 支持 表单带附件

## 基础用法

```vue
<template>
  <cx-lauout class="FormInput">
    <cx-form-input :params="formCfg" />
  </cx-lauout>
</template>

<script>
export default {
  mixins: [cx.mixin.IPlugBase],
  data() {
    return {
      formCfg: {
        major: $app.TabConst.ps_community.major,
        minor: $app.TabConst.ps_community.minor,
        att: {}
      }
    }
  },
  created() {
    this.formCfg.att = this.params.config.att
  }
}
</script>
```

## 属性 方式一 自定义表单，通过formKey来传递表单配置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ---- | --- | ------ | ------ |
| formKey | 表单配置命名 | String |  |  |
| params | 运行插件的参数（参见函数: runFormPlug） | Object |  |  |
| params.values | 默认属性设置,会合并到attr.att中 | Object |  |  |

## 属性 方式二 通过自定义major,minor来获取表单配置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ---- | --- | ------ | ------ |
| params | 运行插件的参数（参见函数: runFormPlug） | Object |  |  |
| major | 实体主类型 | Number |  |  |
| minor | 实体子类型 | Number |  |  |
| params.att | 默认属性设置,会合并到attr.att中 | Object |  |  |

## params 其他公共参数

| 名称 | 说明 | 类型    | 可选值 | 默认值 |
| ---- | ---- | ------- | ----- | ------ |
| useAttach | 是否需要关联附件功能（具体附件和上传参数配置attach和upload） | Boolean |  |  |
| attr | 参照 cx-form-dyna | Object |  |  |
| attach | 参照 cx-form-dyna | Object |  |  |
| upload | 参照 cx-form-dyna | Object |  |  |
| doc | 参照 cx-form-dyna | Object |  |  |
| params | 参照 cx-form-dyna | Object |  |  |

## 类型定义

```ts
/** 方式一参数 */
export interface FormInputParamsOne {
  /** 表单配置命名 */
  formKey: string;
  /** 运行插件的参数（参见函数: runFormPlug） */
  params: {
    /** 默认属性设置,会合并到attr.att中 */
    values?: Record<string, any>;
  };
}

/** 方式二参数 */
export interface FormInputParamsTwo {
  /** 运行插件的参数（参见函数: runFormPlug） */
  params: {
    /** 默认属性设置,会合并到attr.att中 */
    att?: Record<string, any>;
  };
  /** 实体主类型 */
  major: number;
  /** 实体子类型 */
  minor: number;
}

/** 公共参数 */
export interface CommonParams {
  /** 是否需要关联附件功能（具体附件和上传参数配置attach和upload） */
  useAttach?: boolean;
  /** 参照 cx-form-dyna */
  attr?: Record<string, any>;
  /** 参照 cx-form-dyna */
  attach?: Record<string, any>;
  /** 参照 cx-form-dyna */
  upload?: Record<string, any>;
  /** 参照 cx-form-dyna */
  doc?: Record<string, any>;
  /** 参照 cx-form-dyna */
  params?: Record<string, any>;
}

/** 录入表单组件Props */
export type FormInputProps = (FormInputParamsOne | FormInputParamsTwo) & CommonParams; 