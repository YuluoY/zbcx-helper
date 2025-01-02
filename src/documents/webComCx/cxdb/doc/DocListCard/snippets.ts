export const snippets = {
  "cx-doc-list-card": {
    "prefix": "cx-doc-list-card",
    "body": [
      "<cx-doc-list-card",
      "  :files=\"${1:files}\"",
      "  :plugs=\"${2:'DocFile'}\"",
      "  :multiple=\"${3:false}\"",
      "  :auth=\"{",
      "    downloadable: ${4:true},",
      "    uploadable: ${5:true},",
      "    editable: ${6:true},",
      "    removable: ${7:true},",
      "    sharable: ${8:true}",
      "  }\"",
      "  :exp-values=\"${9:expValues}\"",
      "  :card-com=\"${10:'cx-doc-card'}\"",
      "  @row-click=\"${11:(selected) => {}}\"",
      "  @selection-change=\"${12:(selection) => {}}\"",
      "  @row-remove=\"${13:(selected) => {}}\"",
      ">",
      "</cx-doc-list-card>"
    ],
    "description": "文档卡片列表组件，基于cx_media表"
  }
}; 