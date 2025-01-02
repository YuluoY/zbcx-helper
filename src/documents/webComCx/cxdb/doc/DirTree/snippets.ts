export const snippets = {
  "cx-dir-tree": {
    "prefix": "cx-dir-tree",
    "body": [
      "<cx-dir-tree",
      "  :size=\"'default'\"",
      "  :node=\"''\"",
      "  :vals=\"{}\"",
      "  :draggable=\"false\"",
      "  :tree-handler=\"new cx.dc.DirTreeHandler()\"",
      "  :tree-atts=\"{ selectFirst: true }\"",
      ">",
      "  <template #default=\"{ data }\">",
      "    <!-- 默认插槽 -->",
      "  </template>",
      "</cx-dir-tree>"
    ],
    "description": "文件目录树组件"
  }
};

export default snippets; 