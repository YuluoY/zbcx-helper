export const snippets = {
  "cx-rec": {
    "prefix": "cx-rec",
    "body": [
      "<cx-rec",
      "  size=\"${1:default}\"",
      "  :list=\"${2:[]}\"",
      "  :hover=\"${3:true}\"",
      "  :step=\"${4:0.5}\"",
      "  :datas=\"${5:[]}\"",
      "  :el-atts=\"${6:{}}\"",
      "  :att-com=\"${7:{}}\"",
      "  component-type=\"${8:icon}\"",
      "  :show-tip=\"${9:false}\"",
      "  :show-background=\"${10:false}\"",
      "  bg-color=\"${11:#fff}\"",
      "  @rec-click=\"${12:handleRecClick}\"",
      "  @btn-click=\"${13:handleBtnClick}\"",
      ">",
      "  <template #header_content=\"{ data }\">",
      "    ${14:<!-- 头部插槽内容 -->}",
      "  </template>",
      "  <template #body_content=\"{ data }\">",
      "    ${15:<!-- 中间内容插槽内容 -->}",
      "  </template>",
      "  <template #footer_content=\"{ data }\">",
      "    ${16:<!-- 尾部插槽内容 -->}",
      "  </template>",
      "</cx-rec>"
    ],
    "description": "热门推荐组件"
  }
}; 