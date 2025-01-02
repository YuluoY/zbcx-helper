import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class AttGrpDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'flds',
        type: 'Array.<Fld>',
        description: '字段信息数组'
      },
      {
        name: 'title',
        type: 'String',
        description: '标题'
      },
      {
        name: 'col-num',
        type: 'Number',
        description: '列数量',
        values: ['1', '2', '3'],
        default: '2'
      },
      {
        name: 'mode',
        type: 'Number',
        description: '模式（0-浏览 1-编辑）',
        values: ['0', '1'],
        default: '0'
      },
      {
        name: 'editable',
        type: 'Boolean',
        description: '是否可编辑',
        default: 'false'
      },
      {
        name: 'border-com',
        type: 'String',
        description: 'Border 组件名（边框和底纹）',
        default: 'cx-border-regular'
      },
      {
        name: 'header-com',
        type: 'String',
        description: 'Header 组件名（标题头）',
        default: 'cx-header-attgrp'
      },
      {
        name: 'att-com',
        type: 'String',
        description: 'Att 组件名（编辑属性）',
        default: 'cx-att-tab'
      },
      {
        name: 'border',
        type: 'Object',
        description: '组件 Border 的参数（请参考具体的组件传递）'
      },
      {
        name: 'header',
        type: 'Object',
        description: '组件 Header 的参数 (请参考具体的组件传递)'
      },
      {
        name: 'content',
        type: 'Object',
        description: '组件 Content 的参数 (请参考具体的组件传递)'
      },
      {
        name: 'save',
        type: 'Function',
        description: '保存函数 - function(), 返回 Promise,true 代表成功'
      },
      {
        name: 'before-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之前的回调函数 - function(fld, params)'
      },
      {
        name: 'after-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之后的回调函数 - function(fld, flds, params)'
      }
    ];

    const events: EventDoc[] = [];

    const slots: SlotDoc[] = [
      {
        name: 'header-preappend',
        description: '标题之前'
      },
      {
        name: 'header-append',
        description: '标题之后'
      },
      {
        name: 'header-title',
        description: '标题附加'
      }
    ];

    const methods: MethodDoc[] = [];

    super(
      'cx-att-grp',
      '属性分组组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
} 