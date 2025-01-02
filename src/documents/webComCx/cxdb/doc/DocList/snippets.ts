export const snippets = {
  "cx-doc-list": {
    "prefix": "cx-doc-list",
    "body": [
      "<cx-doc-list",
      "  :viewable=\"${1:true}\"",
      "  :downloadable=\"${2:true}\"",
      "  :editable=\"${3:false}\"",
      "  :removable=\"${4:true}\"",
      "  :uploadable=\"${5:true}\"",
      "  :workflow=\"${6:''}\"",
      "  :bustype=\"${7:''}\"",
      "  :saveto=\"${8:'FileSys'}\"",
      "  :dir=\"${9:'uploadfile:'}\"",
      "  :set-data=\"${10:(data, file) => {}}\"",
      "  :upload-attrs=\"${11:{}}\"",
      "  :need-grp=\"${12:false}\"",
      "  :grp-fld=\"${13:''}\"",
      "  :grp-fld-values=\"${14:{}}\"",
      "  @doc-click=\"${15:(doc) => {}}\"",
      "  @doc-view=\"${16:(doc) => {}}\"",
      "  @doc-download=\"${17:(doc) => {}}\"",
      "  @doc-edit=\"${18:(doc) => {}}\"",
      "  @doc-remove=\"${19:(doc) => {}}\"",
      "  @doc-add=\"${20:(doc) => {}}\"",
      ">",
      "</cx-doc-list>"
    ],
    "description": "文档列表组件，基于HTTP"
  }
}; 