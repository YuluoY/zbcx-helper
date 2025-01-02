export const snippets = {
  "cx-exp-input": {
    "prefix": "cx-exp-input",
    "body": [
      "<cx-exp-input",
      "  size=\"${1|large,default,small|}\"",
      "  :flds=\"${2:[]}\"",
      "  :item-width=\"${3:125}\"",
      "  :show-label=\"${4:false}\"",
      "  :show-more=\"${5:true}\"",
      "  :clearable=\"${6:true}\"",
      "  @fld-change=\"${7:handleFldChange}\"",
      "  @exp-search=\"${8:handleSearch}\"",
      "  @exp-clear=\"${9:handleClear}\"",
      "  @exp-more=\"${10:handleMore}\"",
      ">",
      "</cx-exp-input>"
    ],
    "description": "属性条件输入搜索组件，支持多字段条件输入和搜索"
  }
}; 