export const snippets = {
  "cx-exp-input-btn-bar": {
    "prefix": "cx-exp-input-btn-bar",
    "body": [
      "<cx-exp-input-btn-bar",
      "  size=\"${1|large,default,small|}\"",
      "  :exp-atts=\"{",
      "    flds: ${2:[]},",
      "    itemWidth: ${3:125},",
      "    showLabel: ${4:false},",
      "    showMore: ${5:true},",
      "    clearable: ${6:true}",
      "  }\"",
      "  :exp-evts=\"{",
      "    'fld-change': ${7:handleFldChange},",
      "    'exp-search': ${8:handleSearch},",
      "    'exp-clear': ${9:handleClear},",
      "    'exp-more': ${10:handleMore}",
      "  }\"",
      "  :opers=\"${11:[]}\"",
      "  :oper-el-att=\"${12:{}}\"",
      "  :max-num=\"${13:3}\"",
      "  :inline=\"${14:false}\"",
      ">",
      "</cx-exp-input-btn-bar>"
    ],
    "description": "属性条件输入搜索按钮条组件，条件和查询占一行，按钮条占一行"
  }
}; 