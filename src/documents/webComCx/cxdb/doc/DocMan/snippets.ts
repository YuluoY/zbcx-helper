export const snippets = {
  "cx-doc-man": {
    "prefix": "cx-doc-man",
    "body": [
      "<cx-doc-man",
      "  :size=\"size\"",
      "  :tree-node=\"'DocDir'\"",
      "  :tree-vals=\"{",
      "    DocDir: 'prj,1'",
      "  }\"",
      "  :auth-dir=\"{",
      "    addable: true,",
      "    removable: true,",
      "    editable: true",
      "  }\"",
      "  :auth-file=\"{",
      "    uploadable: true,",
      "    removable: true,",
      "    editable: true,",
      "    downloadable: true",
      "  }\"",
      "  :tree-attrs=\"{",
      "    selectFirst: true",
      "  }\"",
      "  @after-upload=\"afterUpload\"",
      ">",
      "  <template #dirtree-default=\"{ data }\">",
      "    <!-- 目录树-插槽 -->",
      "  </template>",
      "  <template #dirfile-preappend>",
      "    <!-- 目录文件组件-操作按钮之前 -->",
      "  </template>",
      "  <template #dirfile-append>",
      "    <!-- 目录文件组件-操作按钮之后 -->",
      "  </template>",
      "</cx-doc-man>"
    ],
    "description": "文档管理组件"
  }
};

export default snippets; 