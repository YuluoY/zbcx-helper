export default [
  {
    name: '分组带附件用法',
    template: `<template>
  <cx-form-dyna
    :attr="{
      grps: [],
      flds: [],
      colNum: 2,
      mode: 0,
      editable: false,
      borderCom: 'cx-border-group',
      headerCom: 'cx-header-group',
      attCom: 'cx-att-form',
      beforeValbtn: (fld, params) => {},
      afterValbtn: (fld, flds, params) => {}
    }"
    :attach="{
      saveto: false,
      uploadable: true,
      editable: false,
      removable: false,
      downloadable: true,
      dir: {},
      setData: () => {}
    }"
    :upload="{
      accept: '',
      multiple: false,
      limit: 0,
      uploadType: 'ws'
    }"
    :doc="{
      major: 0,
      minor: 0,
      entityid: 0,
      task: '',
      bustype: ''
    }"
    :params="{}"
    :cmdbar="false"
    cmdCom="cx-cmd-bar"
    :cmds="[]"
    @values-change="(fld, changed) => {}"
    @doc-add="(doc) => {}"
    @doc-remove="(doc) => {}"
  />
</template>`
  }
]; 