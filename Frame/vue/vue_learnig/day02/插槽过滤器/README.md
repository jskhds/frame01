### A. 插槽
```
 1. 创建更加灵活、易扩展组件：自定义button，自定义table等
 2.开发或者使用UI库，了解组件制作原理
```

####  1.自定义组件 slot-example
```
 <template>
<div>
    <div class="header"><slot name = "header"></slot></div>
    <div class="content"><slot name = "content"></slot></div>
    <div class="footer"><slot name = "footer"></slot></div>
</div>
   
</template>
```

#### 2.父组件
```
<template>
  <div>
 <slot-example>
    <template v-slot:header> header  </template>
    <template v-slot:content>  content </template>
    <template v-slot:footer> footer  </template>
 </slot-example>    
  </div>
</template>
```



###  B.过滤器

```
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
      date1:"2021-10-02"}}}
</script>  

```

