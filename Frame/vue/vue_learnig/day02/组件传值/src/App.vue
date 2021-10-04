<template>
  <div>
    <span>父子组件间传递数据案例：购物车</span>
    <br>
    <ReSet></ReSet>
    <carts></carts> 

    <span>同级之间传递数据</span>
    <Brother></Brother>
    <Sister></Sister>
  </div>
</template>

<script>

import Carts from "./components/Carts.vue"
import Brother from "./components/Brother.vue"
import Sister from "./components/Sister.vue"
export default{
  components:{Carts,Brother,Sister}
}

</script>

<style>

</style>
