<template>
<div>
    <span>
        <p>sis： 
    {{state.message}}</p>
     
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
    }
}
</script>