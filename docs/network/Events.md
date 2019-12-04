# Events

[查看原文](https://visjs.github.io/vis-network/docs/network/#Events)

## 由人互动，选择，拖动等触发的事件

### click

Returns: Object  
 描述:单击事件

### doubleClick

Returns: Object  
 描述:双击事件, 当用户双击触摸屏设备上的鼠标或双击时触发。由于双击实际上是 2 次单击，因此会触发 2 次单击事件，然后是两次双击事件。如果在触发了双击事件的情况下不想使用单击事件，则只需检查两次单击事件之间的时间，然后再处理它们。

### oncontext

Returns: Object  
 描述:当用户使用鼠标右键单击画布时触发。默认情况下，鼠标右键不选择。您可以根据需要使用该方法 getNodeAt 选择节点

### hold

Returns: Object  
 描述:当用户单击并按住鼠标或点击并按住触摸屏设备时触发。在这种情况下，也会触发点击事件。

### release

Returns: Object  
 描述:在画布上绘制完成后触发

### select

Returns: Object  
 描述:当用户操作更改选择时触发。这意味着已选择，添加或取消选择了节点或边。所有选择事件仅在单击并按住时触发。

### selectNode

Returns: Object  
 描述:当用户选择节点时触发。

### selectEdge

Returns: Object  
 描述:当用户选择边时触发。

### deselectNode

Returns: Object  
 描述: 当一个（或多个）节点已被用户取消选择时触发

### deselectEdge

Returns: Object  
 描述:当用户取消选择一条或多条边时触发。

### dragStart

Returns: Object  
 描述: 开始拖动时触发。

### dragging

Returns: Object  
 描述:拖动节点或视图时触发。

### dragEnd

Returns: Object  
 描述:拖动完成后触发。

### controlNodeDragging

Returns: Object  
 描述:拖动控制节点时触发

### controlNodeDragEnd

Returns: Object  
 描述:当控制节点拖动完成时触发。

### hoverNode

Returns: Object  
 描述:如果`interaction:{hover:true}`启用该选项并且鼠标悬停在节点上，则触发。

### blurNode

Returns: Object  
 描述:如果`interaction:{hover:true}`启用该选项并且鼠标从其之前悬停的节点移开，则触发。

### hoverEdge

Returns: Object  
 描述:单机事件

### blurEdge

Returns: Object  
 描述:如果`interaction:{hover:true}`启用该选项并且鼠标悬停在边缘上，则触发。

### zoom

Returns: Object  
 描述:当用户放大或缩小时触发。

### showPopup

Returns: Object  
 描述:当显示弹出窗口（工具提示）时触发。

### hidePopup

Returns: none  
 描述:隐藏弹出式窗口（工具提示）时触发。

## 物理模拟相关事件

### startStabilizing

Returns: none  
 描述:稳定开始时触发。

### stabilizationProgress

Returns: Object  
 描述:当 updateInterval 达到迭代次数的倍数时触发。

### stabilizationIterationsDone

Returns: none  
 描述:当“hidden”稳定完成时触发。

### stabilized

Returns: Object  
 描述:network 稳定或 stopSimulation()调用时触发。

## 画布触发的事件。

### resize

Returns: Object  
 描述:当画布的大小已调整大小时触发，或者在容器 div 的大小已更改时通过重绘调用.

## 渲染模块触发的事件。可用于在画布上绘制自定义元素。

### initRedraw

Returns: none  
 描述:重绘开始前触发。至此，仿真步骤已经完成。可用于在开始绘制新框架之前移动自定义元素。

### beforeDrawing

Returns: canvas context  
 描述:在画布被清除，缩放和平移到查看位置之后但在绘制所有边缘和节点之前触发。

### afterDrawing

Returns: canvas context  
 描述:在画布被清除，缩放和平移到查看位置之后但在绘制所有边缘和节点之前触发。

## 由视图模块触发的事件。

### animationFinished

Returns: none  
 描述: 动画结束时触发。

## 由配置模块触发的事件。

### configChange

Returns: Object  
 描述: 用户更改配置器中的任何选项时触发。
