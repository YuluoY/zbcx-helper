export const snippets = {
  "cx-group": {
    "prefix": "cx-group",
    "body": [
      "<cx-group",
      "  :size=\"${1:'default'}\"",
      "  :title=\"${2:'标题'}\"",
      "  :border-com=\"${3:'cx-border-regular'}\"",
      "  :header-com=\"${4:'cx-header-group'}\"",
      "  :border=\"${5:{}}\"",
      "  :header=\"${6:{}}\"",
      "  :content=\"${7:{}}\"",
      "  :direction=\"${8:'vertical'}\"",
      ">",
      "  <template #header-preappend>${9:<!-- 标题之前 -->}</template>",
      "  <template #header-title>${10:<!-- 标题附加 -->}</template>",
      "  <template #header-append>${11:<!-- 标题之后 -->}</template>",
      "  ${12:<!-- 内容部分 -->}",
      "</cx-group>"
    ],
    "description": "分组组件，模块化展示数据"
  }
}; 