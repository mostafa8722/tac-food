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
 font-family: yekanBold!important;
  
}
.v-tab--active {
color:#fe5c67!important;;
}
.tt{
    
     background-color: #f5f5f5!important;
}
</style>
