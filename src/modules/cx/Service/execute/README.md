# execute

执行后台服务。

## 语法

```javascript
static execute(url, cmd, params?, isFormat?) → {Promise}
```

## 参数

- url: String - 服务的URL
- cmd: String - 服务的命令码
- params?: Object - 其他参数
- isFormat?: Boolean - 是否整理返回结构，true用 formatRet 方法处理；有一定的风险，建议按需格式化

## 返回值

- Promise - 请求promise对象，返回的 结果结构 {ret:0, data:[数据对象1, ...], [total]: 10, [其他属性]: 值}

## 示例

```javascript
// 基本调用
cx.service.execute('/api/myService', 'getData')
  .then(ret => {
    console.log('服务返回:', ret);
  });

// 带参数调用
cx.service.execute('/api/myService', 'getData', {
  id: 123,
  type: 'user'
})
  .then(ret => {
    if (ret.ret === 0) {
      console.log('数据:', ret.data);
      console.log('总数:', ret.total);
    }
  });

// 格式化返回结果
cx.service.execute('/api/myService', 'getData', null, true)
  .then(data => {
    console.log('格式化后的数据:', data);
  });
```

## 注意事项

- 直接通过 cx.service.execute 调用
- 返回Promise对象，需要通过then或await获取结果
- 返回结果中ret为0表示成功
- isFormat参数需要谨慎使用，建议按需格式化数据 