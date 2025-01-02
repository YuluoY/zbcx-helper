export const snippets = {
  "cx-swiper-slide": {
    "prefix": "cx-swiper-slide",
    "body": [
      "<cx-swiper-slide",
      "  size=\"${1:default}\"",
      "  :slides-per-view=\"${2:4}\"",
      "  space-between=\"${3:0%}\"",
      "  :centered-slides=\"${4:false}\"",
      "  :data-list=\"${5:[]}\"",
      "  :atts=\"${6:{}}\"",
      ">",
      "  <template #card=\"{ data }\">",
      "    ${7:<!-- 卡片插槽内容 -->}",
      "  </template>",
      "</cx-swiper-slide>"
    ],
    "description": "轮播图组件"
  }
}; 