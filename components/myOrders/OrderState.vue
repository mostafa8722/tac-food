<template>
 

     

   
 
    <v-card
    class=" items-center card-content pt-5 pb-5 pl-3 pr-3 mt-3 flex rounded-xl"

    
     dir="rtl"
  outlined
 
  >

 

      <State :data="{title:'ثبت',icon:'order_placed.svg',active:true}"  key="1"/> 
      <h3 class="order-header-center bg-active"></h3>
      <State  :data="{title:'تایید',icon:'order_confirm.svg',active:false}"  key="2"  /> 
     <h3 class="order-header-center"></h3>
      <State   :data="{title:'ارسال',icon:'food_delivery.svg',active:false}"  key="3" /> 


  
  
   </v-card>

    
   

</template>
<script>

import State from './State.vue';

export default {
    components: { State},
     
  
      props: {
        cart :{
            type:Object,
            require :true,
            
        },
         
      },

      data :() =>({
        totalPrice : 0,
      }),
      created(){
        // this.totalPrice2(this.cart);
      },

      methods:{
             totalPrice2(cart){
                this.totalPrice = 0 ;

                let index = this.carts.findIndex((item) => item.id==cart.id);
                 this.carts[index].products.map((item,index)=>{
                    this.totalPrice =  this.totalPrice +item.price*item.count;

                   item.details.map(item_product => {
                    if(item_product.status)
                     this.totalPrice  =  this.totalPrice + item_product.price * item_product.count;
                   })
                 });

                 //return this.formatPrice(total)+" "+"تومان";
             },
              formatPrice(price) {
                 return  Number(price).toLocaleString() +" "+"تومان";
                 },
      },
      watch:{
        totalCart(new_val,old_val){
         
            //this.totalPrice2(this.cart)
         
        }
      }
  
   
}
</script>
<style scoped>
h3{
    font-size: 0.85rem;
}
.flex-none{
    flex:none;
}
.content-section{
 
    display: flex;
    justify-content: center;
     width:92%;
   
}
.card-content{
 border:0.1rem solid #dddddd;
 max-width: 500px;
 width:100%;
 display: flex;
}
.txt-ago{
  font-size: 0.6rem;
  color:#ff2200;
}
.order-header-center{
  flex:1;
  height: 0.2rem;
  background-color: #dddddd;
}
.height-15{
  height:15px;
}

.btn-report{
  padding:0.5rem 1.5rem;
  border-radius: 0.4rem;
   background-color: #dddddd;
}
.white{color:#ffffff;}
.active{color:#3bb151}
.bg-active{background-color:#3bb151}
</style>
