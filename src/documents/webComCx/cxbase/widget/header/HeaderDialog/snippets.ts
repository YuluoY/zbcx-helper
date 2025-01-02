export const snippets = {
  "cx-header-dialog": {
    "prefix": "cx-header-dialog",
    "body": [
      "<cx-header-dialog",
      "  :size=\"${1:'default'}\"",
      "  :title=\"${2:'标题'}\"",
      "  :minable=\"${3:false}\"",
      "  :maxable=\"${4:false}\"",
      "  :closable=\"${5:true}\"",
      "  :movable=\"${6:true}\"",
      "  :foldable=\"${7:false}\"",
      "  :minimized=\"${8:false}\"",
      "  :maximized=\"${9:false}\"",
      "  :folded=\"${10:false}\"",
      "  :header=\"${11:{}}\"",
      "  @header-click=\"${12:onHeaderClick}\"",
      "  @min-change=\"${13:onMinChange}\"",
      "  @max-change=\"${14:onMaxChange}\"",
      "  @close=\"${15:onClose}\"",
      ">",
      "  ${16:}",
      "</cx-header-dialog>"
    ],
    "description": "Header-对话框"
  }
}; 