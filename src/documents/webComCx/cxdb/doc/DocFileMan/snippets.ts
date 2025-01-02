export const snippets = {
  "cx-doc-file-man": {
    "prefix": "cx-doc-file-man",
    "body": [
      "<cx-doc-file-man",
      "  :size=\"\'default\'\"",
      "  :exp=\"{",
      "    args: []",
      "  }\"",
      "  :plugs=\"\'DocFile\'\"",
      "  :exp-values=\"cx.dc.DcDocFileValues\"",
      "  :auth=\"{",
      "    downloadable: true,",
      "    uploadable: true,",
      "    editable: true,",
      "    removable: true,",
      "    sharable: true",
      "  }\"",
      "  :list-type=\"\'list\'\"",
      "  :doc-table-cfg=\"\'DocFile\'\"",
      "  :docrecyb-table-cfg=\"\'DocRecyb\'\"",
      "  :doc-card-com=\"\'cx-doc-card\'\"",
      "  :docrecyb-card-com=\"\'cx-docrecyb-card\'\"",
      "@set-data=\"(data, file) => {}\"",
      "@after-upload=\"(ret) => {}\"",
      ">"
    ],
    "description": "文档文件管理组件"
  }
}; 