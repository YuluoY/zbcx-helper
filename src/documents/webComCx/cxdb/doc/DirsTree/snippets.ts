export const snippets = {
  'cx-dirs-tree': {
    prefix: 'cx-dirs-tree',
    body: [
      '<cx-dirs-tree',
      '  :dirs="dirs"',
      '  :size="\'default\'"',
      '  :plug="\'FileDir\'"',
      '  :root-label="rootLabel"',
      '  :draggable="false"',
      '  :tree-values="treeValues"',
      '  :tree-handler="treeHandler"',
      '  :tree-atts="{ selectFirst: true, expandRoot: true }"',
      '>',
      '  <template #default="data"></template>',
      '</cx-dirs-tree>'
    ],
    description: '多目录文件树组件'
  }
}; 