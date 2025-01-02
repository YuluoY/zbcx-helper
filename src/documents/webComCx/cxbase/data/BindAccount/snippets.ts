export const snippets = {
  "cx-bind-account": {
    "prefix": "cx-bind-account",
    "body": [
      "<cx-bind-account",
      "  :bindVals=\"[",
      "    {",
      "      name: '${1:绑定名称}',",
      "      colname: '${2:qq}',",
      "      imgSrc: '${3:static/userinfo/email.png}',",
      "      value: '${4:字段值}',",
      "      valueShow: '${5:显示值}',",
      "      userobj: ${6:{}}",
      "    }",
      "  ]\"",
      "  @on-sucess=\"${7:(ret) => {}}\"",
      ">",
      "</cx-bind-account>"
    ],
    "description": "账户安全绑定/解绑组件"
  }
}; 