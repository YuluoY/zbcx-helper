export const snippets = {
  "cx-grid-page": {
    "prefix": "cx-grid-page",
    "body": [
      "<cx-grid-page",
      "  ref=\"${1:page}\"",
      "  size=\"${2:default}\"",
      "  :page=\"{",
      "    total: ${3:0},",
      "    pageSize: ${4:10},",
      "    pageSizes: ${5:[10, 20, 50, 100]},",
      "    layout: '${6:total,sizes,prev,pager,next,jumper,slot}',",
      "    currentPage: ${7:1}",
      "  }\"",
      "  @pagesize-change=\"${8:onPageSizeChange}\"",
      "  @current-change=\"${9:onCurrentChange}\"",
      ">",
      "  ${10:<!-- 内容部分 -->}",
      "</cx-grid-page>"
    ],
    "description": "网格分页"
  }
}; 