import * as vscode from 'vscode';

export class CompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        
        if (linePrefix.endsWith('<')) {
            return this.provideComponentCompletion();
        }

        return this.providePropsAndEvents(linePrefix);
    }

    private provideComponentCompletion(): vscode.CompletionItem[] {
        // 这里应该返回组件补全列表
        return [
            new vscode.CompletionItem('component1', vscode.CompletionItemKind.Class),
            new vscode.CompletionItem('component2', vscode.CompletionItemKind.Class)
        ];
    }

    private providePropsAndEvents(linePrefix: string): vscode.CompletionItem[] {
        // 这里应该返回属性和事件补全列表
        return [
            new vscode.CompletionItem('prop1', vscode.CompletionItemKind.Property),
            new vscode.CompletionItem('event1', vscode.CompletionItemKind.Event)
        ];
    }
}