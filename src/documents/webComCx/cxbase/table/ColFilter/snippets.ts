export const snippets = {
  "cx-col-filter": {
    "prefix": "cx-col-filter",
    "body": [
      "<cx-col-filter",
      "  ref=\"${1:colFilter}\"",
      "  size=\"${2:default}\"",
      "  :params=\"{",
      "    name: '${3:列过滤}',",
      "    cols: [",
      "      {",
      "        colname: '${4:field1}',",
      "        title: '${5:字段1}',",
      "        disporder: ${6:1},",
      "        visible: ${7:true}",
      "      }",
      "    ],",
      "    min: ${8:3},",
      "    max: ${9:10},",
      "    draggable: ${10:false}",
      "  }\"",
      "  @check-change=\"${11:onCheckChange}\"",
      "  @drag-finish=\"${12:onDragFinish}\"",
      "/>"
    ],
    "description": "列过滤"
  }
}; 