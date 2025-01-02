export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-form-grp
    :size="'default'"
    :flds="[]"
    :col-num="1"
    :mode="0"
    :inline="true"
    :border-com="'cx-border-group'"
    :border="{}"
    :header-com="'cx-header-group'"
    :header="{}"
    :att-com="'cx-att-form'"
    :content="{}"
    :before-valbtn="(fld, params) => {}"
    :after-valbtn="(fld, flds, params) => {}"
    @values-change="(fld, changed) => {}"
  />
</template>`
  },
  {
    name: '替换Header',
    template: `<template>
  <cx-form-grp
    :size="'default'"
    :flds="[]"
    :col-num="1"
    :mode="0"
    :inline="true"
    :border-com="'cx-border-group'"
    :border="{}"
    :header-com="'cx-header-group'"
    :header="{}"
    :att-com="'cx-att-form'"
    :content="{}"
    :before-valbtn="(fld, params) => {}"
    :after-valbtn="(fld, flds, params) => {}"
    @values-change="(fld, changed) => {}"
  />
</template>`
  },
  {
    name: '替换Border',
    template: `<template>
  <cx-form-grp
    :size="'default'"
    :flds="[]"
    :col-num="1"
    :mode="0"
    :inline="true"
    :border-com="'cx-border-group'"
    :border="{}"
    :header-com="'cx-header-group'"
    :header="{}"
    :att-com="'cx-att-form'"
    :content="{}"
    :before-valbtn="(fld, params) => {}"
    :after-valbtn="(fld, flds, params) => {}"
    @values-change="(fld, changed) => {}"
  />
</template>`
  }
]; 