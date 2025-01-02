export const snippets = {
  "cx-doc-card": {
    "prefix": "cx-doc-card",
    "body": [
      "<cx-doc-card",
      "  :file=\"${1:file}\"",
      "  :opers=\"${2:opers}\"",
      "  :oper-cfg=\"{",
      "    showTitle: ${3:true},",
      "    showIcon: ${4:true},",
      "    iconDropdown: '${5:}'",
      "  }\"",
      "  :multiple=\"${6:false}\"",
      "  :plugin-state=\"${7:(plug, args) => {}}\"",
      "  :before-visible=\"${8:(args) => {}}\"",
      "  @row-click=\"${9:(args) => {}}\"",
      "  @plugin-click=\"${10:(oper, args) => {}}\"",
      "  @check-change=\"${11:(args, checked) => {}}\"",
      "  @row-remove=\"${12:(selected) => {}}\"",
      ">",
      "  <template #info>",
      "    ${13:<!-- 文档信息插槽 -->}",
      "  </template>",
      "  <template #cmdbar>",
      "    ${14:<!-- 命令条插槽 -->}",
      "  </template>",
      "</cx-doc-card>"
    ],
    "description": "文档卡片组件，基于cx_media表"
  }
}; 