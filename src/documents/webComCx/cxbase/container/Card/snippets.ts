export const snippets = {
  "cx-card": {
    "prefix": "cx-card",
    "body": [
      "<cx-card",
      "  :title=\"${1:'标题'}\"",
      "  :size=\"${2:'default'}\"",
      "  :closable=\"${3:false}\"",
      "  :foldable=\"${4:true}\"",
      "  :icon=\"${5:''}\"",
      "  :border-com=\"${6:'cx-border-regular'}\"",
      "  :header-com=\"${7:'cx-header-card'}\"",
      "  :header=\"${8:{",
      "    align: 'left',",
      "    icon: '',",
      "    title: '',",
      "    style: ''",
      "  }}\"",
      "  :border=\"${9:{",
      "    style: '',",
      "    url: ''",
      "  }}\"",
      "  :content=\"${10:{",
      "    style: 'padding: 20px'",
      "  }}\"",
      ">",
      "  <template #header-preappend>${11:<!-- 标题之前 -->}</template>",
      "  <template #header-title>${12:<!-- 标题附加 -->}</template>",
      "  <template #header-append>${13:<!-- 标题之后 -->}</template>",
      "  ${14:内容}",
      "</cx-card>"
    ],
    "description": "卡片组件，用于模块化展示数据"
  }
}; 