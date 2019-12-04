# Options

```js
var options = {
  autoResize: true,
  height: '100%',
  width: '100%'
  locale: 'en',
  locales: locales,
  clickToUse: false,
  configure: {...},    // 具体请查看 configure module.
  edges: {...},        // 具体请查看 edges module.
  nodes: {...},        // 具体请查看 nodes module.
  groups: {...},       // 具体请查看 groups module.
  layout: {...},       // 具体请查看 layout module.
  interaction: {...},  // 具体请查看 interaction module.
  manipulation: {...}, // 具体请查看 manipulation module.
  physics: {...},      // 具体请查看 physics module.
}

network.setOptions(options);
```

各个选项说明如下。涉及模块的模块在相应的模块中进行了说明。

## autoResize

类型: Boolean  
 默认: true  
 描述: 如果为 true，则 network 将自动检测何时调整其容器的大小，并相应地重新绘制自身。如果为 false，则在使用功能 `redraw()`和 `setSize()`调整其容器的大小之后，可以强制网络重新绘制。

## height

类型: String  
 默认: '100%'  
 描述: 画布的宽度。可以百分比或像素（'400px'）为单位。

## width

类型: String  
 默认: '100%'  
 描述: 画布的高度。可以百分比或像素（'400px'）为单位。

## locale

类型: String  
 默认: 'en'  
 描述: 选择语言环境。默认情况下，语言为英语。

## locales

类型: Object  
 默认: defaultLocales  
 描述: 语言环境对象。默认情况下 'en'， 'de'， 'es'， 'it'， 'nl' 'pt-br' 'ru' 的支持.  
配置:
语言环境对象具有以下格式：

```js
var locales = {
  en: {
    edit: '编辑',
    del: '删除所选内容',
    back: '返回',
    addNode: '添加节点',
    addEdge: '添加边缘',
    editNode: '编辑节点',
    editEdge: '编辑边缘',
    addDescription: '单击空白处以放置新节点',
    edgeDescription: '单击一个节点并将其边缘拖动到另一个节点以将其连接。',
    editEdgeDescription: '单击控制点并将其拖动到一个节点上以与其连接。',
    createEdgeError: '无法将边缘链接到集群。',
    deleteClusterError: '无法删除集群。',
    editClusterError: '无法编辑群集。'
  }
};
```
如果要定义自己的语言环境，则可以更改键（此处为“ en”）并更改所有字符串。然后，您可以在语言环境选项中使用新 key。

## clickToUse

类型: Boolean  
 默认: false  
描述: 选择语言环境。默认情况下，语言为英语。

## configure

类型: Object  
 默认: Object  
描述: 具体设置请查看 configure module。

## edges

类型: Object  
 默认: Object   
 描述: 具体设置请查看 edges module。

## nodes

类型: Object  
 默认: Object  
 描述:具体设置请查看 nodes module。

## groups

类型: Object  
 默认: Object  
 描述: 具体设置请查看 groups module。

## layout

类型: Object  
 默认: Object  
描述: 具体设置请查看 layout module。

## interaction

类型: Object  
 默认: Object  
 描述: 具体设置请查看 interaction module。

## manipulation

类型: Object  
 默认: Object  
 描述: 具体设置请查看 manipulation module。

## physics

类型: Object  
 默认: Object  
 描述: 具体设置请查看 physics module。
