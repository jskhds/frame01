<template>
<div>
  
    <Container></Container>
     <Swiper></Swiper>
    <Search></Search>
    <Menu></Menu>
  
  
 

 
</div>
 

</template>

<script>
import Container from "./components/Container.vue"
import Search from "./components/Search.vue"
import Menu from "./components/Menu.vue"
import Swiper from "./components/Swiper.vue"
export default{
  components:{
    Container,
    Search,
    Menu,
    Swiper
  }
}
</script>

<style>

</style>
