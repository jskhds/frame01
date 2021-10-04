<template>
  <div>
        <!-- v-if：v-if = "false" 不渲染dom 直接没有元素
            v-show：v-show="false" 渲染dom 但是display = none -->
      <p v-if="isLogin">欢迎您</p>
      <p v-if="!isLogin"><a href="#">请登录</a> </p>
      <!-- v-for 循环 -->
      <ul>
        <li v-for="(fruit,index) of fruits" :key = "index">
          <p>水果名称:{{fruit}}</p>
          <p>水果序号:{{index + 1}}</p>
        </li>
      </ul>
      <table>
        <thead>
          <th>num</th>
          <th>name</th>
          <th>age</th>
        </thead>
       <tbody>
         <tr v-for = "(v,i) of students" :key = "i">
         <td>{{ i + 1 }}</td>
         <td>{{v.name}} </td>
         <td>{{v.age}} </td>
         </tr>
       </tbody>
      </table>
     

  </div>
   
</template>

<script>
export default{
    data(){
      return{
        isLogin:false,
        fruits:['apple','peach','banana'],
        students:[
          {name:'alice',age:18},
          {name:'peter',age:19},
          {name:'linda',age:20},
          
        ]
      }
    }
}
</script>

<style>

</style>
