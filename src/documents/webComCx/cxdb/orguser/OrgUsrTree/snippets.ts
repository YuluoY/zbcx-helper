export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-org-usr-tree
    size="default"
    :plugs="[]"
    :hides="[]"
    :show-disabled="false"
    :show-checkbox="false"
    :show-filter="false"
    :tree-atts="{}"
    @current-change="(data, node) => {}"
    @check-change="(data, checked, childrenChecked) => {}"
    @node-expand="(data, node, context) => {}"
  />
</template>`
  }
]; 