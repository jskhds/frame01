<template>
    <div>
      <form @submit.prevent="addFruit">
      <input v-model = "fruit">
      <button>添加</button>
      </form>
      <ul>
        <li v-for="(v,i) of fruitList" :key = "i">
          {{v}}
          <button @click="del(i)">删除</button>
        </li>
      </ul>
    </div>
</template>


<script>
// 引入axios
import axios from "axios";
export default{
  data(){
    return{
      fruitList:[],
      fruit:""
    }
  },
  methods:{
    getFruitList(){
      axios.get("http://localhost:3000/fruits").then(res=>{
        this.fruitList = res.data;
      })
    },
    
    addFruit(){
      axios.post("http://localhost:3000/fruits",{
        fruit:this.fruit
      }).then(res =>{
        this.getFruitList();
      })
    },
    del(i){
      axios.delete(`http://localhost:3000/fruits/${index}`)
        .then(res =>{
          this.getFruitList();
        })
    }
  },
  created(){
    this.getFruitList();
}
}

</script>

<style>
 
</style>
