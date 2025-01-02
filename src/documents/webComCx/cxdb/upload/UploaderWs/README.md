# WebSocket 文件上载

`cx-uploader-ws` WebSocket 文件上载

## 基础用法

```vue
<template>
  <cx-uploader-ws
    :data="{
      major: 1,
      minor: 1,
      entityid: 1,
      saveto: 'FileSys'
    }"
    :onUpload="handleUpload"
    @progress="handleProgress"
  />
</template>

<script>
export default {
  methods: {
    handleUpload(ret) {
      console.log('upload success:', ret)
    },
    handleProgress(pert) {
      console.log('upload progress:', pert)
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| size | 尺寸 | String | large / default /small | default |
| tip | 提示信息 | String | | |
| types | 支持的后缀(如: png,gif,shp) | String | | |
| icon | 图标 | String | | 'cx-fi ic-upload fi-32' |
| showFileList | 是否显示文件列表 | Boolean | | false |
| checkName | 检查文件名是否重复 | Boolean | | false |
| files | 已经存在的文件名 | Array | | |
| onUpload | 成功后的回调函数 Function(ret)文件成功对象 | Function | | |
| setData | 为上载文件准备数据 Function(ret)文件上传url信息对象 | Function | | |
| data | 传递给 url 的附加参数 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ----- | -------|
| progress | 上载进度发生变化 | (pert) | 上载完成进度百分比 |

## data 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | ----- | ----- |--- |
| major | 实体主类型 | Number | | |
| minor | 实体子类型 | Number | | |
| entityid | 实体号 | Number | | |
| task | 流程环节 | String | | |
| memo | 备注 | String | | |
| saveto | 文件存储（取值: FileSys - 文件系统, Doc - 存 media 表及后端确定存放方式（file / fastdfs / miniio）） | String | | |
| dir | 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径） | String | | |

## 类型定义

```ts
/** 上传数据配置 */
interface UploaderWsData {
  /**
   * 实体主类型
   * @required
   */
  major: number;

  /**
   * 实体子类型
   * @required
   */
  minor: number;

  /**
   * 实体号
   * @required
   */
  entityid: number;

  /**
   * 流程环节
   */
  task?: string;

  /**
   * 备注
   */
  memo?: string;

  /**
   * 文件存储
   * @required
   */
  saveto: 'FileSys' | 'Doc';

  /**
   * 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）
   */
  dir?: string;
}

interface UploaderWsProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 提示信息
   */
  tip?: string;

  /**
   * 支持的后缀(如: png,gif,shp)
   */
  types?: string;

  /**
   * 图标
   * @default cx-fi ic-upload fi-32
   */
  icon?: string;

  /**
   * 是否显示文件列表
   * @default false
   */
  showFileList?: boolean;

  /**
   * 检查文件名是否重复
   * @default false
   */
  checkName?: boolean;

  /**
   * 已经存在的文件名
   */
  files?: string[];

  /**
   * 成功后的回调函数
   * @required
   */
  onUpload: (ret: any) => void;

  /**
   * 为上载文件准备数据
   */
  setData?: (ret: any) => void;

  /**
   * 传递给 url 的附加参数
   * @required
   */
  data: UploaderWsData;
} 
```