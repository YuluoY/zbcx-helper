# OrgUsrStrictTree 根据用户所在部门展示组织结构树

根据用户所在部门展示组织结构树。

## 基础用法

```vue
<template>
  <cx-org-usr-strict-tree
    size="default"
    :plugs="[]"
    :tree-atts="{}"
    :params="{
      showDisabled: false,
      showCheckbox: false,
      showFilter: false,
      showUser: false,
      orgByCur: true,
      showParent: false,
      hides: [],
      defChecked: [],
      showMyAdd: false
    }"
    @current-change="(data) => {}"
  />
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| size | String | default | UI 规格 |
| plugs | Array.<cx.dc.PlugNode> | - | 插件列表 |
| disables | String | - | 需要禁能的ID列表 |
| tree-atts | Object | - | 映射 cx-tree 组件的属性 |
| params | Object.<Params> | - | 传递的参数对象 |

## Params 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| showDisabled | Boolean | false | 是否展示禁用用户 |
| showCheckbox | Boolean | false | 是否展示勾选框 |
| showFilter | Boolean | false | 是否展示搜索框 |
| showUser | Boolean | false | 是否展示用户,默认只展示部门 |
| orgByCur | Boolean | true | 是否根据当前登录用户所在的部门显示 |
| showParent | Boolean | false | 是否显示父部门(严格模式下) |
| hides | Array.<Number> | [] | 需要隐藏的用户结点，数组内为userid |
| defChecked | Array.<Number> | [] | 默认选中的结点，数组内为结点key值，结点key默认为id |
| showMyAdd | Number | false | 是否只显示自己创建的用户和自己 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| current-change | 当前选择发生变化 | function(data) |

## 类型定义

```ts
export interface OrgUsrStrictTreeParams {
  /**
   * 是否展示禁用用户
   * @default false
   */
  showDisabled?: boolean;

  /**
   * 是否展示勾选框
   * @default false
   */
  showCheckbox?: boolean;

  /**
   * 是否展示搜索框
   * @default false
   */
  showFilter?: boolean;

  /**
   * 是否展示用户,默认只展示部门
   * @default false
   */
  showUser?: boolean;

  /**
   * 是否根据当前登录用户所在的部门显示
   * @default true
   */
  orgByCur?: boolean;

  /**
   * 是否显示父部门(严格模式下)
   * @default false
   */
  showParent?: boolean;

  /**
   * 需要隐藏的用户结点，数组内为userid
   * @default []
   */
  hides?: Array<number>;

  /**
   * 默认选中的结点，数组内为结点key值，结点key默认为id
   * @default []
   */
  defChecked?: Array<number>;

  /**
   * 是否只显示自己创建的用户和自己
   * @default false
   */
  showMyAdd?: number;
}

export interface OrgUsrStrictTreeProps {
  /**
   * UI 规格
   * @default default
   */
  size?: string;

  /**
   * 插件列表
   */
  plugs?: Array<any>;

  /**
   * 需要禁能的ID列表
   */
  disables?: string;

  /**
   * 映射 cx-tree 组件的属性
   */
  treeAtts?: Record<string, any>;

  /**
   * 传递的参数对象
   */
  params?: OrgUsrStrictTreeParams;
} 
```