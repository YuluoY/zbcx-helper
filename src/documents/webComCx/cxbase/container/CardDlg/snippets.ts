export const snippets = {
  "cx-card-dlg": {
    "prefix": "cx-card-dlg",
    "body": [
      "<cx-card-dlg",
      "  :size=\"${1:'default'}\"",
      "  :closable=\"${2:true}\"",
      "  :minable=\"${3:true}\"",
      "  :foldable=\"${4:true}\"",
      "  :titleFolded=\"${5:true}\"",
      "  :tabPosition=\"${6:'left'}\"",
      "  :minFoldStyle=\"${7:''}\"",
      "  :minTooltip=\"${8:{ effect: 'dark' }}\"",
      "  :defFold=\"${9:false}\"",
      "  :defMin=\"${10:false}\"",
      "  :borderCom=\"${11:'cx-border-regular'}\"",
      "  :headerCom=\"${12:'cx-header-card'}\"",
      "  :header=\"${13:{",
      "    align: 'left',",
      "    title: '',",
      "    style: ''",
      "  }}\"",
      "  :border=\"${14:{",
      "    style: ''",
      "  }}\"",
      "  :content=\"${15:{",
      "    style: ''",
      "  }}\"",
      ">",
      "  <template #header-preappend>${16:<!-- 标题之前 -->}</template>",
      "  <template #header-title>${17:<!-- 标题附加 -->}</template>",
      "  <template #header-append>${18:<!-- 标题之后 -->}</template>",
      "  ${19:内容}",
      "</cx-card-dlg>"
    ],
    "description": "卡片对话框组件，在卡片的基础上增加了对话框特性，侧边栏特性"
  }
}; 