export const snippets = {
  'cx-doc-tree': {
    prefix: 'cx-doc-tree',
    body: [
      '<cx-doc-tree',
      '  :size="\'default\'"',
      '  :node="\'DocTree\'"',
      '  :vals="{}"',
      '  :lazy="true"',
      '  :auth="{',
      '    addable: true,',
      '    editable: true,',
      '    removable: true',
      '  }"',
      '  :tree-handler="new cx.dc.DocTreeHandler()"',
      '  :tree-atts="{ selectFirst: true }"',
      '>',
      '  <template #default="data">',
      '    <!-- 默认插槽内容 -->',
      '  </template>',
      '</cx-doc-tree>'
    ],
    description: '文档目录树组件'
  }
}; 