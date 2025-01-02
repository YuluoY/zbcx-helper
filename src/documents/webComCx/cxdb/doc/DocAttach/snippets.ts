export const snippets = {
  "cx-doc-attach": {
    "prefix": "cx-doc-attach",
    "body": [
      "<cx-doc-attach",
      "  :params=\"{",
      "    major: ${1:major},",
      "    minor: ${2:minor},",
      "    entityId: ${3:id},",
      "    listType: '${4|list,card,icon|}',",
      "    auth: {",
      "      downloadable: ${5:true},",
      "      uploadable: ${6:true},",
      "      editable: ${7:true},",
      "      removable: ${8:true},",
      "      sharable: ${9:true}",
      "    }",
      "  }\"",
      "/>"
    ],
    "description": "文档附件组件，基于cx_media表"
  }
}; 