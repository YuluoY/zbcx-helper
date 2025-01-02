export const snippets = {
  "cx-status-bar": {
    "prefix": "cx-status-bar",
    "body": [
      "<cx-status-bar",
      "  :status=\"[",
      "    [{ label: '${1:帧率}', value: '${2:0fps}' }],",
      "    [",
      "      { label: '${3:经度}', value: '${4:112.4543°}' },",
      "      { label: '${5:纬度}', value: '${6:30.2343°}' }",
      "    ]",
      "  ]\"",
      "  @click-status=\"${7:onClickStatus}\"",
      ">",
      "  <template v-slot:prefix>",
      "    ${8:<!-- 前缀插槽 -->}",
      "  </template>",
      "  <template v-slot:suffix>",
      "    ${9:<!-- 后缀插槽 -->}",
      "  </template>",
      "</cx-status-bar>"
    ],
    "description": "状态栏"
  }
}; 