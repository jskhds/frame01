<template>
<div>
    <button @click="reSetData">重置数据</button>
   <h1>购物车</h1>
   <ul>
       <li v-for="(v,i) of fruits" :key="i">
        <p>
            {{v.name}}            
            单价{{v.price}}  
            <!-- 引入 carts计数器组件 -->
            <counter
                :num = "v.num"
                :index = "i"
                @sub = "sub"
                @add = "add"   
            >
            </counter>
        </p>   
       </li>
   </ul> 
   <h1> 总价为:{{totalPrice}}</h1>
</div>
</template>
<script>
import Counter from "./Counter.vue"

    export default
  {
       components: { Counter },
        data(){
            return{
                fruits:[
                    {name:"苹果",price:1,num:0},
                    {name:"香蕉",price:2,num:0},
                    {name:"鸭梨",price:3,num:0}
                ],
                totalPrice:0,
            }
        },
        
        methods:{   
            sum(){
                this.totalPrice = 0;
                for(let i = 0;i<this.fruits.length;i++){
                    this.totalPrice += this.fruits[i].num * this.fruits[i].price;
                }
                
            },         
            sub(index){
                if(this.fruits[index].num >0){
                    this.fruits[index].num--; 
                    this.sum();                   
                }
                else{
                    alert("stop")
                }
                
            },
            add(index){
               this.fruits[index].num++;
                this.sum();    
            },
            reSetData(){
                this.totalPrice = 0;
                for(let i = 0;i<this.fruits.length;i++){
                     this.fruits[i].num  = 0;

                }
            }

        }
    }


</script>
