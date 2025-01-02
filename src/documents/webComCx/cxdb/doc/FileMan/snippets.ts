export const snippets = {
  "cx-file-man": {
    "prefix": "cx-file-man",
    "body": [
      "<cx-file-man",
      "  :size=\"'default'\"",
      "  :tree-com=\"'cx-dir-tree'\"",
      "  :tree-node=\"''\"",
      "  :tree-vals=\"{}\"",
      "  :tree-handler=\"cx.dc.DocTreeHandler\"",
      "  :tree-atts=\"{ selectFirst: true }\"",
      "  :tree-width=\"'1.75rem'\"",
      "  :file-plugs=\"'File'\"",
      "  :file-exp-values=\"cx.dc.FileValues\"",
      "  :list-type=\"'list'\"",
      "  :set-data=\"(data, file) => {}\"",
      "  :after-upload=\"(ret) => {}\"",
      "  :upload=\"() => {}\"",
      "  :file-card-com=\"'cx-file-card'\"",
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
      "</cx-file-man>"
    ],
    "description": "文件管理组件"
  }
};

export default snippets; 