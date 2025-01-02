export const snippets = {
  "cx-uploader-ws": {
    "prefix": "cx-uploader-ws",
    "body": [
      "<cx-uploader-ws",
      "  :size=\"${1:'default'}\"",
      "  :tip=\"${2:''}\"",
      "  :types=\"${3:''}\"",
      "  :icon=\"${4:'cx-fi ic-upload fi-32'}\"",
      "  :showFileList=\"${5:false}\"",
      "  :checkName=\"${6:false}\"",
      "  :files=\"${7:[]}\"",
      "  :data=\"{",
      "    major: ${8:0},",
      "    minor: ${9:0},",
      "    entityid: ${10:0},",
      "    saveto: ${11:'FileSys'}",
      "  }\"",
      "  :onUpload=\"${12:(ret) => {}}\"",
      "  @progress=\"${13:(pert) => {}}\"",
      "/>"
    ],
    "description": "WebSocket 文件上载组件"
  }
}; 