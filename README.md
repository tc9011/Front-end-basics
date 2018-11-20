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
    key: 'value'
  },
  fun: function(){
    return 1;
  }
};
var o2 = deepCopy(o1);
console.log(o2 === o1);                     // false
console.log(o2.obj === o1.obj);             // false
console.log(o2.fun === o1.fun);             // true


// 通过`JSON.parse`和`JSON.stringify`实现深拷贝，在序列化JavaScript对象时，所有函数和原型成员会被有意忽略，这个实现可以满足一些比较简单的情况，能够处理JSON格式所能表示的所有数据类型，同时如果在对象中存在循环应用的情况也无法正确处理。
function deepCopy(source){
  return JSON.parse(JSON.stringify(source));
}
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o2 = deepCopy(o1);
console.log(o2);                          // { arr: [ 1, 2, 3 ], obj: { key: 'value' } }


// 通用的深拷贝
function deepCopy(source) {
  if (!source || typeof source !== 'object') {
    throw new Error ('error arguments');
  }

  var targetObj = Object.prototype.toString.call(source) === '[object Array]' ? [] : {};
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object') {
        targetObj[key] = Object.prototype.toString.call(source) === '[object Array]' ? [] : {};
        targetObj[key] = deepCopy(source[key]);
      } else if (source[key] && Object.prototype.toString.call(source[key]) === '[object Function]') {
        targetObj[key] = new Function("return " + source[key].toString())();
      } else {
        targetObj[key] = source[key];
      }
    }
  }
  return targetObj;
}

var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  fun: function(){
    return 1;
  }
};

var o2 = deepCopy(o1);

console.log(o2 === o1);                     // false
console.log(o2.obj === o1.obj);             // false
console.log(o2.fun === o1.fun);             // false

o2.obj.key = 'tc';
console.log(o2);                            // { arr: [ 1, 2, 3 ], obj: { key: 'tc' }, fun: [Function] }
console.log(o1);                            // { arr: [ 1, 2, 3 ], obj: { key: 'value' }, fun: [Function: fun] }
```

<div class="dividing-line"></div>	

### 事件循环

js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是“事件循环（Event Loop）”。

可以通过下面两个例子直观地看一下，事件循环执行的时候的顺序：

```javascript
$.on('button', 'click', function onClick() {
  setTimeout(function () {
    console.log('You clicked the button!');
  }, 2000);
});

console.log('Hi!');

setTimeout(function timeout() {
  console.log('Click the button!');
}, 5000);

console.log('Welcome to loupe.');
// Hi!
// Welcome to loupe.
// Click the button!

// 当你点击按钮时会输出：
// You clicked the button!
```

![20180923153763764873676.gif](/assets/images/前端常见知识点总结/20180923153763764873676.gif)



```javascript
setTimeout(function () {
  console.log(1);
});

new Promise(function (resolve, reject) {
  console.log(2)
  resolve(3)
}).then(function (val) {
  console.log(val);
});

// 2
// 3
// 1
```

![20180923153763681535221.gif](/assets/images/前端常见知识点总结/20180923153763681535221.gif)

不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）。

以下事件属于宏任务：

- `setInterval()`
- `setTimeout()`
- `setImmediate()`
- I/O

以下事件属于微任务

- `process.nextTick`

- `new Promise()`
- `MessageChannel`

当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

浏览器和 node 环境执行顺序不同，浏览器是先把一个栈以及栈中的微任务走完，才会走下一个栈。node 环境里面是把所以栈走完，才走微任务:

```javascript
console.log(1);
// 栈
setTimeout(function () {
  console.log(2);
  // 微任务
  Promise.resolve(100).then(function () {
    console.log('promise')
  })
});

let promise = new Promise(function (resolve, reject) {
  console.log(7);
  // 栈
  resolve(100)
}).then(function (data) {
  // 微任务
  console.log(data)
});
// 栈
setTimeout(function () {
  console.log(3)
});
console.log(5);

// 浏览器结果：1 7 5 100 2 promise 3
// node 结果：1 7 5 100 2 3 promise
```

<div class="dividing-line"></div>	

### 事件流

事件流描述的是从页面中接收事件的顺序。

DOM2级事件中`addEventListener()`接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。当这个布尔值为`true`时，表示在捕获阶段调用事件处理程序；若果是`false`，表示在冒泡阶段调用事件处理程序。

* 事件冒泡

IE的事件流叫做事件冒泡，即事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（文档）。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #wrap {
            width: 200px;
            height: 200px;
            background: mediumpurple;
        }
        #outer {
            position: relative;
            top: 50px;
            left: 50px;
            width: 100px;
            height: 100px;
            background: #00abff;
        }
        #inner {
            position: relative;
            top: 25px;
            left:25px;
            width: 50px;
            height: 50px;
            background: white;
        }
    </style>
</head>
<body>
<div id="wrap">
    <div id="outer">
        <div id="inner"></div>
    </div>
</div>
<script>
  var wrap = document.getElementById('wrap');
  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');

  wrap.addEventListener('click',function(){
    alert('789');
  },false);
  outer.addEventListener('click',function(){
    alert('456');
  },false);
  inner.addEventListener('click',function(){
    alert('123');
  },false);
</script>
</body>
</html>
```

![20180923153768471599975.gif](/assets/images/前端常见知识点总结/20180923153768471599975.gif)

当点击页面中心白色的部分时，先是弹出123，接着弹出456，最后弹出789。因此当容器元素及其嵌套元素都在冒泡阶段调用事件处理程序时：事件按事件冒泡的顺序执行事件处理程序。

所有浏览器都支持事件冒泡，但在具体实现上还有一些差别。IE9、Firefox、Chrome和Safari则将事件一直冒泡到`window`对象。

* 事件捕获

Netscape Communicator的事件流是事件捕获流。事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前捕获它。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #wrap {
            width: 200px;
            height: 200px;
            background: mediumpurple;
        }
        #outer {
            position: relative;
            top: 50px;
            left: 50px;
            width: 100px;
            height: 100px;
            background: #00abff;
        }
        #inner {
            position: relative;
            top: 25px;
            left:25px;
            width: 50px;
            height: 50px;
            background: white;
        }
    </style>
</head>
<body>
<div id="wrap">
    <div id="outer">
        <div id="inner"></div>
    </div>
</div>
<script>
  var wrap = document.getElementById('wrap');
  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');

  wrap.addEventListener('click',function(){
    alert('wrap');
  },true);
  outer.addEventListener('click',function(){
    alert('outer');
  },true);
  inner.addEventListener('click',function(){
    alert('inner');
  },true);
</script>
</body>
</html>
```

![20180923153768522611218.gif](/assets/images/前端常见知识点总结/20180923153768522611218.gif)

当点击页面中心白色的部分时，先是弹出wrap，接着弹出outer，最后弹出inner。因此当容器元素及其嵌套元素都在捕获阶段调用事件处理程序时：事件按事件捕获的顺序执行事件处理程序。

IE9、Safari、Chrome、Opera和Firefox也都支持这种事件流模型。尽管DOM2级事件规范要求事件应该从`document`对象开始传播，但这些浏览器都是从`window`对象开始捕获事件的。

建议放心地使用事件冒泡，在有特殊需要的时候再使用事件捕获。

* DOM事件流

当同一个元素即在冒泡阶段注册了事件，又在捕获阶段注册了同一事件，那么当事件被触发时，事件的执行顺序又会是如何的？这就涉及到DOM事件流。

DOM2级事件规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。

![](/assets/images/前端常见知识点总结/20170911150514406098380.png)

在DOM事件流中，实际的目标在捕获阶段不会接收到事件。这意味着在捕获阶段，事件从`document`到`<html>`再到`<body>`后就停止了。下一个阶段是处于目标阶段，于是事件再`<div>`上发生，**并在事件处理中被看成冒泡阶段的一部分**。然后，冒泡阶段发生，事件又传播回文档。

多数支持DOM事件流的浏览器都实现了一种特定的行为，即使DOM2级事件规范明确要求捕获阶段不会涉及事件目标，但IE9、Safari、Chrome、Firefox和Opera9.5及更高版本都会在捕获阶段触发事件对象上的事件。结果，就是有两个机会在目标对象上面操作事件。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #wrap {
            width: 200px;
            height: 200px;
            background: mediumpurple;
        }
        #outer {
            position: relative;
            top: 50px;
            left: 50px;
            width: 100px;
            height: 100px;
            background: #00abff;
        }
        #inner {
            position: relative;
            top: 25px;
            left:25px;
            width: 50px;
            height: 50px;
            background: white;
        }
    </style>
</head>
<body>
<div id="wrap">
    <div id="outer">
        <div id="inner"></div>
    </div>
</div>
<script>
  var wrap = document.getElementById('wrap');
  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');

  wrap.addEventListener('click',function(){
    alert('789');
  },false);
  outer.addEventListener('click',function(){
    alert('456');
  },false);
  inner.addEventListener('click',function(){
    alert('123');
  },false);
  wrap.addEventListener('click',function(){
    alert('wrap');
  },true);
  outer.addEventListener('click',function(){
    alert('outer');
  },true);
  inner.addEventListener('click',function(){
    alert('inner');
  },true);
</script>
</body>
</html>
```

![20180923153768647123475.gif](/assets/images/前端常见知识点总结/20180923153768647123475.gif)

<div class="dividing-line"></div>	

### target 和 currentTarget

`target`：指向触发事件监听的对象。

`currentTarget`：指向添加监听事件的对象。

在事件处理程序内部，对象`this`始终等于`currentTarget`的值，而`target`则只包含事件的实际目标。如果直接将事件处理程序指定给了目标元素，则`this`、`currentTarget`和`target`包含相同的值：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button id="btn">click</button>
<script>
  var btn = document.getElementById('btn');
  btn.onclick = function (event) {
    alert(event.currentTarget === this);						//true
    alert(event.target === this);								//true
  };

  document.body.onclick = function (event) {
    alert(event.currentTarget === document.body);				// true
    alert(this === document.body);								// true
    alert(event.target === btn);								// true
    alert(event.currentTarget === this);                        // true
    alert(event.target === this);                               // false
  };
</script>
</body>
</html>
```

<div class="dividing-line"></div>	

### 事件委托

事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
    <li id="post-3">Item 3</li>
    <li id="post-4">Item 4</li>
    <li id="post-5">Item 5</li>
    <li id="post-6">Item 6</li>
</ul>
<script>
  document.getElementById("parent-list").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName === "LI") {
      console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
  });
</script>
</body>
</html>
```

事件委托可以显著的提高事件的处理速度，减少内存的占用。

使用事件在动态绑定事件的情况下是可以减少很多重复工作的。比如在多个列表项中，我们给每个列表项都绑定了事件；在很多时候，我们需要通过 AJAX 或者用户操作动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件；如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的。

适合用事件委托的事件：click，mousedown，mouseup，keydown，keyup，keypress。

<div class="dividing-line"></div>	

### JavaScript跨域通信

JavaScript进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。常见的跨域解决方案有以下几种：

* JSONP

JSONP是JSON with padding（填充式JSON或参数式JSON）的简写，是应用JSON的一种方法。JSONP由两部分组成：回调函数和数据。

JSONP是通过动态`<script>`元素来使用的，使用时可以为`src`属性指定一个跨域URL。这里的`<script>`元素可以不受限制地从其他域加载资源。因为JSONP是有效的JavaScript代码，所以在请求完成后，即在JSONP响应加载到页面中以后，就会立即执行：

```javascript
function todo(data){
  console.log('The author is: '+ data.name);
}

var script = document.createElement('script');
script.src = 'http://tc9011.com/author?callback=todo';
document.body.appendChild(script);

/* 服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。 */
todo({"name": "tc9011"});
```

JSONP只能实现GET请求。

* CORS

CORS（`Cross-Origin Resource Sharing`，跨源资源共享）定义了在必须访问跨源资源时，浏览器与服务器如何沟通。CORS背后的基本思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是失败。

比如一个简单的使用GET或POST发送的请求，它没有自定义的头部，而主体内容是`text/plain`。在发送该请求时，需要给它附加一个额外的`Origin`头部，其中包含请求页面的源信息，以便服务器根据这个头部信息来决定是否给予响应下面是`Origin`头部的一个示例：

```tex
Origin: http://tc9011.com
```

如果服务器认为这个请求可以接受，就在`Access-Control-Allow-Origin`头部中回发相同的源信息（如果是公共资源，可以回发`*`）：

```tex
Access-Control-Allow-Origin: http://tc9011.com
```

如果没有这个头部，或者有这个头部但源信息不匹配，浏览器就会驳回请求。请求和响应都不包含cookie信息。

CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

* HTML5跨文档消息传递(XDM)

window.postMessage() 方法可以安全地实现跨源通信。

window.postMessage() 方法接收三个参数：

**message**：将要发送到其他 window的数据；

**targetOrigin**：指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI；

**transfer**：可选参数，是一串和message 同时传递的 `Transferable`对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

```javascript
// index.html

//获取iframe元素
iFrame = document.getElementById('myframe')

//iframe加载完毕后再发送消息，否则子页面接收不到message
iFrame.onload = function(){

  //iframe加载完立即发送一条消息
  iFrame.contentWindow.postMessage('MessageFromIndex1','*');

}


// iframePage.html

//回调函数
function receiveMessageFromIndex ( event ) {
  console.log( 'receiveMessageFromIndex', event )
}

//监听message事件
window.addEventListener("message", receiveMessageFromIndex, false);
```

以上是比较常见的跨域通信方法，其他跨域通信方法可以参考：[跨域通信总结](http://luoxia.me/code/2016/05/19/%E8%B7%A8%E5%9F%9F%E9%80%9A%E4%BF%A1%E6%80%BB%E7%BB%93/)。

<div class="dividing-line"></div>	

### sessionStorage ，localStorage 和 cookie 的区别

|   特性    |                  Cookie                  |       localStorage        |      sessionStorage       |
| :-----: | :--------------------------------------: | :-----------------------: | :-----------------------: |
|  同源限制   |                    是                     |             是             |             是             |
| 数据的生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 |       除非被清除，否则永久保存        |  仅在当前会话下有效，关闭页面或浏览器后被清除   |
| 存放数据大小  |                   4K左右                   |          一般为5MB           |          一般为5MB           |
| 与服务器端通信 |  每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题   | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 |

<div class="dividing-line"></div>

### 浏览器渲染原理

1. 处理 HTML 标记并构建 DOM Tree。
2. 处理 CSS 标记并构建 CSS Rule Tree 。

3. 解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。注意：

Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。 CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM结点。也就是所谓的Frame。 然后，计算每个Frame（也就是每个Element）的位置，这又叫layout和reflow过程。

3. 最后通过调用操作系统Native GUI的API绘制。

![2018092415377737946188.png](/assets/images/前端常见知识点总结/2018092415377737946188.png)

扩展阅读：

[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

[浏览器渲染过程与性能优化](https://sylvanassun.github.io/2017/10/03/2017-10-03-BrowserCriticalRenderingPath/)

[渲染树构建、布局及绘制](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)

<div class="dividing-line"></div>

### 回流（Reflow）和重绘（Repaint）

**回流**：当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

会导致回流的操作：

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover`）
- 查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法：

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `scrollIntoView()`、`scrollIntoViewIfNeeded()`
- `getComputedStyle()`
- `getBoundingClientRect()`
- `scrollTo()`

**重绘** ：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

回流一定触发重绘，但是重绘不一定触发回流。回流比重绘的代价要更高。

现代浏览器会对频繁的回流或重绘操作进行优化：

浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

当你访问以下属性或方法时，浏览器会立刻清空队列：

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `width`、`height`
- `getComputedStyle()`
- `getBoundingClientRect()`

因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。

如何避免：

- 避免使用`table`布局。
- 尽可能在`DOM`树的最末端改变`class`。
- 避免设置多层内联样式。
- 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
- 避免使用`CSS`表达式（例如：`calc()`）。

- 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
- 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

选自：

[浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.im/post/5a9923e9518825558251c96a)

<div class="dividing-line"></div>

### 前端路由的原理

* 基于hash（location.hash+hashchange事件）

URL中#及其后面的部分为hash：

```javascript
const url = require('url');
const a = url.parse('http://tc9011.com/achievemnet/#hash/a');
console.log(a.hash);				// #hash/a
```

hash仅仅是客户端的一个状态，也就是说，当向服务器发请求的时候，hash部分并不会发过去，所以url中hash值的变化并不会重新加载页面。hash值的改变，都会在浏览器的访问历史中增加一个记录，也就是能通过浏览器的回退、前进按钮控制hash的切换。

通过监听window对象的hashChange事件，可以实现简单的路由:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
</head>
<body>
<a href="#home">home</a>
<a href="#main">main</a>
<div id="content"></div>
<script>
    const div = document.getElementById('content');
    window.onhashchange = function () {
      const hash = window.location.hash;
      const path = hash.substring(1);

      switch (path) {
        case '/':
          div.innerHTML = 'home';
          break;
        case '/users':
          div.innerHTML = 'users';
          break;
        default:
          div.innerHTML = '404';
      }
    }
</script>
</body>
</html>
```

* 基于HTML5 History API（history.pushState()+popState事件）

通过HTML5中history对象上的`pushState()`方法或`replaceState()`方法可以修改url的地址，并在`popstate`事件中能监听地址的改变，不同的是，手动的进行`pushState()`并不会触发`popstate`事件。

`history.pushState()`和`history.replaceState()`方法都可以接收三个参数：状态对象、新状态的标题和可选的相对URL。这两个API的相同之处是都会操作浏览器的历史记录，而不会引起页面的刷新。不同之处在于，`pushState`会增加一条新的历史记录，而`replaceState`则会替换当前的历史记录。这两个api，加上`state`改变触发的`popstate`事件，提供了单页应该的另一种路由方式。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
</head>
<body>
<p id="menu">
    <a href="/profile" title="profile">profile</a>
    <a href="/account" title="account">account</a>
</p>
<div class="main" id="main"></div>
<script>
  (function(){
    var menubox = document.getElementById('menu');
    var mainbox = document.getElementById('main');

    menubox.addEventListener('click',function(e){
      e.preventDefault();
      var elm = e.target;
      var uri = elm.href;
      var tlt = elm.title;
      history.pushState({path:uri,title:tlt},null,uri);
      mainbox.innerHTML = 'current page is '+tlt;
    });
    window.addEventListener('popstate',function(e){
      var state = e.state;
      console.log(state);
      mainbox.innerHTML = 'current page is ' + state.title;
    })
  })()
</script>
</body>
</html>
```

<div class="dividing-line"></div>

### 浏览器缓存

浏览器缓存分为强缓存和协商缓存。当客户端请求某个资源时，获取缓存的流程如下：

- 先根据这个资源的一些 `http header` 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源（返回码为200 OK （from disk cache）），不会发请求到服务器；
- 当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些`request header`验证这个资源是否命中协商缓存，称为`http`再验证，如果命中，服务器将请求返回（返回码为304 Not Modified），但不返回资源，而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；
- 强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源；
- 区别是，强缓存不对发送请求到服务器，但协商缓存会。
- 当协商缓存也没命中时，服务器就会将资源发送回客户端。
- 当 `ctrl+f5` 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；
- 当 `f5` 刷新网页时，跳过强缓存，但是会检查协商缓存；

**强缓存**：

- `Expires`：该字段是 `http1.0` 时的规范，值为一个绝对时间的 `GMT` 格式的时间字符串，代表缓存资源的过期时间
- `Cache-Control`：该字段是 `http1.1` 的规范，浏览器缓存里, Cache-Control是金字塔顶尖的规则，它藐视一切其他设置，只要其他设置与其抵触，一律覆盖之。不仅如此， 它还是一个复合规则， 包含多种值,，横跨 **存储策略**， **过期策略** 两种，同时在请求头和响应头都可设置。其值可取为以下值：

```tex
Cache request directives：
    Cache-Control: max-age=<seconds>
    Cache-Control: max-stale[=<seconds>]
    Cache-Control: min-fresh=<seconds>
    Cache-Control: no-cache 
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: only-if-cached

Cache response directives：
    Cache-Control: must-revalidate
    Cache-Control: no-cache
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: public
    Cache-Control: private
    Cache-Control: proxy-revalidate
    Cache-Control: max-age=<seconds>
    Cache-Control: s-maxage=<seconds>
```

**协商缓存**：

- `Last-Modified` ：值为资源最后更新的GMT时间，随服务器response返回。`Last-Modified` 是 `ETag` 的fallback机制， 优先级比` ETag` 低， 且只能精确到秒， 因此不太适合短时间内频繁改动的资源。 不仅如此， 服务器端的静态资源， 通常需要编译打包， 可能出现资源内容没有改变， 而`Last-Modified`却改变的情况。
- `If-Modified-Since` ：缓存校验字段, 其值为上次响应头的Last-Modified值，通过比较两个时间来判断资源在两次请求期间是否有过修改，如果没有修改，则命中协商缓存。
- `ETag` ：表示资源内容的唯一标识，随服务器response返回。浏览器可以根据ETag值缓存数据，节省带宽。如果资源已经改变，`ETag`可以帮助防止同步更新资源的相互覆盖。` ETag` 优先级比 `Last-Modified` 高。
- `If-None-Match` ：服务器通过比较请求头部的If-None-Match与当前资源的ETag是否一致来判断资源是否在两次请求之间有过修改，如果没有修改，则命中协商缓存。优先级比`If-Modified-Since`高。

无法被浏览器缓存的请求：

* HTTP信息头中包含`Cache-Control:no-cache`，`pragma:no-cache`，或`Cache-Control:max-age=0`等告诉浏览器不用缓存的请求
* 需要根据Cookie，认证信息等决定输入内容的动态请求是不能被缓存的
* 经过HTTPS安全加密的请求（有人也经过测试发现，ie其实在头部加入`Cache-Control：max-age`信息，firefox在头部加入`Cache-Control:Public`之后，能够对HTTPS的资源进行缓存，参考《[HTTPS的七个误解](http://www.ruanyifeng.com/blog/2011/02/seven_myths_about_https.html)》）
* POST请求无法被缓存
* HTTP响应头中不包含`Last-Modified`/`Etag`，也不包含`Cache-Control`/`Expires`的请求无法被缓存

扩展阅读：

[浏览器缓存机制剖析](http://louiszhai.github.io/2017/04/07/http-cache/)

[【Web缓存机制系列】2 – Web浏览器的缓存机制](http://www.alloyteam.com/2012/03/web-cache-2-browser-cache/)

<div class="dividing-line"></div>

### Promise

Promise 对象有以下两个特点。

* 对象的状态不受外界影响。 Promise 对象代表一个异步操作，有三种状态： `pending` （进行中）、` fulfilled` （已成功）和`rejected `（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
* 一旦状态改变，就不会再变，任何时候都可以得到这个结果。 Promise 对象的状态改变，只有两种可能：从 `pending` 变为` fulfilled `和从 `pending` 变为 `rejected `。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为` resolved`（已定型）。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 `resolve` 和 `reject` 。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。`resolve` 函数的作用是，将 Promise 对象的状态从“未完成”变为“成功”（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；` reject` 函数的作用是，将 Promise 对象的状态从“未完成”变为“失败”（即从 `pending` 变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。Promise 实例生成以后，可以用` then `方法分别指定 `resolved `状态和` rejected` 状态的回调函数。注意，调用` resolve` 或 `reject` 并不会终结 Promise 的参数函数的执行。`then` 方法可以接受两个回调函数作为参数。第一个回调函数是 Promise 对象的状态变为 `resolved` 时调用，第二个回调函数是 Promise 对象的状态变为 `rejected` 时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受 Promise 对象传出的值作为参数。

```javascript
const ajaxPromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://tc9011.com');
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(JSON.parse(xhr.responseText));
      }
    };
  });
};

// 第一种写法
ajaxPromise.then(
  res => {
  	console.log(res);
  }, 
  error => {
  	console.log(error);
});

// 第二种写法
ajaxPromise
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
```

catch用于指定发生错误时的回调函数。Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 catch 语句捕获。上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面 then 方法执行中的错误，也更接近同步的写法（ try/catch ）。因此，建议总是使用 catch 方法，而不使用 then 方法的第二个参数。

```javascript
const fs = require('fs');
const getData = (fileName, type) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

getData('./file.txt', 'sample')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
```

<div class="dividing-line"></div>

### Generator 

Generator 函数有多种理解角度。从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator函数内部的每一个状态。形式上，Generator 函数是一个普通函数，但是有两个特征。一是， `function `关键字与函数名之间有一个星号；二是，函数体内部使用` yield` 表达式，定义不同的内部状态。

```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next();                            // { value: 'hello', done: false }
hw.next();                            // { value: 'world', done: false }
hw.next();                            // { value: 'ending', done: true }
```

这个例子中，调用` helloWorldGenerator `函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的` next `方法，就会返回一个有着 `value` 和` done` 两个属性的对象。 `value` 属性表示当前的内部状态的值，是` yield` 表达式后面那个表达式的值； `done `属性是一个布尔值，表示是否遍历结束。遍历器对象的` next `方法的运行逻辑如下。

（1）遇到` yield` 表达式，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的 `value `属性值。

（2）下一次调用 `next `方法时，再继续往下执行，直到遇到下一个 `yield `表达式。

（3）如果没有再遇到新的` yield `表达式，就一直运行到函数结束，直到 `return` 语句为止，并将` return `语句后面的表达式的值，作为返回的对象的` value `属性值。

（4）如果该函数没有` return `语句，则返回的对象的` value` 属性值为` undefined `。

`yield `表达式与` return `语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到` yield `，函数暂停执行，下一次再从该位置继续向后执行，而` return `语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个） `return `语句，但是可以执行多次（或者说多个）` yield `表达式。正常函数只能返回一个值，因为只能执行一次` return` ；Generator 函数可以返回一系列的值，因为可以有任意多个` yield` 。

Generator 函数返回一个遍历器对象，所以可以直接用` for...of `语句对 Generator 函数进行遍历：

```javascript
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  } 
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1 2 3 4 5 6
```

`yield`表达式本身没有返回值，或者说总是返回`undefined`。`next` 方法可以带一个参数，该参数就会被当作上一个 `yield` 表达式的返回值。

```javascript
function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) { i = -1; }
  }
}
var g = f();
g.next();     // { value: 0, done: false }
g.next();     // { value: 1, done: false }
g.next(true); // { value: 0, done: false }
```

上面代码先定义了一个可以无限运行的 Generator 函数`f`，如果`next`方法没有参数，每次运行到 yield 表达式，变量`reset`的值总是`undefined`。当`next`方法带一个参数`true`时，变量`reset`就被重置为这个参数（即`true`），因此`i`会等于`-1`，下一轮循环就会从`-1`开始递增。

`next` 方法传参这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过 `next `方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。

下面看看如何使用 Generator 函数，执行一个真实的异步任务:

```javascript
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```

上面代码中，首先由`var g = gen();`执行 Generator 函数，获取遍历器对象，然后使用` next` 方法，执行异步任务的第一阶段。由于 Fetch 模块返回的是一个 Promise 对象，因此要用` then` 方法调用下一个`next` 方法。

<div class="dividing-line"></div>

### async 和 await

`async`函数就是 Generator 函数的语法糖。

虽然 Generator 函数将异步操作表示得很简洁，但是流程管理却不方便。如果要Generator 函数自动执行，一般会用co模块。而` async` 函数自带执行器。也就是说， `async` 函数的执行，与普通函数一模一样。

`async` 和 `await` ，比起星号和 `yield` ，语义更清楚了。 `async` 表示函数里有异步操作， `await` 表示紧跟在后面的表达式需要等待结果。并且`async` 函数的返回值是 Promise 对象。

```javascript
function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);
```

上面代码指定50毫秒以后，输出` hello world `。正常情况下，` await `命令后面是一个 Promise 对象。如果不是，会被转成一个立即` resolve `的 Promise 对象。

`async` 函数返回一个 Promise 对象。`async` 函数内部` return `语句返回的值，会成为` then` 方法回调函数的参数。

```javascript
async function f() {
  return 'hello';
}

f().then(v => console.log(v));
// hello
```

```javascript
async function asyncFunc() {    
    const result = await otherAsyncFunc();   
    console.log(result);
}
 // 等价于:
function asyncFunc() { 
   return otherAsyncFunc().then(result => {     
   console.log(result);   
 });}
```

扩展阅读：

[promise、async和await之执行顺序的那点事](https://segmentfault.com/a/1190000015057278)

<div class="dividing-line"></div>

### Set 和 Map

ES6 提供了新的数据结构 Set 和 Map。

Set 类似于数组，但是成员的值都是唯一的，没有重复的值。 Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（ === ），主要的区别是 NaN 等于自身，而精确相等运算符认为 NaN 不等于自身。

Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```javascript
[...new Set(array)]						// 一行代码数组去重
```

<div class="dividing-line"></div>

### JS中`prototype`、`__proto__`、`super`t分别是什么

每个对象都有一个`__proto__`属性，指向对应构造函数的原型对象。

每个函数都有一个`prototype`属性，指向函数的原型对象。

`Class`同时拥有`__proto__`和`prototype`属性。

`Class`通过`extend`继承后：

* 子类的`__proto__`属性表示构造函数的继承，指向父类
* 子类的`prototype`属性的`__proto__`属性表示方法的继承，总是指向父类的`prototype`属性

在子类中，`super`关键字代表父类实例。子类实例的构建基于对父类实例的加工，只有`super`方法才能返回父类实例。子类没有`this`对象，通过继承父类`this`对象（即`super`），然后对其进行加工。

<div class="dividing-line"></div>

### Web安全

* XSS

XSS是跨站脚本攻击（Cross-Site Scripting）的简称。它允许恶意web用户将代码植入到提供给其它用户使用的页面中。XSS分为很多种，比较常见的两种是基于反射的 XSS攻击 、基于存储的XSS攻击。

**基于反射的 XSS攻击**

一般是通过给别人发送带有恶意脚本代码参数的 URL，当 URL 地址被打开时，特有的恶意代码参数被 HTML 解析、执行。

举一个例子，比如你的 Web 页面中包含有以下代码：

```html
Select your language:
<select>
    <script>
        document.write(''
            + '<option value=1>'
            +     location.href.substring(location.href.indexOf('default=') + 8)
            + '</option>'
        );
        document.write('<option value=2>English</option>');
    </script>
</select>
```

攻击者可以直接通过 URL (类似：`https://xx.com/xx?default=alert(document.cookie) `注入可执行的脚本代码。

为了防止出现基于反射的 XSS攻击，需要确保这么几件事情：

- Web 页面渲染的所有内容或者渲染的数据都必须来自于服务端。
- 尽量不要从 URL，`document.referrer`，`document.forms` 等这种 DOM API 中获取数据直接渲染。
- 尽量不要使用 `eval`, `new Function()`，`document.write()`，`document.writeln()`，`window.setInterval()`，`window.setTimeout()`，`innerHTML`，`document.creteElement()` 等可执行字符串的方法。
- 如果做不到以上几点，也必须对涉及 DOM 渲染的方法传入的字符串参数做 escape 转义。
- 前端渲染的时候对任何的字段都需要做 escape 转义编码。

**基于存储的XSS攻击**

一般存在于 Form 表单提交等交互功能，如发帖留言，提交文本信息等，黑客利用的 XSS 漏洞，将内容经正常功能提交进入数据库持久保存，当前端页面获得后端从数据库中读出的注入代码时，恰好将其渲染执行。

比如你发了一篇文章，里面包含恶意脚本：

```html
你好！当你看到这段文字时，你的信息已经不安全了！<script>alert('xss')</script>
```

后端没有对文章进行过滤，直接保存文章内容到数据库。当其他读者看这篇文章的时候，包含的恶意脚本就会执行。

为了防止基于存储的XSS攻击，需要前后端共同努力：

- 后端在入库前应该选择不相信任何前端数据，将所有的字段统一进行转义处理。
- 后端在输出给前端数据统一进行转义处理。
- 前端在渲染页面 DOM 的时候应该选择不相信任何后端数据，任何字段都需要做转义处理。



* CSRF

跨站请求伪造 CSRF（Cross-site request forgery），是一种对网站的恶意利用。CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。

完成 CSRF 攻击必须要有三个条件：

1. 用户已经登录了站点 A，并在本地记录了 cookie
2. 在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。
3. 站点 A 没有做任何 CSRF 防御

如何预防：

- 正确使用 GET，POST 请求和 cookie
- 在非 GET 请求中增加 token


- 为每个用户生成一个唯一的 cookie token，所有表单都包含同一个伪随机值，这种方案最简单，因为攻击者不能获得第三方的 cookie(理论上)，所以表单中的数据也就构造失败，但是由于用户的 cookie 很容易由于网站的 XSS 漏洞而被盗取，所以这个方案必须要在没有 XSS 的情况下才安全。
- 每个 POST 请求使用验证码，这个方案算是比较完美的，但是需要用户多次输入验证码，用户体验比较差，所以不适合在业务中大量运用。
- 渲染表单的时候，为每一个表单包含一个 csrfToken，提交表单的时候，带上 csrfToken，然后在后端做 csrfToken 验证。

扩展阅读：

[常见 Web 安全攻防总结](https://zoumiaojiang.com/article/common-web-security/)

[Web安全的三个攻防姿势](https://juejin.im/post/59e6b21bf265da43247f861d)

[聊一聊WEB前端安全那些事儿](https://segmentfault.com/a/1190000006672214)

[前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/fe_security.html)

[前端安全系列之二：如何防止CSRF攻击？](https://tech.meituan.com/fe_security_csrf.html)

<div class="dividing-line"></div>

### 尾调用优化

尾调用指某个函数的最后一步是调用另一个函数。尾调用不一定出现在函数尾部，只要是最后一步操作即可。

```javascript
// tail call
function f() {
  return g(x);
}

function f3(x) {
  if (x > 0) {
    return m(x);
  }
  return n(x);
}

// these are not tail calls
function f1() {
  let y = g(x);
  return y;
}

function f2() {
  return g(x) + 1;
}
```

函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用记录上方，还会形成一个B的调用记录。等到B运行结束，将结果返回到A，B的调用记录才会消失。如果函数B内部还调用函数C，那就还有一个C的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"（call stack）。

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了。

这就叫做"尾调用优化"（Tail call optimization），即只保留内层函数的调用记录。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用记录只有一项，这将大大节省内存。这就是"尾调用优化"的意义。

递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。

```javascript
// recursive without tail call
function factorial(x) {
    if (x <= 0) {
        return 1;
    } else {
        return x * factorial(x-1); // (A)
    }
}

// tail recursive
function factorial(n) {
  return facRec(n, 1);
}

function facRec(x, acc) {
  if (x <= 1) {
    return acc;
  } else {
    return facRec(x-1, x*acc);
  }
}
```

ES6的尾调用优化只在严格模式下开启，正常模式是无效的。

参考文章：

[尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

[Tail call optimization in ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html)

<div class="dividing-line"></div>

### 柯里化

柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

```javascript
// ES5
function curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}

// ES6
const curry = ( fn, arr = []) => (...args) => ( a => a.length === fn.length? fn(...a) : curry(fn, a))([...arr, ...args]) 
```

扩展阅读：

[JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)

[函数式编程之柯里化与反柯里化](http://louiszhai.github.io/2015/12/16/currying/)

[js 中的多个连续的箭头函数与柯里化](https://zhuanlan.zhihu.com/p/26794822)

<div class="dividing-line"></div>

### bind()函数的实现

`bind()`方法创建一个新的函数， 当这个新函数被调用时其`this`置为提供的值，其参数列表前几项置为创建时指定的参数序列。

```javascript
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        // this 指向调用bind的对象
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
          // fToBind 指向调用bind的函数, 这里的 this 是bind函数被调用后，返回的新函数中的this
          return fToBind.apply(this instanceof fNOP ? this : oThis,
            // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
            aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }

    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  }
}
```

```javascript
function foo() {
  this.b = 100;
  return this.a;
}

var func = foo.bind({a: 1});
func();     // 1
new func(); // foo { b: 100 }
```

参考文章：

[Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

[手写bind()函数，理解MDN上的标准Polyfill](https://blog.csdn.net/u010552788/article/details/50850453)

[JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)

扩展阅读：

[JavaScript深入之call和apply的模拟实现 ](https://github.com/mqyqingfeng/Blog/issues/11)

<div class="dividing-line"></div>

### 防抖和节流

**防抖（debounce）**

函数去抖就是对于一定时间段的连续的函数调用，只让其执行一次，把触发非常频繁的事件（比如按键）合并成一次执行。

```javascript
function debounce(method, context) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function () {
    method.call(context);
  }, 100);
}
```

应用场景：

- 每次 resize/scroll 触发统计事件
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

**节流（throttle）**

函数节流背后的基本思想是指，保证每 X 毫秒恒定的执行次数，比如每200ms检查下滚动位置，并触发 CSS 动画。

```javascript
function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}
```

应用场景：

- DOM 元素的拖拽功能实现（mousemove）
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（mousemove）
- Canvas 模拟画板功能（mousemove）
- 搜索联想（keyup）
- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次 

扩展阅读：

[实例解析防抖动（Debouncing）和节流阀（Throttling）](https://jinlong.github.io/2016/04/24/Debouncing-and-Throttling-Explained-Through-Examples/)

[函数节流与函数防抖](https://juejin.im/entry/58c0379e44d9040068dc952f)

[JavaScript专题之跟着underscore学防抖](https://github.com/mqyqingfeng/Blog/issues/22)

[JavaScript专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)

<div class="dividing-line"></div>

### CommonJS、AMD和CMD

三者都是JavaScript模块化的规范。CommonJS是针对后端；AMD和CMD是针对前端。

* CommonJS

在CommonJS中，通过`require()`加载模块，`exports`对象用于导出当前模块的方法或变量，是唯一的导出口；`module`对象就代表模块本身。

<p id="div-border-left-green">在node编译过程中，会对JavaScript内容进行头尾包装:`(function (exports, require, module, __filename, __dirname) { // 代码 })`，这样每个模块文件中就都存在着`require`、`exports`、`module`这3个变量。

</p>

这种写法适合服务端，因为在服务器读取模块都是在本地磁盘，加载速度很快。但是如果在客户端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。

因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

* AMD

AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

```javascript
define(['dep1','dep2'],function(dep1,dep2){...});
```

AMD中依赖前置，js可以方便知道依赖模块是谁，立即加载。

* CMD

CMD是 "Common Module Definition" 的缩写， 是seajs推崇的规范，CMD则是依赖就近，用的时候再require。它写起来是这样的：

```javascript
define(function(require,exports,module){...});
```

与AMD模块规范相比，CMD模块更接近于Node对CommonJS规范的定义。

参考文章：

[Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

<div class="dividing-line"></div>

### ES6模块CommonJS模块的区别

ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以 及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。 比如，CommonJS 模块就是对象，输入时必须查找对象属性。

```javascript
// CommonJS模块
let { start, exists, readFile } = require('fs');
// 等同于
let _fs = require('fs');
let start = _fs.start;
let exists = _fs.exists;
let readFile = _fs.readFile;
```

上面代码的实质是整体加载 `fs` 模块（即加载 `fs` 的所有方法），生成一个对象 （`_fs` ），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因 为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

ES6 模块不是对象，而是通过 `export`命令显式指定输出的代码，再通过 `import` 命令输入。

```javascript
import { start, exists, readFile } from 'fs';
```

上面代码的实质是从 `fs` 模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠 静态分析实现的功能。

除了静态加载带来的各种好处，ES6 模块还有以下好处:

- 不再需要 UMD 模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目 前，通过各种工具库，其实已经做到了这一点。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者 navigator 对象的属性。
- 不再需要对象作为命名空间（比如 Math 对象），未来这些功能可以通过模块 提供。

<div class="dividing-line"></div>

### clientWidth、offsetWidth和scrollWidth区别

**偏移量**

偏移量包括元素在屏幕上占用的所有可见空间。元素的可见大小由其高度和宽度决定，包括所有内边距、滚动条和**边框大小**（注意，**不包括外边距**）。

- `offsetHeight`：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）水平滚动条的高度、上下边框的高度
- `offsetWidth`：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动条的宽度、左右边框的宽度
- `offsetLeft`：元素的左外边框至包含元素的左内边框之间的像素距离
- `offsetTop`：元素的上边框至包含元素的上内边框之间的像素距离

![](/assets/images/前端常见知识点总结/20170830150410797377171.png)

**客户区大小**

元素的客户区大小，指的是元素内容及其内边距所占据的空间大小（注意，**不包括边框**）。

* `clientWidth`属性是元素内容区宽度加上左右内边距宽度；
* `clientHeight`属性是元素内容区高度加上上下内边距的高度。

![](/assets/images/前端常见知识点总结/20170831150410922955290.png)

**滚动大小**

滚动大小指的是包含滚动内容的元素的大小。

- `scrollHeight`：在没有滚动条的情况下，元素内容的总高度
- `scrollWidth`：在没有滚动条的情况下，元素内容的总宽度
- `scrollLeft`：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置
- `scrollTop`：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置

![](/assets/images/前端常见知识点总结/20170831150411092878178.png)

<div class="dividing-line"></div>

### innerHTML 、 innerText 、 outerHTML 和 outerText 区别

**innerHTML**：从对象的起始位置到终止位置的全部内容,包括Html标签。
**innerText**：从起始位置到终止位置的内容,但它去除Html标签。

**outerHTML**：除了包含innerHTML的全部内容外, 还包含对象标签本身。

**outerText**：设置(包括标签)或获取(不包括标签)对象的文本。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="p1">hello   </p>
<p id="p2">
    <span>hey   </span>
</p>
<script>
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    console.log(p1.innerHTML);
    console.log(p1.outerHTML);
    console.log(p1.innerText);
    console.log(p1.outerText);
    console.log(p2.innerHTML);
    console.log(p2.outerHTML);
    console.log(p2.innerText);
    console.log(p2.outerText);
</script>
</body>
</html>
```

在Chrome69.0.3497.100中打印结果如下：

```tex
hello   
<p id="p1">hello   </p>
hello
hello

    <span>hey   </span>
<p id="p2">
    <span>hey   </span>
</p>
hey
hey
```

在Firefox38.6.1中打印结果如下：

```tex
"hello   "
"<p id="p1">hello   </p>" 
undefined
undefined
"
    <span>hey   </span>
"
"<p id="p2">
    <span>hey   </span>
</p>"
undefined
undefined
```

`innerHTML`与`outerHTML`在设置对象的内容时包含的HTML会被解析，而`innerText`与`outerText`则不会。

在设置时，`innerHTML`与`innerText`仅设置标签内的文本，而`outerHTML`与`outerText`设置包括标签在内的文本。

`innerHTML`是符合W3C标准的属性，尽可能地去使用` innerHTML`，而少用`innerText` 。

<div class="dividing-line"></div>	

### Object.assign()

`Object.assign()` 方法用于将所有**可枚举属性**（自有属性）的值从一个或多个源对象复制到目标对象。它将返回目标对象。

如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。

```javascript
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

const object2 = Object.assign({c: 4, d: 5}, object1);
console.log(object2.c, object2.d);                      // 3 5
```

拷贝过程中将调用源对象的getter方法，并在target对象上使用setter方法实现目标对象的拷贝。

`Object.assgin` 只能深拷贝第一层, 深层的还是浅拷贝：

```javascript
const object3 = {
  a: {
    b: 1,
  },
  b: 1,
};

const object4 = Object.assign({c: 4, d: 5}, object3);
console.log(object4.a);                                 // { b: 1 }

object4.a.b = 2;
console.log(object3.a.b);                              // 2
```

扩展阅读：

[ES6之Object.assign()详解](https://blog.fundebug.com/2017/09/11/object-assign/)

[ES2015系列(二) 理解Object.assign](https://cnodejs.org/topic/56c49662db16d3343df34b13)

<div class="dividing-line"></div>	

### forEach、Map 和 reduce 的区别

`forEach()`：对数组的每个元素执行一次提供的函数（不会返回执行结果，只是修改原来的数组）。

`map()` ：**创建一个新数组**，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

`reduce()` ：对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

```javascript
var array = [1, 2 , 3 , 4];

array.forEach((value, index) => {
  console.log(`NO.${index + 1} value is ${value}`);
});
// NO.1 value is 1
// NO.2 value is 2
// NO.3 value is 3
// NO.4 value is 4

var array2 = array.map(value => value * 2);
console.log(array2);                                // [ 2, 4, 6, 8 ]
array2.push(5);
console.log(array);                                 // [ 1, 2, 3, 4 ]
console.log(array2);                                // [ 2, 4, 6, 8, 5 ]

var array3 = array.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(array3);                                // 10
```

执行速度：`reduce()` > `map()` > `forEach()`（[jsperf](https://jsperf.com/popular)中测试用例测试结果）。

三者的实现：

```javascript
Array.prototype.map = function (fn) {
    var resultArray = [];
    for (var i = 0,len = this.length; i < len ; i++) {
         resultArray[i] = fn.apply(this,[this[i],i,this]);
    }
    return resultArray;
}

Array.prototype.forEach = function (fn) {
    for (var i = 0,len = this.length; i < len ; i++) {
         fn.apply(this,[this[i],i,this]);
    }
}

Array.prototype.reduce= function (fn) {
    var formerResult = this[0];
    for (var i = 1,len = this.length; i < len ; i++) {
         formerResult = fn.apply(this,[formerResult,this[i],i,this]);
    }
    return formerResult;
}
```

参考文章：

[JavaScript中Map和ForEach的区别](https://blog.fundebug.com/2018/02/05/map_vs_foreach/)

[如何形象地解释 JavaScript 中 map、foreach、reduce 间的区别？](https://www.zhihu.com/question/24927450)

<div class="dividing-line"></div>	

### 正则表达式

| 字符           | 描述                                       |
| ------------ | ---------------------------------------- |
| \            | 将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“`n`”匹配字符“`n`”。“`\n`”匹配一个换行符。串行“`\\`”匹配“`\`”而“`\(`”则匹配“`(`”。 |
| ^            | 匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“`\n`”或“`\r`”之后的位置。 |
| $            | 匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“`\n`”或“`\r`”之前的位置。 |
| *            | 匹配前面的子表达式零次或多次。例如，zo*能匹配“`z`”以及“`zoo`”。*等价于{0,}。 |
| +            | 匹配前面的子表达式一次或多次。例如，“`zo+`”能匹配“`zo`”以及“`zoo`”，但不能匹配“`z`”。+等价于{1,}。 |
| ?            | 匹配前面的子表达式零次或一次。例如，“`do(es)?`”可以匹配“`does`”或“`does`”中的“`do`”。?等价于{0,1}。 |
| {n}          | n是一个非负整数。匹配确定的n次。例如，“`o{2}`”不能匹配“`Bob`”中的“`o`”，但是能匹配“`food`”中的两个o。 |
| {n,}         | n是一个非负整数。至少匹配n次。例如，“`o{2,}`”不能匹配“`Bob`”中的“`o`”，但能匹配“`foooood`”中的所有o。“`o{1,}`”等价于“`o+`”。“`o{0,}`”则等价于“`o*`”。 |
| {n,m}        | m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次。例如，“`o{1,3}`”将匹配“`fooooood`”中的前三个o。“`o{0,1}`”等价于“`o?`”。请注意在逗号和两个数之间不能有空格。 |
| ?            | 当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“`oooo`”，“`o+?`”将匹配单个“`o`”，而“`o+`”将匹配所有“`o`”。 |
| .            | 匹配除“`\``n`”之外的任何单个字符。要匹配包括“`\``n`”在内的任何字符，请使用像“`(.|\n)`”的模式。 |
| (pattern)    | 匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$[Math Processing Error]0…$9属性。要匹配圆括号字符，请使用“`\(`”或“`\)`”。 |
| (?:pattern)  | 匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“`(|)`”来组合一个模式的各个部分是很有用。例如“`industr(?:y|ies)`”就是一个比“`industry|industries`”更简略的表达式。 |
| (?=pattern)  | 正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“`Windows(?=95|98|NT|2000)`”能匹配“`Windows2000`”中的“`Windows`”，但不能匹配“`Windows3.1`”中的“`Windows`”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
| (?!pattern)  | 正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“`Windows(?!95|98|NT|2000)`”能匹配“`Windows3.1`”中的“`Windows`”，但不能匹配“`Windows2000`”中的“`Windows`”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始 |
| (?<=pattern) | 反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“`(?<=95|98|NT|2000)Windows`”能匹配“`2000Windows`”中的“`Windows`”，但不能匹配“`3.1Windows`”中的“`Windows`”。 |
| (?<!pattern) | 反向否定预查，与正向否定预查类拟，只是方向相反。例如“`(?<!95|98|NT|2000)Windows`”能匹配“`3.1Windows`”中的“`Windows`”，但不能匹配“`2000Windows`”中的“`Windows`”。 |
| x\|y         | 匹配x或y。例如，“`z|food`”能匹配“`z`”或“`food`”。“`(z|f)ood`”则匹配“`zood`”或“`food`”。 |
| [xyz]        | 字符集合。匹配所包含的任意一个字符。例如，“`[abc]`”可以匹配“`plain`”中的“`a`”。 |
| [^xyz]       | 负值字符集合。匹配未包含的任意字符。例如，“`[^abc]`”可以匹配“`plain`”中的“`p`”。 |
| [a-z]        | 字符范围。匹配指定范围内的任意字符。例如，“`[a-z]`”可以匹配“`a`”到“`z`”范围内的任意小写字母字符。 |
| [^a-z]       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，“`[^a-z]`”可以匹配任何不在“`a`”到“`z`”范围内的任意字符。 |
| \b           | 匹配一个单词边界，也就是指单词和空格间的位置。例如，“`er\b`”可以匹配“`never`”中的“`er`”，但不能匹配“`verb`”中的“`er`”。 |
| \B           | 匹配非单词边界。“`er\B`”能匹配“`verb`”中的“`er`”，但不能匹配“`never`”中的“`er`”。 |
| \cx          | 匹配由x指明的控制字符。例如，\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“`c`”字符。 |
| \d           | 匹配一个数字字符。等价于[0-9]。                       |
| \D           | 匹配一个非数字字符。等价于[^0-9]。                     |
| \f           | 匹配一个换页符。等价于\x0c和\cL。                     |
| \n           | 匹配一个换行符。等价于\x0a和\cJ。                     |
| \r           | 匹配一个回车符。等价于\x0d和\cM。                     |
| \s           | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。 |
| \S           | 匹配任何非空白字符。等价于[^ \f\n\r\t\v]。             |
| \t           | 匹配一个制表符。等价于\x09和\cI。                     |
| \v           | 匹配一个垂直制表符。等价于\x0b和\cK。                   |
| \w           | 匹配包括下划线的任何单词字符。等价于“`[A-Za-z0-9_]`”。      |
| \W           | 匹配任何非单词字符。等价于“`[^A-Za-z0-9_]`”。          |
| \xn          | 匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“`\x41`”匹配“`A`”。“`\x041`”则等价于“`\x04&1`”。正则表达式中可以使用ASCII编码。. |
| \num         | 匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“`(.)\1`”匹配两个连续的相同字符。 |
| \n           | 标识一个八进制转义值或一个向后引用。如果\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。 |
| \nm          | 标识一个八进制转义值或一个向后引用。如果\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\nm将匹配八进制转义值nm。 |
| \nml         | 如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。 |
| \un          | 匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。 |

常用正则表达式:

| 用户名             | /^[a-z0-9_-]{3,16}$/                     |
| --------------- | ---------------------------------------- |
| 密码              | /^[a-z0-9_-]{6,18}$/                     |
| 十六进制值           | /^#?([a-f0-9]{6}\|[a-f0-9]{3})$/         |
| 电子邮箱            | /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$[Math Processing Error]//^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/ |
| URL             | /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ |
| IP 地址           | /((2[0-4]\d\|25[0-5]\|[01]?\d\d?)\.){3}(2[0-4]\d\|25[0-5]\|[01]?\d\d?)//^(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$/ |
| HTML 标签         | /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>\|\s+\/>)$/ |
| 删除代码\\注释        | (?<!http:\|\S)//.*$                      |
| Unicode编码中的汉字范围 | /^[\u2E80-\u9FFF]+$/                     |

参考文章：

[正则表达式手册](http://tool.oschina.net/uploads/apidocs/jquery/regexp.html)

<div class="dividing-line"></div>	

### Fetch 和 Ajax的区别

XMLHttpRequest 是一个设计粗糙的 API，不符合关注分离（Separation of Concerns）的原则，配置和调用方式非常混乱，而且基于事件的异步模型写起来也没有现代的 Promise，generator/yield，async/await 友好。

通常使用XHR发送一个请求是这样:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();
```

使用Fetch后是这样:

```javascript
fetch(url)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (e) {
    console.log('error');
  });
```

所以Fetch 优点主要有：

1. 语法简洁，更加语义化
2. 基于标准 Promise 实现，支持 async/await
3. 同构方便，使用 [isomorphic-fetch](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fmatthew-andrews%2Fisomorphic-fetch)

不过Fetch还有一些坑，比如:

- Fetch 请求默认是不带 cookie 的，需要设置 `fetch(url, {credentials: 'include'})`
- 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
- 所有版本的IE均不支持原生Fetch

参考文章：

[Ajax 与 Fetch 的比较](https://juejin.im/entry/599cfac56fb9a0249b4841b8)

<div class="dividing-line"></div>	

### node 中的EventEmitter怎么实现功能

node 的events模块只提供了一个EventEmitter类，这个类实现了node异步事件驱动架构的基本模式——观察者模式，提供了绑定事件和触发事件等事件监听器模式一般都会提供的API：

```javascript
var eventEmitter = require('events').EventEmitter;
var test = new eventEmitter();

test.on('触发', function(data) {
    console.log(data);
})
test.emit('触发', 'test')
```

观察者(Observer)模式是一种设计模式，应用场景是当一个对象的变化需要通知其他多个对象而且这些对象之间需要松散耦合时。在这种模式中，被观察者(主体)维护着一组其他对象派来(注册)的观察者，有新的对象对主体感兴趣就注册观察者，不感兴趣就取消订阅，主体有更新的话就依次通知观察者们。

```javascript
function Subject() {
    this.listeners = {}
}

Subject.prototype = {
    // 增加事件监听器
    addListener: function(eventName, callback) {
        if(typeof callback !== 'function')
            throw new TypeError('"listener" argument must be a function')

        if(typeof this.listeners[eventName] === 'undefined') {
            this.listeners[eventName] = []
        } 
        this.listeners[eventName].push(callback) // 放到观察者对象中
    },
    // 取消监听某个回调
    removeListener: function(eventName, callback) {
        if(typeof callback !== 'function')
            throw new TypeError('"listener" argument must be a function')
        if(Array.isArray(this.listeners[eventName]) && this.listeners[eventName].length !== 0) {
            var callbackList = this.listeners[eventName]
            for (var i = 0, len=callbackList.length; i < len; i++) {
                if(callbackList[i] === callback) {
                    this.listeners[eventName].splice(i,1)     // 找到监听器并从观察者对象中删除
                }
            }
            
        }
    },
    // 触发事件：在观察者对象里找到这个事件对应的回调函数队列，依次执行
    triggerEvent: function(eventName,...args) {
        if(this.listeners[eventName]) {
            for(var i=0, len=this.listeners[eventName].length; i<len; i++){
                this.listeners[eventName][i](...args)
            }
        }
    }
}
```

参考文章：

[深入浅出Node.js（四）：Node.js的事件机制](http://www.infoq.com/cn/articles/tyq-nodejs-event)

[认识node核心模块--深入EventEmitter](https://segmentfault.com/a/1190000011851623)

<div class="dividing-line"></div>	


## 网络

### 浏览器输入URL后发生了什么

1. 在浏览器地址栏输入URL

2. 浏览器查看**缓存**，如果请求资源在缓存中并且新鲜，跳转到转码步骤

   1. 如果资源未缓存，发起新请求

   2. 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。

   3. 检验新鲜通常有两个HTTP头进行控制`Expires`和`Cache-Control`：

      * HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期

      - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间

3. 浏览器**解析URL**获取协议，主机，端口，path

4. 浏览器**组装一个HTTP（GET）请求报文**

5. 浏览器获取主机ip地址，过程如下：

   1. 浏览器缓存
   2. 本机缓存
   3. hosts文件
   4. 路由器缓存
   5. ISP DNS缓存
   6. DNS递归查询（可能存在负载均衡导致每次IP不一样）

6. 打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下：

   1. 客户端发送一个TCP的**SYN=1，Seq=X**的包到服务器端口
   2. 服务器发回**SYN=1， ACK=X+1， Seq=Y**的响应包
   3. 客户端发送**ACK=Y+1， Seq=Z**

7. TCP链接建立后**发送HTTP请求**

8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序

9. 服务器检查**HTTP请求头是否包含缓存验证信息**如果验证缓存新鲜，返回**304**等对应状态码

10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作

11. 服务器将**响应报文通过TCP连接发送回浏览器**

12. 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：

    1. 主动方发送**Fin=1， Ack=Z， Seq= X**报文
    2. 被动方发送**ACK=X+1， Seq=Z**报文
    3. 被动方发送**Fin=1， ACK=X， Seq=Y**报文
    4. 主动方发送**ACK=Y， Seq=X**报文

13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同

14. 如果资源可缓存，**进行缓存**

15. 对响应进行**解码**（例如gzip压缩）

16. 根据资源类型决定如何处理（假设资源为HTML文档）

17. **解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本**，这些操作没有严格的先后顺序，以下分别解释

18. 构建DOM树：

    1. **Tokenizing**：根据HTML规范将字符流解析为标记
    2. **Lexing**：词法分析将标记转换为对象并定义属性和规则
    3. **DOM construction**：根据HTML标记关系将对象组成DOM树

19. 解析过程中遇到图片、样式表、js文件，**启动下载**

20. 构建CSSOM树：

    1. **Tokenizing**：字符流转换为标记流
    2. **Node**：根据标记创建节点
    3. **CSSOM**：节点创建CSSOM树

21. [根据DOM树和CSSOM树构建渲染树](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction):

    1. 从DOM树的根节点遍历所有**可见节点**，不可见节点包括：1）`script`,`meta`这样本身不可见的标签。2)被css隐藏的节点，如`display: none`
    2. 对每一个可见节点，找到恰当的CSSOM规则并应用
    3. 发布可视节点的内容和计算样式

22. js解析如下：

    1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时**document.readystate为loading**
    2. HTML解析器遇到**没有async和defer的script时**，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。**同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容**
    3. 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它**下载完成后尽快执行**，但是**解析器不会停下来等它下载**。异步脚本**禁止使用document.write()**，它们可以访问自己script和之前的文档元素
    4. 当文档完成解析，document.readState变成interactive
    5. 所有**defer**脚本会**按照在文档出现的顺序执行**，延迟脚本**能访问完整文档树**，禁止使用document.write()
    6. 浏览器**在Document对象上触发DOMContentLoaded事件**
    7. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些**内容完成载入并且所有异步脚本完成载入和执行**，document.readState变为complete,window触发load事件

23. **显示页面**（HTML解析过程中会逐步显示页面）

参考文章：

[细说浏览器输入URL后发生了什么](https://segmentfault.com/a/1190000012092552)

[从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)](https://github.com/qiu-deqing/FE-interview#%E4%BB%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%9C%B0%E5%9D%80%E6%A0%8F%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%AD%A5%E9%AA%A4%E4%BB%A5http%E4%B8%BA%E4%BE%8B)

<div class="dividing-line"></div>	

### HTTPS中SSL握手过程

开始加密通信之前，客户端和服务器首先必须建立连接和交换参数，这个过程叫做握手（handshake）。整个握手过程可以用下图说明。

![](/assets/images/前端常见知识点总结/https.png)

握手阶段分成五步：

1. 客户端给出协议版本号、一个客户端生成的 `随机数（Client random）`，以及客户端支持的加密方法。
2. 服务器确认双方使用的加密方法，并给出数字证书、以及一个 `服务器生成的随机数（Server random）`。
3. 客户端确认数字证书有效，然后生成一个新的 `随机数（Premaster secret）`，并使用数字证书中的公钥，加密这个随机数，发给服务器。
4. 服务器使用自己的私钥，获取客户端发来的随机数（即`Premaster secret`）。
5. 客户端和服务器根据约定的加密方法，使用前面的三个随机数，生成 `对话密钥（session key）`，用来加密接下来的整个对话过程。

参考文章：

[HTTPS详解](https://segmentfault.com/a/1190000011675421)

<div class="dividing-line"></div>	

### 常见状态码

`200 OK`：请求成功，请求所希望的响应头或数据体将随此响应返回

`301 Moved Permanently`：被请求的资源已**永久**移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。 

`302 Found`：请求的资源现在**临时**从不同的 URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。302重定向可能会有URL规范化及网址劫持的问题。可能被搜索引擎判为可疑转向，甚至认为是作弊。

`304 Not Modified`：如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。

`400 Bad Request`：语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求；请求参数有误。

`403 Forbidden`：服务器已经理解请求，但是拒绝执行它。与 401 响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个 HEAD 请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个 404 响应，假如它不希望让客户端获得任何信息。

`404 Not Found`：请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。

`500 Internal Server Error`：服务器遇到了不知道如何处理的情况。

`501 Not Implemented`：此请求方法不被服务器支持且无法被处理。只有`GET`和`HEAD`是要求服务器支持的，它们必定不会返回此错误代码。

`502 Bad Gateway`：此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。

`504 Gateway Timeout`：当服务器作为网关，不能及时得到响应时返回此错误代码。

参考文章：

[HTTP 响应代码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

<div class="dividing-line"></div>	

## 其他

> 一篇很有意思的文章：JavaScript实现倒计时

[你真的知道怎么用javascript来写一个倒计时吗 ?](https://github.com/gomeplusFED/blog/blob/master/2016-04/do-you-really-understand-how-to-write-a-countdown-by-javascript.md)

