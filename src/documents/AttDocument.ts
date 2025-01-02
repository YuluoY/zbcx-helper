import { ComponentDoc, PropDoc, EventDoc, SlotDoc, I18nText } from '../types/tag-doc';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

// 创建输出通道
let outputChannel: vscode.OutputChannel;

function getOutputChannel(): vscode.OutputChannel {
  if (!outputChannel) {
    outputChannel = vscode.window.createOutputChannel('ATT Document Debug');
  }
  return outputChannel;
}

export interface MethodDoc extends EventDoc {
  returns?: string;
}

export class AttDocument implements ComponentDoc {
  private mdContent: string = '';

  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly props: PropDoc[],
    public readonly events: EventDoc[],
    public readonly methods: MethodDoc[],
    public readonly filePath: string,
    public readonly slots: SlotDoc[] = []
  ) {
    const channel = getOutputChannel();
    channel.appendLine('========== AttDocument 初始化开始 ==========');
    channel.appendLine(`组件名称: ${name}`);
    channel.appendLine(`文件路径: ${filePath}`);
    
    // 尝试读取文档文件
    try {
      // 从插件目录中查找文档
      const extensionPath = vscode.extensions.getExtension('undefined_publisher.att-component-helper')?.extensionPath;
      if (!extensionPath) {
        channel.appendLine('未找到插件路径');
        return;
      }
      
      // 从文件路径中获取组件目录名
      const dirName = path.basename(path.dirname(filePath));
      channel.appendLine(`组件目录名: ${dirName}`);
      const docPath = path.join(extensionPath, 'dist', 'docs', `${dirName.toLowerCase()}.md`);
      channel.appendLine(`尝试读取文档路径: ${docPath}`);
      
      if (fs.existsSync(docPath)) {
        channel.appendLine(`找到文档文件: ${docPath}`);
        this.mdContent = fs.readFileSync(docPath, 'utf-8');
        this.mdContent = this.mdContent.replace(/^\uFEFF/, '');
        channel.appendLine(`成功读取文档内容，长度: ${this.mdContent.length}`);
      } else {
        channel.appendLine(`未找到文档文件: ${docPath}`);
      }
      
      if (!this.mdContent) {
        channel.appendLine('未找到任何匹配的文档文件');
      }
    } catch (error) {
      channel.appendLine('========== 错误信息 ==========');
      channel.appendLine(`读取文档文件失败: ${error}`);
      channel.appendLine(`错误详情: ${error instanceof Error ? error.message : String(error)}`);
      channel.appendLine(`错误堆栈: ${error instanceof Error ? error.stack : '无堆栈信息'}`);
    }
    
    channel.appendLine('========== AttDocument 初始化结束 ==========\n');
  }

  /**
   * 获取组件的文档内容
   */
  getDocumentation(): string {
    return this.mdContent;
  }

  protected getDescription(desc: string | I18nText): string {
    return typeof desc === 'string' ? desc : desc.cn;
  }

  /**
   * 获取属性补全项
   */
  getProps(): PropDoc[] {
    return this.props;
  }

  /**
   * 获取事件补全项
   */
  getEvents(): EventDoc[] {
    return this.events;
  }

  /**
   * 获取方法补全项
   */
  getMethods(): MethodDoc[] {
    return this.methods;
  }

  /**
   * 获取插槽补全项
   */
  getSlots(): SlotDoc[] {
    return this.slots;
  }
} 