获取序列号。

Example:
```javascript
// 获取简单序列号
const seq1 = await cx.svr.data.getSequence(101, 1, {
  field: 'code'
})

// 获取带格式的序列号
const seq2 = await cx.svr.data.getSequence(101, 1, {
  field: 'code',
  format: 'XS{YYYY}{MM}{DD}{0000}'
})
```