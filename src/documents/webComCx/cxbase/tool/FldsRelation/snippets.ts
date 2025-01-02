export const snippets = {
  "cx-flds-relation": {
    "prefix": "cx-flds-relation",
    "body": [
      "<cx-flds-relation",
      "  size=\"${1:default}\"",
      "  :json-flds=\"[",
      "    {",
      "      colname: '${2:field1}',",
      "      namec: '${3:字段1}',",
      "      disporder: ${4:1},",
      "      nullable: ${5:0}",
      "    }",
      "  ]\"",
      "  :db-flds=\"[",
      "    ${6:'字段1'},",
      "    ${7:'字段2'},",
      "    ${8:'字段3'}",
      "  ]\"",
      "  @change=\"${9:onChangeRelation}\"",
      "/>"
    ],
    "description": "两组字段映射配置"
  }
}; 