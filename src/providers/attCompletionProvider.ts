import * as vscode from 'vscode';
import { ComponentDoc, PropDoc } from '../types/tag-doc';

export class AttCompletionProvider implements vscode.CompletionItemProvider {
    private components: Map<string, ComponentDoc> = new Map();

    constructor(components: Map<string, ComponentDoc>) {
        this.components = components;
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        
        // 如果不是在标签开始处，则不提供补全
        if (!linePrefix.endsWith('<')) {
            return undefined;
        }

        // 返回所有组件的补全项
        const completions: vscode.CompletionItem[] = [];
        for (const [name, component] of this.components) {
            const completion = new vscode.CompletionItem(name, vscode.CompletionItemKind.Class);
            completion.documentation = new vscode.MarkdownString(
                typeof component.description === 'string'
                    ? component.description
                    : component.description.cn
            );
            completions.push(completion);
        }

        return completions;
    }

    providePropsCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        componentName: string
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        const component = this.components.get(componentName);
        if (!component) {
            return undefined;
        }

        return component.props.map((prop: PropDoc) => {
            const completion = new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property);
            completion.documentation = new vscode.MarkdownString(
                typeof prop.description === 'string'
                    ? prop.description
                    : prop.description.cn
            );
            return completion;
        });
    }
}