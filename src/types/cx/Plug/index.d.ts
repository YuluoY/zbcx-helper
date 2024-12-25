declare namespace cx {
  /**
   * Plug 插件辅助类提供了一系列用于处理文档、目录和文件操作的静态工具方法
   */
  namespace plug {
    /**
     * 删除文档
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docDel({
     *   context: contextObj,
     *   att: {
     *     id: 'doc123'
     *   }
     * });
     * ```
     */
    function docDel(params: {
      context: any;
      att: {
        id: string;
      };
    }): void;

    /**
     * 下载文档
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docDownload({
     *   att: {
     *     id: 'doc123'
     *   }
     * });
     * ```
     */
    function docDownload(params: {
      att: {
        id: string;
      };
    }): void;

    /**
     * 恢复文档
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docUndel({
     *   context: contextObj,
     *   att: {
     *     id: 'doc123'
     *   }
     * });
     * ```
     */
    function docUndel(params: {
      context: any;
      att: {
        id: string;
      };
    }): void;

    /**
     * 修改文档信息
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docUpd({
     *   att: {
     *     title: '新文档名称',
     *     filename: 'newfile.doc'
     *   }
     * });
     * ```
     */
    function docUpd(params: {
      att: {
        title: string;
        filename: string;
      };
    }): void;

    /**
     * 增加文件目录
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.dirAdd({
     *   context: treeComponent,  // cx-tree组件实例
     *   curNode: selectedNode    // 当前选中的树节点
     * });
     * ```
     */
    function dirAdd(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 删除文件目录
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.dirDel({
     *   context: treeComponent,  // cx-tree组件实例
     *   curNode: selectedNode    // 当前选中的树节点
     * });
     * ```
     */
    function dirDel(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 修改文件目录
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.dirUpd({
     *   context: treeComponent,  // cx-tree组件实例
     *   curNode: selectedNode    // 当前选中的��节点
     * });
     * ```
     */
    function dirUpd(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 增加文档目录
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docdirAdd({
     *   context: treeComponent,  // cx-tree组件实例
     *   curNode: selectedNode    // 当前选中的树节点
     * });
     * ```
     */
    function docdirAdd(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 删除文档目录
     * @param params 参数对象
     */
    function docdirDel(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 修改文档目录
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.docdirUpd({
     *   context: treeComponent,  // cx-tree组件实例
     *   curNode: selectedNode    // 当前选中的树节点
     * });
     * ```
     */
    function docdirUpd(params: {
      context: any;
      curNode: any;
    }): void;

    /**
     * 删除文件
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.fileDel({
     *   context: contextObj,
     *   att: {
     *     filename: 'example.txt'
     *   }
     * });
     * ```
     */
    function fileDel(params: {
      context: any;
      att: {
        filename: string;
      };
    }): void;

    /**
     * 下载文件
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.fileDownload({
     *   att: {
     *     id: 'file123'
     *   }
     * });
     * ```
     */
    function fileDownload(params: {
      att: {
        id: string;
      };
    }): void;

    /**
     * 修改文件信息
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.fileUpd({
     *   att: {
     *     // 文件属性
     *   }
     * });
     * ```
     */
    function fileUpd(params: {
      att: Record<string, any>;
    }): void;

    /**
     * 删除标签属性
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.tabAttDel({
     *   context: dataManInstance,
     *   att: currentRow
     * });
     * ```
     */
    function tabAttDel(params: {
      context: any;
      att: any;
    }): void;

    /**
     * 更新标签属性
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.tabAttUpd({
     *   context: dataManInstance,
     *   att: currentRow
     * });
     * ```
     */
    function tabAttUpd(params: {
      context: any;
      att: any;
    }): void;

    /**
     * 查看标签属性
     * @param params 参数对象
     * @example
     * ```ts
     * cx.plug.tabAttView({
     *   context: dataManInstance,
     *   att: currentRow
     * });
     * ```
     */
    function tabAttView(params: {
      context: any;
      att: any;
    }): void;

    /**
     * 上传服务
     * @example
     * ```ts
     * cx.plug.uploadSvr();
     * ```
     */
    function uploadSvr(): void;

    /**
     * 更新上传
     * @example
     * ```ts
     * cx.plug.uploadUpdate();
     * ```
     */
    function uploadUpdate(): void;
  }
} 