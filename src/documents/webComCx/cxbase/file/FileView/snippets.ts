export const snippets = {
  "cx-file-view": {
    "prefix": "cx-file-view",
    "body": [
      "<cx-file-view",
      "  src=\"${1:static/test.file}\"",
      "  filetype=\"${2:flv}\"",
      "  title=\"${3:}\"",
      "  :com-props=\"${4:{}}\"",
      "  :com-listeners=\"${5:{}}\"",
      "  :cust-com=\"${6:{}}\"",
      "  :use-iframe=\"${7:false}\"",
      "  @match_success=\"${8:handleMatchSuccess}\"",
      "  @match_failed=\"${9:handleMatchFailed}\"",
      ">",
      "</cx-file-view>"
    ],
    "description": "通用文件预览组件"
  }
}; 