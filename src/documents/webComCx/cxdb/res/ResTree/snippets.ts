export const snippets = {
  "cx-res-tree": {
    "prefix": "cx-res-tree",
    "body": [
      "<cx-res-tree",
      "  :size=\"${1:'default'}\"",
      "  :node=\"${2:''}\"",
      "  :vals=\"${3:{}}\"",
      "  :lazy=\"${4:true}\"",
      "  :auth=\"${5:{ addable: true, editable: true, removable: true }}\"",
      "  :tree-handler=\"${6:cx.dc.DocTreeHandler}\"",
      "  :tree-atts=\"${7:{ selectFirst: true }}\"",
      ">",
      "  <template #default=\"data\">",
      "    {{ data }}",
      "  </template>",
      "</cx-res-tree>"
    ],
    "description": "资源树组件(基于cx_restree)"
  }
}; 