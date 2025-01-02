export const snippets = {
  "cx-data-man": {
    "prefix": "cx-data-man",
    "body": [
      "<cx-data-man",
      "  :params=\"{",
      "    major: ${1:major},",
      "    minor: ${2:minor},",
      "    orderby: '${3:id DESC}',",
      "    fixedExp: ${4:cx.sqlexp.from([['id', '>', '0']])}",
      "  }\"",
      ">",
      "  <template v-slot:exp-preappend>",
      "    ${5:<!-- 筛选框前插槽 -->}",
      "  </template>",
      "  <template v-slot:exp-append>",
      "    ${6:<!-- 筛选框后插槽 -->}",
      "  </template>",
      "  <template v-slot:page-append>",
      "    ${7:<!-- 分页后插槽 -->}",
      "  </template>",
      "</cx-data-man>"
    ],
    "description": "数据管理组件，基于 DataGrid + IDataMan完成数据表展示，支持查询、功能按钮和操作列"
  }
}; 