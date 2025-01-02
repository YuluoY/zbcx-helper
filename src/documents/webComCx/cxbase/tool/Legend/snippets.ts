export const snippets = {
  "cx-legend": {
    "prefix": "cx-legend",
    "body": [
      "<cx-legend",
      "  :datas=\"[",
      "    {",
      "      title: '${1:图例组标题}',",
      "      inline: ${2:false},",
      "      data: [",
      "        {",
      "          title: '${3:图例项标题}',",
      "          img: '${4:/path/to/icon.png}',",
      "          color: '${5:red}',",
      "          colorPick: ${6:false},",
      "          checkMode: ${7:false},",
      "          defCheck: ${8:false}",
      "        }",
      "      ],",
      "      comEvts: {",
      "        changeColor: ${9:(color, item) => {}},",
      "        check: ${10:(state, item) => {}}",
      "      }",
      "    }",
      "  ]\"",
      "  :foldable=\"${11:true}\"",
      "  fold-style=\"${12:}\"",
      "/>"
    ],
    "description": "图例组件"
  }
}; 