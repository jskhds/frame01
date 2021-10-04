## 一.组件传值

###  A.父级向子级传值 属性传值

##### 1.先在父级里return要传递的数据 然后子组件绑定这个数据 


```
    data(){return{message:"父级向子级传递数据：用属性" }}
    
    <child :msg="message"></child>
```
##### 2.子组件里绑定属性
```
 export default{ props:["msg"], }
 
 <h1>{{msg}}</h1>    
```





###  B.子级向父级传递数据 事件传值

##### 1.先命名一个自定义事件名，作为传递数据的中间桥梁 比如说  my_Event；注意父子组件都需声明要传递的数据
##### 2.子组件return要传递的数据，绑定一个默认事件（@click）触发子组件函数
```
<button @click="sendData">传递数据</button>
 export default{
        data(){ return { childData:"我是子级向父级传递的数据"}}            
        methods:{ sendData(){ this.$emit("myevent",this.childData)  }}}
// this.$emit("要传递的事件名（我的理解是触发了sendData这个函数就相当于触发了myevent这个事件）",要传递的数据)
         
```
##### 3.父组件随之触发父组件函数 
```
 <child @myevent = "setData" ></child>
 export default{ 
 	data(){ 
 		return  {childData:"" }}, 
	methods:{ 
		setData(childData){
          this.childData = childData; }}}
       
```



### C.同级之间传递数据

1.先设置一个共同的 JS 管理数据（store.js）

```
// 管理同级的数据
export default{
    // 共同的状态
    state:{	message:"hello vue" }	}
```

2.假设 brother.vue 和 sister.vue 是同级组件 共同引入一个vue文件中（表示是同级组件）

3.在同级组件中都引入 store.js 文件 然后注册state

```
 
<div>
    <span> {{state.message}} </span>    
</div>
 
import store from "../store"
export default{	
	data(){ 
    	return{ state:store.state,// 定义一个state 值为store里面的state值 
    	}}}
            
         
```

4.函数部分（分别在同级组件 和 store 中定义）

```
//同级组件
<button @click = "setData">同步设置数据</button>
methods:{
        setData(){
            store.setStateMessage("brother data");}}
       //setData 调用store里面的 setStateMessage方法 那样就可以同步修改同级组件的数据

//store.js
 setStateMessage(str){
        this.state.message = str; 
```



二 computed 和 watch

 computed多个值变化 只为了得到一个结果

watch 只有一个值在变化 监听这个值就可以

