export const snippets = {
  "cx-collapse": {
    "prefix": "cx-collapse",
    "body": [
      "<cx-collapse",
      "  :size=\"${1:'default'}\"",
      "  :container=\"${2:''}\"",
      "  :accordion=\"${3:false}\"",
      "  :tabs=\"${4:[",
      "    {",
      "      name: '${5:menu1}',",
      "      title: '${6:标题1}',",
      "      modDef: {",
      "        url: '${7:}',",
      "        com: ${8:}",
      "      },",
      "      closable: ${9:false},",
      "      selected: ${10:true},",
      "      contHeightDef: '${11:1.5rem}',",
      "      comParams: ${12:{}},",
      "      comEvents: ${13:{}}",
      "    }",
      "  ]}\"",
      ">",
      "</cx-collapse>"
    ],
    "description": "手风琴折叠组件，支持单折叠和多折叠模式"
  }
}; 