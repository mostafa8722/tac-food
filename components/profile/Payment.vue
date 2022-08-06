<template>
 

     
     <div class="mt-3 content-section ml-3 mr-3">
         <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"
    width="100%"
    
     dir="rtl"
  outlined
 
  >
  <div>

     <div class="flex justify-between pointer " @click.prevent="handleActive(!isActive)" >
        <div class="flex items-start">
            <v-icon class="icon-item pointer ml-2" :class="`${isActive?'icon-active':''}`" >mdi-credit-card-outline</v-icon>
         
            <div class="flex flex-col mr-3">
                <span class="title" :class="`${isActive?'icon-active':''}`">{{formatPrice(payment.payment)}} </span>
                <span class="type">{{payment.detail}} </span>
            </div>
          
        </div>

          <div class="flex flex-row-reverse">
               
                <v-icon v-if="isActive" class="icon-item  icon-active pointer ml-2 " >mdi-chevron-up</v-icon>
                <v-icon v-else  class="icon-item pointer ml-2" >mdi-chevron-down</v-icon>
              
                 <span class="mt-3 payment-date absolute">{{payment.date}}</span>
            </div>
     </div>
  </div>
 <div v-if="isActive">
   <HeaderCart class="mt-1" title="نحوه ی پرداخت "  :value="payment.method=='online'?'درگاه':''" />
  <HeaderCart v-if="3>4" class="mt-1" title="هزینه ارسال "   value="5000 تومان" />
  <HeaderCart v-if="3>4" class="mt-1" title="تخفیف"   value="رایگان" />
  <HeaderCart v-if="3>4" class="mt-1" title="خرید"   value="123000 تومان" />
  <HeaderCart v-if="3>4" class="mt-1" title="مجموع"   value="13000 تومان" />
 </div>
  
  
  
  </v-card>
    
     </div>
    

</template>
<script>

import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCreditCard,faChevronDown} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCreditCard,faChevronDown)
import HeaderCart from '../cart/HeaderCart.vue';
export default {
    components: { HeaderCart },
  
      props: {
        payment :{
            type : Object,
            require:true,
        },
          title:{
              type:String
          }
      },
  
    data : ()  =>({
       isActive :false
    }),
    methods:{
        handleActive (active){
          this.isActive  = active;
        },
         formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"تومان";
      },
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
    min-width: 450px;
    width: 100%;
    border-bottom:1px solid #d7d7d7;
}
.card-content{
 border:unset;
 background-color: transparent;
}
.icon-item{
    color:#8e8e8e;
    font-size: 1.6rem;
}
.icon-active{
    color:#fd5e63;
 
}
.title{font-size: 0.95rem;}
.type{font-size: 0.85rem;color:#9c9c9c;}
.payment-date{left:50px;top:20px; font-family: yekanNumRegular!important;}
@media screen and (max-width:500px){
  .content-section{

    min-width: 400px;
 
}
}
@media screen and (max-width:430px){
  .content-section{

    min-width: 300px;
 
}
}

</style>
