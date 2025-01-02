export const snippets = {
  'cx-doc-list-ws': {
    prefix: 'cx-doc-list-ws',
    body: [
      '<cx-doc-list-ws',
      '  :dir="\'uploadfile:\'"',
      '  :saveto="\'FileSys\'"',
      '  :size="\'default\'"',
      '  :viewable="true"',
      '  :downloadable="true"',
      '  :editable="false"',
      '  :removable="true"',
      '  :uploadable="true"',
      '  :workflow="workflow"',
      '  :bustype="bustype"',
      '  :set-data="setData"',
      '  :upload-attrs="uploadAttrs"',
      '  @doc-click="handleClick"',
      '  @doc-view="handleView"',
      '  @doc-download="handleDownload"',
      '  @doc-edit="handleEdit"',
      '  @doc-remove="handleRemove"',
      '  @doc-add="handleAdd"',
      '>',
      '</cx-doc-list-ws>'
    ],
    description: '文档列表组件（基于 WebSocket）'
  }
}; 