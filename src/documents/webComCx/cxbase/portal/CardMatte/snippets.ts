export const snippets = {
  "cx-card-matte": {
    "prefix": "cx-card-matte",
    "body": [
      "<cx-card-matte",
      "  :cardmatte=\"{",
      "    img: '${1:background.jpg}',",
      "    content: ${2:[]},",
      "    briefintro: '${3:简介}',",
      "    buttonname: '${4:查看详情}'",
      "  }\"",
      "  type=\"${5:default}\"",
      "  @click-detail=\"${6:handleClickDetail}\"",
      "  @click-icon=\"${7:handleClickIcon}\"",
      ">",
      "  <template #center>",
      "    ${8:<!-- 中间插槽内容 -->}",
      "  </template>",
      "  <template #footer>",
      "    ${9:<!-- 底部插槽内容 -->}",
      "  </template>",
      "</cx-card-matte>"
    ],
    "description": "图片鼠标滑入显示遮罩、详细介绍和相关按钮组件"
  }
}; 