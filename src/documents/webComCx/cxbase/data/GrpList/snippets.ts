export const snippets = {
  "cx-grp-list": {
    "prefix": "cx-grp-list",
    "body": [
      "<cx-grp-list",
      "  size=\"${1:default}\"",
      "  title=\"${2:分组标题}\"",
      "  icon=\"${3:icon-name}\"",
      "  activeId=\"${4:}\"",
      "  :data=\"[",
      "    {",
      "      id: '${5:1}',",
      "      title: '${6:项目1}'",
      "    }",
      "  ]\"",
      "  @item-click=\"${7:(id, title) => {}}\"",
      ">",
      "  ${8:<!-- 自定义内容 -->}",
      "</cx-grp-list>"
    ],
    "description": "分组列表组件，主要用于将列表进行分组展示"
  }
}; 