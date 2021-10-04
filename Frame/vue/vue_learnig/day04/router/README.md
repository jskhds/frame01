router

```
vue create project
cd
vue add router
```

views文件

```
vue文件
其实和组件差不多，但如果是一个页面文件就比较适合
```

login功能（这个是重点）

```
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

```

logout功能

```
 //  注销功能
     logout(){
      //  先清除本地存储
       localStorage.clear();
      //  跳转到登录页面
       this.$router.push("/login")
     }
```

导航守卫

```
// 导航守卫：如果登录了才能进首页 没有登录就只能在登录界面
// to 访问到哪 from 从哪访问 next继续访问
router.beforeEach((to,from,next)=>{
  if(to.path !== "/login"){
    // 有usr说明已经登录了 所以就可以继续访问 next()代表无阻挡访问
    if(localStorage.getItem("usr")){
      next();
    }else{
      next("/login")
    }
  }
  else{
    next();
  }
})
```

watch （监听路由切换）

```
//  我们通过watch $route.path 路由一切换就得到localstorage的值 立马显示 欢迎您XX
   watch:{
     '$route.path':function(){
       this.username = localStorage.getItem("usr")
       this.showUser = localStorage.getItem("usr")
     }
   }
```

