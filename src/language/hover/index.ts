import * as vscode from "vscode";
import { ComponentDoc, I18nText } from "../../types/tag-doc";
import { AttDocument } from "../../documents/AttDocument";
import * as path from "path";
import * as fs from "fs";

// 创建输出通道
let outputChannel: vscode.OutputChannel;

function getOutputChannel(): vscode.OutputChannel {
  if (!outputChannel) {
    outputChannel = vscode.window.createOutputChannel('ATT Hover Debug');
  }
  return outputChannel;
}

export class ComponentHoverProvider implements vscode.HoverProvider {
  private docs: Map<string, ComponentDoc> = new Map();
  private readonly DOC_BASE_URL = "http://192.168.2.229:5173";
  private componentMap: { [key: string]: { type: string; name: string; path: string } } = {};

  constructor() {
    // 加载组件映射文件
    const extensionPath = vscode.extensions.getExtension('EricHu.zbcx-helper')?.extensionPath;
    if (extensionPath) {
      try {
        const mapPath = path.join(extensionPath, 'dist', 'documents', 'component-map.json');
        if (fs.existsSync(mapPath)) {
          this.componentMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
        }
      } catch (error) {
        const channel = getOutputChannel();
        channel.appendLine('加载组件映射文件失败');
        channel.appendLine(String(error));
      }
    }
  }

  addDoc(name: string, doc: ComponentDoc) {
    const channel = getOutputChannel();
    channel.appendLine(`注册组件文档: ${name}`);
    this.docs.set(name, doc);
  }

  private convertOutPathToSrcPath(outPath: string): string {
    const channel = getOutputChannel();
    channel.appendLine(`转换路径 - 输入: ${outPath}`);
    const result = outPath.replace(/[\/\\]dist[\/\\]/, "/src/");
    channel.appendLine(`转换路径 - 输出: ${result}`);
    return result;
  }

  private generateDocUrl(filePath: string): string {
    const channel = getOutputChannel();
    channel.appendLine('========== 生成文档 URL ==========');
    
    // 从文件路径中提取组件路径
    const match = filePath.match(/documents[\/\\]webComCx[\/\\]cxbase[\/\\]([^\/\\]+)[\/\\]([^\/\\]+)/);
    if (match) {
      const [, componentType, componentName] = match;
      const url = `${this.DOC_BASE_URL}/webComCx/cxbase/${componentType}/${componentName}/${componentName}.html`;
      channel.appendLine(`生成的 URL: ${url}`);
      return url;
    }
    
    channel.appendLine('无法从文件路径生成 URL');
    return '';
  }

  /**
   * 处理 Markdown 内容中的表格格式
   * @param mdContent Markdown 内容
   * @param padding 表格单元格两侧的空格数量
   * @returns 处理后的 Markdown 内容
   */
  private processMarkdownTables(
    mdContent: string,
    padding: number = 20
  ): string {
    const lines = mdContent.split("\n");
    const processedLines = [];
    let inTable = false;
    let columnCount = 0;
    let tableStartIndex = -1;

    // 生成指定数量的空格
    const spaces = " ".repeat(padding);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // 检测表格开始
      if (trimmedLine.startsWith("|") && trimmedLine.endsWith("|")) {
        // 检查是否是真正的表格（下一行应该是分隔符）
        const nextLine = lines[i + 1]?.trim() || "";
        if (!inTable && nextLine.includes("----")) {
          inTable = true;
          tableStartIndex = i;
          columnCount = (trimmedLine.match(/\|/g) || []).length - 1;
        }

        if (inTable) {
          // 处理表格行
          const cells = trimmedLine.split("|").slice(1, -1); // 移除首尾空字符串
          if (trimmedLine.includes("----")) {
            // 处理分隔行
            processedLines.push(
              "|" + Array(columnCount).fill(":---:").join("|") + "|"
            );
          } else {
            // 处理内容行，确保每个单元格有足够的空格
            processedLines.push(
              "|" +
                cells
                  .map((cell) => {
                    const trimmed = cell.trim();
                    return `${spaces}${trimmed}${spaces}`;
                  })
                  .join("|") +
                "|"
            );
          }
        }
      } else {
        if (inTable) {
          inTable = false;
        }
        // 非表格内容保持原样
        processedLines.push(line);
      }
    }

    return processedLines.join("\n");
  }

  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Promise<vscode.Hover | null> {
    const channel = getOutputChannel();
    channel.appendLine('\n========== 处理悬停事件 ==========');
    
    const range = document.getWordRangeAtPosition(position, /cx-[a-zA-Z0-9-]+/);
    if (!range) {
      channel.appendLine('未找到匹配的组件名称范围');
      return null;
    }

    const componentName = document.getText(range).replace(/^cx-/, "").toLowerCase();
    channel.appendLine(`检测到组件名称: ${componentName}`);
    
    const doc = this.docs.get(componentName);
    if (!doc) {
      channel.appendLine(`未找到组件 ${componentName} 的文档`);
      return null;
    }

    if (doc instanceof AttDocument) {
      channel.appendLine('找到 AttDocument 实例');
      
      // 从 dist/documents 目录读取文档
      const extensionPath = vscode.extensions.getExtension('EricHu.zbcx-helper')?.extensionPath;
      if (!extensionPath) {
        channel.appendLine('未找到插件路径');
        return null;
      }

      // 从映射文件中获取组件信息
      const componentInfo = this.componentMap[componentName];
      if (!componentInfo) {
        channel.appendLine(`未在映射文件中找到组件 ${componentName} 的信息`);
        return null;
      }

      channel.appendLine(`组件类型: ${componentInfo.type}`);
      channel.appendLine(`组件名称: ${componentInfo.name}`);
      channel.appendLine(`文档路径: ${componentInfo.path}`);

      // 构建文档路径
      const docPath = path.join(extensionPath, 'dist', 'documents', componentInfo.path);
      channel.appendLine(`完整文档路径: ${docPath}`);

      try {
        channel.appendLine('开始读取文档文件');
        let mdContent = fs.readFileSync(docPath, "utf-8");
        
        if (mdContent) {
          channel.appendLine(`成功读取文档内容，长度: ${mdContent.length}`);
          
          // 处理表格内容
          mdContent = this.processMarkdownTables(mdContent, 3);
          channel.appendLine('表格处理完成');

          // 生成文档链接
          const docUrl = `${this.DOC_BASE_URL}/webComCx/cxbase/${componentInfo.type}/${componentInfo.name}/${componentInfo.name}.html`;
          if (docUrl) {
            channel.appendLine(`添加在线文档链接: ${docUrl}`);
            mdContent = `[📖 在线文档](${docUrl})\n\n---\n\n${mdContent}`;
          }

          // 创建 MarkdownString
          const content = new vscode.MarkdownString(mdContent);
          content.isTrusted = true;
          content.supportHtml = true;
          
          channel.appendLine('成功创建悬停内容');
          return new vscode.Hover(content, range);
        }
      } catch (error) {
        channel.appendLine('========== 错误信息 ==========');
        channel.appendLine(`读取文档失败: ${error}`);
        channel.appendLine(`错误详情: ${error instanceof Error ? error.message : String(error)}`);
        channel.appendLine(`错误堆栈: ${error instanceof Error ? error.stack : '无堆栈信息'}`);
      }
    } else {
      channel.appendLine('文档不是 AttDocument 实例');
    }

    return null;
  }
}