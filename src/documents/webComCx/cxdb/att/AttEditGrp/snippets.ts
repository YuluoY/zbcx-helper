export const snippets = {
  "cx-att-edit-grp": {
    "prefix": "cx-att-edit-grp",
    "body": [
      "<cx-att-edit-grp",
      "  :size=\"${1:'default'}\"",
      "  :title=\"${2:'基本信息'}\"",
      "  :params=\"{",
      "    major: ${3:12},",
      "    minor: ${4:262},",
      "    att: ${5:{}},",
      "    flds: ${6:[]},",
      "    fldVals: ${7:[]},",
      "    uneditables: ${8:[]},",
      "    decode: ${9:true},",
      "    editable: ${10:true},",
      "    mode: ${11:1},",
      "    colNum: ${12:2},",
      "    attCom: ${13:'cx-att-tab'},",
      "    borderCom: ${14:'cx-border-regular'},",
      "    headerCom: ${15:'cx-header-attgrp'},",
      "    header: ${16:{}},",
      "    content: ${17:{}}",
      "  }\"",
      "  @fld-change=\"${18:(fld, changed) => {}}\"",
      ">",
      "  <template #header-preappend>${19:}</template>",
      "  <template #header-append>${20:}</template>",
      "  <template #header-title>${21:}</template>",
      "</cx-att-edit-grp>",
    ],
    "description": "属性分组编辑组件，支持分组的方式浏览/编辑属性（支持cx数据库配置）"
  }
}; 