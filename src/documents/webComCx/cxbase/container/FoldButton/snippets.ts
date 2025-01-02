export const snippets = {
  "cx-fold-button": {
    "prefix": "cx-fold-button",
    "body": [
      "<cx-fold-button",
      "  :size=\"${1:'default'}\"",
      "  :defOpen=\"${2:true}\"",
      "  :direction=\"${3:'top'}\"",
      "  :bodyStyle=\"${4:''}\"",
      "  :slotStyle=\"${5:''}\"",
      "  :btnStyle=\"${6:''}\"",
      "  @fold-change=\"${7:onFoldChange}\"",
      ">",
      "  ${8:<!-- 内容部分 -->}",
      "</cx-fold-button>"
    ],
    "description": "折叠按钮组件，可折叠/展开的div容器, 支持上下左右方向"
  }
}; 