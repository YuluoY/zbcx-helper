export const snippets = {
  "cx-bind-card": {
    "prefix": "cx-bind-card",
    "body": [
      "<cx-bind-card",
      "  :item=\"{",
      "    name: '${1:账户名称}',",
      "    imgSrc: '${2:path/to/icon}',",
      "    value: ${3:false},",
      "    valueShow: '${4:显示内容}'",
      "  }\"",
      "  @on-bind=\"${5:(item) => {}}\"",
      "  @un-bind=\"${6:(item) => {}}\"",
      ">",
      "</cx-bind-card>"
    ],
    "description": "账户安全子容器组件，用于手机、邮箱、微信、请求解绑的容器"
  }
}; 