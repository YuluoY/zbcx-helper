export const snippets = {
  "cx-region": {
    "prefix": "cx-region",
    "body": [
      "<cx-region",
      "  region=\"${1|north,west,center,east,south|}\"",
      "  width=\"${2:}\"",
      "  height=\"${3:}\"",
      "  style=\"${4:}\"",
      "  class=\"${5:}\"",
      "  :border=\"${6:false}\"",
      "  :gutter=\"${7:false}\"",
      "  :splitable=\"${8:false}\"",
      "  @drag-over=\"${9:handleDragOver}\"",
      ">",
      "  ${10:<!-- 区域内容 -->}",
      "</cx-region>"
    ],
    "description": "布局区域组件"
  }
}; 