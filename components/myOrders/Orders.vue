<template>
 

     
     <div class="mt-3 content-section ">
         <v-card
    class=" items-center card-content pt-3 pb-3 pl-3 pr-3  rounded-xl"

    
     dir="rtl"
  outlined
 
  >
 
    <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"

    
     dir="rtl"
  outlined
 
  >

  <HeaderOrder class="mt-2" title="نام فروشگاه "  icon="fa-store"  value="20000000000" />
  <HeaderOrder class="mt-2" title="زمان تحویل "  icon="fa-clock"  value="20000000000" />
  <HeaderOrder class="mt-2" title=" هزینه ارسال "  icon="fa-moped"  value="20000000000" />
  <HeaderOrder class="mt-2" title=" تخفیف "  icon="fa-tag"  value="20000000000" />
  <HeaderOrder class="mt-2" title=" نوع پرداخت "  icon="fa-angle-left"  value="در محل" />
  <HeaderOrder class="mt-2" title="مبلغ "  icon="fa-money-bills"  value="20000000000" />
 

  <div @click.prevent="showOrders=!showOrders" class="flex-header-container  mt-10 mb-5 pointer pr-3 pl-3 flex ">

   <font-awesome-icon    class=" height-20 mr-5"  :class="`${showOrders?'show-orders-active':''}`" :icon="`fa-solid  fa-basket-shopping ` " />
  <div class="header-side mr-10" :class="`${showOrders?'show-orders-active':''}`" > لیست خرید</div>
    <h3 class="order-header-center"></h3>
 <font-awesome-icon    class=" height-15 ml-5" :class="`${showOrders?'show-orders-active':''}`" :icon="`fa-solid ${showOrders?'fa-angle-up':'fa-angle-down'} ` " />    


   </div>
   <div v-if="showOrders">
       <Order/>
   <Order/>
   </div>
   
  
   </v-card>


  <OrderState />
   <div class="flex justify-between mt-5 mr-5 items-center">
    <div class="btn-report">
      <font-awesome-icon class="white ml-1" icon="fa-solid fa-circle-info" />
       <span class="white">گزارش تاخیر</span>
    </div>
    <span class="ml-5">23:22:10</span>
   </div>
  </v-card>
    
     </div>
    

</template>
<script>

import Order from './Order.vue';
import HeaderOrder from './HeaderOrder.vue';
import OrderState from './OrderState.vue';
import { mapGetters } from 'vuex'
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faAngleLeft,faAngleDown,faAngleUp,faBasketShopping,faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft,faAngleDown,faBasketShopping,faCircleInfo,faAngleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default {
    components: { HeaderOrder ,Order,OrderState},
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
        showOrders:false
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
}
.txt-ago{
  font-size: 0.6rem;
  color:#ff2200;
}
.order-header-center{
  flex:1;
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
.show-orders-active{
    color:#ff4d5c;
}
</style>
