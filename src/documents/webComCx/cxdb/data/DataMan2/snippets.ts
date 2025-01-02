export const snippets = {
  "cx-data-man2": {
    "prefix": "cx-data-man2",
    "body": [
      "<cx-data-man2",
      "  :params=\"{",
      "    ${1|major,tabCfgName|}: ${2:value},",
      "    ${3:minor}: ${4:value},",
      "    editable: ${5:false},",
      "    fixedExp: ${6:cx.sqlexp.from([['id', '>', '0']])}",
      "  }\"",
      "  :makeExpOpers=\"${7:makeExpOpers}\"",
      "  @after-init=\"${8:onAfterInit}\"",
      "  @row-click=\"${9:onRowClick}\"",
      "/>"
    ],
    "description": "数据管理组件，基于 DataGrid + IDataMan2 完成数据表展示，支持查询、功能按钮和操作列"
  }
}; 