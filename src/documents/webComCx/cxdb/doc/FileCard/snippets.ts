export const snippets = {
  "cx-file-card": {
    "prefix": "cx-file-card",
    "body": [
      "<cx-file-card",
      "  :size=\"'default'\"",
      "  :file=\"{}\"",
      "  :opers=\"[]\"",
      "  :oper-cfg=\"{",
      "    showTitle: true,",
      "    showIcon: true",
      "  }\"",
      "  :multiple=\"false\"",
      "  :plugin-state=\"(plug, args) => {}\"",
      "  :before-visible=\"(args) => {}\"",
      "  :border-com=\"'cx-border-regular'\"",
      "  :border=\"{}\"",
      "  :content=\"{}\"",
      "  :info=\"{}\"",
      "  @row-click=\"(args) => {}\"",
      "  @plugin-click=\"(oper, args) => {}\"",
      "  @check-change=\"(args, checked) => {}\"",
      ">",
      "  <template #info>",
      "    <!-- 文档信息 -->",
      "  </template>",
      "  <template #cmdbar>",
      "    <!-- 命令条 -->",
      "  </template>",
      "</cx-file-card>"
    ],
    "description": "文件卡片组件"
  }
};

export default snippets; 