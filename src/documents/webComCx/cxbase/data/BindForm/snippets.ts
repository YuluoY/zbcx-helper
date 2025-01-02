export const snippets = {
  "cx-bind-form": {
    "prefix": "cx-bind-form",
    "body": [
      "<cx-bind-form",
      "  :type=\"${1:cx.consts.LOGIN_MAIL}\"",
      "  :bindAtt=\"{",
      "    isbind: ${2:true},",
      "    name: '${3:用户名}',",
      "    info: ${4:{}}",
      "  }\"",
      "  :sendCode=\"${5:(form) => {}}\"",
      "  :getRules=\"${6:() => {}}\"",
      "  @on-sucess=\"${7:(ret) => {}}\"",
      ">",
      "</cx-bind-form>"
    ],
    "description": "账号绑定表单组件，可进行手机号和邮箱号的绑定与解绑"
  }
}; 