import * as vscode from 'vscode';
import { ComponentDoc } from '../types/tag-doc';
import { documents as webComCxDocuments } from './webComCx';

export class DocumentManager {
    private documents: Map<string, ComponentDoc>;

    constructor(extensionUri: vscode.Uri) {
        this.documents = new Map();
        this.loadDocuments();
    }

    private loadDocuments(): void {
        // 加载所有组件文档
        for (const [name, doc] of Object.entries(webComCxDocuments)) {
            // 保留原始实例，不进行类型转换
            this.documents.set(name, doc);
        }
    }

    public getDocuments(): ComponentDoc[] {
        return Array.from(this.documents.values());
    }

    public getDocument(name: string): ComponentDoc | undefined {
        return this.documents.get(name);
    }
}

// 导出所有文档
export const documents: Record<string, ComponentDoc> = webComCxDocuments; 