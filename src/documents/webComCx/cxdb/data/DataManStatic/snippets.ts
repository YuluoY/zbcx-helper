export const snippets = {
  "cx-data-man-static": {
    "prefix": "cx-data-man-static",
    "body": [
      "<cx-data-man-static",
      "  :flds=\"[",
      "    { colname: '${1:col1}', namec: '${2:列1}' },",
      "    { colname: '${3:col2}', namec: '${4:列2}' }",
      "  ]\"",
      "  :data=\"[",
      "    { ${1:col1}: ${5:234}, ${3:col2}: ${6:34343} },",
      "    { ${1:col1}: ${7:234}, ${3:col2}: ${8:34343} }",
      "  ]\"",
      "  :param=\"{",
      "    showExp: ${9:false}",
      "  }\"",
      "/>"
    ],
    "description": "静态数据管理组件，基于 DataMan2 完成数据表展示，支持分页、功能按钮和操作列"
  }
}; 