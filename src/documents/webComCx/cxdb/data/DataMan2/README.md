# 数据表格管理

`cx-data-man2` 数据管理(基于 DataGrid + IDataMan2 完成数据表展示，支持查询、功能按钮和操作列)

## 基础用法

方式1：在params中主子类型`major`,`minor` 根据对应表`disporder` 展示全部字段。

方式2：在params中配置名`tabCfgName`, 根据cx_tabcfg表对应配置记录中的 显示、表达式、范围表达式等条件进行展示。

```vue
<template>
  <cx-data-man2 v-bind="datamanOpts" class="dataman2" ref="dataman2"></cx-data-man2>
</template>

<script>
export default {
  data() {
    return {
      datamanOpts: {
        params: {
          tabCfgName: 'wgUser',
          editable: false,
          fixedExp: cx.sqlexp.from([['id', '>', '0']])
        },
        makeExpOpers: this.makeExpOpers,
        aftInputMakeParams: (att, plug) => {
          return new Promise((resolve, reject) => {
            delete att.geom
            resolve(att)
          })
        }
      }
    }
  },
  methods: {
    /**
     * 构造表达式 的按钮
     */
    makeExpOpers(defOpers = [], context) {
      return defOpers.filter(operCfg => {
        if (operCfg.name === 'add')
          operCfg.onClick = () => this.onAdd()

        return ['add', 'export', 'import', 'exportModel'].includes(operCfg.name)
      })
    },
    onAdd() {
      // 添加操作
    }
  }
}
</script>
```

对应sql语句如下：
```sql
delete from cx_tabcfg where name='wgUser';
INSERT INTO cx_tabcfg(sys,name,tab,flds,disp,hide,exp,noexp,rang,norang,params,visual,nocol,memo) 
VALUES('0', 'wgUser', 'wg_usergroup', null, 'user_name,gender,age,tel,idcard,group_name', NULL,NULL,NUll,NUll,NUll,NULL,NULL,NULL,NULL);
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| **params** | 给 IDataMan2 的参数对象，major、minor和tabCfgName 两组参数二选一必传 | Object | | |
| expParams | 传递给cx-exp-input组件的参数对象 | Object | | |
| expEvents | 传递给cx-exp-input组件的事件监听对象 | Object | | |
| dgParams | 传递给cx-data-grid组件的参数对象 | Object | | |
| dgEvents | 传递给cx-data-grid组件的事件监听对象 | Object | | |
| showExp | 是否显示搜索部件 | Boolean | | true |
| showColFilter | 是否显示表格字段过滤 | Boolean | | true |
| showBtnTitle | 是否显示按钮文本，false时只显示按钮图标 | Boolean | | true |
| maxExpOper | 查询行显示按钮的数量，大于时以折叠展示 | Number | | 4 |
| makeExpOpers | 构造cx-exp-input组件同行显示按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数 | Function | | 查看、添加、修改、删除、导出、导入、下载模板 7个按钮 |
| makeExpFlds | 构造exp条件字段序列，返回条件对象序列 | Function | | |
| maxBarOper | 查询行下行显示按钮的数量，大于时以折叠展示 | Number | | 8 |
| makeBarOpers | 构造cx-exp-input组件下独占一行的按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数。序列>1时才显示按钮条 | Function | | 查看、添加、修改、删除、导出、导入、下载模板 7个按钮 |
| makeTabOpers | 构造table数据行操作列和按钮，返回 opercol 对象序列，每个 opercol.btns是操作按钮 | Function | | 编辑模式：修改、删除；预览模式：查看 |
| makeTabCols | 构造table数据列序列，返回 表列 对象序列 | Function | | |
| befAdd | 添加入库前回调 | Function | | |
| aftAdd | 添加入库后回调 | Function | | |
| befDel | 删除入库前回调 | Function | | |
| aftDel | 删除入库后回调 | Function | | |
| befUpd | 修改入库前回调 | Function | | |
| aftUpd | 修改入库后回调 | Function | | |
| befQry | 查询前回调 | Function | | queryPara是查询参数对象 |
| qryCust | 自定义查询，覆盖IDataMan2的runSvr方法，返回Promise和数据结果 | Function | | |
| procQryData | 查询后原始数据处理 | Function | | |
| aftQry | 查询后回调 | Function | | |
| befTempExport | 模板导出前回调 | Function | | params导出参数对象包含flds和entity, 返回FldCfg对象序列作为excel的表头字段序列，默认用表的字段disporder过滤 |
| befExport | 导出前回调 | Function | | params是导出 `RptSvr/sqlRpts` 服务的参数，默认为当前查询条件导出，如果有勾选数据则导出当前勾选的数据; 参数中filename 为导出文件名 |
| befImport | 导入前回调 | Function | | 导入插件`ImpData`参数说明，默认为Excel导入 |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ---- |
| after-init | init完成后的回调函数 | (this) | datamanage组件实例对象 |
| row-click | 数据表行点击事件 | (att) | att当前行数据对象 |
| row-dbclick | 数据表行双击事件 | (att) | att当前行数据对象 |
| selection-change | 数据表行勾选事件 | (selection) | selection选择的数据化对象序列 |
| column-change | 数据表字段过滤变化 | (col) | col 当前变化的字段对象，col.visible标识当前是否可见 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽，替换表格部分 | |
| exp-preappend | 插入cx-exp-input组件的exp-preappend插槽位 | |
| exp-append | 插入cx-exp-input组件的exp-append插槽位 | |
| expbtns-preappend | 插入条件框同行的按钮组cx-oper-group组件的preappend插槽位 | |
| expbtns-append | 插入条件框同行的按钮组cx-oper-group组件的append插槽位 | |
| btnbar-preappend | 按钮条按钮前插槽位 | |
| btnbar-append | 按钮条按钮后插槽位 | |
| page-append | cx-data-grid组件的page-append插槽位 | |

## 类型定义

```ts
/** 操作按钮配置 */
interface OperCfg {
  /** 按钮名称 */
  name: string;
  /** 点击事件 */
  onClick?: (context: any) => void;
}

/** 数据管理组件参数 */
interface DataMan2Params {
  /** 实体主类型 */
  major?: number;
  /** 实体子类型 */
  minor?: number;
  /** 配置名称 */
  tabCfgName?: string;
  /** 是否可编辑 */
  editable?: boolean;
  /** 固定条件 */
  fixedExp?: any;
}

/** 数据管理组件Props */
interface DataMan2Props {
  /** 给 IDataMan2 的参数对象，major、minor和tabCfgName 两组参数二选一必传 */
  params: DataMan2Params;
  /** 传递给cx-exp-input组件的参数对象 */
  expParams?: object;
  /** 传递给cx-exp-input组件的事件监听对象 */
  expEvents?: Record<string, Function>;
  /** 传递给cx-data-grid组件的参数对象 */
  dgParams?: object;
  /** 传递给cx-data-grid组件的事件监听对象 */
  dgEvents?: Record<string, Function>;
  /** 是否显示搜索部件 */
  showExp?: boolean;
  /** 是否显示表格字段过滤 */
  showColFilter?: boolean;
  /** 是否显示按钮文本，false时只显示按钮图标 */
  showBtnTitle?: boolean;
  /** 查询行显示按钮的数量，大于时以折叠展示 */
  maxExpOper?: number;
  /** 构造cx-exp-input组件同行显示按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数 */
  makeExpOpers?: (defBtns: OperCfg[], context: any) => OperCfg[];
  /** 构造exp条件字段序列，返回条件对象序列 */
  makeExpFlds?: (defFlds: any[], context: any) => any[];
  /** 查询行下行显示按钮的数量，大于时以折叠展示 */
  maxBarOper?: number;
  /** 构造cx-exp-input组件下独占一行的按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数。序列>1时才显示按钮条 */
  makeBarOpers?: (defBtns: OperCfg[], context: any) => OperCfg[];
  /** 构造table数据行操作列和按钮，返回 opercol 对象序列，每个 opercol.btns是操作按钮 */
  makeTabOpers?: (defBtns: any[], context: any) => any[];
  /** 构造table数据列序列，返回 表列 对象序列 */
  makeTabCols?: (defCols: any[], context: any) => any[];
  /** 添加入库前回调 */
  befAdd?: (att: any, plug: any) => Promise<any>;
  /** 添加入库后回调 */
  aftAdd?: (att: any) => void;
  /** 删除入库前回调 */
  befDel?: (att: any) => Promise<any>;
  /** 删除入库后回调 */
  aftDel?: (att: any) => void;
  /** 修改入库前回调 */
  befUpd?: (att: any) => Promise<any>;
  /** 修改入库后回调 */
  aftUpd?: (att: any) => void;
  /** 查询前回调 */
  befQry?: (queryPara: any, context: any) => void;
  /** 自定义查询，覆盖IDataMan2的runSvr方法，返回Promise和数据结果 */
  qryCust?: (context: any) => Promise<any>;
  /** 查询后原始数据处理 */
  procQryData?: (data: any, context: any) => Promise<any>;
  /** 查询后回调 */
  aftQry?: (context: any) => void;
  /** 模板导出前回调 */
  befTempExport?: (params: any, context: any) => any[];
  /** 导出前回调 */
  befExport?: (params: any, context: any) => void;
  /** 导入前回调 */
  befImport?: (params: any, context: any) => void;
}
</ts> 