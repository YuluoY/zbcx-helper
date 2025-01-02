export const snippets = {
  "cx-user-list": {
    "prefix": "cx-user-list",
    "body": [
      "<cx-user-list",
      "  :data=\"[",
      "    {",
      "      id: '${1:1}',",
      "      name: '${2:张三}',",
      "      title: '${3:工程师}',",
      "      picture: '${4:path/to/avatar}',",
      "      editable: ${5:false},",
      "      removable: ${6:false}",
      "    }",
      "  ]\"",
      "  addable=\"${7:false}\"",
      "  isimg=\"${8:false}\"",
      "  @item-click=\"${9:(user) => {}}\"",
      "  @item-edit=\"${10:(user) => {}}\"",
      "  @item-remove=\"${11:(user) => {}}\"",
      "  @add=\"${12:(user) => {}}\"",
      ">",
      "  ${13:<!-- 自定义内容 -->}",
      "</cx-user-list>"
    ],
    "description": "用户列表组件，以列表的形式展示用户数据"
  }
}; 