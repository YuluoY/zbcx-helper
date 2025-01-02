export const snippets = {
  "cx-doc-list-table": {
    "prefix": "cx-doc-list-table",
    "body": [
      "<cx-doc-list-table",
      "  :files=\"${1:files}\"",
      "  :auth=\"{",
      "    downloadable: ${2:true},",
      "    uploadable: ${3:true},",
      "    editable: ${4:true},",
      "    removable: ${5:true},",
      "    sharable: ${6:true}",
      "  }\"",
      "  :multiple=\"${7:false}\"",
      "  :table-cfg=\"${8:'DocFile'}\"",
      "  @row-click=\"${9:(row, column, event) => {}}\"",
      "  @selection-change=\"${10:(selection) => {}}\"",
      "  @sort-change=\"${11:({ column, prop, order }) => {}}\"",
      "  @row-remove=\"${12:(selected) => {}}\"",
      ">",
      "</cx-doc-list-table>"
    ],
    "description": "文档列表管理组件，基于cx_media表"
  }
}; 