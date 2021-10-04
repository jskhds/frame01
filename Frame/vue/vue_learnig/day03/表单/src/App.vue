<template>
  <div>
    <form @submit.prevent="postData">
    <div>  <label for="">账号</label> <input type="text" v-model ="userInfo.uesername"></div>
    <div>  <label for="">密码</label> <input type="password" v-model ="userInfo.password"></div>
    <div> 
          <label for="">性别 </label> 
          <label for="">男</label>
          <input type="radio"  value="男" v-model = "userInfo.gender">
           <label for="">女</label>
          <input type="radio"  value="女" v-model = "userInfo.gender">

    </div> 
    <div>
      <label for="">爱好： </label>
      <select v-model = "userInfo.hobby">
        <option value="eat for life">吃饭</option>
        <option value="sleep for life">睡觉</option>
        <option value="just for fun">打豆豆</option>
      </select>
    </div>
    <div>
      <label for="">技能： </label>
      <label for="">JavaScript</label>
      <input type="checkbox" value="JavaScript" v-model="userInfo.skills">
      <label for="">java</label>
      <input type="checkbox" value="java" v-model="userInfo.skills">

    </div>
    <br>
      <button>提交表单</button>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        userInfo:{
          uesername:"",
          password:"",
          gender:"",
          hobby: "",
          skills:[]
        }
      }
    },
    methods:{
      postData(){
        console.log(this.userInfo)
      }
    }
  }
</script>

<style>
 
</style>
