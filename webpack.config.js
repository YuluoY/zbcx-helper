//@ts-check

'use strict';

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

// 生成组件映射文件
function generateComponentMap(sourceDir) {
  const componentMap = {};
  
  // 将大写驼峰转换为小写连字符形式
  function camelToKebab(str) {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const readmePath = path.join(fullPath, 'README.md');
        if (fs.existsSync(readmePath)) {
          // 从路径中提取组件信息
          const relativePath = path.relative(sourceDir, fullPath);
          const pathParts = relativePath.split(path.sep);
          
          if (pathParts.length >= 3) {
            const [category, type, name] = pathParts.slice(-3);
            const componentName = camelToKebab(name);
            componentMap[componentName] = {
              category,
              type,
              name,
              path: path.join(relativePath, 'README.md').replace(/\\/g, '/')
            };
          }
        }
        processDirectory(fullPath);
      }
    });
  }

  processDirectory(sourceDir);
  return componentMap;
}

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/documents',
          to: 'documents',
          globOptions: {
            ignore: ['**/*.ts', '**/*.js', '**/tsconfig.json'],
          }
        }
      ]
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('GenerateComponentMap', () => {
          const sourceDir = path.resolve(__dirname, 'src/documents');
          const componentMap = generateComponentMap(sourceDir);
          const targetPath = path.resolve(__dirname, 'dist/documents/component-map.json');
          fs.writeFileSync(targetPath, JSON.stringify(componentMap, null, 2));
        });
      }
    }
  ]
}; 