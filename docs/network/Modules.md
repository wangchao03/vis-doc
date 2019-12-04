# Modules

## configure

显示配置项, 可在 html 上手动配置 network [查看原文](https://visjs.github.io/vis-network/docs/network/configure.html#)

### 全部配置

```js
// these are all options in full.
var options = {
  configure: {
    enabled: true,
    filter: 'nodes,edges',
    container: undefined,
    showButton: true
  }
};

network.setOptions(options);
```

### enabled

类型: Boolean  
 默认: true  
 描述: 开启或关闭配置界面

### filter

类型: String, Array, Boolean, Function   
 默认: true  
 描述: 如果为 true，则提供所有选项，false 则不显示任何选项。如果提供了字符串，则允许以下各项的任意组合：nodes, edges, layout, interaction, manipulation, physics, selection, renderer。当提供字符串数组时，任何前面提到的字段都会被接受。


 ### container

类型: DOM element  
 默认: undefined  
 描述: 您可以将配置列表放置在另一个HTML容器中，而不是network下方。


 ### showButton

类型: Boolean  
 默认: true  
 描述: 显示配置器底部的“生成选项”按钮。

## edges

处理边的创建和删除，并包含全局边选项和样式。[查看原文](https://visjs.github.io/vis-network/docs/network/edges.html)

### 全部配置

```js
// these are all options in full.
var options = {
  edges: {
    arrows: {
      to: {
        enabled: false,
        imageHeight: undefined,
        imageWidth: undefined,
        scaleFactor: 1,
        src: undefined,
        type: 'arrow'
      },
      middle: {
        enabled: false,
        imageHeight: 32,
        imageWidth: 32,
        scaleFactor: 1,
        src: 'https://visjs.org/images/visjs_logo.png',
        type: 'image'
      },
      from: {
        enabled: false,
        imageHeight: undefined,
        imageWidth: undefined,
        scaleFactor: 1,
        src: undefined,
        type: 'arrow'
      }
    },
    arrowStrikethrough: true,
    chosen: true,
    color: {
      color: '#848484',
      highlight: '#848484',
      hover: '#848484',
      inherit: 'from',
      opacity: 1.0
    },
    dashes: false,
    font: {
      color: '#343434',
      size: 14, // px
      face: 'arial',
      background: 'none',
      strokeWidth: 2, // px
      strokeColor: '#ffffff',
      align: 'horizontal',
      multi: false,
      vadjust: 0,
      bold: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold'
      },
      ital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'italic'
      },
      boldital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold italic'
      },
      mono: {
        color: '#343434',
        size: 15, // px
        face: 'courier new',
        vadjust: 2,
        mod: ''
      }
    },
    hidden: false,
    hoverWidth: 1.5,
    label: undefined,
    labelHighlightBold: true,
    length: undefined,
    physics: true,
    scaling: {
      min: 1,
      max: 15,
      label: {
        enabled: true,
        min: 14,
        max: 30,
        maxVisible: 30,
        drawThreshold: 5
      },
      customScalingFunction: function(min, max, total, value) {
        if (max === min) {
          return 0.5;
        } else {
          var scale = 1 / (max - min);
          return Math.max(0, (value - min) * scale);
        }
      }
    },
    selectionWidth: 1,
    selfReferenceSize: 20,
    shadow: {
      enabled: false,
      color: 'rgba(0,0,0,0.5)',
      size: 10,
      x: 5,
      y: 5
    },
    smooth: {
      enabled: true,
      type: 'dynamic',
      roundness: 0.5
    },
    title: undefined,
    value: undefined,
    width: 1,
    widthConstraint: false
  }
};

network.setOptions(options);
```

### arrows

类型: String or Object  
 默认: undefined  
 描述: 要使用默认设置绘制箭头，可以提供字符串。例如: `arrows:'to,from,middle'`或`'to;from'`，任何带有任何单独符号的组合都可以。如果要控制箭头的大小，可以提供一个对象。

| 名称                  | 类型              | 默认      | 描述                                                                                                             |
| --------------------- | ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| arrows.to             | Object or Boolean | Object    | 设置为 true 时，将在 edge 的“ to”侧绘制一个箭头，指向具有默认设置的“ to”节点。要自定义箭头的大小，请提供一个对象 |
| arrows.to.enabled     | Boolean           | false     | 开启或关闭箭头。此选项是可选的，如果未定义并且设置了 scaleFactor 属性，则启用将设置为 true。                     |
| arrows.to.imageHeight | Number            | undefined | 图像箭头的高度。如果未定义，则使用图像文件的高度。                                                               |
| arrows.to.imageWidth  | Number            | undefined | 图像箭头的宽度。如果未定义，则使用图像文件的宽度。                                                               |
| arrows.to.scaleFactor | Number            | 1         | 比例因子允许您更改箭头的大小。                                                                                   |
| arrows.to.src         | String            | undefined | 图片箭头类型的 URL。                                                                                             |
| arrows.to.type        | String            | arrow     | 箭头的类型。可能的值有：`arrow`，`bar`，`circle`和`image`。                                                      |
| arrows.middle         | Object or Boolean | Object    | 与“to”对象相似，但 edge 中心带有箭头。可以使用的负值来翻转箭头的方向 arrows.middle.scaleFactor。                 |
| arrows.from           | Boolean           | true      | 与 to 对象完全相同，但在 edge 的 from 节点上带有箭头。                                                           |

### arrowStrikethrough

类型: Boolean  
 默认: true  
 描述: 如果为 false，则 edge 在箭头处停止。中间的箭头不受此影响。

### chosen

类型: Object or Boolean  
 默认: true  
 描述: 如果为 true，则选择或悬停在 edge 上将根据默认设置更改其及其 label 的特征。如果为 false，则选择 edge 时不会更改 edge 或其 label。如果提供了对象，则在选择 edge 时可以对 edge 和 label 特性进行更细微的调整。

| 名称         | 类型                | 默认      | 描述                                                                                                                                                              |
| ------------ | ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chosen.edge  | Function or Boolean | undefined | 设置为 true 时，选择或悬停在 edge 上会根据默认设置更改其特征。如果为 false，则选择边时不会对边进行任何更改。<br> 如果提供了功能，则在选择边时调用它。             |
| chosen.label | Function or Boolean | undefined | 如果为 true，则选择或悬停在 edge 上将根据默认值更改其 label 的特征。如果为 false，则选择 edge 时不会更改 edge 的 label。<br> 如果提供了功能，则在选择边时调用它。 |

```js
function(values, id, selected, hovering){
   values.property = chosenValue;
 }
```

### color

类型: Object or String  
 默认: Object  
 描述: 可设置 string 如 `'red', 'rgb(1, 1, 1)', '#fff'`。

| 名称             | 类型              | 默认      | 描述                                                                                               |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| chosen.color     | String            | '#848484' | 未选择 edge 或将其悬停时的 edge 颜色（假设在交互模块中启用了悬停）。                               |
| chosen.highlight | String            | '#848484' | 选择 edge 时为 edge 着色。                                                                         |
| chosen.hover     | String            | '#848484' | 当鼠标悬停在 edge 上时为 edge 上色（假设在交互模块中启用了悬停）。                                 |
| chosen.inherit   | String or Boolean | 'from'    | 定义颜色，突出显示或悬停时，Inherit 设置为 false！<br> 支持的选项有`true,false,'from','to','both'` |
| chosen.opacity   | Number            | 1.0       | 设置透明度                                                                                         |

### dashes

类型: Array or Boolean  
 默认: false  
 描述: 如果为 true，则 edge 将绘制为虚线。您可以通过提供数组来定制破折号。formart 数组：数字，间隔长度，破折号长度，间隔长度，破折号长度等的数组。重复该数组直到填充该距离。 在 IE 11 之前的版本中使用虚线时，该线条将笔直绘制，而不是平滑绘制。

### font

类型: Object or String  
 默认: false  
 描述: 定义 label 的字体, 可缩写 `'size face color'`。
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| font.color | String | '#343434' | label 文字的颜色。 |
| font.size | Number | 14 | label 文字的大小。 |
| font.face | String | 'arial' | label 文本的字体（或字体系列）。 |
| font.background | String | undefined | label 的背景颜色 |
| font.strokeWidth | Number | 2 | 文字边缘宽度 |
| font.strokeColor | String | '#ffffff' | 文字边缘颜色 |
| font.align | String | 'horizontal' | 可选: `'horizontal','top','middle','bottom'`, 对齐方式确定 label 如何在边缘上对齐。horizontal 无论边缘的方向如何，默认值都会使 label 水平对齐 |
| font.vadjust | String | '0' | 针对 label 文本中基本字体的垂直位置的特定于字体的更正 |
| font.multi | Boolean or String | false | false 为绘制纯文本, true 可以绘制 html 和 md |
| font.bold | Object or String | false | 定义 label 粗体信息.|
| font.bold.color | String | '#343434' | 粗体字体的颜色.|
| font.bold.size | Number | 14 | 粗体字体的大小.|
| font.bold.face | String | 'arial' | 粗体字体的字体（或字体系列）.|

### from

类型: Number or String  
 描述: 箭头始端的节点(node)id, 即 from => to

### hidden

类型: Boolean  
 默认: false  
 描述: 是否隐藏 edge

### hoverWidth

类型: Number or Function  
 默认: 0.5  
 描述: hoverWidth 确定了用户用鼠标悬停在 edge 上时的宽度

### id

类型: String  
 默认: undefined  
 描述: edge 的 id, 如果不提供, 会自动生成

### label

类型: String  
 默认: undefined  
 描述: edge 的 label, 不支持 html

### labelHighlightBold

类型: Boolean  
 默认: true  
描述: 选择 edge 时 label 是否变为粗体。

### length

类型: Number  
 默认: undefined  
 描述: 静止状态下 edge 的长度。

### physics

类型: Boolean  
 默认: true  
 描述: 是否具有物理效果

### scaling

### selectionWidth

### selfReferenceSize

类型: Number  
 默认: false  
 描述: 当 to 和 from 相同时, 会画一个圈, 此设置为圈的 radius

### shadow

类型: Object or Boolean  
 默认: Object  
 描述: 为 true 时会使用默认阴影。

| 名称           | 类型    | 默认              | 描述         |
| -------------- | ------- | ----------------- | ------------ |
| shadow.enabled | Boolean | false             | 是否启用     |
| shadow.color   | String  | 'rgba(0,0,0,0.5)' | 阴影颜色     |
| shadow.size    | Number  | 10                | 阴影模糊大小 |
| shadow.x       | Number  | 5                 | x 偏移量     |
| shadow.y       | Number  | 5                 | y 偏移量     |

### smooth

类型: Object or Boolean  
 默认: Object  
描述: 如果为 true, 会将 edge 绘制为动态二次贝塞尔曲线。绘制将耗费时间

| 名称                  | 类型              | 默认     | 描述                                                                                                                                                                           |
| --------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| smooth.enabled        | Boolean           | true     | 是否启用                                                                                                                                                                       |
| smooth.type           | String            | dynamic' | 平滑类型, 具体效果请自行尝试,可选项: `'dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier'` |
| smooth.forceDirection | String or Boolean | false    | 可选项: `['horizontal', 'vertical', 'none']` , 此选项只与 cubicBezier 一起使用,                                                                                                |
| smooth.roundness      | Number            | 0.5      | 接受范围：`0 .. 1.0`。该参数调整除动态以外的所有类型的平滑曲线的圆度。                                                                                                         |

### title

类型: String  
 默认: undefined  
描述: 当鼠标移到 edge 上时，标题会显示在弹出窗口中

### to

类型: Number or String  
 描述: 描述: 箭头末端的节点(node)id, 即 from => to

### value

类型: Number  
 默认: undefined  
 描述: 设置值后，将使用上面定义的缩放对象中的选项缩放边缘的宽度。

### width

类型: Number  
 默认: 1  
 描述: edge 的宽度, 如果设置了 value, 此值无效

### widthConstraint

类型: Number, Object or Boolean  
 默认: false  
 描述: 如果指定了数字, 则将 edge 的 label 最大宽度设置为该值。
| 名称 | 类型 | 默认 | 描述 |
| -------------- | ------- | ----------------- | ------------ |
| widthConstraint.maximum | Number | undefined | 如果指定了数字，则将 edge 的 label 的最大宽度设置为该值。edge 的 label 将在空格处断开以保持低于最大值。 |

## groups

将 nodes 分组展示。[查看原文](https://visjs.github.io/vis-network/docs/network/groups.html#)

### 全部配置

```js
var options = {
  groups: {
    useDefaultGroups: true,
    myGroupId: {
      /*node options*/
    }
  }
};

network.setOptions(options);
```

### useDefaultGroups

类型: Boolean  
 默认: true
描述: 如果节点定义的组不在“组”模块中，则该模块循环遍历它所拥有的组，并为每个未知组分配一个。全部使用后，将返回第一组。通过将其设置为 false，将在此循环中不使用默认组。

### group

类型: Object  
 描述: 可以在单个 node 中设置, 也可全局配置

```js
var nodes = [
  { id: 1, group: 'myGroup', label: "I'm in a custom group called 'myGroup'!" }
];

var options = {
  groups: {
    myGroup: { color: { background: 'red' }, borderWidth: 3 }
  }
};
```

## interaction

交互模块。[查看原文](https://visjs.github.io/vis-network/docs/network/interaction.html#)

```js
// these are all options in full.
var options = {
  interaction: {
    dragNodes: true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideEdgesOnZoom: false,
    hideNodesOnDrag: false,
    hover: false,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: false,
      speed: { x: 10, y: 10, zoom: 0.02 },
      bindToWindow: true
    },
    multiselect: false,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomView: true
  }
};

network.setOptions(options);
```

### dragNodes

类型: Boolean  
 默认: true  
描述: 为 true 时, 没有设置 fixed 的 nodes 可以被拖拽

### dragView

类型: Boolean  
 默认: true  
描述: 如果为 true，则用户可以拖动视图。

### hideEdgesOnDrag

类型: Boolean  
 默认: false  
描述: 如果为 true，则拖动视图时不会绘制 edges。这可以大大加快拖动的响应速度，从而改善用户体验。

### hideEdgesOnZoom

类型: Boolean  
 默认: false  
描述: 如果为 true，则在缩放视图时不会绘制 edges。这可以大大加快缩放的响应速度，改善用户体验。

### hideNodesOnDrag

类型: Boolean  
 默认: false  
描述: 如果为 true，则在拖动视图时不绘制 nodes。这可以大大加快拖动的响应速度，从而改善用户体验。

### hover

类型: Boolean  
 默认: false  
描述: 如果为 true，当鼠标移入 nodes 时, 用 hover 设置的颜色

### hoverConnectedEdges

类型: Boolean  
 默认: true  
描述: 如果为 true，当鼠标移入时, 相关联的 edges 变为高亮。

### keyboard

类型: Boolean or Object
默认: Object  
描述: 如果为 true，则启用默认键盘设置。

| 名称                  | 类型    | 默认  | 描述                                                                                                                                                                 |
| --------------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyboard.enabled      | Boolean | false | 是否启用                                                                                                                                                             |
| keyboard.speed.x      | Number  | 1     | 按下键或按下导航按钮时视图在 x 方向上移动的速度。                                                                                                                    |
| keyboard.speed.y      | Number  | 1     | 按下键或按下导航按钮时视图在 y 方向上移动的速度。                                                                                                                    |
| keyboard.speed.zoom   | Number  | 0.02  | 按下键或按下导航按钮放大或缩小视图的速度。                                                                                                                           |
| keyboard.bindToWindow | Boolean | true  | 将键盘快捷键绑定到窗口时，无论哪个 DOM 对象具有焦点，它们都将起作用。如果页面上有多个 network，可以将其设置为 false，以确保键盘快捷键仅在具有焦点的 network 上有效。 |

### multiselect

类型: Boolean  
 默认: false  
描述: 如果为 true，则长按或按住 ctl 变为多选。

### selectable

类型: Boolean  
 默认: true  
描述: 如果为 true，则 nodes 和 edges 可以被选择。

### selectConnectedEdges

类型: Boolean  
 默认: true  
描述:如果为 true，则在选择节点时，其连接边缘将突出显示。

### tooltipDelay

类型: Number  
 默认: 300  
描述: 当节点或边具有定义的'title'字段时，可以显示为弹出工具提示. 此设置为多少毫秒后弹窗出现

### zoomView

类型: Boolean  
 默认: true  
描述: 如果为 true，则用户可以放大。

## layout

布局模块。[查看原文](https://visjs.github.io/vis-network/docs/network/layout.html#)

### 全部配置

```js
// these are all options in full.
var options = {
  layout: {
    randomSeed: undefined,
    improvedLayout: true,
    clusterThreshold: 150,
    hierarchical: {
      enabled: false,
      levelSeparation: 150,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD', // UD, DU, LR, RL
      sortMethod: 'hubsize', // hubsize, directed
      shakeTowards: 'leaves' // roots, leaves
    }
  }
};

network.setOptions(options);
```

### randomSeed

类型: Number  
 默认: undefined  
描述: 如果不使用分层布局，则最初会随机放置节点。这意味着每次结算结果都不同。如果您手动提供 randomSeed，则每次布局均相同。

### improvedLayout

类型: Boolean  
 默认: true  
描述: 启用后，network 将使用 Kamada Kawai 算法进行初始布局。对于大于 100 个节点的网络，将自动执行群集以减少节点数量。这样可以大大缩短稳定时间。如果网络非常互连（没有叶子节点或叶子节点很少），则此方法可能无法正常工作，它将恢复为旧方法。将来性能会有所提高。

### clusterThreshold

类型: Number  
 默认: 150  
描述: `improvedLayout`适用的群集阈值。

### hierarchical

类型: Boolean or Object  
 默认: Object  
描述: 如果为 true, 则分层放置 nodes。

| 名称                              | 类型    | 默认      | 描述                                                                                                                                                                                                                             |
| --------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hierarchical.enabled              | Boolean | false     | 是否开启。                                                                                                                                                                                                                       |
| hierarchical.levelSeparation      | Number  | 150       | 不同层级之间的距离                                                                                                                                                                                                               |
| hierarchical.nodeSpacing          | Number  | 100       | 节点之间的距离                                                                                                                                                                                                                   |
| hierarchical.treeSpacing          | Number  | 200       | 不同树之间的距离                                                                                                                                                                                                                 |
| hierarchical.blockShifting        | Boolean | true      | 减少空白的方法。可单独使用或与边缘最小化一起使用。每个节点都将检查空格，并将其分支尽可能远地移动，并在任何级别上均遵守 nodeSpacing。这主要用于初始布局。如果启用物理学，则它们的布局将由物理学决定。不过，这将大大加快稳定时间！ |
| hierarchical.edgeMinimization     | Boolean | true      | 减少空白的方法。可单独使用或与程序段移位一起使用。启用块移位通常会加快布局过程。每个节点都将尝试沿其自由轴移动以减少其边缘的总长度。这主要用于初始布局。如果启用物理学，则它们的布局将由物理学决定。不过，这将大大加快稳定时间！ |
| hierarchical.parentCentralization | Boolean | true      | 设置为 true 时，在布局算法完成后，父节点将再次居中。                                                                                                                                                                             |
| hierarchical.direction            | String  | 'UD'      | 层次布局的方向。可用的选项有：`UD, DU, LR, RL`。                                                                                                                                                                                 |
| hierarchical.sortMethod           | String  | 'hubsize' | 用于根据数据确定节点级别的算法。可选项：hubsize, directed。Hubsize 将具有最多边缘的节点放在顶部。由此可以评估其余层次结构。Directed 遵守边缘数据的往返。A-> B，因此 B 比 A 低。                                                  |
| hierarchical.shakeTowards         | String  | 'roots'   | 控制`directed`布局中的所有根是在顶部对齐，其子节点应尽可能靠近其根（roots），还是所有叶子都在底部对齐并且其父节点应尽可能靠近其子（leaves 默认值）。                                                                             |

## manipulation

操纵模块。进行动画，缩放和聚焦。[查看原文](https://visjs.github.io/vis-network/docs/network/manipulation.html)

### 全部配置

```js
// these are all options in full.
var options = {
  manipulation: {
    enabled: false,
    initiallyActive: false,
    addNode: true,
    addEdge: true,
    editNode: undefined,
    editEdge: true,
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle: {
      // all node options are valid.
    }
  }
};

network.setOptions(options);
```

### enabled

类型: Boolean  
 默认: false  
描述: 打开或关闭操纵系统

### addNode

类型: Boolean or Function  
 默认: true  
描述: 您可以使用这些选项来打开或关闭某些功能，以将处理程序功能附加到它们。在执行操作之前，将调用这些功能。如果要通过操纵系统添加节点，则将首先调用 addNode 函数。这样，您可以为用户提供 GUI，中止该过程或您想要执行的其他任何操作。对于除 editNode 功能以外的所有功能，这些处理程序功能都是可选的。

提供布尔值时，只需在操纵系统的 GUI 上切换“添加节点”按钮。使用这些方法时，缺少处理功能可能会影响 API。提供功能后，当用户在“ addNode”模式下单击画布时，将调用该功能。该函数将接收两个变量：可以创建的节点的属性和回调函数。如果使用新节点的属性调用回调函数，则将添加该节点。

```js
var options = {
  操纵：{
    addNode：function（nodeData，callback）{
      nodeData.label ='hello world';
      callback（nodeData）;
    }
  }
}
```

### addEdge

类型: Boolean  
 默认: false  
描述: 打开或关闭操纵系统

### enabled

类型: Boolean or Function  
 默认: true  
描述: 如果为布尔值，则在 GUI 中切换“ addEdge”按钮的可用性，通过方法的 API 仍将起作用，除非（显然）没有处理函数。提供功能后，当用户在“ addEdge”模式下将新边缘从一个节点拖动到下一个节点时，将调用该功能。该函数将接收两个变量：可以创建的边的属性和回调函数。如果使用新边缘的属性调用回调函数，则将添加边缘。

```js
var options = {
  操纵：{
    addEdge：function（edgeData，callback）{
      如果（edgeData.from === edgeData.to）{
        var r = confirm（“是否要将节点连接到自身？”）;
        如果（r === true）{
          callback（edgeData）;
        }
      }
      其他{
        callback（edgeData）;
      }
    }
  }
}
```

### editNode

类型: Function  
 默认: undefined  
描述:

### editEdge

类型: Boolean or Function  
 默认: true  
描述:

### deleteNode

类型: Boolean or Function  
 默认: true  
描述:

### deleteEdge

类型: Boolean or Function  
 默认: true  
描述:

### controlNodeStyle

类型: Object  
 默认: Object  
描述:
默认:

```js
{
  shape:'dot',
  size:6,
  color: {
    background: '#ff0000',
    border: '#3c3c3c',
    highlight: {
      background: '#07f968',
      border: '#3c3c3c'
    }
  },
  borderWidth: 2,
  borderWidthSelected: 2
}
```

## nodes

处理节点的创建和删除，并包含全局节点选项和样式。[查看原文](https://visjs.github.io/vis-network/docs/network/nodes.html)

### 全部配置

```js
// these are all options in full.
var options = {
  nodes:{
    borderWidth: 1,
    borderWidthSelected: 2,
    brokenImage:undefined,
    chosen: true,
    color: {
      border: '#2B7CE9',
      background: '#97C2FC',
      highlight: {
        border: '#2B7CE9',
        background: '#D2E5FF'
      },
      hover: {
        border: '#2B7CE9',
        background: '#D2E5FF'
      }
    },
    fixed: {
      x:false,
      y:false
    },
    font: {
      color: '#343434',
      size: 14, // px
      face: 'arial',
      background: 'none',
      strokeWidth: 0, // px
      strokeColor: '#ffffff',
      align: 'center',
      multi: false,
      vadjust: 0,
      bold: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold'
      },
      ital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'italic',
      },
      boldital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold italic'
      },
      mono: {
        color: '#343434',
        size: 15, // px
        face: 'courier new',
        vadjust: 2,
        mod: ''
      }
    },
    group: undefined,
    heightConstraint: false,
    hidden: false,
    icon: {
      face: 'FontAwesome',
      code: undefined,
      weight: undefined,
      size: 50,  //50,
      color:'#2B7CE9'
    },
    image: undefined,
    imagePadding: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    label: undefined,
    labelHighlightBold: true,
    level: undefined,
    mass: 1,
    physics: true,
    scaling: {
      min: 10,
      max: 30,
      label: {
        enabled: false,
        min: 14,
        max: 30,
        maxVisible: 30,
        drawThreshold: 5
      },
      customScalingFunction: function (min,max,total,value) {
        if (max === min) {
          return 0.5;
        }
        else {
          let scale = 1 / (max - min);
          return Math.max(0,(value - min)*scale);
        }
      }
    },
    shadow:{
      enabled: false,
      color: 'rgba(0,0,0,0.5)',
      size:10,
      x:5,
      y:5
    },
    shape: 'ellipse',
    shapeProperties: {
      borderDashes: false, // only for borders
      borderRadius: 6,     // only for box shape
      interpolation: false,  // only for image and circularImage shapes
      useImageSize: false,  // only for image and circularImage shapes
      useBorderWithImage: false  // only for image shape
    }
    size: 25,
    title: undefined,
    value: undefined,
    widthConstraint: false,
    x: undefined,
    y: undefined
  }
}

network.setOptions(options);
```

### borderWidth

类型: Number
默认: 1  
 描述: node borderWidth

### borderWidthSelected

类型: Number
默认: 2
描述: node 选中时 borderWidth

### brokenImage

类型: String
默认: undefined
描述: 当形状设置为 image 或时 circularImage，如果无法解析图像选项中提供的 URL，则此选项可以是备用图像的 URL。

### chosen

类型: Object or Boolean  
 默认: true  
 描述: 如果为 true，则选择或悬停在 node 上将根据默认设置更改其及其 label 的特征。如果为 false，则选择 node 时不会更改 node 或其 label。如果提供了对象，则在选择 node 时可以对 node 和 label 特性进行更细微的调整。

| 名称         | 类型                | 默认      | 描述                                                                                                                                                              |
| ------------ | ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chosen.node  | Function or Boolean | undefined | 设置为 true 时，选择或悬停在 node 上会根据默认设置更改其特征。如果为 false，则选择边时不会对边进行任何更改。<br> 如果提供了功能，则在选择边时调用它。             |
| chosen.label | Function or Boolean | undefined | 如果为 true，则选择或悬停在 node 上将根据默认值更改其 label 的特征。如果为 false，则选择 node 时不会更改 node 的 label。<br> 如果提供了功能，则在选择边时调用它。 |

```js
function(values, id, selected, hovering){
   values.property = chosenValue;
 }
```

### color

类型: Object or String  
 默认: Object  
 描述: 可设置 string 如 `'red', 'rgb(1, 1, 1)', '#fff'`。

| 名称             | 类型              | 默认      | 描述                                                                                               |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| chosen.color     | String            | '#848484' | 未选择 node 或将其悬停时的 node 颜色（假设在交互模块中启用了悬停）。                               |
| chosen.highlight | String            | '#848484' | 选择 node 时为 node 着色。                                                                         |
| chosen.hover     | String            | '#848484' | 当鼠标悬停在 node 上时为 node 上色（假设在交互模块中启用了悬停）。                                 |
| chosen.inherit   | String or Boolean | 'from'    | 定义颜色，突出显示或悬停时，Inherit 设置为 false！<br> 支持的选项有`true,false,'from','to','both'` |
| chosen.opacity   | Number            | 1.0       | 设置透明度                                                                                         |

### fixed

类型: Object or Boolean  
 默认: Object  
 描述: 如果为 true，则节点不会移动, 而是成为物理模拟的一部分, 当定义为对象时, 可以禁止在 x 或者 y 方向上的移动
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| fixed.x | Boolean | false | 如果为 true，则该节点将不会在 X 方向上移动。 |
| fixed.y | Boolean | false | 如果为 true，则该节点将不会沿 Y 方向移动。

### font

类型: Object or String  
 默认: false  
 描述: 定义 label 的字体, 可缩写 `'size face color'`。
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| font.color | String | '#343434' | label 文字的颜色。 |
| font.size | Number | 14 | label 文字的大小。 |
| font.face | String | 'arial' | label 文本的字体（或字体系列）。 |
| font.background | String | undefined | label 的背景颜色 |
| font.strokeWidth | Number | 2 | 文字边缘宽度 |
| font.strokeColor | String | '#ffffff' | 文字边缘颜色 |
| font.align | String | 'horizontal' | 可选: `'horizontal','top','middle','bottom'`, 对齐方式确定 label 如何在边缘上对齐。horizontal 无论边缘的方向如何，默认值都会使 label 水平对齐 |
| font.vadjust | String | '0' | 针对 label 文本中基本字体的垂直位置的特定于字体的更正 |
| font.multi | Boolean or String | false | false 为绘制纯文本, true 可以绘制 html 和 md |
| font.bold | Object or String | false | 定义 label 粗体信息.|
| font.bold.color | String | '#343434' | 粗体字体的颜色.|
| font.bold.size | Number | 14 | 粗体字体的大小.|
| font.bold.face | String | 'arial' | 粗体字体的字体（或字体系列）.|

### group

类型: String
默认: undefined  
 描述: 如果不是 undefined，该节点将属于定义的组。该组的样式信息将应用于此节点。特定于节点的样式将覆盖组样式。

### heightConstraint

类型: Number, Boolean or Object
默认: false  
 描述: 如果为 false, 则不应用 heightConstraint.如果指定了数字, 则将该值用于节点的最小高度

| 名称                     | 类型   | 默认      | 描述                                                                                                                              |
| ------------------------ | ------ | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| heightConstraint.minimum | Number | undefined | 如果指定了数字，则将该值用作节点的最小高度。                                                                                      |
| heightConstraint.valign  | String | 'middle'  | 有效值是`'top'，'middle'和'bottom'`。指定后，如果标签文本的高度小于最小值（包括任何顶部或底部页边距），则它将垂直偏移到指定位置。 |

### hidden

类型: Boolean  
 默认: false  
 描述: 是否隐藏节点

### icon

类型: Object  
 默认: Obj  
 描述: 仅在 shape 为 icon 时可用.
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| icon.face | String | 'FontAwesome' | face 字体，例如'FontAwesome'或 'Ionicons'。 |
| icon.code | String | undefined | 例如，这是图标的代码'\uf007'。|
| icon.size | Number | 50 | 图标的大小。
| icon.color | String | '#2B7CE9' |图标的颜色。|
| icon.weight | Number or String | undefined | 粗体。|

### id

类型: String  
 默认: undefined  
 描述: node 的 id, 必填且唯一

### image

类型: Object or String  
 默认: undefined  
 描述: 当形状设置为 image 或时 circularImage，此选项应该是图像的 URL。如果找不到图像，则可以使用 brokenImage 选项。
注意：Firefox 有一个 SVG 绘制错误，有一个解决方法 -将 width / height 属性添加到 SVG 的根 svg 元素。
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| image.unselected | String | undefined | 选中图片地址 |
| image.selected | String | undefined | 未选中图片地址|

### imagePadding

类型: Object or Number
默认: 0  
 描述: 如果指定了数字，则形状内部图像的填充在所有面上均设置为该值。仅当 shape 为 image，circularImage 生效。
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| imagePadding.top | Number | 0 | Padding-top |
| imagePadding.right | Number | 0 | Padding-right|
| imagePadding.bottom | Number | 0 | Padding-bottom |
| imagePadding.left | Number | 0 | Padding-left|

### label

类型: String  
 默认: undefined  
 描述: 标签是节点中或节点下方显示的文本，具体取决于形状。

### labelHighlightBold

类型: Boolean  
 默认: true
描述: 确定在选择节点时标签是否变为粗体。

### level

类型: Number  
 默认: undefined  
 描述: 使用分层布局时，级别确定节点的放置位置。

### margin

类型: Object or Number
默认: 0  
 描述: margin, 仅当 shape 为`box, circle, database, icon or text`生效。
| 名称 | 类型 | 默认 | 描述 |
| ---------------- | ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| margin.top | Number | 0 | margin-top |
| margin.right | Number | 0 | margin-right|
| margin.bottom | Number | 0 | margin-bottom |
| margin.left | Number | 0 | margin-left|

### mass

类型: Number  
 默认: 1  
 描述: barnesHut 物理模型（默认启用）基于反重力模型。通过增加节点的质量，可以增加其排斥力。

不建议使用 0 到 1 之间的值。
不允许为负值或零值。这些将产生控制台错误，并将其设置为 1。

### physics

类型: Boolean  
 默认: true  
 描述: 是否具有物理效果

### scaling

### shadow

类型: Object or Boolean  
 默认: Object  
 描述: 为 true 时会使用默认阴影。

| 名称           | 类型    | 默认              | 描述         |
| -------------- | ------- | ----------------- | ------------ |
| shadow.enabled | Boolean | false             | 是否启用     |
| shadow.color   | String  | 'rgba(0,0,0,0.5)' | 阴影颜色     |
| shadow.size    | Number  | 10                | 阴影模糊大小 |
| shadow.x       | Number  | 5                 | x 偏移量     |
| shadow.y       | Number  | 5                 | y 偏移量     |

### shape

类型: String  
 默认: 'ellipse'
描述: 形状定义了节点的外观。有两种类型的节点。一种类型在其内部带有标签，另一种类型在其下方带有标签。与它的标签内的类型有： `ellipse，circle，database，box，text`。与它的标签以外的有：`image，circularImage， diamond，dot，star，triangle， triangleDown，hexagon，square和icon`。

### shapeProperties

类型: Object  
 默认: Object  
 描述: 该对象包含特定形状的配置。

| 名称                                                           | 类型             | 默认  | 描述                                                                                                                                                          |
| -------------------------------------------------------------- | ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shapeProperties.borderDashes                                   | Array or Boolean | false | 此属性适用于所有带有边框的形状。您可以通过提供数组来设置破折号。数组格式：[破折号长度，间隙长度]。您也可以使用布尔值，false 为禁用状态，true 为默认值[5,15]。 |
| shapeProperties.borderRadius                                   | Number           | 6     | 此属性仅用于 box 形状。它使您可以确定形状角的圆度。                                                                                                           |
| shapeProperties.interpolation                                  | Boolean          | true  | 此属性仅适用于 image 和 circularImage 形状。如果为 true，则按比例缩小图像时将对其进行重新采样，从而获得更好的图像，但会占用计算时间。                         |
| shapeProperties.useImageSize                                   | Boolean          | false | 此属性仅适用于 image 和 circularImage 形状。如果为 false，则使用大小选项；如果为 true，则使用图像大小。                                                       |
| 重要提示：如果将其设置为 true，则无法使用 value 选项缩放图像！ |
| shapeProperties.useBorderWithImage                             | Boolean          | false | 此属性仅适用于 image 形状。如果为 true，则使用颜色对象。在其后面绘制具有背景颜色的矩形，并带有边框。这意味着将考虑所有边界选项。                              |

### size

类型: Number  
 默认: 25
描述: 该大小用于确定内部没有标签的节点形状的大小。这些形状是：`image，circularImage，diamond，dot， star，triangle，triangleDown，hexagon，square和 icon`

### title

类型: String or Element  
 默认: undefined
描述: 用户将鼠标悬停在节点上时要显示的标题。标题可以是 HTML 元素，也可以是包含纯文本或 HTML 的字符串。

### value

类型: Number  
 默认: undefined  
 描述: 设置值后，将使用上面定义的缩放对象中的选项缩放边缘的宽度。

### widthConstraint

类型: Number, Object or Boolean  
 默认: false  
 描述: 如果指定了数字, 则将 node 的 label 最大宽度设置为该值。
| 名称 | 类型 | 默认 | 描述 |
| -------------- | ------- | ----------------- | ------------ |
| widthConstraint.maximum | Number | undefined | 如果指定了数字，则将 node 的 label node 的 label 将在空格处断开以保持低于最大值。 |

### x

类型: Number  
 默认: undefined  
 描述: 这给节点一个初始的 x 位置。使用分层布局时，布局引擎会根据视图类型设置 x 或 y 位置。另一个值保持不变。

### y

类型: Number  
 默认: undefined  
 描述: 这给节点一个初始的 y 位置。使用分层布局时，布局引擎会根据视图类型设置 x 或 y 位置。另一个值保持不变。

## physics

处理物理模拟，移动节点和边缘以清晰显示它们。[查看原文](https://visjs.github.io/vis-network/docs/network/physics.html)

### 全部配置

```js
// these are all options in full.
var options = {
  physics: {
    enabled: true,
    barnesHut: {
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.08,
      springLength: 100,
      damping: 0.4,
      avoidOverlap: 0
    },
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.01,
      nodeDistance: 120,
      damping: 0.09,
      avoidOverlap: 0
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    solver: 'barnesHut',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true
  }
};

network.setOptions(options);
```

### enabled

类型: Boolean  
 默认: true  
描述: 物理模块是否开启

### barnesHut

类型: Object  
 默认: Object  
描述: BarnesHut 是基于四叉树的重力模型, 对于非那层布局, 这是默认和推荐的方式

| 名称                            | 类型   | 默认  | 描述                                                                                                                     |
| ------------------------------- | ------ | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| barnesHut.gravitationalConstant | Number | -2000 | 引力吸引, 默认为排斥, 所以为负数, 如果想要排斥力更强, 请减少该值                                                         |
| barnesHut.centralGravity        | Number | 0.3   | 有一个中央引力吸引器，可将整个网络拉回到中心。                                                                           |
| barnesHut.springLength          | Number | 95    | 边缘被建模为弹簧。这里的 springLength 是弹簧的其余长度。                                                                 |
| barnesHut.springConstant        | Number | 0.04  | 是弹簧的坚固程度。较高的值表示较强的弹簧强度。                                                                           |
| barnesHut.damping               | Number | 0.09  | 接受范围：`[0 .. 1]`。阻尼因子, 指前一次物理模拟迭代中有多少速度传递到下一次迭代中。                                     |
| barnesHut.avoidOverlap          | Number | 0     | 接受范围：`[0 .. 1]`。大于 0 时，将考虑节点的大小。对于两个重力模型，将从节点的包围圆的半径计算距离。值 1 是最大避免重叠 |

### forceAtlas2Based

类型: Object  
 默认: Object  
描述: 一种重力模型, 具体解释请参照官网

| 名称                                   | 类型   | 默认 | 描述                                                                                                                     |
| -------------------------------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| forceAtlas2Based.gravitationalConstant | Number | -50  | barnesHut 方法类似，不同之处在于衰减是线性的而不是二次的                                                                 |
| forceAtlas2Based.centralGravity        | Number | 0.01 | 有一个中央引力吸引器，可将整个网络拉回到中心。不依赖于距离。                                                             |
| forceAtlas2Based.springLength          | Number | 100  | 边缘被建模为弹簧。这里的 springLength 是弹簧的其余长度。                                                                 |
| forceAtlas2Based.springConstant        | Number | 0.08 | 是弹簧的坚固程度。较高的值表示较强的弹簧强度。                                                                           |
| forceAtlas2Based.damping               | Number | 0.4  | 接受范围：`[0 .. 1]`。阻尼因子, 指前一次物理模拟迭代中有多少速度传递到下一次迭代中。                                     |
| forceAtlas2Based.avoidOverlap          | Number | 0    | 接受范围：`[0 .. 1]`。大于 0 时，将考虑节点的大小。对于两个重力模型，将从节点的包围圆的半径计算距离。值 1 是最大避免重叠 |

### repulsion

类型: Object  
 默认: Object  
描述: 排斥模型, 排斥模型假定节点周围具有简化的排斥场, 他的力从 1 到 0 线性减少

| 名称                     | 类型   | 默认 | 描述                                                                                 |
| ------------------------ | ------ | ---- | ------------------------------------------------------------------------------------ |
| repulsion.nodeDistance   | Number | 100  | 排斥的影响范围。                                                                     |
| repulsion.centralGravity | Number | 0.2  | 有一个中央引力吸引器，可将整个网络拉回到中心。                                       |
| repulsion.springLength   | Number | 200  | 边缘被建模为弹簧。这里的 springLength 是弹簧的其余长度。                             |
| repulsion.springConstant | Number | 0.05 | 是弹簧的坚固程度。较高的值表示较强的弹簧强度。                                       |
| repulsion.damping        | Number | 0.09 | 接受范围：`[0 .. 1]`。阻尼因子, 指前一次物理模拟迭代中有多少速度传递到下一次迭代中。 |

### hierarchicalRepulsion

类型: Object  
 默认: Object  
描述: 该模型基于排斥模型, 但考虑了水平方向并将力归一化

| 名称                                 | 类型   | 默认 | 描述                                                                                                                       |
| ------------------------------------ | ------ | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| hierarchicalRepulsion.nodeDistance   | Number | 120  | 排斥的影响范围。                                                                                                           |
| hierarchicalRepulsion.centralGravity | Number | 0.01 | 有一个中央引力吸引器，可将整个网络拉回到中心。                                                                             |
| hierarchicalRepulsion.springLength   | Number | 100  | 边缘被建模为弹簧。这里的 springLength 是弹簧的其余长度。                                                                   |
| hierarchicalRepulsion.springConstant | Number | 0.01 | 是弹簧的坚固程度。较高的值表示较强的弹簧强度。                                                                             |
| hierarchicalRepulsion.damping        | Number | 0.09 | 接受范围：`[0 .. 1]`。阻尼因子, 指前一次物理模拟迭代中有多少速度传递到下一次迭代中。                                       |
| hierarchicalRepulsion.avoidOverlap   | Number | 0    | 接受范围：`[0 .. 1]`。大于 0 时，将考虑节点的大小。对于两个重力模型，将从节点的包围圆的半径计算距离。值 1 是最大避免重叠。 |

### maxVelocity

类型: Number  
 默认: 50  
描述: 限制节点的最大速度，以增加稳定时间

### minVelocity

类型: Number  
 默认: 0.1  
描述: 一旦所有节点达到最小速度，我们就假定网络已经稳定并且模拟停止了。

### solver

类型: String  
 默认: 'barnesHut'  
描述: 模型选择。可能的选项：`'barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based'`。设置分层布局时，无论您在此处填写什么内容，都会自动选择分层模型。

### stabilization

类型: Object  
 默认: Object | Boolean  
描述: 设置为 true 时, 使用默认设置稳定网络负载, false 为禁用稳定功能
| 名称 | 类型 | 默认 | 描述 |
| -------------- | ------- | ----------------- | ------------ |
| stabilization.enabled | Boolean | true | 是否启用 |
| stabilization.iterations | Number | 1000 | 不太懂: 请参考官网 |
| stabilization.updateInterval | Number | 50 | 同上。 |
| stabilization.onlyDynamicEdges | Boolean | false | 同上。 |
| stabilization.fit | Boolean | true | 稳定后, 是否要缩放视图以适合所有节点。 |

### timestep

类型: Number  
 默认: 0.5  
描述: 物理模拟是离散的。这意味着我们要走一步，计算力，移动节点，然后再走一步。如果增加此数字，步骤将太大，网络可能变得不稳定。如果您看到网络中有很多抖动的情况，则可能需要稍微降低此值。

### adaptiveTimestep

类型: Boolean  
 默认: true  
描述: 如果启用了此功能，则将智能调整时间步长以大大减少稳定时间。上面配置的时间步为最小时间步。这可以通过使用 layout 配置进一步改善。
