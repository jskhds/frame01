<template>
  <div>
    <p v-if="isLoading">loading...</p>
    <ul>
      水果列表 
      <li v-for="(v,i) of fruits" :key="i">
        {{v}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default{
      data(){
        return{
          fruits:[],
          isLoading:true
        }
      },
      created(){
        this.setData()
      },
      methods:{
        setData(){
         setTimeout(()=>{
           this.isLoading = false;
           this.fruits = ["香蕉","苹果","鸭梨"]
         },2000)
       }
    }}
</script>

<style>
 
</style>
