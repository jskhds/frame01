/** @jsxRuntime classic */

const react = require("react");

/**
 * 注释：element指代react里的元素  node指代dom树里的元素

 * 初始代码
 const element = <h1 title = "foo"> hello </h1>
const container = document.getElementById("root"); //在react里面操作了之后 container就是html里id为root的div
ReactDom.render(element,container); //就是把element 装到container里面去 
part1 替换 const element = <h1 title = "foo"> hello </h1>
1.实际上是通过react.createElement 声明创建了一个对象 包括 type和props
2.type 表示我们给dom树传过去的html节点 也可以是函数 props是对象 有多种键值对和特殊的属性：children 
一般来说 children 是一个数组
const element = {
  type:"h1",
  props:
  {
    title:"foo",
  children:"hello"},
}
 
Part2 替换 reactDom.render 
react用render来改变dom树 




 */


const element = {
  type:"h1",
  props:
  {
    title:"foo",
  children:"hello"
},
}
// 把container和 id是root的div等价 
const container = document.getElementById("root");
// 给document创建一个dom节点 把react元素 的type传给它 再给它赋值title 
const node = document.createElement(element.type);
node["title"] = element.props.title;
// 给children创建 nodes  因为child只有字符串 所以创建text节点
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;
// 把text给node 再把node 给container装起来
node.appendChild(text);
container.appendChild(node);




