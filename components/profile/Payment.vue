<template>
 

     
     <div class="mt-3 content-section ml-3 mr-3">
         <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"
    width="600"
    
     dir="rtl"
  outlined
 
  >
  <div>

     <div class="flex justify-between">
        <div class="flex">
            <font-awesome-icon class="icon-item pointer ml-2" icon="fa-solid fa-credit-card" />
            <div class="flex flex-col">
                <span class="title">{{payment.price}} تومان</span>
                <span class="type">{{payment.type}} </span>
            </div>
          
        </div>

          <div class="flex flex-row-reverse">
               
              
                <font-awesome-icon class="icon-item pointer ml-2" icon="fa-solid fa-chevron-down" />
                 <span class="mt-3 type">{{payment.date}}</span>
            </div>
     </div>
  </div>

  <HeaderCart class="mt-1" title="نحوه ی پرداخت "   value="فوری" />
  <HeaderCart class="mt-1" title="هزینه ارسال "   value="5000 تومان" />
  <HeaderCart class="mt-1" title="تخفیف"   value="رایگان" />
  <HeaderCart class="mt-1" title="خرید"   value="123000 تومان" />
  <HeaderCart class="mt-1" title="مجموع"   value="13000 تومان" />
  
  
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
        products : [
            {title:"گوجه فرنگی ",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"موز ",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"هلو ",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"انبه ",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
    
        ]
    })
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
    border-bottom:1px solid #dddddd;
}
.card-content{
 border:unset;
 background-color: transparent;
}
.icon-item{
    color:#9c9c9c;
    font-size: 0.7rem;
}
.title{font-size: 0.7rem;}
.type{font-size: 0.6rem;color:#9c9c9c;}
</style>
