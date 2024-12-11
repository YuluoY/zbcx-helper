"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "code" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('code.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from code!');
    });
    context.subscriptions.push(disposable);
    // 注册 CompletionItemProvider
    const provider = vscode.languages.registerCompletionItemProvider(['javascript', 'vue'], {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('cx')) {
                return undefined;
            }
            const data = getCxData();
            const items = [];
            for (const key in data.cx.children) {
                const child = data.cx.children[key];
                const item = new vscode.CompletionItem(key, vscode.CompletionItemKind[child.type]);
                item.detail = child.description;
                items.push(item);
            }
            return items;
        }
    }, '.' // 触发补全的字符
    );
    context.subscriptions.push(provider);
    // 注册 HoverProvider
    const hoverProvider = vscode.languages.registerHoverProvider(['javascript', 'vue'], {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position, /cx\.\w+/);
            if (!range) {
                return undefined;
            }
            const word = document.getText(range);
            const parts = word.split('.');
            if (parts.length < 2) {
                return undefined;
            }
            const data = getCxData();
            let current = data.cx;
            for (let i = 1; i < parts.length; i++) {
                current = current.children[parts[i]];
                if (!current) {
                    return undefined;
                }
            }
            const hoverText = new vscode.MarkdownString();
            hoverText.appendCodeblock(`${word}(${current.parameters.map(p => `${p.name}: ${p.type}`).join(', ')}): ${current.returnType}`);
            hoverText.appendMarkdown(`\n\n**功能**: ${current.description}`);
            current.parameters.forEach(param => {
                hoverText.appendMarkdown(`\n- **${param.name}** (${param.type}): ${param.description}`);
            });
            hoverText.appendMarkdown(`\n\n**返回值**: ${current.returnDescription}`);
            return new vscode.Hover(hoverText);
        }
    });
    context.subscriptions.push(hoverProvider);
}
function getCxData() {
    const filePath = path.join(__dirname, '..', 'cxData.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map