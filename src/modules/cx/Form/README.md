# Form 类

Form类提供了表单相关的功能，包括表单配置的加载、解析和处理等。

## 方法

所有方法都是静态方法，可以直接通过类名调用。

### attEdit(formKey, params, overDef)
表单模式属性编辑/浏览，内置 FormEdit 插件

### attEditNoCfg(params, overDef)
表单模式属性输入表单模式属性编辑、浏览（无定制表单，采用默认表单）

### attInput(formKey, params, overDef)
表单模式属性输入，内置 FormInput 插件

### attInputNoCfg(params, overDef)
表单模式属性输入（无定制表单，采用默认表单）

### defFormCfg(major, minor, cfg)
获取默认表单配置

### getCfgFlds(flds, tabCfg)
获取配置字段

### getFldVals(flds)
获取字段值对象属性

### loadCfg(formKey)
加载配置表单

### makeCfgOpt(flds)
生成字段的配置和选项

### makeFormForEdit(formKey, params)
构造编辑表单

### makeFormForEditNoCfg(params)
构造编辑表单（无定制表单）

### makeFormForInput(formKey, params)
构造输入表单

### makeFormForInputNoCfg(params)
构造输入表单（无定制表单）

### makeHabitCfgFlds(params)
查询实体表的喜好配置，并构造配置字段

### makeHabitNo(params)
构造喜好no标识

### makeParamsForPlug(form, params, overDef, btn)
构造Form插件的运行参数

### parseCfg(cfg, params)
解析表单配置，生成标准化的表单对象 