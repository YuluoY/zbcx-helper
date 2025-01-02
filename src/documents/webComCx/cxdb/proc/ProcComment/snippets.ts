export const snippets = {
  "cx-proc-comment": {
    "prefix": "cx-proc-comment",
    "body": [
      "<cx-proc-comment",
      "  ref='procComment'",
      "  :data=\"[",
      "    { message: '张三@:同意@:总经理审核', time: '2022-06-25 10:00:00' }",
      "  ]\"",
      "  :apply=\"{",
      "    applyUser: '李四',",
      "    applyTime: '2022-06-24 12:00:00',",
      "    task: '发起'",
      "  }\"",
      "/>"
    ],
    "description": "审核意见，展示流程各个环节的办理人员、办理意见等信息"
  }
}; 