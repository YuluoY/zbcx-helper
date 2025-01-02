import * as vscode from 'vscode';
import { ComponentDoc } from '../../types/tag-doc';
import { 
    isNumber, 
    isBoolean, 
    isArray, 
    isObject, 
    isString,
    isNil,
    trim,
    toLower,
    get,
    find,
    endsWith,
    startsWith,
    includes
} from 'lodash';

export class DiagnosticProvider {
    private docs: Map<string, ComponentDoc> = new Map();

    addDoc(name: string, doc: ComponentDoc) {
        this.docs.set(name, doc);
    }

    provideDiagnostics(document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];
        const text = document.getText();

        // 遍历所有组件标签
        const componentRegex = /<cx-([a-z-]+)([^>]*)>/g;
        let match;

        while ((match = componentRegex.exec(text)) !== null) {
            const componentName = match[1];
            const attributes = match[2];
            const doc = this.docs.get(componentName);

            if (doc) {
                // 检查属性（同时支持带:和不带:的属性）
                const propRegex = /(?::)?([\w-]+)="([^"]*)"/g;
                let propMatch;

                while ((propMatch = propRegex.exec(attributes)) !== null) {
                    const isBound = startsWith(propMatch[0], ':');
                    const propName = propMatch[1];
                    const propValue = propMatch[2];
                    const prop = find(doc.props, { name: propName });

                    if (prop) {
                        // 计算属性的位置（包括属性名和值）
                        const attrStartPos = document.positionAt(match.index + propMatch.index);
                        const attrEndPos = document.positionAt(match.index + propMatch.index + propMatch[0].length);
                        const attrRange = new vscode.Range(attrStartPos, attrEndPos);

                        // 验证属性值类型
                        const typeError = this.validatePropType(prop.type, propValue, isBound);
                        if (typeError) {
                            diagnostics.push(new vscode.Diagnostic(
                                attrRange,
                                typeError,
                                vscode.DiagnosticSeverity.Error
                            ));
                        }

                        // 验证可选值
                        if (isArray(prop.values) && prop.values.length > 0) {
                            const type = isArray(prop.type) ? get(prop.type, [0]) : prop.type;
                            const typeStr = toLower(type);
                            
                            // 处理字符串类型的值（移除引号）
                            let normalizedValue = propValue;
                            if (isBound && typeStr === 'string' && /^['"].*['"]$/.test(propValue)) {
                                normalizedValue = propValue.slice(1, -1);
                            }

                            if (!includes(prop.values, normalizedValue)) {
                                diagnostics.push(new vscode.Diagnostic(
                                    attrRange,
                                    `属性 "${propName}" 的值必须是: ${prop.values.join(' / ')}`,
                                    vscode.DiagnosticSeverity.Error
                                ));
                            }
                        }
                    }
                }
            }
        }

        return diagnostics;
    }

    private validatePropType(type: string | string[], value: string, isBound: boolean): string | null {
        // 如果类型是数组，尝试每个类型
        if (isArray(type)) {
            for (const t of type) {
                const error = this.validateSingleType(t, value, isBound);
                if (!error) {
                    return null;
                }
            }
            return `值必须是以下类型之一: ${type.join(' / ')}`;
        }

        return this.validateSingleType(type, value, isBound);
    }

    private validateSingleType(type: string, value: string, isBound: boolean): string | null {
        // 移除类型中的反引号
        type = type.replace(/`/g, '');
        value = trim(value);
        const typeStr = toLower(type);

        // 对于函数类型，必须使用绑定形式（带:前缀）
        if (typeStr === 'function') {
            if (!isBound) {
                return '函数类型的属性必须使用 v-bind 或 : 前缀';
            }
            // 验证是否是有效的标识符或函数表达式
            const validIdentifier = /^[a-zA-Z_$][\w$]*$/;
            const validFunctionExpr = /^(\([^)]*\)\s*=>|function\s*\([^)]*\))/;
            
            if (validIdentifier.test(value) || validFunctionExpr.test(value)) {
                return null;
            }
            return '值必须是函数名或函数表达式';
        }

        // 如果不是绑定属性（没有:前缀）
        if (!isBound) {
            // 对于非绑定属性，只有字符串类型可以直接赋值
            if (typeStr !== 'string') {
                return `${type} 类型的属性必须使用 v-bind 或 : 前缀`;
            }
            return null;
        }

        try {
            // 对于字符串类型，直接验证是否是有效的字符串字面量
            if (typeStr === 'string') {
                if (/^['"].*['"]$/.test(value)) {
                    return null; // 有效的字符串字面量
                }
                return '值必须是字符串类型（需要用引号包裹）';
            }

            // 尝试解析 JavaScript 表达式
            const parsedValue = new Function(`return ${value}`)();

            // 如果值是 null 或 undefined，直接返回错误
            if (isNil(parsedValue)) {
                return `值不能为 null 或 undefined`;
            }

            switch (typeStr) {
                case 'number':
                    if (!isNumber(parsedValue)) {
                        return `值必须是数字类型`;
                    }
                    break;

                case 'boolean':
                    if (!isBoolean(parsedValue)) {
                        return `值必须是布尔类型`;
                    }
                    break;

                case 'array':
                    if (!isArray(parsedValue)) {
                        return `值必须是数组类型`;
                    }
                    break;

                case 'object':
                    if (!isObject(parsedValue) || isArray(parsedValue)) {
                        return `值必须是对象类型`;
                    }
                    break;

                // 处理数组类型
                default:
                    if (endsWith(type, '[]')) {
                        if (!isArray(parsedValue)) {
                            return `值必须是数组类型`;
                        }
                        const itemType = type.slice(0, -2);
                        for (const item of parsedValue) {
                            const itemError = this.validateSingleType(itemType, JSON.stringify(item), true);
                            if (itemError) {
                                return `数组元素${itemError}`;
                            }
                        }
                    }
                    // 处理对象类型
                    else if (startsWith(type, '{') && endsWith(type, '}')) {
                        if (!isObject(parsedValue) || isArray(parsedValue)) {
                            return `值必须是对象类型`;
                        }
                        // TODO: 验证对象的具体结构
                    }
            }

            return null;
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            // 如果解析失败但值是一个有效的标识符，也认为是合法的
            if (/^[a-zA-Z_$][\w$]*$/.test(value)) {
                return null;
            }
            return `无法解析属性值: ${errorMessage}`;
        }
    }
} 