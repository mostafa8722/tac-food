<template>
   <div>
    <v-tabs
      v-model="tab"
      background-color="#ffffff"
      centered
      dark
      icons-and-text
       slider-color="yellow"
    >
      <v-tabs-slider></v-tabs-slider>


      <v-tab v-for="(cat,index) in data" :href="`#tab-${index+1}`">
     {{cat.title}}
     
      </v-tab>

     

     
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
        class="mt-2 tt"
      >
        
        
     
     <div class="mt-3 flex flex-col ml-3 mr-3">
        <HeaderSection :title= "title"/>
     <div  v-for="(item, index) in products">
  
        <Product   :product="item" />
      </div>
     </div>
      </v-tab-item>
    </v-tabs-items>
  </div>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';

import Product from './Product.vue';
export default {
  
    props : ["data"],
     components: { HeaderSection ,Product},
    
    data : ()  =>({
          tab: null,
          title : "پیتزا",
          products : [
            {title:"گوجه فرنگی ",body:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"موز ",body:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"هلو ",body:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"انبه ",body:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",type:"میوه خلیلی",discount:10,rate:4,price:350000,img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
    
        ]

    })
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.v-tabs-slider{
    background-color:#fe5c67;
}
.v-tab{
color:#242424!important;
 font-family: yekanNumRegular!important;
  
}
.v-tab--active {
color:#fe5c67!important;;
}
.tt{
    
     background-color: #f5f5f5!important;
}
</style>
