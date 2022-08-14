<template>
 

     
     <div class="mt-3 content-section ">
         <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"

    
     dir="rtl"
  outlined
 
  >
  <h3 class="text-center cart-store-name">{{cart.store_name}} </h3>
  <p class="text-center txt-ago" v-if="cart.ago && 1>2">{{cart.ago}}</p>
  <HeaderCart class="mt-1" title="زمان"   value="فوری" />
  <HeaderCart class="mt-1" title="ارسال"   :value="formatPrice(cart.cost_delivery)" />
  <HeaderCart class="mt-1" title="مالیات"  :value="tax==0?'رایگان':formatPrice(cart.tax)" />
  <HeaderCart class="mt-1" title="خرید"   :value="formatPrice(totalPrice)" />
  <HeaderCart class="mt-1" title="مجموع"   :value="formatPrice(cart.store_total_price)" />
  
  <div  class="pl-2 pr-2" v-for="(item, index) in cart.products">
  
        <Cart   :product="item" />
      </div>
  </v-card>
    
     </div>
    

</template>
<script>

import Cart from './Cart.vue';
import HeaderCart from './HeaderCart.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderCart ,Cart},
      computed: {
      ...mapGetters({
           carts: 'carts/carts',
              totalCart: 'carts/totalCart',
       
        
            })
         },
  
      props: {
        cart :{
            type:Object,
            require :true,
            
        },
         
      },

      data :() =>({
        totalPrice : 0,
      }),
      created(){ this.totalPrice2(this.cart)},

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
       
            this.totalPrice2(this.cart)
         
        }
      }
  
   
}
</script>
<style scoped>
h3{
    font-size: 0.85rem;
}
.cart-store-name{
    font-size: 0.90rem;
    color:#606060;
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
 border:1px solid #dddddd;
 max-width: 500px;
 width:100%;
}
.txt-ago{
  font-size: 0.6rem;
  color:#ff2200;
}
@media screen and (max-width:500px){
.content-section,.card-content{


}
}
@media screen and (max-width:420px){
.content-section,.card-content{

 
}
}
</style>
