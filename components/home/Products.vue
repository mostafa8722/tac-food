<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="mt-3 flex flex-row mr-3">
           
     <div  v-for="(item, index) in (type=='popular'?populars:discunts)">
  
        <Product :key="item.id"   :product="item" />
      </div>
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Product},
       computed: {
      ...mapGetters({
           populars: 'home/populars',
           discunts: 'home/discunts',
            })
         },
   
      props: {
          title:{
              type:String
          },
           type:{
              type:String
          },
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
<style>
.flex-none{
    flex:none;
}
</style>
