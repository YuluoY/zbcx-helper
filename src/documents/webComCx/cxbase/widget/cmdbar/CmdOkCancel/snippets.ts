export const snippets = {
  "cx-cmd-ok-cancel": {
    "prefix": "cx-cmd-ok-cancel",
    "body": [
      "<cx-cmd-ok-cancel",
      "  :size=\"${1:'default'}\"",
      "  :disabled-ok=\"${2:false}\"",
      "  :disabled-cancel=\"${3:false}\"",
      "  @ok-click=\"${4:onOkClick}\"",
      "  @cancel-click=\"${5:onCancelClick}\"",
      ">",
      "  ${6:}",
      "</cx-cmd-ok-cancel>"
    ],
    "description": "命令-Ok/Cancel"
  }
}; 