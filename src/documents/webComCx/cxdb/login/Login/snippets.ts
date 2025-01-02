export const snippets = {
  "cx-login": {
    "prefix": "cx-login",
    "body": [
      "<cx-login",
      "  :config=\"{",
      "    config: {",
      "      addVerify: ${1:false},",
      "      encodeUser: ${2:undefined},",
      "      encodeLogin: ${3:key => cx.security.encrypt.encrypt(key, $app.SYS_ENKEY)},",
      "      decodeLogin: ${4:key => cx.security.encrypt.decrypt(key, $app.SYS_ENKEY)}",
      "    },",
      "    types: [",
      "      {",
      "        name: '${5:AccGraphic}',",
      "        label: ${6:this.$locLogin('loginAccGraphic')},",
      "        params: {",
      "          addForget: ${7:true}",
      "        }",
      "      }",
      "    ]",
      "  }\"",
      "  @forget=\"${8:onForget}\"",
      "  @login=\"${9:onLogin}\"",
      "/>",
    ],
    "description": "登录组件，支持多种登录方式，包括账号密码、手机验证码、滑块验证等"
  }
}; 