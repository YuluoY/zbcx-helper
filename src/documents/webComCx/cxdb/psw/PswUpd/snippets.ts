export const snippets = {
  "cx-psw-upd": {
    "prefix": "cx-psw-upd",
    "body": [
      "<cx-psw-upd",
      "  :size=\"${1:'default'}\"",
      "  :rules=\"${2:''}\"",
      "  :type=\"${3:'password'}\"",
      "  :highLevel=\"${4:true}\"",
      "  :encode=\"${5:encode}\"",
      "  @onChange=\"${6:(value) => {}}\"",
      "  @onEnterKey=\"${7:(input) => {}}\"",
      "  @click=\"${8:() => {}}\"",
      "  @onOk=\"${9:() => {}}\"",
      "/>"
    ],
    "description": "修改密码组件"
  }
}; 