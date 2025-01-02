export const snippets = {
  "cx-tabs": {
    "prefix": "cx-tabs",
    "body": [
      "<cx-tabs",
      "  size=\"${1|large,default,small|}\"",
      "  type=\"${2|card,plain-card,plain|}\"",
      "  position=\"${3|top,right,bottom,left|}\"",
      "  :container=\"${4:''}\"",
      "  :allRender=\"${5:false}\"",
      "  :tabs=\"[",
      "    {",
      "      name: '${6:tab1}',",
      "      title: '${7:标题1}',",
      "      modDef: {",
      "        url: '${8:path/to/component1}',",
      "        com: '${9:ComponentName1}'",
      "      },",
      "      comParams: ${10:{}},",
      "      closable: ${11:true},",
      "      selected: ${12:true},",
      "      keepAlive: ${13:true},",
      "      comEvents: ${14:{}}",
      "    }",
      "  ]\"",
      ">",
      "  ${15:内容}",
      "</cx-tabs>"
    ],
    "description": "选项卡组件，渲染全部页面"
  }
}; 