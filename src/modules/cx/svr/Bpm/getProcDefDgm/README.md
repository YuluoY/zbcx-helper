# getProcDefDgm

取流程对应的流程图

## 方法签名
```typescript
static getProcDefDgm(params: Object) => String
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 流程定义ID |

## 返回值
String，包含流程的图形信息。

## 功能描述
获取指定流程定义的图形信息。

## 示例
```typescript
const diagram = cx.svr.bpm.getProcDefDgm({ id: 'procDef123' });
console.log(diagram);
``` 