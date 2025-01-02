# 数据管理

`cx-data-man` 数据管理(基于 DataGrid + IDataMan完成数据表展示，支持查询、功能按钮和操作列)

## 基础用法

```vue
<template>
  <cx-layout class="tablayout">
    <cx-data-man :params="dataObj">
    </cx-data-man>
  </cx-layout>
</template>

<script>
export default {
  data() {
    return {
      dataObj: null
    }
  },

  created() {
    this.dataObj = {
      major: $app.TabConst.xg_xmgl.major,
      minor: $app.TabConst.xg_xmgl.minor,
      orderby: 'id DESC',
      fixedExp: cx.sqlexp.from([['id', '>', '0']])
    }
  }
}
</script>

<style lang="scss" scoped>
.tablayout { 
  width: 98%; 
  margin: auto;
}
</style>
```

## 有 编辑 但无 更多 按钮

```vue
<template>
  <cx-layout class="tablayout">
    <cx-data-man :params="dataObj">
    </cx-data-man>
  </cx-layout>
</template>

<script>
export default {
  data() {
    return {
      dataObj: null
    }
  },

  created() {
    this.dataObj = {
      major: $app.TabConst.xg_xmgl.major,
      minor: $app.TabConst.xg_xmgl.minor,
      useExpMore: false,                                            // 有效
      editable: true,
      orderby: 'id asc',
      fixedExp: cx.sqlexp.from([['id', '>', '0']])
    }
  }
}
</script>

<style lang="scss" scoped>
.tablayout { 
  width: 98%; 
  margin: auto;
}
</style>
```

## 插槽 在筛选框前、后，分页后添加插槽

```vue
<template>
  <cx-layout class="tablayout">
    <cx-data-man :params="dataObj">
      <template v-slot:exp-preappend>
        preappend
      </template>
      <template v-slot:exp-append>
        append
      </template>
      <template v-slot:page-append>
        pageappend
      </template>
    </cx-data-man>
  </cx-layout>
</template>

<script>
export default {
  data() {
    return {
      dataObj: null
    }
  },

  created() {
    this.dataObj = {
      major: $app.TabConst.xg_xmgl.major,
      minor: $app.TabConst.xg_xmgl.minor,
      orderby: 'id DESC',
      fixedExp: cx.sqlexp.from([['id', '>', '0']])
    }
  }
}
</script>

<style lang="scss" scoped>
.tablayout { 
  width: 98%; 
  margin: auto;
}
</style>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **params** | 传递给组件的参数 | `Object` | | |

## params 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| **major** | 实体主类型 | Number | | |
| **minor** | 实体子类型 | Number | | |
| flds | 要创建的的字段对象序列，没传入该属性时，就是用major和minor对应表的字段数据 | Array | | null |
| editable | 是否可编辑 | Boolean | | false |
| useExp | 是否启用属性查询条件输入 | Boolean | | true |
| useExpMore | 是否启用属性查询条件输入(More) | Boolean | | true |
| noExpDispAll | 没有查询条件显示所有数据 | Boolean | | false |
| expRange | 条件输入里面用于输入范围的列列表 | `Array<String>` | | |
| expExclude | 条件输入里面排除的列列表 | `Array<String>` | | |
| fixedExp | 固定条件(任何时候都加上的条件) | cx.SqlEx | | null |
| defExp | 默认条件(有自定义条件之后即删除) | cx.SqlEx | | null |
| unionQuery | 联合查询参数 | Object | | null |
| unionQuery.mainAlias | 主表别名(例如: "a") | String | | |
| retAtt | 插入/修改是否返回数据 | Number | | 0 |
| sortable | 是否启用列排序(列名边上的排序箭头，会影响到宽度计算) | Boolean | | true |
| maxColWidth | 最大列宽（dynaWidth=true时用于计算列宽）| Number | | 275 |
| fontSize | 默认字体大小(dynaWidth=true时用于计算列宽) | Number | | 14 |
| padding | padding值(dynaWidth=true时用于计算列宽) | Number | | true |
| dynaWidth | 动态计算列宽，根据数据内容计算宽度，覆盖字段设置宽度 | Boolean | | true |
| entity | 实体对象 | Object | | |
| attObj | 属性对象 | cx.AttBase | | |
| ready | 是否初始化完成，尤其attObj是异步创建，必须ready后使用 | Boolean | | |
| expFlds | 条件表达式字段列表 | Array | | |
| attExp | 条件表达式对象 | Object | | |
| orderby | 排序，asc(升序) desc(降序) | String | | |
| queryPara | SQL查询参数 | Object | | |
| list | 数据 | Array | | |
| opers | 操作列表-便于计算各种操作的enable, show | Array | | |
| selected | 当前选中的行 | Object | | |
| selection | 复选框选中的全部行 | `Array<Object>` | | |
| sqlCfg | SQL 配置 | Object | | |

## sqlCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| key | sqlexp 表的 name | String | | |
| vals | 传递给 sqlexp 的值 | String | | |
| orderby | 排序信息 | String | | |

## 类型定义

```ts
/** SQL配置 */
interface SqlCfg {
  /** sqlexp 表的 name */
  key?: string;
  /** 传递给 sqlexp 的值 */
  vals?: string;
  /** 排序信息 */
  orderby?: string;
}

/** 联合查询参数 */
interface UnionQuery {
  /** 主表别名(例如: "a") */
  mainAlias: string;
}

/** 数据管理组件参数 */
interface DataManParams {
  /** 实体主类型 */
  major: number;
  /** 实体子类型 */
  minor: number;
  /** 要创建的的字段对象序列，没传入该属性时，就是用major和minor对应表的字段数据 */
  flds?: any[];
  /** 是否可编辑 */
  editable?: boolean;
  /** 是否启用属性查询条件输入 */
  useExp?: boolean;
  /** 是否启用属性查询条件输入(More) */
  useExpMore?: boolean;
  /** 没有查询条件显示所有数据 */
  noExpDispAll?: boolean;
  /** 条件输入里面用于输入范围的列列表 */
  expRange?: string[];
  /** 条件输入里面排除的列列表 */
  expExclude?: string[];
  /** 固定条件(任何时候都加上的条件) */
  fixedExp?: any;
  /** 默认条件(有自定义条件之后即删除) */
  defExp?: any;
  /** 联合查询参数 */
  unionQuery?: UnionQuery;
  /** 插入/修改是否返回数据 */
  retAtt?: number;
  /** 是否启用列排序(列名边上的排序箭头，会影响到宽度计算) */
  sortable?: boolean;
  /** 最大列宽（dynaWidth=true时用于计算列宽）*/
  maxColWidth?: number;
  /** 默认字体大小(dynaWidth=true时用于计算列宽) */
  fontSize?: number;
  /** padding值(dynaWidth=true时用于计算列宽) */
  padding?: number;
  /** 动态计算列宽，根据数据内容计算宽度，覆盖字段设置宽度 */
  dynaWidth?: boolean;
  /** 实体对象 */
  entity?: object;
  /** 属性对象 */
  attObj?: any;
  /** 是否初始化完成，尤其attObj是异步创建，必须ready后使用 */
  ready?: boolean;
  /** 条件表达式字段列表 */
  expFlds?: any[];
  /** 条件表达式对象 */
  attExp?: object;
  /** 排序，asc(升序) desc(降序) */
  orderby?: string;
  /** SQL查询参数 */
  queryPara?: object;
  /** 数据 */
  list?: any[];
  /** 操作列表-便于计算各种操作的enable, show */
  opers?: any[];
  /** 当前选中的行 */
  selected?: object;
  /** 复选框选中的全部行 */
  selection?: object[];
  /** SQL 配置 */
  sqlCfg?: SqlCfg;
}

/** 数据管理组件Props */
interface DataManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: DataManParams;
}
</code_block_to_apply_changes_from> 