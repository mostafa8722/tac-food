<template>
 

     
     <div class="mt-3 content-section ml-3 mr-3">
         <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"
    width="600"
    
     dir="rtl"
  outlined
 
  >
  <h3 class="text-center">{{cart.store_name}} </h3>
  <HeaderCart class="mt-1" title="زمان"   value="فوری" />
  <HeaderCart class="mt-1" title="ارسال"   value="5000 تومان" />
  <HeaderCart class="mt-1" title="مالیات"   value="رایگان" />
  <HeaderCart class="mt-1" title="خرید"   :value="formatPrice(totalPrice)" />
  <HeaderCart class="mt-1" title="مجموع"   value="13000 تومان" />
  
  <div  v-for="(item, index) in cart.products">
  
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
            console.log("total",new_val)
            this.totalPrice2(this.cart)
         
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
    max-width:600px;
   
}
.card-content{
 border:1px solid #dddddd;
}
</style>
