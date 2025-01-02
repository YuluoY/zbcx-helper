export const snippets = {
  "cx-att-edit": {
    "prefix": "cx-att-edit",
    "body": [
      "<cx-att-edit",
      "  :size=\"${1:'default'}\"",
      "  :params=\"{",
      "    major: ${2:12},",
      "    minor: ${3:262},",
      "    att: ${4:{}},",
      "    flds: ${5:[]},",
      "    fldVals: ${6:[]},",
      "    uneditables: ${7:[]},",
      "    decode: ${8:true},",
      "    editable: ${9:true},",
      "    mode: ${10:1},",
      "    colNum: ${11:2},",
      "    attCom: ${12:'cx-att-form'}",
      "  }\"",
      "  @values-change=\"${13:(fld, changed) => {}}\"",
      "/>",
    ],
    "description": "属性编辑组件，支持浏览/编辑属性（支持cx数据库配置）"
  }
}; 