export const snippets = {
  "cx-txt-view": {
    "prefix": "cx-txt-view",
    "body": [
      "<cx-txt-view",
      "  src=\"${1:static/test.txt}\"",
      "  charset=\"${2:UTF-8}\"",
      "  :water-mark=\"${3:{}}\"",
      "  @loaded=\"${4:handleLoaded}\"",
      ">",
      "</cx-txt-view>"
    ],
    "description": "文本预览组件，支持如txt/js/vue/json/sql等多种文本格式"
  }
}; 