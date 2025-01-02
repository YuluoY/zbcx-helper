import * as vscode from 'vscode';
import { ComponentDoc, I18nText } from '../../types/tag-doc';
import { camelCase } from 'lodash';

export class CompletionProvider implements vscode.CompletionItemProvider {
    private docs: Map<string, ComponentDoc> = new Map();
    private snippets: Map<string, any> = new Map();

    addDoc(name: string, doc: ComponentDoc) {
        this.docs.set(name, doc);
        // 如果组件有snippets属性，保存它
        if ((doc as any).snippets) {
            this.snippets.set(name, (doc as any).snippets);
        }
    }

    private getDescription(desc: string | I18nText): string {
        return typeof desc === 'string' ? desc : desc.cn;
    }

    private getAttributeCompletions(doc: ComponentDoc): vscode.CompletionItem[] {
        const items: vscode.CompletionItem[] = [];

        // 添加属性补全（同时提供带:和不带:的版本）
        doc.props.forEach(prop => {
            // 不带:的版本（用于直接赋值）
            const normalItem = new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property);
            const description = this.getDescription(prop.description);
            normalItem.detail = description;
            normalItem.documentation = new vscode.MarkdownString(description);

            // 对于直接赋值，不需要JavaScript表达式
            let directValue = prop.default || '';
            if (prop.values?.length) {
                normalItem.insertText = new vscode.SnippetString(`${prop.name}="\${1|${prop.values.join(',')}|}"`);
            } else {
                if (prop.type === 'boolean') {
                    directValue = directValue || 'false';
                } else if (prop.type === 'number') {
                    directValue = directValue || '0';
                }
                normalItem.insertText = new vscode.SnippetString(`${prop.name}="\${1:${directValue}}"`);
            }
            items.push(normalItem);
        });

        // 添加事件补全
        doc.events.forEach(event => {
            const item = new vscode.CompletionItem(`@${event.name}`, vscode.CompletionItemKind.Event);
            const description = this.getDescription(event.description);
            item.detail = description;
            item.documentation = new vscode.MarkdownString(description);
            const handlerName = `handle${this.capitalize(camelCase(event.name))}`;
            item.insertText = new vscode.SnippetString(`@${event.name}="\${1:${handlerName}}"`);
            items.push(item);
        });

        // 添加插槽补全
        doc.slots.forEach(slot => {
            const item = new vscode.CompletionItem(`#${slot.name}`, vscode.CompletionItemKind.Value);
            const description = this.getDescription(slot.description);
            item.detail = description;
            item.documentation = new vscode.MarkdownString(description);
            item.insertText = new vscode.SnippetString(`#${slot.name}="\${1}"`);
            items.push(item);
        });

        return items;
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        const line = document.lineAt(position).text;
        
        // 输入 cx- 时提示代码片段补全
        if (linePrefix.match(/c$/) || 
            linePrefix.match(/cx$/) || 
            linePrefix.match(/cx-$/)) {
            const range = this.getInputRange(document, position, /c|cx|cx-$/);
            return this.getComponentSnippets(range);
        }
        
        // 输入 <cx- 时提示组件标签补全
        if (linePrefix.endsWith('<') || 
            linePrefix.match(/<c$/) || 
            linePrefix.match(/<cx$/) || 
            linePrefix.match(/<cx-$/)) {
            const range = this.getInputRange(document, position, /<c|<cx|<cx-$/);
            return this.getComponentCompletions(range);
        }

        // 检查是否在template标签的#后面
        const templateMatch = linePrefix.match(/<template\s+#$/);
        if (templateMatch) {
            // 查找父组件
            const parentDoc = this.findParentComponentDoc(document, position);
            if (parentDoc) {
                return this.getSlotsCompletions(parentDoc);
            }
            return undefined;
        }

        // 检查是否在组件标签内
        const componentMatch = linePrefix.match(/<cx-([a-z-]+)/);
        if (!componentMatch) {
            return undefined;
        }

        const componentName = componentMatch[1];
        const doc = this.docs.get(componentName);
        if (!doc) {
            return undefined;
        }

        // 检查是否在组件标签的属性位置
        const tagStart = line.lastIndexOf('<cx-');
        const tagEnd = line.indexOf('>', tagStart);
        
        // 如果光标不在开始标签内，不提供补全
        if (tagEnd !== -1 && position.character > tagEnd) {
            return undefined;
        }

        // 在组件标签内，根据触发字符提供不同的补全
        switch (context.triggerCharacter) {
            case ':': {
                // 提供不带:的属性名建议
                const items = doc.props.map(prop => {
                    const item = new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property);
                    const description = this.getDescription(prop.description);
                    item.detail = description;
                    item.documentation = new vscode.MarkdownString(description);
                    item.insertText = new vscode.SnippetString(`${prop.name}="\${1}"`);
                    return item;
                });
                return items;
            }
            case '@':
                return this.getEventsCompletions(doc);
            case ' ':
                return this.getAttributeCompletions(doc);
        }

        // 如果在组件标签内但没有触发字符，也提供补全
        if (linePrefix.match(/<cx-[^>]*\s+[^>]*$/)) {
            return this.getAttributeCompletions(doc);
        }

        return undefined;
    }

    private getInputRange(document: vscode.TextDocument, position: vscode.Position, pattern: RegExp): vscode.Range {
        const line = document.lineAt(position).text;
        const match = line.slice(0, position.character).match(pattern);
        if (match) {
            const startPos = position.translate(0, -match[0].length);
            return new vscode.Range(startPos, position);
        }
        return new vscode.Range(position, position);
    }

    private getComponentCompletions(range: vscode.Range): vscode.CompletionItem[] {
        return Array.from(this.docs.entries()).map(([name, doc]) => {
            const item = new vscode.CompletionItem(`cx-${name}`, vscode.CompletionItemKind.Class);
            const description = this.getDescription(doc.description);
            item.detail = description;
            item.documentation = new vscode.MarkdownString(description);
            item.range = range;
            item.insertText = new vscode.SnippetString(`cx-${name}`);
            // 选择组件后触发属性补全
            item.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return item;
        });
    }

    private getComponentSnippets(range: vscode.Range): vscode.CompletionItem[] {
        return Array.from(this.docs.entries()).map(([name, doc]) => {
            const item = new vscode.CompletionItem(`cx-${name}`, vscode.CompletionItemKind.Snippet);
            const description = this.getDescription(doc.description);
            item.detail = description;
            item.documentation = new vscode.MarkdownString(description);
            
            // 使用组件中定义的代码片段
            const snippet = this.snippets.get(name)?.[`cx-${name}`];
            if (snippet) {
                item.insertText = new vscode.SnippetString(snippet.body.join('\n'));
            } else {
                // 如果没有定义代码片段，使用默认的
                const snippetParts = [`<cx-${name}`];
                
                // 添加必填属性
                doc.props.forEach((prop, index) => {
                    snippetParts.push(`  :${prop.name}="\${${index + 1}:${prop.default || ''}}"`);
                });

                // 添加常用事件（使用小驼峰）
                doc.events.forEach((event, index) => {
                    const i = index + doc.props.length + 1;
                    snippetParts.push(`  @${event.name}="\${${i}:handle${this.capitalize(camelCase(event.name))}}"`);
                });

                // 添加插槽占位符
                if (doc.slots.length > 0) {
                    snippetParts.push(`>`);
                    snippetParts.push(`  \${${doc.props.length + doc.events.length + 1}}`);
                    snippetParts.push(`</cx-${name}>`);
                } else {
                    snippetParts.push(` />`);
                }
                
                item.insertText = new vscode.SnippetString(snippetParts.join('\n'));
            }
            
            item.range = range;
            item.sortText = '1'; // 确保代码片段排在后面
            return item;
        });
    }

    private getEventsCompletions(doc: ComponentDoc): vscode.CompletionItem[] {
        return doc.events.map(event => {
            const item = new vscode.CompletionItem(event.name, vscode.CompletionItemKind.Event);
            const description = this.getDescription(event.description);
            item.detail = description;
            
            const documentation = new vscode.MarkdownString();
            documentation.appendMarkdown(`**说明：** ${description}\n\n`);
            
            if (event.parameters) {
                documentation.appendMarkdown(`**参数：** ${event.parameters}\n\n`);
            }
            
            item.documentation = documentation;

            // 生成事件处理函数代码片段（使用小驼峰）
            const handlerName = `handle${this.capitalize(camelCase(event.name))}`;
            item.insertText = new vscode.SnippetString(`${event.name}="\${1:${handlerName}}"`);
            return item;
        });
    }

    private getSlotsCompletions(doc: ComponentDoc): vscode.CompletionItem[] {
        return doc.slots.map(slot => {
            const item = new vscode.CompletionItem(slot.name, vscode.CompletionItemKind.Value);
            const description = this.getDescription(slot.description);
            item.detail = description;
            
            const documentation = new vscode.MarkdownString();
            documentation.appendMarkdown(`**说明：** ${description}\n\n`);
            
            if (slot.props?.length) {
                documentation.appendMarkdown(`**作用域参数：** ${slot.props.join(', ')}\n\n`);
            }
            
            item.documentation = documentation;

            // 生成插槽代码片段
            item.insertText = new vscode.SnippetString(slot.name);
            return item;
        });
    }

    private capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // 新增：查找父组件文档
    private findParentComponentDoc(document: vscode.TextDocument, position: vscode.Position): ComponentDoc | undefined {
        // 向上查找最近的组件标签
        for (let line = position.line; line >= 0; line--) {
            const lineText = document.lineAt(line).text;
            const match = lineText.match(/<cx-([a-z-]+)/);
            if (match) {
                const componentName = match[1];
                return this.docs.get(componentName);
            }
        }
        return undefined;
    }
} 