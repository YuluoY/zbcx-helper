import * as path from 'path';

export interface ComponentDoc {
    name: string;
    description: string;
    filePath?: string;
    props: {
        name: string;
        type: string;
        description: string;
        required?: boolean;
        default?: string;
        values?: string[];
    }[];
    events: {
        name: string;
        description: string;
        params?: string;
    }[];
    slots: {
        name: string;
        description: string;
        scope?: string;
    }[];
    demos: {
        title: string;
        description: string;
        code: string;
    }[];
}

export class MarkdownParser {
    constructor(private workspaceRoot: string) {}

    async parse(content: string): Promise<ComponentDoc> {
        const lines = content.split('\n');
        const doc: ComponentDoc = {
            name: '',
            description: '',
            props: [],
            events: [],
            slots: [],
            demos: []
        };

        let currentSection = '';
        let tableHeaders: string[] = [];
        let demoContent = '';
        let demoTitle = '';
        let demoDescription = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            // 解析组件名称和描述
            if (line.startsWith('# ')) {
                doc.name = line.substring(2).trim();
                let descriptionLines = [];
                i++;
                while (i < lines.length && !lines[i].trim().startsWith('#')) {
                    if (lines[i].trim()) {
                        descriptionLines.push(lines[i].trim());
                    }
                    i++;
                }
                doc.description = descriptionLines.join('\n');
                i--;
                continue;
            }

            // 解析表格
            if (line.startsWith('## ')) {
                currentSection = line.substring(2).trim().toLowerCase();
                i++;
                if (i < lines.length && lines[i].includes('|')) {
                    tableHeaders = lines[i].split('|')
                        .map(header => header.trim())
                        .filter(header => header);
                }
                continue;
            }

            // 解析表格内容
            if (line.includes('|') && currentSection) {
                if (line.includes('--')) continue;
                
                const cells = line.split('|')
                    .map(cell => cell.trim())
                    .filter(cell => cell);

                if (cells.length === tableHeaders.length) {
                    switch (currentSection) {
                        case '属性':
                            doc.props.push(this.parseProps(cells));
                            break;
                        case '事件':
                            doc.events.push(this.parseEvents(cells));
                            break;
                        case '插槽':
                            doc.slots.push(this.parseSlots(cells));
                            break;
                    }
                }
                continue;
            }

            // 解析示例代码
            if (line.startsWith('### ')) {
                if (demoContent) {
                    doc.demos.push({
                        title: demoTitle,
                        description: demoDescription,
                        code: demoContent.trim()
                    });
                }
                demoTitle = line.substring(3).trim();
                demoDescription = '';
                demoContent = '';
                continue;
            }

            if (line.startsWith('```vue')) {
                i++;
                while (i < lines.length && !lines[i].trim().startsWith('```')) {
                    demoContent += lines[i] + '\n';
                    i++;
                }
                continue;
            }

            if (demoTitle && !line.startsWith('```') && line) {
                demoDescription += line + '\n';
            }
        }

        // 添加最后一个示例
        if (demoContent) {
            doc.demos.push({
                title: demoTitle,
                description: demoDescription.trim(),
                code: demoContent.trim()
            });
        }

        return doc;
    }

    private parseProps(cells: string[]): ComponentDoc['props'][0] {
        const [name, description, type, values, defaultValue] = cells;
        return {
            name: name.replace(/^\*\*(.*)\*\*$/, '$1'),
            description,
            type,
            required: name.startsWith('**'),
            values: values ? values.split(',').map(v => v.trim()) : undefined,
            default: defaultValue || undefined
        };
    }

    private parseEvents(cells: string[]): ComponentDoc['events'][0] {
        const [name, description, params] = cells;
        return {
            name,
            description,
            params: params || undefined
        };
    }

    private parseSlots(cells: string[]): ComponentDoc['slots'][0] {
        const [name, description, scope] = cells;
        return {
            name,
            description,
            scope: scope || undefined
        };
    }
} 