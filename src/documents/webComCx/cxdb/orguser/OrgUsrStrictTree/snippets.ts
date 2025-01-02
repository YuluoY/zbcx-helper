export default [
  {
    name: '基础用法',
    template: `<template>
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
</template>`
  }
]; 