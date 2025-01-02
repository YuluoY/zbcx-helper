export const snippets = {
  "cx-focus-text": {
    "prefix": "cx-focus-text",
    "body": [
      "<cx-focus-text",
      "  :size=\"${1:'default'}\"",
      "  :color=\"${2:''}\"",
      "  :icon=\"${3:'icon-name'}\"",
      "  :focus=\"${4:'焦点文本'}\"",
      "  :topic=\"${5:'主题文本'}\"",
      "  :unit=\"${6:'单位'}\"",
      "  :cfg=\"{",
      "    iconPosition: '${7:left}',",
      "    iconWidth: '${8:}',",
      "    iconHeight: '${9:}',",
      "    textOrder: ${10:0},",
      "    iconStyle: ${11:{}},",
      "    focusStyle: ${12:{}},",
      "    topicStyle: ${13:{}},",
      "    unitStyle: ${14:{}}",
      "  }\"",
      "  @click=\"${15:() => {}}\"",
      ">",
      "</cx-focus-text>"
    ],
    "description": "焦点文本组件，支持上下角标、图标位置和大小调整、文字顺序调整"
  }
}; 