// 管理同级的数据
export default{
    // 共同的状态
    state:{
        message:"hello vue",
        totalPrice:0,
        num:0
    },
    setStateMessage(str){
        this.state.message = str;
    },

    reSetCartData(fruits){
        for(let i = 0;i<fruits.length;i++){
            fruits[i].num = 0;
        }
        this.totalPrice = 0;
    },
    sum(){
        
    }
}