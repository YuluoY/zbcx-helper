export const snippets = {
  "cx-data-list-card": {
    "prefix": "cx-data-list-card",
    "body": [
      "<cx-data-list-card",
      "  :data=\"{",
      "    key1: '${1:value1}',",
      "    key2: '${2:value2}'",
      "  }\"",
      "  :closeable=\"${3:true}\"",
      "  :mainStyle=\"${4:{}}\"",
      "  :headStyle=\"${5:{}}\"",
      "  :sectionStyle=\"${6:{}}\"",
      "  :footerStyle=\"${7:{}}\"",
      "  @close=\"${8:(context) => {}}\"",
      ">",
      "  <template #header>",
      "    ${9:<!-- 头部插槽内容 -->}",
      "  </template>",
      "  <template #default>",
      "    ${10:<!-- 自定义内容 -->}",
      "  </template>",
      "  <template #footer>",
      "    ${11:<!-- 底部插槽内容 -->}",
      "  </template>",
      "</cx-data-list-card>"
    ],
    "description": "数据键值列卡片组件，以键值对形式列表展示属性数据"
  }
}; 