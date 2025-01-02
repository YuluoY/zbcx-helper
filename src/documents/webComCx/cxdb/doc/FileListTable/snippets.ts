export const snippets = {
  "cx-file-list-table": {
    "prefix": "cx-file-list-table",
    "body": [
      "<cx-file-list-table",
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
      "  @row-click=\"(row, column, event) => {}\"",
      "  @selection-change=\"(selection) => {}\"",
      "  @sort-change=\"({ column, prop, order }) => {}\"",
      "  @row-remove=\"(selected) => {}\"",
      "/>"
    ],
    "description": "文件数据表组件"
  }
};

export default snippets; 