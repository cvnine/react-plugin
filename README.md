# REACT PLUGIN

React Component 组件打包模板

## 项目

#### 图片引入问题
由于本项目是打包组件库，最终使用方是业务通过npm安装后使用，所以当下把所有图片都打成base64进行使用。原因有以下几点
* 组件库本身很少引用图片，即使使用图片也属于小图片，base64的33%体积增加可以接受
* rollup本身和webpack都是打包工具，最终打出来的效果实际上图片路径是以`dist`为根路径的字符串，但假如是组件库引用，esm 和 cjs 应该分别保留 import 和 require 去引用图片，目前有`rollup-plugin-smart-asset`在做这个事情，但是经测试，截至它的2.1.1版本，它无法完美支持 preserveModules 模式，在该模式下三级目录的图片 import 路径就会出错。

#### 样式问题
本项目主采用 styled-components 因此不存在类似于 postcss 的使用。但如果想要使用 css，scss，less 等需要注意以下几点。
* 图片（背景图）引入，依然走 base64，原因同上。
* 样式和组件一起按需加载问题。这个时候需要 postcss 采用 inject 模式，


