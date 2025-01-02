# 资源树

`cx-res-tree` 资源树(基于cx_restree)

## 基础用法

```vue
<template>
  <cx-res-tree
    node="example"
    :vals="{}"
    :auth="{ addable: true, editable: true, removable: true }"
  >
    <template #default="data">
      {{ data }}
    </template>
  </cx-res-tree>
</template>

<script>
default {
  data() {
    return {
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| node | 树结点配置（cx_resdir 配置的 node 名） | String | | |
| vals | 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 | Object | | |
| lazy | 是否懒加载模式 | Boolean | | true |
| auth | 授权信息 | AuthDir | | |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | cx.dc.DocTreeHandler |
| tree-atts | 传递给 el-tree 的属性 | Object | | { selectFirst: true } |

## AuthDir 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| addable | 是否可增加目录 | Boolean | | true |
| editable | 是否可编辑目录 | Boolean | | true |
| removable | 是否可删除目录 | Boolean | | true |

## 插槽
| 名称 | 描述 | 参数 |
| -----| --- | ---- |
| default | 默认插槽 | data |

## 类型定义

```ts
/** 授权信息 */
interface AuthDir {
  /**
   * 是否可增加目录
   * @default true
   */
  addable?: boolean;

  /**
   * 是否可编辑目录
   * @default true
   */
  editable?: boolean;

  /**
   * 是否可删除目录
   * @default true
   */
  removable?: boolean;
}

interface ResTreeProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'small' | 'default' | 'large';

  /**
   * 树结点配置（cx_resdir 配置的 node 名）
   * @required
   */
  node: string;

  /**
   * 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值
   * @required
   */
  vals: Record<string, any>;

  /**
   * 是否懒加载模式
   * @default true
   */
  lazy?: boolean;

  /**
   * 授权信息
   */
  auth?: AuthDir;

  /**
   * 树控件处理对象
   * @default cx.dc.DocTreeHandler
   */
  treeHandler?: any;

  /**
   * 传递给 el-tree 的属性
   * @default { selectFirst: true }
   */
  treeAtts?: Record<string, any>;
}
```