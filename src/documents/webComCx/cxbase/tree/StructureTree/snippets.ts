export const snippets = {
  "cx-structure-tree": {
    "prefix": "cx-structure-tree",
    "body": [
      "<cx-structure-tree",
      "  :data=\"${1:data}\"",
      "  :render-content=\"${2:renderContent}\"",
      ">",
      "  <template v-slot:card>",
      "    ${3:<div>自定义内容</div>}",
      "  </template>",
      "</cx-structure-tree>"
    ],
    "description": "组织结构树"
  }
}; 