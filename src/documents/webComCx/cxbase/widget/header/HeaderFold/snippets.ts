export const snippets = {
  "cx-header-fold": {
    "prefix": "cx-header-fold",
    "body": [
      "<cx-header-fold",
      "  :size=\"${1:'default'}\"",
      "  :title=\"${2:'标题'}\"",
      "  :folded=\"${3:true}\"",
      "  :header=\"${4:{}}\"",
      "  @fold-change=\"${5:onFoldChange}\"",
      ">",
      "  ${6:}",
      "</cx-header-fold>"
    ],
    "description": "Header-折叠"
  }
}; 