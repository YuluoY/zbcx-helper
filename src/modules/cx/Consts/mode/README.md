# 模式相关常量

## MODE_EDIT
编辑模式。

## MODE_VIEW
查看模式。

## 示例

```js
// 设置表单模式
form.mode = cx.consts.MODE_EDIT; // 编辑模式
form.mode = cx.consts.MODE_VIEW; // 查看模式

// 根据模式显示不同的按钮
if (form.mode === cx.consts.MODE_EDIT) {
  // 显示保存、取消按钮
  showEditButtons();
} else if (form.mode === cx.consts.MODE_VIEW) {
  // 显示编辑按钮
  showViewButtons();
}

// 判断是否可编辑
const isEditable = form.mode === cx.consts.MODE_EDIT;