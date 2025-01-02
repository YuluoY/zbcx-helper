export const snippets = {
  "cx-data-query": {
    "prefix": "cx-data-query",
    "body": [
      "<cx-data-query",
      "  :params=\"{",
      "    major: ${1:major},",
      "    minor: ${2:minor},",
      "    orderby: '${3:id asc}',",
      "    fixedExp: ${4:cx.sqlexp.from([['id', '>', '0']])}",
      "  }\"",
      "  :showOk=\"${5:false}\"",
      "  @ok-click=\"${6:onOkClick}\"",
      "/>"
    ],
    "description": "数据查询组件，基于 DataGrid + IDataMan 完成数据表展示，支持查询、功能按钮和操作列"
  }
}; 