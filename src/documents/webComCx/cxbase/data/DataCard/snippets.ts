export const snippets = {
  "cx-data-card": {
    "prefix": "cx-data-card",
    "body": [
      "<cx-data-card",
      "  :label=\"${1:'标题'}\"",
      "  :value=\"${2:'100'}\"",
      "  :unit=\"${3:'个'}\"",
      "  :cardStyle=\"${4:{}}\"",
      "  :titleStyle=\"${5:{}}\"",
      "  :valueStyle=\"${6:{}}\"",
      "  :iconStyle=\"${7:{}}\"",
      "  :unitStyle=\"${8:{}}\"",
      ">",
      "  <template #icon>",
      "    ${9:<!-- 自定义图标 -->}",
      "  </template>",
      "  <template #unit>",
      "    ${10:<!-- 自定义单位 -->}",
      "  </template>",
      "  <template #footer>",
      "    ${11:<!-- 自定义底部内容 -->}",
      "  </template>",
      "</cx-data-card>"
    ],
    "description": "数据卡片组件，用于统计数据展示"
  }
}; 