export const snippets = {
  "cx-data-columns": {
    "prefix": "cx-data-columns",
    "body": [
      "<cx-data-columns",
      "  size=\"${1:default}\"",
      "  :datas=\"${2:[]}\"",
      "  :el-atts=\"${3:{}}\"",
      "  :att-com=\"${4:{}}\"",
      "  component-type=\"${5:icon}\"",
      "  :show-tip=\"${6:false}\"",
      "  :show-background=\"${7:false}\"",
      "  bg-color=\"${8:#fff}\"",
      "  @rec-click=\"${9:handleRecClick}\"",
      "  @btn-click=\"${10:handleBtnClick}\"",
      ">",
      "  <template #header=\"{ data }\">",
      "    ${11:<!-- 头部插槽内容 -->}",
      "  </template>",
      "  <template #body=\"{ data }\">",
      "    ${12:<!-- 中间内容插槽内容 -->}",
      "  </template>",
      "  <template #footer=\"{ data }\">",
      "    ${13:<!-- 尾部插槽内容 -->}",
      "  </template>",
      "</cx-data-columns>"
    ],
    "description": "数据列展示组件"
  }
}; 