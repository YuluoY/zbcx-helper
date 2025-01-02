export const snippets = {
  'cx-dir-file-man': {
    prefix: 'cx-dir-file-man',
    body: [
      '<cx-dir-file-man',
      '  :size="\'default\'"',
      '  :dir="\'directory/path\'"',
      '  :plugs="\'File\'"',
      '  :exp-values="cx.dc.FileValues"',
      '  :auth="{',
      '    downloadable: true,',
      '    uploadable: true,',
      '    editable: true,',
      '    removable: true,',
      '    sharable: true',
      '  }"',
      '  :list-type="\'list\'"',
      '  :file-card-com="\'cx-file-card\'"',
      '  @set-data="(data, file) => {}"',
      '  @after-upload="(ret) => {}"',
      '>',
      '  <template #preappend>',
      '    <!-- 操作按钮之前的内容 -->',
      '  </template>',
      '  <template #append>',
      '    <!-- 操作按钮之后的内容 -->',
      '  </template>',
      '</cx-dir-file-man>'
    ],
    description: '目录下的文件管理组件'
  }
}; 