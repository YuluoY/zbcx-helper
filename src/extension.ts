/**
 * 智博创享代码补全插件的主入口文件
 * @module extension
 */

import * as vscode from 'vscode';
import { ConfigItem, FunctionConfigItem, ModuleConfigItem, BaseConfigItem } from './types';
import { indexConfig } from './modules/cx/index';
import * as path from 'path';
import * as fs from 'fs';
import { getModulesByLanguage, getModuleByTrigger } from './moduleConfigs';
import { getComponentCompletionItems, getComponentDocumentation } from './modules/cxcoms';

let cxData: ModuleConfigItem = indexConfig;

function loadConfig(configPath: string): ConfigItem | undefined {
	try {
		// 尝试加载配置文件
		let fullPath = path.join(__dirname, 'modules', configPath);
		let normalizedPath = path.normalize(fullPath);
		
		// 尝试加载 .js 文件 (编译后的文件)
		if (!path.extname(normalizedPath)) {
			normalizedPath += '.js';
		}

		console.log('Loading config from:', normalizedPath);
		const config = require(normalizedPath);
		
		if (!config) {
			console.log('Config is empty');
			return undefined;
		}

		// 查找以 Config 结尾的导出
		const configKey = Object.keys(config).find(key => key.endsWith('Config'));
		if (!configKey) {
			console.log('No config export found in:', configPath);
			console.log('Available exports:', Object.keys(config));
			return undefined;
		}
		console.log('Config key:', configKey);
		console.log('Config content:', JSON.stringify(config[configKey], null, 2));
		return config[configKey];
	} catch (error) {
		console.error('加载配置文件失败:', configPath);
		console.error('错误详情:', error);
		return undefined;
	}
}

function resolveConfig(currentData: ConfigItem, parts: string[]): ConfigItem | undefined {
	console.log('Resolving config for parts:', parts);
	console.log('Current data:', JSON.stringify(currentData, null, 2));
	
	let result = currentData;
	
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i].trim();
		console.log('Processing part:', part);
		
		if ('children' in result && result.children[part]) {
			const child = result.children[part];
			console.log('Found child:', child);
			
			if (typeof child === 'string') {
				console.log('String child is not supported anymore');
				return undefined;
			} else {
				result = child;
				console.log('Using config:', JSON.stringify(child, null, 2));
			}
		} else {
			console.log('Module not found:', part);
			if ('children' in result) {
				console.log('Available children:', Object.keys(result.children));
			}
			return undefined;
		}
	}
	return result;
}

// 注册 cx 触发的代码补全
const cxTriggerProvider = vscode.languages.registerCompletionItemProvider(
	[
		{ scheme: 'file', language: 'javascript' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.slice(0, position.character);
			
			// 当输入 'c' 时触发
			if (linePrefix.endsWith('c')) {
				const cxItem = new vscode.CompletionItem('cx');
				cxItem.kind = vscode.CompletionItemKind.Module;
				cxItem.detail = '智博创享基础模块';
				cxItem.sortText = '0'; // 添加最高优先级
				cxItem.preselect = true; // 设置为预选项
				return [cxItem];
			}
			return undefined;
		}
	},
	'c' // 触发字符
);

// 注册 cx. 后的代码补全
const provider = vscode.languages.registerCompletionItemProvider(
	[
		{ scheme: 'file', language: 'javascript' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.slice(0, position.character);
			
			// 检查是否在输入 cx.
			if (!linePrefix.endsWith('cx.')) {
				return undefined;
			}

			console.log('提供cx.补全');
			return getCompletionItems(cxData);
		}
	},
	'.' // 触发字符
);

// 注册子模块代码补全
const subModuleProvider = vscode.languages.registerCompletionItemProvider(
	[
		{ scheme: 'file', language: 'javascript' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.slice(0, position.character);
			
			// 检查是否在输入子模块
			if (!linePrefix.includes('cx.')) {
				return undefined;
			}

			const parts = linePrefix.split('cx.')[1].split('.');
			if (parts.length < 2) {
				return undefined;
			}

			console.log('提供子模块补全, parts:', parts);
			const currentData = resolveConfig(cxData, parts.slice(0, -1));
			if (!currentData) {
				return undefined;
			}

			if ('children' in currentData) {
				const items = getCompletionItems(currentData);
				console.log('生成的补全项:', items.map(item => ({
					label: item.label,
					kind: item.kind,
					detail: item.detail
				})));
				return items;
			}
			return undefined;
		}
	},
	'.' // 触发字符
);

// 注册悬停提示
const hoverProvider = vscode.languages.registerHoverProvider(
	[
		{ scheme: 'file', language: 'javascript' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideHover(document: vscode.TextDocument, position: vscode.Position) {
			const wordRange = document.getWordRangeAtPosition(position);
			if (!wordRange) {
				return undefined;
			}

			const word = document.getText(wordRange);
			const line = document.lineAt(position).text;

			// 检查是否在 cx 上下文中
			if (!line.includes('cx.')) {
				return undefined;
			}

			const parts = line.split('cx.')[1].split('.');
			const targetWord = parts[parts.length - 1].split('(')[0].trim();
			
			if (word !== targetWord) {
				return undefined;
			}

			console.log('提供悬停提示, word:', word, 'parts:', parts);
			const currentData = resolveConfig(cxData, parts.slice(0, -1));
			if (!currentData) {
				return undefined;
			}

			if ('children' in currentData && currentData.children[targetWord]) {
				const item = currentData.children[targetWord];
				if (typeof item === 'string') {
					const configPath = path.join('modules/cx', item);
					console.log('加载悬停项配置:', configPath);
					const config = loadConfig(configPath);
					if (!config) {
						console.log('加载悬停项配置失败');
						return undefined;
					}
					console.log('加载的悬停项配置:', JSON.stringify(config, null, 2));
					return createHover(config);
				}
				console.log('使用内联悬停项配置:', JSON.stringify(item, null, 2));
				return createHover(item);
			}

			return undefined;
		}
	}
);

// 注册 HTML/Vue 标签补全
const tagCompletionProvider = vscode.languages.registerCompletionItemProvider(
	[
		{ scheme: 'file', language: 'html' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.slice(0, position.character);
			const language = document.languageId;
			
			// 检查是否在 template 标签内
			if (language === 'vue') {
				const text = document.getText();
				const offset = document.offsetAt(position);
				const beforeText = text.substring(0, offset);
				
				// 更精确地检查是否在 template 标签内
				const templateTags = beforeText.match(/<template.*?>/g);
				const closingTemplateTags = beforeText.match(/<\/template>/g);
				
				if (!templateTags || (closingTemplateTags && templateTags.length <= closingTemplateTags.length)) {
					return undefined;
				}
			}
			
			// 检查当前语言是否支持组件模块
			const supportedModules = getModulesByLanguage(language);
			const cxcomsModule = supportedModules.find(m => m.name === 'cxcoms');
			if (!cxcomsModule) {
				return undefined;
			}
			
			// 检查是否匹配触发字符
			const currentLine = linePrefix.trim();
			if (!currentLine.endsWith('<') && !currentLine.includes('cx-') && !currentLine.includes('<cx')) {
				return undefined;
			}

			// 获取所有组件的补全项
			const componentItems = getComponentCompletionItems().map(item => {
				const completionItem = new vscode.CompletionItem(item.label);
				completionItem.kind = vscode.CompletionItemKind.Snippet;
				completionItem.detail = item.detail;
				completionItem.documentation = new vscode.MarkdownString(item.documentation);
				completionItem.insertText = new vscode.SnippetString(item.insertText);
				completionItem.preselect = true;
				completionItem.sortText = 'a';  // 确保排在前面
				return completionItem;
			});
			
			return componentItems;
		}
	},
	'<', 'c', 'x', '-'  // 触发字符
);

// 注册组件标签悬浮提示
const tagHoverProvider = vscode.languages.registerHoverProvider(
	[
		{ scheme: 'file', language: 'html' },
		{ scheme: 'file', language: 'vue' }
	],
	{
		provideHover(document: vscode.TextDocument, position: vscode.Position) {
			const wordRange = document.getWordRangeAtPosition(position, /cx-[a-zA-Z-]+/);
			if (!wordRange) {
				return undefined;
			}

			const word = document.getText(wordRange);
			const documentation = getComponentDocumentation(word);
			if (documentation) {
				const markdown = new vscode.MarkdownString();
				markdown.appendMarkdown(documentation);
				return new vscode.Hover(markdown);
			}

			return undefined;
		}
	}
);

function getCompletionItems(data: ConfigItem): vscode.CompletionItem[] {
	const items: vscode.CompletionItem[] = [];

	if ('children' in data) {
		for (const [key, value] of Object.entries(data.children)) {
			const item = new vscode.CompletionItem(key);
			
			if (typeof value === 'string') {
				console.log('String child is not supported anymore');
				continue;
			} else if (typeof value === 'object' && value !== null) {
				item.kind = getCompletionItemKind(value.kind);
				item.detail = value.detail;
				if ('documentation' in value && typeof value.documentation === 'object') {
					item.documentation = createMarkdownString(value);
				}
				
				// 按类型设置优先级：Variable > Module > Function/Method
				if (value.kind === 'Variable') {
					item.sortText = '!' + key; // Variable最高优先级
				} else if (value.kind === 'Module') {
					item.sortText = '!!' + key; // Module次高优先级
				} else if (value.kind === 'Function' || value.kind === 'Method') {
					item.sortText = '!!!' + key; // Function和Method第三优先级
				} else {
					item.sortText = '!!!!' + key; // 其他最低优先级
				}
				
				// 为常用项设置预选
				if (
					key === 'cx' || 
					key === 'svr' || 
					key.startsWith('svr.') || 
					key.includes('query') || 
					key.includes('add') || 
					key.includes('update') ||
					key.includes('delete') ||
					key.includes('get')
				) {
					item.preselect = true;
				}
			}
			
			items.push(item);
		}
	}

	return items;
}

function createMarkdownString(item: ConfigItem): vscode.MarkdownString {
	const markdown = new vscode.MarkdownString();
	
	if ('documentation' in item && item.documentation) {
		if (typeof item.documentation === 'string') {
			markdown.appendMarkdown(item.documentation);
		} else if (item.documentation.value) {
			markdown.appendMarkdown(item.documentation.value);
		}
	}

	if ('parameters' in item && item.parameters) {
		markdown.appendMarkdown('\n\n**参数:**\n');
		for (const param of item.parameters) {
			if (param.label && param.type && param.detail) {
				markdown.appendMarkdown(`- \`${param.label}\` *(${param.type})*: ${param.detail}${param.required ? ' (必填)' : ''}\n`);
			}
		}
	}

	if ('returnType' in item && item.returnType) {
		const returnType = item.returnType;
		if (returnType.type) {
			markdown.appendMarkdown(`\n\n**返回值:** *(${returnType.type})*`);
			if (returnType.documentation) {
				markdown.appendMarkdown(`\n${returnType.documentation}`);
			}
		}
	}

	return markdown;
}

function createHover(item: ConfigItem): vscode.Hover {
	return new vscode.Hover(createMarkdownString(item));
}

function getCompletionItemKind(kind: string): vscode.CompletionItemKind {
	switch (kind) {
		case 'Module':
			return vscode.CompletionItemKind.Module;
		case 'Function':
			return vscode.CompletionItemKind.Function;
		case 'Variable':
			return vscode.CompletionItemKind.Variable;
		case 'Method':
			return vscode.CompletionItemKind.Method;
		case 'Property':
			return vscode.CompletionItemKind.Property;
		default:
			return vscode.CompletionItemKind.Text;
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('zbcx-helper 已激活');
	console.log('当前工作目录:', __dirname);

	// 注册zbcx命令
	let zbcxCommand = vscode.commands.registerCommand('zbcx-helper.zbcx', () => {
		vscode.window.showInformationMessage('欢迎使用zbcx-helper v1.0.0');
	});

	context.subscriptions.push(
		zbcxCommand,
		cxTriggerProvider, 
		provider, 
		subModuleProvider, 
		hoverProvider,
		tagCompletionProvider,
		tagHoverProvider
	);
}

export function deactivate() {}