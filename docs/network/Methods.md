# Methods

[查看原文](https://visjs.github.io/vis-network/docs/network/#methods)

## 全局方法

### destroy()

Returns: none  
 用途: 从 DOM 中删除网络，并删除所有 Hammer 绑定和引用。

### setData({`nodes: vis DataSet/Array,edges: vis DataSet/Array`})

Returns: none  
 用途: 覆盖 network 中的 data。

### on(String event name, Function callback)

Returns: none  
 用途: 设置事件监听器

### off(String event name, Function callback)

Returns: none  
 用途: 删除事件监听器

### once(String event name, Function callback)

Returns: none  
 用途: 仅将事件侦听器设置一次。

## 与画布相关的方法

### canvasToDOM({x: Number,y: Number})

Returns: Object  
 用途: 此函数将画布坐标转换为 DOM 上的坐标。输入和输出的形式为 {x:Number,y:Number}。DOM 值相对于 network 容器。

### DOMtoCanvas({x: Number,y: Number})

Returns: Object  
 用途: 此函数将 DOM 坐标转换为画布上的坐标。输入和输出的形式为 {x:Number,y:Number}。DOM 值相对于 network 容器。

### redraw()

Returns: none  
 用途: 重画 network

### setSize(String width,String height)

Returns: none  
 用途: 设置画布的大小。这是在调整窗口大小时自动完成的。

## Clustering

暂未整理

## 布局相关方法

### getSeed()

Returns: Number  
 用途: 获取当前 network 布局(`layout.randomSeed`)

## Manipulation

暂未整理

## 获取有关节点和边的信息的方法。

### getPositions([Array of nodeIds])

Returns: Returns: Object  
 用途: 返回以提供的 nodeId 为对象的节点在画布空间中的 xy 位置：

```js
{
 nodeId1：{x：xValue，y：yValue}，
 nodeId2：{x：xValue，y：yValue}，
 ...
}
```

### moveNode(nodeId, Number x, Number y)

Returns: none  
 用途: 移动节点, 提供的 x 和 y 位置必须在画布空间中

### getBoundingBox(String nodeId)

Returns: Object  
 用途: 以以下格式返回包含标签的节点的边界框:

```js
{
 top: Number,
 left: Number,
 right: Number,
 bottom: Number
}
```

### getConnectedNodes(String nodeId or edgeId, [String direction])

Returns: Array  
 用途: 返回直接连接到此节点或边缘的所有节点的 nodeIds 数组。
对于节点 ID，返回一个数组，其中包含所连接节点的 ID。
如果将可选参数 direction 设置为字符串'from'，则仅返回父节点。
如果 direction 设置为'to'，则仅返回子节点。
任何其他值或 undefined 返回父节点和子节点。

对于边 ID，返回一个数组：[fromId, toId]。边将忽略参数方向。

### getConnectedEdges(String nodeId)

Returns: Array  
 用途: 返回连接到此节点的边的 edgeIds 数组。

## 控制何时应运行模拟的物理方法。

### startSimulation()

Returns: none  
 用途: 开始物理模拟动画

### stopSimulation()

Returns: none  
 用途: 开停止物理模拟动画

### stabilize([iterations])

Returns: none  
 用途:

## 节点和边的选择方法。

### getSelection()

Returns: Object  
 用途: 返回具有选定节点和边 ID 的对象，如下所示：

```js
{
 nodes: [Array of selected nodeIds],
 edges: [Array of selected edgeIds]
}
```

### getSelectedNodes()

Returns: Array  
 用途: 返回选定节点 ID 的数组，如下所示： `[nodeId1, nodeId2, ..]`。

### getSelectedEdges()

Returns: Array  
 用途: 返回选定的边 ID 数组，如下所示：`[edgeId1, edgeId2, ..]`。

### getNodeAt({x: xPosition DOM, y: yPosition DOM})

Returns: String  
 用途: 返回一个 nodeId 或 undefined。DOM 位置应以距画布左上角的像素为单位。

### getEdgeAt({x: xPosition DOM, y: yPosition DOM})

Returns: String
用途: 返回 edgeId 或 undefined。DOM 位置应以距画布左上角的像素为单位。

### selectNodes(Array with nodeIds,[Boolean highlightEdges])

Returns: none  
 用途: 选择与输入数组中的 id 对应的节点。如果 highlightEdges 为 true 或 undefined，则还将选择相邻的边缘。此方法在选择自己的对象之前先取消选择所有其他对象。不触发事件。

### selectEdges(Array with edgeIds)

Returns: none  
 用途: 选择与输入数组中的 id 对应的边。此方法在选择自己的对象之前先取消选择所有其他对象。不触发事件。

### setSelection( Object selection, [Object options])

Returns: none  
 用途: 设置选择，该选择必须是这样的对象：

```js

{
 nodes: [Array of nodeIds],
 edges: [Array of edgeIds]
}
```

你也可以传递 nodes 或 edges 在 selection 对象。可用的选项有：

```js
{
  unselectAll: Boolean,
  highlightEdges: Boolean
}
```

### unselectAll()

Returns: none  
 用途: 取消选择所有对象。不触发事件。

## 控制视口的方法

### getScale()

Returns: Number  
 用途: 返回网络的当前比例。1.0 相当于 100％，0 无限缩小。

### fit([Object options])

Returns: none  
 用途: 缩小以使所有节点都适合画布。您可以提供自定义选项：

```js
{
 nodes:[Array of nodeIds],
 animation: { // -------------------> can be a boolean too!
   duration: Number
   easingFunction: String
 }
}
```

### focus( String nodeId, [Object options])

Returns: none  
 用途: 专注于节点, 这意味着视图将锁定在该节点上，如果它正在移动，则视图也会相应地移动。如果用户拖动视图，则焦点将断开。您可以提供选项以自定义效果：

```js
{
 scale: Number,
 offset: {x:Number, y:Number}
 locked: boolean
 animation: { // -------------------> can be a boolean too!
   duration: Number
   easingFunction: String
 }
}
```

### getViewPosition()

Returns: none  
 用途: 以以下形式返回视图的当前中心焦点： `{ x: {Number}, y: {Number} }`

### moveTo(Object options)

Returns: none  
 用途: 移动, easingFunction 可选: `linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint`

```js
{
 position: {x:Number, y:Number},
 scale: Number,
 offset: {x:Number, y:Number}
 animation: { // -------------------> can be a boolean too!
   duration: Number
   easingFunction: String
 }
}
```

### releaseNode()

Returns: none  
 用途: 释放聚焦的节点。

## 与配置器模块一起使用的方法。

### getOptionsFromConfigurator()

Returns: Object
用途: 如果使用配置器，则可以调用此方法以获取一个 options 对象，该对象包含与用户与配置器交互所导致的默认选项的所有差异。
