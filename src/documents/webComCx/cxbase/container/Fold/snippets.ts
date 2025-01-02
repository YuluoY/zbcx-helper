export const snippets = {
  "cx-fold": {
    "prefix": "cx-fold",
    "body": [
      "<cx-fold",
      "  :size=\"${1:'default'}\"",
      "  :title=\"${2:'标题'}\"",
      "  :folded=\"${3:true}\"",
      "  :addable=\"${4:false}\"",
      "  :icon=\"${5:''}\"",
      "  :data=\"${6:{",
      "    name: '${7:插件名}',",
      "    com: ${8:组件对象},",
      "    def: ${9:{}},",
      "    params: ${10:{}}",
      "  }}\"",
      "  :border-com=\"${11:'cx-border-regular'}\"",
      "  :header-com=\"${12:'cx-header-card'}\"",
      "  :border=\"${13:{}}\"",
      "  :header=\"${14:{}}\"",
      "  :content=\"${15:{}}\"",
      "  @fold-change=\"${16:onFoldChange}\"",
      "  @add-click=\"${17:onAddClick}\"",
      ">",
      "  <template #header-preappend>${18:<!-- 标题之前 -->}</template>",
      "  <template #header-title>${19:<!-- 标题附加 -->}</template>",
      "  <template #header-append>${20:<!-- 标题之后 -->}</template>",
      "  ${21:<!-- 内容部分 -->}",
      "</cx-fold>"
    ],
    "description": "折叠组件，模块化展示数据"
  }
}; 