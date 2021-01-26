---
sidebarDepth: 3
sidebar: auto
---

<!-- omit in toc -->
# 扩展阅读

- [代码风格指南](#代码风格指南)
- [兼容性处理](#兼容性处理)
  - [IE Hack 条件注释](#ie-hack-条件注释)
- [扩展知识](#扩展知识)
  - [百科类](#百科类)
  - [工具类](#工具类)
  - [学习资源](#学习资源)
- [浏览器机制](#浏览器机制)
  - [推荐书单](#推荐书单)
- [其他](#其他)
  - [URL design](#url-design)
  - [启动本地服务器的方法](#启动本地服务器的方法)
  - [UI design 与 css](#ui-design-与-css)

## 代码风格指南

工欲善其事，必先利其器。养成一个良好的编程习惯，才能写出优雅的代码。

- [HTML / CSS 代码规范](http://codeguide.bootcss.com): 出自`Github`设计总监之手的代码规范
- [ES5](./guide/ECMA-5): `JavaScript ES5` 代码风格指南  
- [ES6/ES2015](./guide/ECMA-6): `JavaScript ES6+` 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/): `javascript` 文档注释指南
- [vue](https://cn.vuejs.org/v2/style-guide/): `vue` 官方推荐的风格指南
- [react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules): react 官方的脚手架是自带 `eslint` 的，这个 `eslint` 底层配置 `airbnb-base`的规则，可以参考一下`react`的编写风格。

## 兼容性处理

- [Browser hack](http://browserhacks.com/)：  兼容低版本浏览器的 `hack`
- [HTML5shiv](https://github.com/aFarkas/html5shiv)： 兼容IE9以下不能使用HTML5的标签的问题. 使用方式如下:

  ``` html
  <!--[if lt IE 9]>
    <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
  <![endif]-->
  ```

- [Respond](https://github.com/scottjehl/Respond)： 让`IE6 ~ 8`支持媒体查询其中的 min/max-width 能让这些老旧的浏览器提供一些有限的支持.

### IE Hack 条件注释

``` html
<!--[if gt/lt/gte/lte IE8]>
  <p>content</p>
<![endif]-->
```

- gt (>, 大于)
- lt (<, 小于)
- gte (>=, 大于等于)
- lte (<=, 小于等于)

符合以上条件时，if 内部的标签将会展示出来。一般用于 IE 兼容性提示。

## 扩展知识

### 百科类

- [MDN](https://developer.mozilla.org/zh-CN/): Mozilla 维护的开发文档, 可能是最齐全的web文档
- [caniuse](https://caniuse.com/): css 最好的兼容性百科
- [statcounter](http://gs.statcounter.com/): 查看世界浏览器市场份额

### 工具类

**性能相关:**

- [webpagetest](www.webpagetest.org): 网页性能测试
- [jsperf](https://jsperf.com/): 可以在不同的浏览器测试 `JavaScript` 的性能
- [csstriggers](https://csstriggers.com/): 一个CSS属性影响渲染的参考表(回流与重绘)

**CSS:**

- [css动画库](http://elrumordelaluz.github.io/csshake/)
- [stylie](http://jeremyckahn.github.io/stylie/): css3贝塞尔曲线可视化工具

**在线工具:**

- [草料二维码](https://cli.im/)
- [tinypng](https://tinypng.com/): 压缩图片
- [在线工具](http://tool.oschina.net/encrypt?type=3): 在线加解密, 转base64等
- [jsbin](http://jsbin.com/?js,console,output): 在线编辑器, 可以将自己的代码保存发给别人
- [可视化正则表达式](https://regexper.com/) 将正则表达式转为可视化图表, 让你一眼能看懂这段正则是干啥的

**mock:**

- [mocky.io](https://www.mocky.io/)
- [JSONPlaceholder](http://jsonplaceholder.typicode.com/)

**Publish API**:

- [Shields.io: Quality metadata badges for open source projects](https://shields.io/#/)

### 学习资源

- 刷题与测试
  - [javascript30](https://javascript30.com/): 学习和使用`HTML5`和`ES6`的API
  - [JavaScript Web Quiz](http://davidshariff.com/js-quiz/#): 测试你的javascript水平(面试题)
  - [freeCodeCamp](https://freecodecamp.cn/home)知名题目, 主要让你认识API的使用
  - [牛客网](https://www.nowcoder.com/): 知名题库, 不过题目大多有点老

- 关于性能
  - [前端优化：雅虎35条](http://blog.csdn.net/magneto7/article/details/53140269)

## 浏览器机制

[JavaScript ASI 机制详解](https://segmentfault.com/a/1190000004548664)

### 推荐书单

<details>
<summary>CSS</summary>

| 书名    | 说明                                                          |
| ------- | ------------------------------------------------------------- |
| css揭晓 | 主要是讲`css(3)`不为人知的使用方式，侧重偏特效方面            |
| css世界 | 国内著名`css`大师张鑫旭所著。这本书偏向日常业务细节和原理解析 |

</details>

<details>
<summary>Javascript</summary>

一些比较出名的js书籍

| 书名                       | 别名   | 说明                                                                                  |
| -------------------------- | ------ | ------------------------------------------------------------------------------------- |
| JavaScript高级程序设计     | 红皮书 | 新手入门经典书, 从零教你学 js                                                         |
| JavaScript权威指南         | 犀牛书 | 相比红皮书会有点难啃，更多的时候是作为工具书，不懂的时候再翻一翻                      |
| 高性能JavaScript           |        | 从`JavaScript`性能的角度进行深入探索                                                  |
| 你不知道的js全册(上, 中册) |        | 深入解析 JavaScript 底层原理                                                          |
| 你不知道的js全册(下)       |        | 下册不是深入系列，反而是强行从零开始讲`JavaScript`，这本推荐程度不高,但也可以了解一下 |
| ECMAScript 6 入门(阮一峰)  |        | 经典的`ES6`入门书                                                                     |
</details>

<details>
<summary>性能优化</summary>

| 书名               | 别名                 | 说明                                                                              |
| ------------------ | -------------------- | --------------------------------------------------------------------------------- |
| 高性能网站指南     | 图灵动物书系列: 猎犬 | 作者是 Google 首席性能工程师，雅虎首席执行官. 本书从全局web网页的角度进行性能优化 |
| 高性能网站进阶指南 | 图灵动物书系列: 羚羊 | 猎犬书的进阶版                                                                    |
</details>

<details>
<summary>HTTP</summary>

| 书名               | 别名                 | 说明                                                                              |
| ------------------ | -------------------- | --------------------------------------------------------------------------------- |
| 高性能网站指南     | 图灵动物书系列: 猎犬 | 作者是 Google 首席性能工程师，雅虎首席执行官. 本书从全局web网页的角度进行性能优化 |
| 高性能网站进阶指南 | 图灵动物书系列: 羚羊 | 猎犬书的进阶版                                                                    |
</details>

<details>
<summary>扩展类书籍</summary>

| 书名                      | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| 软技能.代码之外的生存指南 | 从“人”（而非技术也非管理）的角度关注软件开发人员自身发展的书 |  |
</details>

## 其他

### URL design

- URL 设计中只能使用一些相对较小、通用的安全字母表中的字符.
- URL 设计希望是具有可读性的.
- URL 设计应避免使用诸如 `adv` 广告相关的单词，因为可能会被用户所装的广告拦截插件给拦截下来。

### 启动本地服务器的方法

- Nginx
- webpack dev server
- Http-server

### UI design 与 css

``` css
box-shadolw:  inset(内置方向) | offset-x(水平) | offset-y(垂直) | blur-radius(模糊半径) | spread-radius(扩散半径) | color(颜色)
```

图层样式和CSS属性对应如下：

- 投影 ↔ box-shadow 垂直偏移不为0；
- 描边 ↔ border（这个不是很重要，直接体现在界面标注中也可以）；
- 渐变叠加 ↔ background-image（不止线性渐变，角度渐变、径向渐变都支持，还能图案叠加，很少用，不多说）；
- 内阴影 ↔ box-shadow: inset & 垂直偏移不为0；
- 外发光 ↔ box-shadow: 垂直水平偏移均为0；
- 内发光 ↔ box-shadow：inset & 垂直水平偏移均为0。

参考资料: [https://www.jianshu.com/p/ffd475c367bb](https://www.jianshu.com/p/ffd475c367bb)
