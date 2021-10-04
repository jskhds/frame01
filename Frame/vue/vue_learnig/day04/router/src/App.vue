<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/blog">博客</router-link> |
      <router-link to="/video">视频</router-link> ||
    <span v-if="showUser">欢迎：{{username}}</span>
    <button @click="logout">注销</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
 export default{
   data(){
     return{
       username:localStorage.getItem("usr"),
       showUser:localStorage.getItem("usr")
     }
   },
  //  我们通过watch $route.path 路由一切换就得到localstorage的值
   watch:{
     '$route.path':function(){
       this.username = localStorage.getItem("usr")
       this.showUser = localStorage.getItem("usr")
     }
   },
   methods:{
    //  注销功能
     logout(){
      //  先清除本地存储
       localStorage.clear();
      //  跳转到登录页面
       this.$router.push("/login")
     }
   }
 }
</script>

<style>
 
</style>
