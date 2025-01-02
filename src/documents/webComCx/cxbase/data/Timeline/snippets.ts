export const snippets = {
  "cx-timeline": {
    "prefix": "cx-timeline",
    "body": [
      "<cx-timeline",
      "  :data=\"[",
      "    {",
      "      name: '${1:item1}',",
      "      elAtts: {",
      "        timestamp: '${2:2023-01-01}',",
      "        type: '${3:primary}',",
      "        placement: '${4:bottom}',",
      "        size: '${5:normal}',",
      "        center: ${6:false},",
      "        hideTimestamp: ${7:false},",
      "        hollow: ${8:false}",
      "      },",
      "      component: ${9:YourComponent},",
      "      params: ${10:{}},",
      "      evts: ${11:{}}",
      "    }",
      "  ]\"",
      "  @click-item=\"${12:(item) => {}}\"",
      ">",
      "</cx-timeline>"
    ],
    "description": "时间线组件，基于时间线展示数据信息"
  }
}; 