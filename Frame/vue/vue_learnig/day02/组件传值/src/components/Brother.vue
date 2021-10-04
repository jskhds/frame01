<template>
<div>
  <span>
    <p>bro： {{state.message}} <button @click = "setData">同步设置数据</button></p>
     
    </span>
</div>
   
</template>

<script>
import store from "../store"
export default{
    data(){
        return{
            // 定义一个state 值为store里面的state值
            state:store.state,
        }
    },
    methods:{
        setData(){
            store.setStateMessage("brother data");
        }
    }
}
</script>
