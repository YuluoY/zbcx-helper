export const snippets = {
  "cx-forgot-pwd": {
    "prefix": "cx-forgot-pwd",
    "body": [
      "<cx-forgot-pwd",
      "  :config=\"{",
      "    types: [${1:cx.consts.LOGIN_MAIL}, ${2:cx.consts.LOGIN_CELL}],",
      "    encodeUser: ${3:undefined},",
      "    encodeLogin: ${4:key => cx.security.encrypt.encrypt(key, $app.SYS_ENKEY)},",
      "    decodeLogin: ${5:key => cx.security.encrypt.decrypt(key, $app.SYS_ENKEY)}",
      "  }\"",
      "  @success=\"${6:onToLogin}\"",
      "/>",
    ],
    "description": "忘记密码组件，支持手机号和邮箱两种方式找回密码"
  }
}; 