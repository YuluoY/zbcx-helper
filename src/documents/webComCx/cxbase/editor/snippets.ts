export const snippets = {
  "cx-editor": {
    "prefix": "cx-editor",
    "body": [
      "<cx-editor",
      "  v-model=\"${1:content}\"",
      "  type=\"${2|rich,markdown,simple|}\"",
      "  theme=\"${3|light,dark|}\"",
      "  lang=\"${4:zh-CN}\"",
      "  :cfg=\"{",
      "    height: '${5:400px}',",
      "    width: '${6:100%}',",
      "    readonly: ${7:false},",
      "    placeholder: '${8:请输入内容}',",
      "    toolbar: {",
      "      show: ${9:true},",
      "      items: ${10:[]}",
      "    },",
      "    style: ${11:{}}",
      "  }\"",
      "  @change=\"${12:handleChange}\"",
      "  @focus=\"${13:handleFocus}\"",
      "  @blur=\"${14:handleBlur}\"",
      ">",
      "</cx-editor>"
    ],
    "description": "富文本编辑器组件，支持富文本、Markdown和简单文本模式"
  }
}; 