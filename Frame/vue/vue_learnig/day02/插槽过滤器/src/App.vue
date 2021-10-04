<template>
  <div>
    <h1>{{date | splitDate}}</h1>
    <h1>{{date1 | splitDate}}</h1>
  </div>
    
  
</template>

<script>


export default {
  filters:{
    splitDate(value){
      let date = new Date(value);
      let day = date.getDay();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return `${year}年${month}月${day}日`
    }
  },
  data(){
    return{
      date:"2021-10-01",
      date1:"2021-10-02"
    }
  }
 
}
</script>

<style>
 
</style>
