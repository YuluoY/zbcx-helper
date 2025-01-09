import * as vscode from 'vscode';
import { DocumentManager } from './documents';
import { ComponentHoverProvider } from './language/hover';
import { CompletionProvider } from './language/completion';
/* import { DiagnosticProvider } from './language/diagnostics'; */

// 创建全局输出通道
// let outputChannel: vscode.OutputChannel;

export async function activate(context: vscode.ExtensionContext) {
    // 初始化输出通道
    // outputChannel = vscode.window.createOutputChannel('智博创享助手');
    // context.subscriptions.push(outputChannel); // 确保通道被正确释放
    // outputChannel.show();
    // outputChannel.appendLine('正在激活组件助手扩展...');
    // console.log('正在激活组件助手扩展...');

    try {
        // 获取插件版本号
        const packageJson = require('../package.json');
        const version = packageJson.version;

        // 创建文档管理器
        // outputChannel.appendLine('正在初始化文档管理器...');
        const documentManager = new DocumentManager(context.extensionUri);
        const documents = documentManager.getDocuments();
        // outputChannel.appendLine(`已加载 ${documents.length} 个组件文档`);

        // 创建提供者实例
        // outputChannel.appendLine('正在初始化提供者...');
        const hoverProvider = new ComponentHoverProvider();
        const completionProvider = new CompletionProvider();
        /* const diagnosticProvider = new DiagnosticProvider();
        const diagnosticCollection = vscode.languages.createDiagnosticCollection('zbcx-helper'); */

        // 注册文档到各个提供者
        documents.forEach(doc => {
            const componentName = doc.name.replace(/^cx-/, '');
            hoverProvider.addDoc(componentName, doc);
            completionProvider.addDoc(componentName, doc);
            /* diagnosticProvider.addDoc(componentName, doc); */
            // outputChannel.appendLine(`已加载组件: ${componentName}`);
        });

        // 注册 zbcx 命令
        // outputChannel.appendLine('正在注册 zbcx 命令...');
        let zbcxCommand = vscode.commands.registerCommand('zbcx-helper.zbcx', () => {
            // outputChannel.appendLine('执行 zbcx 命令');
            // 显示欢迎消息
            vscode.window.showInformationMessage(`欢迎使用智博创享助手v${version}!`);
        });

        // 注册提供者
        // outputChannel.appendLine('正在注册语言提供者...');
        context.subscriptions.push(
            vscode.languages.registerHoverProvider(
                { scheme: 'file', language: 'vue' },
                hoverProvider
            ),
            vscode.languages.registerCompletionItemProvider(
                { scheme: 'file', language: 'vue' },
                completionProvider,
                'c', '<', ':', '@', '#', ' '  // 添加空格作为触发字符
            ),
            /* vscode.workspace.onDidChangeTextDocument(event => {
                if (event.document.languageId === 'vue') {
                    const diagnostics = diagnosticProvider.provideDiagnostics(event.document);
                    diagnosticCollection.set(event.document.uri, diagnostics);
                }
            }),
            vscode.workspace.onDidOpenTextDocument(document => {
                if (document.languageId === 'vue') {
                    const diagnostics = diagnosticProvider.provideDiagnostics(document);
                    diagnosticCollection.set(document.uri, diagnostics);
                }
            }), */
            zbcxCommand
        );

        // outputChannel.appendLine('组件助手扩展激活成功');
        // console.log('组件助手扩展激活成功');
        
        // 显示通知
        // vscode.window.showInformationMessage(`智博创享助手v${version}已激活`);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        // outputChannel.appendLine(`组件助手激活失败: ${message}`);
        // console.error(`组件助手激活失败: ${message}`);
        // vscode.window.showErrorMessage(`组件助手激活失败: ${message}`);
    }
}

export function deactivate() {
    // if (outputChannel) {
    //     outputChannel.appendLine('组件助手扩展已停用');
    //     outputChannel.dispose();
    // }
    // console.log('组件助手扩展已停用');
}