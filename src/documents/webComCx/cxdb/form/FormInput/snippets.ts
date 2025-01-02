export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-lauout class="FormInput">
    <cx-form-input
      :major="formCfg.major"
      :minor="formCfg.minor"
      :params="{
        att: formCfg.att
      }"
    />
  </cx-lauout>
</template>

<script>
export default {
  mixins: [cx.mixin.IPlugBase],
  data() {
    return {
      formCfg: {
        major: $app.TabConst.ps_community.major,
        minor: $app.TabConst.ps_community.minor,
        att: {}
      }
    }
  },
  created() {
    this.formCfg.att = this.params.config.att
  }
}
</script>`
  },
  {
    name: '自定义表单',
    template: `<template>
  <cx-form-input
    formKey="myForm"
    :params="{
      values: {}
    }"
    :useAttach="false"
    :attr="{}"
    :attach="{}"
    :upload="{}"
    :doc="{}"
  />
</template>`
  }
]; 