export const snippets = {
  "cx-data-sketch": {
    "prefix": "cx-data-sketch",
    "body": [
      "<cx-data-sketch",
      "  :title=\"${1:'标题'}\"",
      "  :imgRow=\"${2:true}\"",
      "  :isBigImg=\"${3:true}\"",
      "  :imgUrl=\"${4:'path/to/image'}\"",
      "  :tags=\"[",
      "    {",
      "      type: '${5:success}',",
      "      closable: ${6:false},",
      "      disableTransitions: ${7:false},",
      "      hit: ${8:false},",
      "      color: '${9:}',",
      "      size: '${10:default}',",
      "      effect: '${11:dark}',",
      "      round: ${12:false}",
      "    }",
      "  ]\"",
      "  :describe=\"${13:'数据概述'}\"",
      "  :wordNum=\"${14:80}\"",
      ">",
      "  <template #header>",
      "    ${15:<!-- 头部插槽内容 -->}",
      "  </template>",
      "  <template #header-content>",
      "    ${16:<!-- 头部插槽下一行内容 -->}",
      "  </template>",
      "  <template #body>",
      "    ${17:<!-- 内容部分插槽 -->}",
      "  </template>",
      "</cx-data-sketch>"
    ],
    "description": "数据概述组件，以列表的形式在一行内用复杂结构展示数据信息"
  }
}; 