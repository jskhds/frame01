<template>
    <div>
        <form @submit.prevent="doLogin">
            <input type="text"  v-model="username">
            <!-- 其实这里是密码来的 -->
            <input type="text">
            <button>登录</button>
        </form>
    </div>
</template>

<script>
 export default{
     data(){
         return{
             username:""
         }
     },
     methods:{
        //  直接把用户名提交并保存起来
         doLogin(){
             console.log(this.username);
             // 本地存储  localStorage的setItem方法 （"存储的名字",要存的东西）
             localStorage.setItem("usr",this.username);
            //  vue的路由提供编程导航功能 也就是 this.$router获取到router 然后push跳转到首页
             this.$router.push("/");
         }
     }

 }
</script>
