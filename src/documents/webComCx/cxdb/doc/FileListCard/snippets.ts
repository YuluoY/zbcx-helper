export const snippets = {
  "cx-file-list-card": {
    "prefix": "cx-file-list-card",
    "body": [
      "<cx-file-list-card",
      "  :size=\"'default'\"",
      "  :files=\"[]\"",
      "  :plugs=\"'File'\"",
      "  :auth=\"{",
      "    downloadable: true,",
      "    uploadable: true,",
      "    editable: true,",
      "    removable: true,",
      "    sharable: true",
      "  }\"",
      "  :multiple=\"false\"",
      "  :exp-values=\"cx.dc.FileValues\"",
      "  :card-com=\"'cx-file-card'\"",
      "  @row-click=\"(selected) => {}\"",
      "  @selection-change=\"(selection) => {}\"",
      "  @row-remove=\"(selected) => {}\"",
      "/>"
    ],
    "description": "文件卡片列表组件"
  }
};

export default snippets; 