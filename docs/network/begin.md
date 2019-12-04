# VIS.JS 介绍

基于浏览器的动态可视化库。该库旨在易于使用，处理大量动态数据，以及实现对数据的操作和交互。 该库由组件 DataSet，Timeline，Network，Graph2d 和 Graph3d 组成。

## Network 介绍

network 是一种用于将包含点和线的网络和网络之间的可视化展示。可视化易于使用，并支持自定义形状、样式、颜色、大小、图像等。网络可视化可以在任何现代浏览器上流畅地工作， 最多支持几千个节点和边。为了处理更多的节点，Network 提供了集群支持。网络使用 HTML 画布进行渲染。
从 4.0 开始，网络由处理网络特定部分的各个模块组成。这些模块有自己的文档、选项、方法和事件。  
### 相关链接  
[github](https://github.com/visjs)  
[vue-vis-network](https://github.com/r3code/vue-vis-network)  
[vue2vis](https://github.com/alexcode/vue2vis) 

## 创建 network

```html
<html>
  <head>
    <script
      type="text/javascript"
      src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"
    ></script>

    <style type="text/css">
      #mynetwork {
        width: 600px;
        height: 400px;
        border: 1px solid lightgray;
      }
    </style>
  </head>
  <body>
    <div id="mynetwork"></div>

    <script type="text/javascript">
      // create an array with nodes
      var nodes = new vis.DataSet([
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]);

      // create a network
      var container = document.getElementById('mynetwork');

      // provide the data in the vis format
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};

      // initialize your network!
      var network = new vis.Network(container, data, options);
    </script>
  </body>
</html>
```
