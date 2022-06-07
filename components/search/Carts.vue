<template>
 

     
     <div class="mt-3 content-section ml-3 mr-3">
         <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"
    width="600"
    
     dir="rtl"
  outlined
 
  >
  <h3 class="text-center">فلافل </h3>
  <HeaderCart class="mt-1" title="زمان"   value="فوری" />
  <HeaderCart class="mt-1" title="ارسال"   value="5000 تومان" />
  <HeaderCart class="mt-1" title="مالیات"   value="رایگان" />
  <HeaderCart class="mt-1" title="خرید"   value="123000 تومان" />
  <HeaderCart class="mt-1" title="مجموع"   value="13000 تومان" />
  
  <div  v-for="(item, index) in products">
  
        <Cart   :product="item" />
      </div>
  </v-card>
    
     </div>
    

</template>
<script>

import Cart from './Cart.vue';
import HeaderCart from './HeaderCart.vue';
export default {
    components: { HeaderCart ,Cart},
  
      props: {
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
   
}
.card-content{
 border:1px solid #dddddd;
}
</style>
