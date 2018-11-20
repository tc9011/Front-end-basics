> 更好地阅读体验:[我的博客](http://tc9011.com/2018/11/20/%E5%89%8D%E7%AB%AF%E5%B8%B8%E8%A7%81%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93/)


## HTML

### 行内元素和块级元素的区别

行内元素：`a`、`img`、`b`、`i`、`input`、`label`、`em`、`span`、`strong`、`select`等

块级元素：`div`、`section`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`table`、`menu`、`ol`、`ul`、`form`、`hr`等

可变元素（根据上下文语境决定该元素为块元素或者内联元素）：`button`、`iframe`、`script`、`del`等

1. 块级元素会独占一行，其宽度自动填满其父元素宽度；行内元素不会独占一行，相邻的行内元素会排列在同一行里，知道一行排不下，才会换行，其宽度随元素的内容而变化
2. 块级元素可以设置 `width`,` height`属性，行内元素设置`width`, `height`无效 （注意：块级元素即使设置了宽度，仍然是独占一行的）
3. 块级元素可以设置`margin` 和` padding`. 行内元素的水平方向的`padding-left`,`padding-right`,`margin-left`,`margin-right` 都产生边距效果，但是竖直方向的`padding-top`,`padding-bottom`,`margin-top`,`margin-bottom`都不会产生边距效果。**（水平方向有效，竖直方向无效）**
4. 块级元素可以容纳内联元素和其他块元素，内联元素只能容纳文本或者其他内联元素(内联元素中嵌套块级元素时，块级元素无法继承内联元素的属性。)

<div class="dividing-line"></div>

### script标签的`defer`和`async`的区别

`<script>`标签可能会阻塞html解析，从而影响首页加载速度，可以使用async进行异步加载或者用defer进行延迟加载。


async属性表示脚本会在下载后尽快执行，但不能保证脚本会按照顺序执行。

defer属性表示脚本会先下载，但会在整个页面都解析完成后再运行，并且按照脚本出现的先后顺序执行。

用网上一张图能比较明显得看出两者的不同之处。

![](/assets/images/前端常见知识点总结/20160503104416135.jpeg)

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

**这两个属性只适用于外联脚本。**

扩展阅读：

[详解defer和async的原理及应用](https://blog.csdn.net/liuhe688/article/details/51247484)

<div class="dividing-line"></div>

### SVG 和 Canvas的区别

1. 从图像类别区分，Canvas是基于像素的位图，而SVG却是基于矢量图形。可以简单的把两者的区别看成photoshop与illustrator的区别。
2. 从渲染模式上来说，Canvas属于 **即时模式**，而SVG则是 **保留模式** ,这两种模式的区别可以参见 cshao 的博文： [http://www.lifelaf.com/blog/?p=354。](http://www.lifelaf.com/blog/?p=354%E3%80%82)
3. 从结构上说，Canvas没有图层的概念，所有的修改整个画布都要重新渲染，而SVG则可以对单独的标签进行修改。
4. 从操作对象上说，Canvas是基于HTML canvas标签，通过宿主提供的Javascript API对整个画布进行操作的，而SVG则是基于XML元素的。
5. 从功能上讲，SVG发布日期较早，所以功能相对Canvas比较完善。
6. 关于动画，Canvas更适合做基于位图的动画，而SVG则适合图表的展示。关于SVG和Canvas的运行场景可参考MSCN关于 [**如何为您的网站在Canvas和SVG之间做出选择**](http://msdn.microsoft.com/zh-cn/ie/hh377884)：
   ![如何为您的网站在Canvas和SVG之间做出选择](https://raw.githubusercontent.com/abcrun/abcrun.github.com/master/images/canvas_svg/canvas_svg.jpg)
7. 从搜索引擎角度分析，由于svg是有大量标签组成，所以可以通过给标签添加属性，便于爬虫搜索。

参考文章：

[Canvas 与 SVG的主要区别 ](https://github.com/abcrun/abcrun.github.com/issues/13)

[Canvas or SVG？一张好图，两手准备，就在 ECharts 4.0](https://juejin.im/post/5a619a39f265da3e2d3381b1)

<div class="dividing-line"></div>

### meta标签和viewport

meta标签是HTML中头部的一个辅助性标签，它位于HTML文档头部的 和` <title>`标记之间，常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。
meta虽对用户不可见，但是它的用处非常大，设置合适的meta标签可以很大程度上提高网站页面的可用性。

根据meta标签属性不同，可以分为两大类：`http-equiv`和`name`。

**htttp-equiv**：顾名思义，equivalent，相当于，就是相当于http协议中文件头的作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。
meta标签中http-equiv属性语法格式是：`<meta http-equiv="参数" content="具体的描述">`。
其中，http-equiv属性主要有以下参数：

* **content-Type(显示字符集的设定)**：说明，设定页面使用的字符集，推荐使用HTML5的方式；用法，`＜meta http-equiv="content-Type" content="text/html; charset=utf-8"＞`。

* **X-UA-Compatible(浏览器采用何种版本渲染当前页面)**：说明，用于告知浏览器用何种版本渲染页面，一般设置为最新模式；用法，`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> //指定IE和Chrome使用最新版本渲染当前页面`。

* **cache-control(指定请求和响应遵循的缓存机制)**：
  * 用法1
    说明，指导浏览器如何缓存某个响应以及缓存多长时间；用法，`<meta http-equiv="cache-control" content="no-cache">`。
    一共有以下几种用法：1.no-cache，先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。2.no-store，不允许缓存，每次都要去服务器下载完整的缓存，这也是基于安全考虑。3.public，缓存所有响应，但并非必须。因为max-age也可以做到相同效果。4.private，只为单个用户缓存，因此不允许任何中继进行缓存。（CDN）5.maxage，表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。
  * 用法2(禁止百度自动转码)
    说明，用于禁止当前页面在移动端浏览时，被百度自动转码。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。`<meta http-equiv="Cache-Control" content="no-siteapp">`。

* **expires(网页到期时间)**：说明，用于设定网页的到期时间，过期后网页必须重新到服务器上传输；用法，`<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />`。

* **refresh(自动刷新并指向某页面)**：说明，自动刷新并指向新页面；用法，`<meta http-equiv="Refresh content="2; URL=http://www.root.net">`。

* **Set-Cookie(cookie设定)**：说明，设置cookie，如果网页过期，那么存在网页的cookie也将会被删除；用法，`＜meta http-equiv="Set-Cookie" content="cookievalue=xxx; expires=Friday, 12-Jan-2001 18:18:18 GMT； path=/"＞// 必须使用GMT的时间格式`。

* **Pragma(cache模式)**：说明，禁止从浏览器从本地计算机的缓存中访问页面内容；用法，`＜meta http-equiv="Pragma" content="no-cache"＞`。

**name**：主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。
meta标签中name属性语法格式是`<meta name="参数" content="具体的描述">`。
其中，name主要有以下参数：

* **keyword(关键字)**：说明，用于告诉搜索引擎，网页的关键字；用法，`<meta name="keywords" content="博客，前端">`。

* **description(网站内容的描述)**：说明，用于告诉搜索引擎，网站的主要内容；用法，`<meta name="description" content="热爱前端与编程">`。

* **viewport(移动端的窗口)**：说明，这个属性常用于设计移动端网页；用法，`<meta name="viewport" content="width=device-width, initial-scale=1">`。

* **robots(定义搜索引擎爬虫的索引方式)**：说明，robots用于告诉爬虫哪些页面需要索引，哪些页面不需要索引。content的参数有all（搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow）、none（ 搜索引擎将忽略此网页，等价于noindex，nofollow）、index（搜索引擎索引此网页）、noindex（搜索引擎不索引此网页）、follow（搜索引擎继续通过此网页的链接索引搜索其它的网页）、nofollow（ 搜索引擎不继续通过此网页的链接索引搜索其它的网页）。默认是all；用法，`<meta name="robots" content="none">`。

* **author(作者)**：说明，标注网页的作者；用法，`＜meta name="author" content = "root,root@21cn.com"＞`。

其中`viewport`有以下属性：

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width    设置viewport宽度，为一个正整数，或字符串`device-width`
// height   设置viewport高度正整数或者`device-height`，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalable    是否允许手动缩放
```

<div class="dividing-line"></div>

### data - xxx 属性的作用是什么

HTML5规范里增加了一个自定义data属性，可以往HTML里面添加任意以 `data-`开头的属性, 这些属性页面上是不显示的，它不会影响到你的页面布局和风格，但它却是可读可写的。存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。
组成：
属性名不应该包含任何大写字母，并且在前缀`data-`之后必须有至少一个字符。
属性值可以是任意字符串。

* JavaScript访问

在外部使用JavaScript去访问这些属性的值同样非常简单。你可以使用`getAttribute()`配合它们完整的HTML名称去读取它们，但标准定义了一个更简单的方法：[`DOMStringMap`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMStringMap)你可以使用[`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)读取到数据。

为了使用`dataset`对象去获取到数据属性，需要获取属性名中data-之后的部分(要注意的是破折号连接的名称需要改写为骆驼拼写法(如"index-number"转换为"indexNumber"))。

* CSS访问

通过[generated content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)使用函数[`attr()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)来显示data-parent的内容：

```css
article::before {
  content: attr(data-parent);
}
```

你也同样可以在CSS中使用[属性选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)根据data来改变样式：

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

<div class="dividing-line"></div>

## CSS

### CSS盒子模型

盒模型又称框模型（Box Model）,包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素。如图：

![20180928153814277351455.png](/assets/images/前端常见知识点总结/20180928153814277351455.png)

盒模型分为IE模型和标准模型。

**标准模型元素宽度width=content**，高度计算相同：

![20180928153814290654601.png](/assets/images/前端常见知识点总结/20180928153814290654601.png)

**IE模型元素宽度width=content+padding+border**，高度计算相同：

![2018092815381429369561.png](/assets/images/前端常见知识点总结/2018092815381429369561.png)

通过css3新增的属性 `box-sizing: content-box | border-box`分别设置盒模型为标准模型（`content-box`）和IE模型（`border-box`）。

通过 `box-sizing: content-box | border-box`属性可以更好的控制元素的大小，比如增加`padding`时仍然可以控制元素大小，防止元素增大对布局产生影响。

在JavaScript中，通过`document.compatMode`可以知道当前采用了什么模式，值为`BackCompat` 表示怪异模式，`CSS1Compat` 表示标准模式。

<div class="dividing-line"></div>

### CSS优先级

内联样式 > ID选择器 > 类选择器 = 属性选择器 = 伪类 > 类型选择器 = 伪元素 > 通用选择器`*` > 继承的样式

<div class="dividing-line"></div>

### link和@import的区别

1. `link`是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；`@import`属于CSS范畴，只能加载CSS。
2. `link`引用CSS时，在页面载入时同时加载；`@import`需要页面网页完全载入以后加载。
3. `link`是XHTML标签，无兼容问题；`@import`是在CSS2.1提出的，低版本的浏览器不支持。
4. `link`支持使用JavaScript控制DOM去改变样式；而`@import`不支持。

<div class="dividing-line"></div>

### 负margin

![20181013153944105537403.jpg](/assets/images/前端常见知识点总结/20181013153944105537403.jpg)

当static元素的margin-top/margin-left被赋予负值时，元素将被拉进指定的方向。

但如果你设置margin-bottom/right为负数，元素并不会如你所想的那样向下/右移动，而是将后续的元素拖拉进来，覆盖本来的元素。

如果没有设定width属性，设定负margin-left/right会将元素拖向对应的方向，并增加宽度，此时的margin的作用就像padding一样。

参考文章：

[负margin用法权威指南](https://www.w3cplus.com/css/the-definitive-guide-to-using-negative-margins.html)

[深入理解CSS中的margin负值](https://www.cnblogs.com/xiaohuochai/p/5314289.html)

<div class="dividing-line"></div>

### 布局（以三栏布局为例）

* 自身浮动

注意DOM文档的书写顺序，先写两个侧边栏，再写`main`，更换后则侧栏会被挤到下一列，这种布局方式比较简单明了，但缺点是渲染时先渲染了侧边栏，而不是比较重要的主面板。

```html
<style>
    .sub{
        width: 100px;
        float: left;
        background: #00abff;
    }
    .extra{
        width: 200px;
        float: right;
        background: red;
    }
    .main{
        margin-left: 100px;
        margin-right: 200px;
        background: pink;
    }
</style>
<div id="demo1">
    <div class="sub">sub</div>
    <div class="extra">extra</div>
    <div class="main">main</div>
</div>
```

* 绝对定位法

本方法不限制DOM书写顺序，先写主面板会使主面板部分优先渲染。如果中间栏含有最小宽度限制，或是含有宽度的内部元素，则浏览器窗口小到一定程度，主面板与侧栏会发生重叠。

```html
<style>
    .sub, .extra {
        position: absolute;
        top: 0;
        width: 200px;
    }
    .sub {
        left: 0;
        background: red;
    }
    .extra {
        right: 0;
        background: #00abff;
    }
    .main {
        margin: 0 200px;
        background: pink;
    }
</style>
<div class="sub">left</div>
<div class="main">main</div>
<div class="extra">right</div>
```

* margin负值法

  * 圣杯布局

  主面板设置宽度为100%，主面板与两个侧栏都设置浮动，常见为左浮动，这时两个侧栏会被主面板挤下去。通过负边距将浮动的侧栏拉上来，左侧栏的负边距为100%，刚好是窗口的宽度，因此会从主面板下面的左边跑到与主面板对齐的左边，右侧栏此时浮动在主面板下面的左边，设置负边距为负的自身宽度刚好浮动到主面板对齐的右边。为了避免侧栏遮挡主面板内容，在外层设置左右`padding`值为左右侧栏的宽度，给侧栏腾出空间，此时主面板的宽度减小。由于侧栏的负`margin`都是相对主面板的，两个侧栏并不会像我们理想中的停靠在左右两边，而是跟着缩小的主面板一起向中间靠拢。此时使用相对布局，调整两个侧栏到相应的位置。

  在这种写法中DOM元素的书写顺序不得更改；主面板部分优先渲染（一般主面板会比侧栏内容重要）；当面板的`main`内容部分比两边的子面板宽度小的时候，布局就会乱掉。可以通过设置`main`的`min-width`属性或使用双飞翼布局避免问题。

  ```html
  <style>
      .main {
          float: left;
          width: 100%;
          min-width: 400px;
          background: #00abff;
      }
      .sub {
          float: left;
          width: 190px;
          margin-left: -100%;
          position: relative;
          left: -190px;
          background: red;
      }
      .extra {
          float: left;
          width: 230px;
          margin-left: -230px;
          position: relative;
          right: -230px;
          background: pink;
      }
      #bd {
          padding: 0 230px 0 190px;
      }
  </style>
  <div id="bd">
      <div class="main">main</div>
      <div class="sub">sub</div>
      <div class="extra">extra</div>
  </div>
  ```

  * 双飞翼布局

  双飞翼布局在圣杯布局上做了改进，在`main`元素上加了一层`div`, 并设置`margin`,由于两侧栏的负边距都是相对于`main-wrap`而言，`main`的`margin`值变化便不会影响两个侧栏，因此省掉了对两侧栏设置相对布局的步骤。

  在这种写法中，主面板部分优先渲染（一般主面板会比侧栏内容重要）；圣杯采用的是`padding`，而双飞翼采用的`margin`，解决了圣杯布局`main`的最小宽度不能小于左侧栏的缺点；双飞翼布局不用设置相对布局，以及对应的`left`和`right`值；通过引入相对布局，可以实现三栏布局的各种组合，例如对右侧栏设置`position: relative; left: 190px;`,可以实现`sub+extra+main`的布局。

  ```html
  <style>
      .main-wrap {
          float: left;
          width: 100%;
          background: #00abff;
      }
      .sub {
          float: left;
          width: 190px;
          margin-left: -100%;
          background: red;
      }
      .extra {
          float: left;
          width: 230px;
          margin-left: -230px;
          background: pink;
      }
      .main {
          margin: 0 230px 0 190px;
      }
  </style>
  <div class="main-wrap">
      <div class="main">main</div>
  </div>
  <div class="sub">sub</div>
  <div class="extra">extra</div>
  ```

* flex

```html
<style>
    .layout {
        display: flex;
    }
    .main {
        flex: 1;
    }
    .aside {
        width: 200px;
    }
</style>
<div class="layout">
    <aside class="aside">侧边栏宽度固定</aside>
    <div class="main">主内容栏宽度自适应</div>
</div>
<div class="layout">
    <div class="main">主内容栏宽度自适应</div>
    <aside class="aside">侧边栏宽度固定</aside>
</div>
<div class="layout">
    <aside class="aside">左侧边栏宽度固定</aside>
    <div class="main">主内容栏宽度自适应</div>
    <aside class="aside">右侧边栏宽度固定</aside>
</div>
<div class="layout">
    <aside class="aside">第1个侧边栏宽度固定</aside>
    <aside class="aside">第2个侧边栏宽度固定</aside>
    <div class="main">主内容栏宽度自适应</div>
</div>
<div class="layout">
    <div class="main">主内容栏宽度自适应</div>
    <aside class="aside">第1个侧边栏宽度固定</aside>
    <aside class="aside">第2个侧边栏宽度固定</aside>
</div>
```



参考文章：

[CSS布局十八般武艺都在这里了](https://zhuanlan.zhihu.com/p/25565751)

[我熟知的三种三栏网页宽度自适应布局方法](https://www.zhangxinxu.com/wordpress/2009/11/%E6%88%91%E7%86%9F%E7%9F%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E4%B8%89%E6%A0%8F%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95/)

<div class="dividing-line"></div>

### 垂直居中

* 单行文本

```html
<style>
  .common {
    background: #00abff;
  }
  #demo1 {
    height: 100px;
    line-height: 100px;
  }
</style>
<div id="demo1" class="common">
    demo 1
</div>
```

* 元素高度不固定（在这里是子元素高度不固定）

  * vertical-align

  `vertical-align` 只对 `table-cell` 以及 `inline-element` 起作用，对于块级元素不起作用，`vertical-align` 的值是相对于其父元素的，父元素必须是行内元素。

  ```html
  <style>
    .common {
      background: #00abff;
    }
    #demo2 {
      display: table;
      height: 100px;
      margin-top: 10px;
    }
    #demo2 span {
      display: table-cell;
      vertical-align: middle;
    }
  </style>
  <div id="demo2" class="common">
      <span>demo 2</span>
  </div>
  ```

  * flex

  ```html
  <style>
    .common {
      background: #00abff;
    }
    #demo3 {
      display: flex;
      align-items: center;
      height: 100px;
      margin-top: 10px;
    }
  </style>
  <div id="demo3" class="common">
      <div>demo3</div>
  </div>
  ```

  * transform

  ```html
  <style>
    .common {
      background: #00abff;
    }
    #demo4 {
      position: relative;
      height: 100px;
      margin-top: 10px;
    }
    #demo4 div {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  </style>
  <div id="demo4" class="common">
      <div>demo 4</div>
  </div>
  ```

* 元素高度固定（在这里是子元素高度固定）

  * absolute + calc

  ```html
  <style>
    .common {
      background: #00abff;
    }
    #demo5 {
      position: relative;
      height: 100px;
      margin-top: 10px;
    }
    #demo5 div {
      position: absolute;
      height: 50px;
      top: calc(50% - 25px );			/*减去子元素高度的一半*/
      background: white;
    }
  </style>
  <div id="demo5" class="common">
      <div>demo 5</div>
  </div>
  ```

  * absolute + margin-top

  ```html
  <style>
    .common {
      background: #00abff;
    }
    #demo6 {
      position: relative;
      height: 100px;
      margin-top: 10px;
    }
    #demo6 div {
      position: absolute;
      height: 50px;
      margin-top: 25px;				/*减去子元素高度的一半*/
      background: white;
    }
  </style>
  <div id="demo6" class="common">
      <div>demo 6</div>
  </div>
  ```

<div class="dividing-line"></div>

### 水平居中

* 行内元素

给其父元素设置 `text-align:center` ，即可实现行内元素水平居中。

```html
<style>
  #demo1 {
    text-align: center;
  }
</style>
<div id="demo1">
    <span>hello world</span>
</div>
```

* 块级元素

  * 定宽元素

    1. `margin: 0 auto`

    ```html
    <style>
      .common {
        background: #00abff;
      }

      #demo2 {
        width: 100px;
        margin: 0 auto;
      }
    </style>

    <div id="demo2" class="common">
        demo 2
    </div>
    ```

    2. absolute + 负margin

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo3 {
        width: 100px;
        position: absolute;
        left: 50%;
        margin-left: calc( -0.5 * 100px ); /*-0.5*宽度*/
      }
    </style>
    <div id="demo3" class="common">
        demo 3
    </div>
    ```

    3. absolute + `margin: auto`

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo4 {
        position: absolute;
        left: 0;
        right: 0;
        width: 100px;
        margin: auto;
      }
    </style>
    <div id="demo4" class="common">
        demo 4
    </div>
    ```

  * 不定宽元素

    1. flex

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo5 {
        display: flex;
        width: 100%;
        justify-content: center;
      }
    </style>
    <div id="demo5">
        <p class="common">demo 5</p>
    </div>
    ```

    2. transform

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo6 {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      }
    </style>
    <div id="demo6" class="common">
        demo 6
    </div>
    ```

    3. grid + justify-content

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo7 {
        display: grid;
        width: 100%;
        justify-content: center;
      }
    </style>
    <div id="demo7">
        <p class="common">demo 7</p>
    </div>
    ```

    4. grid + justify-slef

    ```html
    <style>
      .common {
        background: #00abff;
      }
      #demo8 {
        display: grid;
        width: 100%
      }
      #demo8 .common {
        justify-self:center;
      }
    </style>
    <div id="demo8">
        <p class="common">demo 8</p>
    </div>
    ```



扩展阅读：

[CSS实现水平垂直居中的1010种方式](https://zhuanlan.zhihu.com/p/44439903)

[16种方法实现水平居中垂直居中](http://louiszhai.github.io/2016/03/12/css-center/)

<div class="dividing-line"></div>	

### CSS画圆、三角形和梯形

圆：宽高相等，border的圆角是宽高的一半。

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #00abff;
}
```

三角形：每条border实际上是梯形的，所以当宽高为0时，border设为固定宽度时，实际上是一个由四个三角形拼成的，以border宽度为长度的正方形，此时要变成三角形，只要把其他三边设置为透明即可。

```css
.triangle {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom: 100px solid #00abff;
}
```

梯形：因为border实际上是梯形的，只要有固定宽度，高度为0即可，当然其他三边也要变成透明。

```css
#trapezoid {
  width: 50px;
  height: 0;
  border: 50px solid transparent;
  border-bottom: 100px solid #00abff;
}
```

扩展阅读：

[CSS画三角形原理](https://www.jianshu.com/p/e3befed83603)

[纯CSS画的基本图形（矩形、圆形、三角形、多边形、爱心、八卦等）](https://www.cnblogs.com/jscode/archive/2012/10/19/2730905.html)

<div class="dividing-line"></div>	

### 自适应16：9的矩形

用`padding`占位：

```html
<style type="text/css">
    .b169 {
        width: 100%;
        height: 0;
        padding-bottom: 56.2%;
        position: relative;
    }

    .b169>.innerb169 {
        width: 100%;
        height: 100%;
        background-color: gainsboro;
        position: absolute;
    }
</style>
<div class="b169">
    <div class="innerb169">your html</div>
</div>
```

<div class="dividing-line"></div>	

### flex布局

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

![20181005153874309688967.png](/assets/images/前端常见知识点总结/20181005153874309688967.png)

* 容器属性

`flex-direction`：决定主轴的方向（即项目的排列方向）。

`flex-wrap`：默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

`flex-flow`：是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

`justify-content`：定义了项目在主轴上的对齐方式。

`align-items`：定义项目在交叉轴上如何对齐。

`align-content`：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

* 项目属性

`order`：定义项目的排列顺序。数值越小，排列越靠前，默认为0。

`flex-grow`：定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

`flex-shrink`：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

`flex-basis`：定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

`flex`：是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

`align-self`：允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

[Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

<div class="dividing-line"></div>	

### 清除浮动

当父级元素中的子元素全部浮动后，会导致父元素的高度坍塌，从而影响父元素的布局，所以需要通过清除浮动将父元素的高度撑起来。

```html
<style>
    .topDiv {
        width: 500px;
        border: 2px solid black;
    }
    .floatDiv {
        width: 100px;
        height: 100px;
        border: 2px dotted red;
        color: red;
        margin: 4px;
        float: left;
    }
    .bottomDiv {
        width: 500px;
        height: 100px;
        margin: 5px 0;
        border: 2px dotted black;
    }
    .textDiv {
        color: blue;
        border: 2px solid blue;
    }
</style>
<div class="topDiv">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
</div>
<div class="bottomDiv">...</div>
```

![20181003153849669213606.png](/assets/images/前端常见知识点总结/20181003153849669213606.png)

* clear

在浮动元素的父级元素末尾插入了一个没有内容的**块级元素**，并且定义他们的`clear`的样式。

```html
<style>
    .topDiv {
        width: 500px;
        border: 2px solid black;
    }
    .floatDiv {
        width: 100px;
        height: 100px;
        border: 2px dotted red;
        color: red;
        margin: 4px;
        float: left;
    }
    .bottomDiv {
        width: 500px;
        height: 100px;
        margin: 5px 0;
        border: 2px dotted black;
    }
    .textDiv {
        color: blue;
        border: 2px solid blue;
        clear: left;
    }
    .blankDiv {
        clear: both; /* or left */
    }
</style>
<div class="topDiv">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
    <div class="blankDiv"></div>
</div>
<div class="bottomDiv">...</div>
```

![20181003153849841624036.png](/assets/images/前端常见知识点总结/20181003153849841624036.png)

* 伪元素

```html
<style>
    .topDiv {
        width: 500px;
        border: 2px solid black;
    }
    .floatDiv {
        width: 100px;
        height: 100px;
        border: 2px dotted red;
        color: red;
        margin: 4px;
        float: left;
    }
    .bottomDiv {
        width: 500px;
        height: 100px;
        margin: 5px 0;
        border: 2px dotted black;
    }
    .textDiv {
        color: blue;
        border: 2px solid blue;
    }
    .clearfix:after {
        content: '';
        height: 0;
        display: block;
        clear: both;
    }
</style>
<div class="topDiv clearfix">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
</div>
<div class="bottomDiv">...</div>
```

![20181003153849841624036.png](/assets/images/前端常见知识点总结/20181003153849841624036.png)

* overflow

在父级元素上添加了一个值为`auto`的`overflow`属性，构件了一个BFC（块格式化上下文），从而父元素的高度立即被撑起，将浮动元素包裹在内。在这里`overflow`可以是除`visible`外任何有效值，不过`overflow: auto;`对SEO友好一点。

```html
<style>
    .topDiv {
        width: 500px;
        border: 2px solid black;
        overflow: auto;
    }
    .floatDiv {
        width: 100px;
        height: 100px;
        border: 2px dotted red;
        color: red;
        margin: 4px;
        float: left;
    }
    .bottomDiv {
        width: 500px;
        height: 100px;
        margin: 5px 0;
        border: 2px dotted black;
    }
    .textDiv {
        color: blue;
        border: 2px solid blue;
    }
</style>
<div class="topDiv">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
</div>
<div class="bottomDiv">...</div>
```

![20181003153849841624036.png](/assets/images/前端常见知识点总结/20181003153849841624036.png)

扩展阅读：

[清除浮动的四种方式及其原理理解](https://juejin.im/post/59e7190bf265da4307025d91)

<div class="dividing-line"></div>	

### BFC

浮动元素和绝对定位元素，非块级盒子的块级容器（例如` inline-blocks`, `table-cells`, 和 `table-captions`），以及`overflow`值不为`visiable`的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。

BFC中的元素的布局是不受外界的影响（我们往往利用这个特性来消除浮动元素对其非浮动的兄弟元素和其子元素带来的影响。）并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

满足下列条件之一就可以触发BFC：

* 根元素，即HTML元素

* `float`的值不为`none`

* `overflow`的值不为`visible`

* `display`的值为`inline-block`、`table-cell`、`table-caption`

* `position`的值为`absolute`或`fixed`

BFC布局规则：

* 内部的Box会在垂直方向，一个接一个地放置。

* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

* 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

* BFC的区域不会与float box重叠。

* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

* 计算BFC的高度时，浮动元素也参与计算。

BFC的作用：

* 解决margin叠加问题

```html
<style>
    .common {
        color:black;
        background: #FF0000;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 50px;
    }
</style>
<div class="common">...</div>
<div class="common">...</div>
```

![20181003153856707350087.png](/assets/images/前端常见知识点总结/20181003153856707350087.png)

上面两个`div`元素发生了外边距折叠，两个`div`之间的`margin`是`50px`而不是`100px`，如果想让两个元素之间是`100px`，可以新建一个BFC：

```html
<style>
    .common {
        color:black;
        background: #FF0000;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 50px;
    }
    .bfc {
        overflow: hidden;
    }
</style>
<div class="bfc">
    <div class="common">...</div>
</div>
<div class="common">...</div>
```

![20181003153856946466472.png](/assets/images/前端常见知识点总结/20181003153856946466472.png)

* 用于布局

下面代码中`aside`创建了一个BFC，由于BFC的左外边距会触碰到包含块容器的左外边框，即使存在浮动也是如此，所以`main`和`aside`的左外边距都会触碰到包含块容器的左外边框。

```html
<style>
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: blue;
    }
    .main {
        height: 200px;
        background: #f00;
    }
</style>
<div class="aside"></div>
<div class="main"></div>
```

![2018100315385750616798.png](/assets/images/前端常见知识点总结/2018100315385750616798.png)

要解决这个问题，可以给`main`创建一个BFC，这样利用BFC的区域不会与float box重叠的特性完成一个两栏布局：

```html
<style>
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: blue;

    }
    .main {
        height: 200px;
        background: #f00;
        overflow: hidden;
    }
</style>
<div class="aside"></div>
<div class="main"></div>
```

![20181003153857514010502.png](/assets/images/前端常见知识点总结/20181003153857514010502.png)

* 清除浮动

清除浮动有一个方法是添加`overflow`属性，这就是利用BFC的计算高度包括浮动元素的特性。

扩展阅读：

[深入理解BFC](https://www.cnblogs.com/xiaohuochai/p/5248536.html)

[深入理解BFC和Margin Collapse](https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html)

[CSS之BFC详解](http://www.html-js.com/article/1866)

<div class="dividing-line"></div>	

### CSS外边距合并（margin collapsing）

块级元素的上外边距（margin-top）和下外边距（margin-bottom）有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为**外边距折叠**（margin collapsing）。

下面列出了会发生外边距折叠的三种基本情况：

* 相邻元素之间

  毗邻的两个元素之间的外边距会折叠（除非后一个元素需要清除之前的浮动）。

* 父元素与其第一个或最后一个子元素之间
  如果在父元素与其第一个子元素之间不存在边框、内边距、行内内容，也没有创建块格式化上下文、或者清除浮动将两者的 margin-top 分开；或者在父元素与其最后一个子元素之间不存在边框、内边距、行内内容、height、min-height、max-height将两者的 margin-bottom 分开，那么这两对外边距之间会产生折叠。此时子元素的外边距会“溢出”到父元素的外面。

* 空的块级元素
  如果一个块级元素中不包含任何内容，并且在其 margin-top 与 margin-bottom 之间没有边框、内边距、行内内容、height、min-height 将两者分开，则该元素的上下外边距会折叠。

一些需要注意的地方：

* 上述情况的组合会产生更复杂的外边距折叠。
* 即使某一外边距为0，这些规则仍然适用。因此就算父元素的外边距是0，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。
* 如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和。
* 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。

如何避免：

- 浮动元素不会与任何元素发生叠加，也包括它的子元素
- 创建了 BFC 的元素不会和它的子元素发生外边距叠加
- 绝对定位元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
- inline-block 元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
- 普通流中的块级元素的 margin-bottom 永远和它相邻的下一个块级元素的 margin-top 叠加，除非相邻的兄弟元素 clear
- 普通流中的块级元素（没有 border-top、没有 padding-top）的 margin-top 和它的第一个普通流中的子元素（没有clear）发生 margin-top 叠加
- 普通流中的块级元素（height为 auto、min-height为0、没有 border-bottom、没有 padding-bottom）和它的最后一个普通流中的子元素（没有自身发生margin叠加或clear）发生 margin-bottom叠加
- 如果一个元素的 min-height 为0、没有 border、没有padding、高度为0或者auto、不包含子元素，那么它自身的外边距会发生叠加

参考文章：

[深度剖析Margin塌陷，BFC，Containing Block之间的关系](https://zhuanlan.zhihu.com/p/30168984)

[外边距合并](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

[inline-block、BFC、边距合并](https://www.jianshu.com/p/a14dbc7e10e8)

[ 深入理解CSS外边距折叠（Margin Collapse）](https://segmentfault.com/a/1190000010346113)

<div class="dividing-line"></div>	

### 移动端适配

**物理像素(physical pixel)**

物理像素又被称为设备像素，他是显示设备中一个最微小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。

**设备独立像素(density-independent pixel)**

设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素。

**CSS像素**

CSS像素是一个抽像的单位，主要使用在浏览器上，用来精确度量Web页面上的内容。一般情况之下，CSS像素称为与设备无关的像素(device-independent pixel)，简称DIPs。

**屏幕密度**

屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。

**设备像素比(device pixel ratio)**

设备像素比简称为dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

```
设备像素比 ＝ 物理像素 / 设备独立像素
```

在JavaScript中，可以通过`window.devicePixelRatio`获取到当前设备的dpr。而在CSS中，可以通过`-webkit-device-pixel-ratio`，`-webkit-min-device-pixel-ratio`和 `-webkit-max-device-pixel-ratio`进行媒体查询，对不同dpr的设备，做一些样式适配(这里只针对webkit内核的浏览器和webview)。

dip或dp,（device independent pixels，设备独立像素）与屏幕密度有关。dip可以用来辅助区分视网膜设备还是非视网膜设备。

在不同的屏幕上，CSS像素所呈现的物理尺寸是一致的，而不同的是CSS像素所对应的物理像素具数是不一致的。在普通屏幕下`1`个CSS像素对应`1`个物理像素，而在Retina屏幕下，`1`个CSS像素对应的却是`4`个物理像素。

* viewport

Flexible通过JS来动态改写`meta`标签：

1. 动态改写`<meta>`标签

2. 给`<html>`元素添加`data-dpr`属性，并且动态改写`data-dpr`的值

3. 给`<html>`元素添加`font-size`属性，并且动态改写`font-size`的值

其他尺寸通过下面scss函数将`px`转化为`rem`：

```scss
@function px2em($px, $base-font-size: 16px) {
    @if (unitless($px)) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
        @return px2em($px + 0px); // That may fail.
    } @else if (unit($px) == em) {
        @return $px;
    }
    @return ($px / $base-font-size) * 1em;
}
```

文字不建议用`rem`，因为我们**不希望文本在Retina屏幕下变小**，另外，我们**希望在大屏手机上看到更多文本**。可以用这样一个`mixin`来解决文字字号大小问题：

```scss
@mixin font-dpr($font-size){
    font-size: $font-size;

    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}
```

* vm配合rem

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

```scss
// 页面适配
// 所有单位均需采用rem(视觉图的像素值)方法计算相应的虚拟像素值
$vm_design: 360; // 根据需要替换成设计稿的值,比如设计稿的宽度是360px
$vm_fontsize: $vm_design / 10;  // 是$vm_design的十分之一

@function rem($px) {
  @return ($px / $vm_fontsize) * 1rem;
}

// 页面适配
// 根元素大小使用vw单位
html {
  font-size: ($vm_fontsize / $vm_design) * 100vw; // 同时通过Media Queries 限制根元素最大最小值
  @media screen and (max-width: 320px) {
    font-size: 32px;
  }
  @media screen and (min-width: 540px) {
    font-size: 54px;
  }
}

// body 也增加最大最小宽度限制,避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
  max-width: 540px;
  min-width: 320px;
}

html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
```

参考文章：

[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)

[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

<div class="dividing-line"></div>	

## JavaScript

### JavaScript的数据类型

6种简单数据类型（也称为基本数据类型）：`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`

1种复杂数据类型： `Object`

<p id="div-border-left-green">`null`被认为是一个空对象的引用，使用`typeOf`操作符会返回`Object`，所以类型判断时通常用`Object.prototype.toString.call()`去判断，比如: `Object.prototype.toString.call('1') === "[object String]"`</p>


<div class="dividing-line"></div>	

### `==` 和 `===` 的区别

`==`操作符会先进行类型转换再进行比较，类型转换按照一下规则进行：

* 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值（`false`转换成`0`，`true`转换成`1`）
* 如果一个操作数是字符串，另一个操作数是数值，在比较前先将字符串转换为数值
* 如果是对象，调用对象的`valueOf()`方法得到基本类型后按第一条规则再进行比较
* `null`和`undefined`相等（`undefined`值派生自`null`值）
* 两个都是对象，比较它们是不是指向同一个对象
* 两边有一个是`NaN`，`==`返回`false`，`!=`返回`true`（`Nan`不等于`NaN`）

`===`操作符在比较前不会进行类型转换，是严格相等，注意`undefined  === null` 返回`false`。

附上`Number()`函数的转换规则如下：

- 如果是`Boolean`值，`true`和`false`将分别被转换为`1`和`0`
- 如果是数字值，只是简单的传入和返回
- 如果是`null`，返回`0`
- 如果是`undefined`，返回`NaN`
- 如果是字符串，遵循下列规则
  - 如果字符串只包含数字，则将其转换成十进制数值
  - 如果字符串中包含有效的浮点格式，则将其转换成对应的浮点数值
  - 如果字符串中包含有效的十六进制格式，则将其转换成相同大小的十进制整数
  - 如果字符串是空，则将其转换成`0`
  - 如果字符串中包含除上述格式之外的字符串，则将其转换成`NaN`。
- 如果是对象，则调用对象的`valueof()`方法，然后依照前面的规则转换成返回值。如果返回值是`NaN`，则调用对象的`toString()`方法，然后再次依照前面的规则转换返回的字符串值。

 <div class="dividing-line"></div>

### BOM是什么，有哪些BOM对象

BOM（Browser Object Model）是浏览器对象模型的缩写，它提供了独立于内容而与浏览器窗口进行交互的对象，并且每个对象都提供了很多方法与属性。

BOM对象包括：window对象、location对象、navigation对象、screen对象和history对象。

<div class="dividing-line"></div>	

### 创建对象的几种方法

* 字面量

```javascript
var o = {
    name: 'tc9011',
};
```

* 构造函数

```javascript
var o1 = new Object({name: 'tc9011'});
```

```javascript
function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

var tc = new Human('t', 'c');
```

* `Object.create`

```javascript
const person = {
  isHuman: true,
};

const me = Object.create(person);
```

* 工厂模式

```javascript
function createPerson(name, age, job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function (){
    console.log(this.name);
  };
  return o;
}
var person1 = createPerson('tc',27,'SE');
var person2 = createPerson('zj',23,'Designer');

console.log(person1.name);                    // tc
console.log(person2.name);                    // zj
```

* 原型模式

```javascript
function Human() {}
Human.prototype.firstName = 't';
Human.prototype.lastName = 'c';
Human.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

var p1 = new Human();
console.log(p1.firstName);                    // t
console.log(p1.lastName);                     // c
p1.fullName();                                // t c
```

* 组合模式

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['tc','zj'];
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  }
};
var person1 = new Person('tc',29,'se');
var person2 = new Person('zj',24,'art');
person1.friends.push('wcx');
console.log(person1.friends);		               //["tc", "zj", "wcx"]
console.log(person2.friends);		               //["tc", "zj"]
console.log(person1.friends === person2.friends);  //false
console.log(person1.sayName === person2.sayName);  //true
```

扩展阅读：

[JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)

<div class="dividing-line"></div>	

### 当new Foo()时发生了什么

1. 创建一个新对象
2. 将新创建的空对象的`_proto_`指向其构造函数`Foo`的原型
3. 将构造函数的作用域赋给新对象（因此`this`指向了这个新对象）
4. 执行构造函数中的代码（为这个新对象添加属性）
5. 返回新对象

```javascript
new Person("John") = {
    var obj = {};
	obj.__proto__ = Person.prototype; // 此时便建立了obj对象的原型链：
	// obj->Person.prototype->Object.prototype->null
	var result = Person.call(obj,"John"); // 相当于obj.Person("John")
	return typeof result === 'object' ? result : obj; // 如果无返回值或者返回一个非对象值，则将obj返回作为新对象
}
```

扩展阅读：

[new创建对象的过程发生了什么](https://alexzhong22c.github.io/2017/08/12/js-new-happen/)

[JavaScript深入之new的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

 <div class="dividing-line"></div>

### let 和 const

* let

`let`用来声明变量，但所声明的变量只在`let`命令所在的代码块中有效（`let`的作用域是块，而`var`的作用域是函数）：

```javascript
// 在for循环中，设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}                                       
// 10, 10, 10, 10, 10, 10, 10, 10, 10, 10


for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}                                       
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语 法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```javascript
var a = 0;

if (true) {
    a = 10;               // ReferenceError: a is not defined
    let a;
}                 
```

由于TDZ的存在，`let`中也不存在变量提升:

```javascript
console.log(a);          // undefined
var a = 10;

console.log(b);			// Uncaught ReferenceError: b is not defined
let b = 10; 
```

`let`不允许重复声明:

```javascript
if (true) {
    let a;
    let a;   // SyntaxError: Identifier 'a' has already been declared
}
```

* const

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。

```javascript
const number = 1;
number = 3;   // TypeError: Assignment to constant variable.

const bar;   // SyntaxError: Missing initializer in const declaration
bar = 1;
```

`const`只在声明所在的块级作用域内有效。声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

`const`与`let`一样不可重复声明。

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址 不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向 的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），**变量指向的内存地址，保存的只是一个指针**，`const`只能保证这个指针是 固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个 对象声明为常量必须非常小心。

```javascript
const person = {};
person.name = 'tc9011';

console.log(person.name);               // tc9011
```

<div class="dividing-line"></div>

### arguments

`arguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`arguments`对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处。

`arguments`对象不是一个 `Array` 。它类似于`Array`，但除了length属性和索引元素之外没有任何`Array`属性。

但是它可以被转换为一个真正的`Array`：

```javascript
function f() {
  var args1 = Array.prototype.slice.call(arguments);
  var args2 = [].slice.call(arguments);

  // ES2015
  const args3 = Array.from(arguments);
  const args4 = [...arguments];

  console.log(args1);
  console.log(args2);
  console.log(args3);
  console.log(args4);
}

f('1', '2');
// [ '1', '2' ]
// [ '1', '2' ]
// [ '1', '2' ]
// [ '1', '2' ]
```

<div class="dividing-line"></div>

### JavaScript作用域链

全局执行环境是最外围的一个执行环境。在web浏览器中，全局执行环境被认为是window对象。因此所有全局变量和函数都是作为window对象的属性和方法创建的。

某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁。

每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境会被推入一个环境栈中。在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。

当代码在一个环境中执行时，会创建变量对象的一个作用域链。作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。

作用域链的前端始终是当前执行的代码所在环境的变量对象。如果这个环境是函数，则其活动对象作为变量对象。活动对象在最开始时只包含一个变量-`arguments`对象（这个对象在全局环境中不存在）。作用域链中的下一个变量对象来自外部环境，而再下一个对象则来自于下一个外部环境。这样一直延续到全局执行环境，全局执行环境的变量对象始终都是作用域中的最后一个对象。

**作用域链本质上是一个指向变量对象的指针列表，它只引用但不实际包含变量对象**。

<div class="dividing-line"></div>

### 什么是闭包

闭包是指有权访问另一个函数作用域中的变量的**函数**。创建闭包的常见方式，就是在一个函数内部创建另一个函数：

```javascript
function foo() {
  var a = 0;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz();						// 0
```

构成闭包的必要条件有两个：

1. 函数内部有函数（`foo`函数中有`bar`）

2. 外部函数的局部变量被内部函数引用（`a`被`bar`函数引用）

闭包本质源自两点，词法作用域和函数当作值传递。当函数可以记住并访问所在的词法作用域，并在当前词法作用域之外执行，就产生了闭包。

闭包有下面三种常见形式：

* 调用函数里面的函数

```javascript
function foo() {
  var a = 0;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz();						// 0
```

* 回调函数

```javascript
function foo() {
  var a = 0;
  function bar() {
    console.log(a);
  }
  baz(bar);
}

function baz(fn) {
  fn();
}

foo();                    					// 0

/************分割线**************/

var a = 0;
setTimeout(function () {
  console.log(a);
}, 1000);

function setTimeout(fn, delay) {
  // delay code
  fn();                                     // 0
}
```

* 对象

```javascript
function coolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = coolModule();

foo.doSomething();                              // cool
foo.doAnother();                                // 1 ! 2 ! 3
```

* IIFE(立即执行函数表达式)方式

严格来说它并不是闭包，因为它并不是在本身词法作用域以外执行的。`a`是通过普通词法作用域查找发现的，而不是闭包。

```javascript
var a = 0;
(function () {
  console.log(a);                             // 0
})();
```

为什么`a`是通过词法作用域查找发现的？上面代码中的匿名函数实际上是一个函数表达式。

举个例子，比如下面代码初始化了变量`count`，将其值设置为5。当然这个变量是没有必要的，因为可以直接把值传递给函数:

```javascript
var count = 5;
outputNumbers(count);

/*********等价于***********/

outputNumbers(5);
```

这样做之所以可行，是因为变量只不过是值的另一种表现形式，因此用实际的值替换变量没有问题。再看下面的例子：

```javascript
var someFunction = function() {
  // 这里是块级作用域
}；
someFunction();
```

这个例子先定义了一个函数，然后立即调用它，定义函数的方式是创建一个匿名函数，并把匿名函数赋值给变量`someFunction`。而调用函数的方式是在函数名称后面添加一对`()`，通过前面的例子我们知道，可以使用实际的值来取代变量`count`，这里如果用函数值直接取代函数名，会导致错误：

```javascript
function() {
  // 这里是块级作用域	
}();  // 出错
```

这是因为JavaScript将`function`关键字当作一个函数声明的开始，而函数声明后面不能跟`()`。但是函数表达式后面可以跟`()`。要将函数声明转换成函数表达式，只要像下面这样加上`()`就可以：

```javascript
(function() {
  // 这里是块级作用域
})();
```

所以最开始的例子中，等价于以下代码：

```javascript
var a = 0;
var fn = function () {
  console.log(a);                             // 0
};
fn();
```

所以这里对`a`的引用只是通过词法作用域查找而得到的。由于在匿名函数中定义的任何变量，都会在执行结束时被销毁，所以可以解决`for`循环中通过`var`定义的`i`在全局中都指向同一个`i`的问题：

```javascript
for (var i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i)                        // 5 5 5 5
  }, 1000);
}

for (var i = 1; i < 5; i++) {
  (function (j) {
    setTimeout(function() {
      console.log(j)                      // 1 2 3 4
    }, 1000);
  })(i);
}
```

在这个例子中，因为`setTimeout`中的匿名函数是一个闭包，它能够访问IIFE作用域中的所有变量，比如这里的`j`。也就是说IIFE创建了可以被封闭起来的闭包。

闭包可以用在许多地方。它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

<div class="dividing-line"></div>	

### 原型和原型链

每个实例对象（object ）都有一个私有属性（称之为 `__proto__`）指向它的原型对象（**prototype**）。该原型对象也有一个自己的原型对象 ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个**原型链**中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的`Object`的实例。

无论什么时候，只要创建一个新函数，就会根据一组特定的规则为该函数创建一个`prototype`属性，这个属性指向函数的原型对象，而且只有函数才有`prototype `属性（也就是说实例对象和函数都有原型对象，只是实例对象通过`_proto_`访问自己的原型对象，而函数是通过`prototype`）。

在默认情况下。所有原型对象都会自动获得一个`constructor`（构造函数）属性。这个属性包含一个指向`prototype`属性所在函数的指针。通过这个构造函数还可以继续为原型对象添加其他属性和方法。

创建自定义的构造函数之后，其原型对象默认只会取得`constructor`属性；至于其他方法，则都是从Object继承而来。当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。ECMA-262第五版中管这个指针叫`[[prototype]]`。虽然在脚本中没有标准的方式访问`[[prototype]]`，但Firefox、Safari和Chrome在每个对象上都支持一个属性`_proto_`；而在其他实现中，这个属性对脚本是完全不可见的。不过，最重要的是，这个连接存在于实例与构造函数的原型对象之间，而不是存在与实例与构造函数之间。

举个例子： 

![20170703149909094932124.png](/assets/images/前端常见知识点总结/20170703149909094932124.png)

从上图可以看出`person1`和`person2`的构造函数是是`Person`，也就是：

```javascript
person1.constructor === Person
```

而`Person`构造函数的原型的对象的`constructor`也指向`Person`，即：

```javascript
Person.prototype.constructor === Person
```

每个对象都有` __proto__ `属性，在这里`person1`实例的`_proto_`属性指向构造函数的原型对象，即：

```javascript
person1.__proto__ === Person.prototype
person1.__proto__.constructor === Person
```

每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。如果让原型对象等于另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓原型链的基本概念。

```javascript
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();    // 重写原型对象，代之以一个新类型的实例
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue());	//true
```

<div class="dividing-line"></div>	

### JavaScript的继承

* 原型链继承

通过重写原型对象，代之以一个新类型的实例，来扩展原型搜索机制，从而实现继承：

```javascript
function Father() {
    this.lastName = 't';        
    this.isHuman = true;
}

var father = new Father();
console.log(father.isHuman);                    // t
console.log(father.lastName);                   // true


function Son() {
    this.firstName = 'c';
}

Son.prototype = new Father();					// 重写Son的原型对象

var son = new Son();
console.log(son.lastName);                       // t
console.log(son.isHuman);                        // true 
console.log(son.firstName);                      // c
```

缺点：

1. 包含引用类型值的原型属性会被所有实例共享

```javascript
function Father() {
    this.lastName = 't';        
    this.isHuman = true;
    this.card = {							  // 引用类型会被所有实例共享
        bank: '',
        ID: ''
    };
}

var father = new Father();
console.log(father.isHuman);                    // t
console.log(father.lastName);                   // true


function Son() {
    this.firstName = 'c';
}

Son.prototype = new Father();

var son = new Son();
console.log(son.lastName);                       // t
console.log(son.isHuman);                        // true 
console.log(son.firstName);                      // c

son.card.bank = 'BOC';							 // son实例改变card的值会影响其他实例

var son2 = new Son();
console.log(son2.card.bank);                    // BOC
```

2. 在创建子类型的实例时，不能向父类型的构造函数中传递参数

因此实践中很少会单独使用原型链。

* 借助构造函数继承（经典继承）

通过使用`apply()`和`call()`方法在新创建的对象上执行构造函数。

```javascript
function Father(name) {
    this.lastName = name;        
    this.isHuman = true;
    this.card = {
        bank: 'ICBC',
    };
}

function Son() {
    this.firstName = 'c';
    Father.call(this, 't');							// 向父类型传参
}

var son = new Son();
console.log(son.card.bank);                         // 'ICBC'
console.log(son.lastName);                          // t
son.card.bank = 'BOC';
console.log(son.card.bank);                         // 'BOC'

var son2 = new Son();
console.log(son2.card.bank);                        // 'ICBC'
```

优点：

1. 避免了引用类型的属性被所有实例共享
2. 创建子类型的实例时，可以向父类型的构造函数中传递参数

缺点：

1. 方法都在构造函数中定义，因此函数复用就无从谈起。

所以借用构造函数的技术也很少单独使用。

* 组合继承

使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

```javascript
function Father(name) {
    this.name = name;
    this.isHuman = true;
    this.card = {
        bank: 'ICBC',
    };
}

Father.prototype.getName = function () {
    console.log(this.name);
};

function Son(name) {
    Father.call(this, name);
}

Son.prototype = new Father();

var son = new Son('tc');
console.log(son.isHuman);                               // true
console.log(son.name);                                  // tc
son.getName();                                          // tc

console.log(son.card.bank);                             // ICBC
son.card.bank = 'BOC';
console.log(son.card.bank);                             // BOC

var son2 = new Son('zj');
console.log(son2.isHuman);                              // true
console.log(son2.name);                                 // zj
son2.getName();                                         // zj
console.log(son2.card.bank);                            // ICBC
```

优点：

1. 融合原型链继承和构造函数的优点

缺点：

1. 都会调用两次父类型的构造函数，一次在创建子类型原型的时候，另一次在子类型构造函数内部

是 JavaScript 中最常用的继承模式。

* 原型式继承

通过`Object.create()`实现继承。

```javascript
var person = {
  name: 'tc',
  friend: ['a', 'b', 'c']
};

var anotherPerson = Object.create(person);
anotherPerson.name = 'zz';
anotherPerson.friend.push('d');
console.log(anotherPerson.friend);     // [ 'a', 'b', 'c', 'd' ]

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'jj';
yetAnotherPerson.friend.push('e');
console.log(yetAnotherPerson.friend);  // [ 'a', 'b', 'c', 'd', 'e' ]

console.log(person.friend);	           // [ "a", "b", "c", "d", "e" ]
```

优点：

1. 在不需要创建构造函数，且想让一个对象与另一个对象保持类似的情况下，可以很方便地实现继承

缺点：

1. 引用类型的属性被所有实例共享

* 寄生式继承

通过创建一个用于封装继承过程的函数来实现继承，该函数内部以某种方式（不一定是使用下面的`Object.create()`）来增强对象，最后返回该对象。

```javascript
var person = {
  name: 'tc',
  friend: ['a', 'b', 'c']
};

function createAnother(original) {
  var clone = Object.create(original);
  clone.sayHi = function () {
    console.log('hi')
  };
  return clone;
}

var anotherPerson = createAnother(person);
anotherPerson.sayHi();			                          // hi
```

缺点：

1. 不能做到函数复用

在主要考虑对象的情况下，可以使用寄生式继承。

* 寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。本质上，就是使用寄生式继承来继承父类型的原型，然后再将结果指定给子类型的原型。

```javascript
function inheritPrototype(Son, Father) {
  var prototype = Object.create(Father.prototype);	// create object
  prototype.constructor = Son;        
  Son.prototype = prototype;
}

function Father(name) {
  this.name = name;
  this.colors = ['red','blue','green'];
}
Father.prototype.sayName = function () {
  console.log(this.name);
};

function Son(name, age) {
  Father.call(this,name);
  this.age = age;
}

inheritPrototype(Son, Father);

Son.prototype.sayAge = function () {
  console.log(this.age);
};

var son = new Son('a', 11);
console.log(son.name);                   // a
console.log(son.colors);                 // [ 'red', 'blue', 'green' ]
son.sayAge();                            // 11
son.sayName();                           // a
```

优点： 

1. 只调用一次父类构造函数
2. 原型链保持不变，能正常使用`instanceof`和`isPrototypeOf()`

普遍认为寄生组合式继承是引用类型最理想的继承范式。

<div class="dividing-line"></div>	

### JavaScript中的this

`this`是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。

`this`总是指向调用它的对象，通过`apply()`和`call()`可以手动改变`this`的指向。

* 纯函数调用

  `this`代表全局对象`window`或`global`(在node中)，下面的`bar()`的调用可以看成`window.bar()`或者`global.bar()`(在node中)：

```javascript
var x = 1;
function bar() {
  console.log(this.x);			
}
bar();                          // 1
```

* 作为对象的方法调用

`this`指向调用它的对象。

```javascript
function sayHi() {
  console.log(`${this.name} say hi`);
  console.log(this === o);
}

var o = {
  name: 'tc9011',
  sayHi: sayHi,
};

o.sayHi();                                  
// tc901 say hi
// true
```

* 作为构造函数调用

`this`指向构造函数生成的对象。

```javascript
var name = 'tc';

function Person(name) {
  this.name = name;
}

var a = new Person('tc9011');
console.log(a.name);                                 // tc9011
console.log(this.name);                              // tc
```

* `apply`或`call`调用

`apply()`和`call()`作用都是改变函数的调用对象（两者的区别在于第一参数后面的接受参数的形式，`call()`方法接受的是若干个参数的列表，而`apply()`方法接受的是一个包含多个参数的数组。）。它们的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数。

```javascript
function sayName(age, isHuman) {
  this.age = age;
  this.isHuman = isHuman;

  console.log(this.name);
  console.log(this.age);
  console.log(this.isHuman)
}

var o = {
  name: 'tc9011',
  sayName: sayName,
};
var o2 = {
  name: 'tc',
};

o.sayName.call(o2, 15, true);                      // tc 15 true
o.sayName.apply(o2, [16, false]);                  // tc 16 false
```

需要注意的是，在箭头函数中，不会绑定`this`，`this`的指向始终由最近一层非箭头函数决定，并且` this `值不可以被改变，在函数的生命周期内始终保持一致。

```javascript
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100)
}

var id = 21;

foo.call({id: 42});                 // id: 42
```

<p id="div-border-left-green">call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。</p>

<div class="dividing-line"></div>	

### 深拷贝与浅拷贝

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。

深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

* 浅拷贝

```javascript
// shallow copy in the array
var array1 = [0, 1, 2, 3, { name: 'a' }];
var array2 = array1.slice();
console.log(array2);                // [ 0, 1, 2, 3, { name: 'a' } ]

array2.push(4);
array2[4].name = 'b';
console.log(array1);                // [ 0, 1, 2, 3, { name: 'b' } ]
console.log(array2);                // [ 0, 1, 2, 3, { name: 'b' }, 4 ]


// common shallow copy
function shallowCopy(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      targetObj[keys] = source[keys];
    }
  }
  return targetObj;
}

var a = {
  name: 'a',
};

var b = shallowCopy(a);
console.log(b);                       // { name: 'a' }
```

* 深拷贝

```javascript
// 通过递归实现深拷贝，但是没有办法处理源对象内部循环引用的问题，同时对Date，Funcion等类型值也没有实现真正的深度复制，但是这些类型的值在重新定义的时候一般都是直接覆盖，所以也不会对源对象产生影响，从一定程度上来说也算是实现了一个深拷贝。
function deepCopy(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepCopy(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

var o1 = {
  arr: [1, 2, 3],
  obj: {
    key
