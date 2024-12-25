# getProcDefDgmSvg

取流程对应的流程svg图

## 方法签名
```typescript
static getProcDefDgmSvg(params: Object) => String
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| params | Object | 是 | 参数 |
| └─ id | String | 是 | 流程定义ID |

## 返回值
String，包含流程的SVG图。

## 功能描述
获取指定流程定义的SVG图。

## 示例
```typescript
const svgDiagram = cx.svr.bpm.getProcDefDgmSvg({ id: 'procDef123' });
console.log(svgDiagram);
``` 