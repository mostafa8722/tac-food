<template>
   <section>
     <HeaderSection :title= "title"/>


     <div class="mt-3 flex flex-row mr-3">
           <v-slide-group
           v-if="isLoading"
           key="1"
    
      class="pa-4"
      mandatory
      show-arrows
    >
      <v-slide-item
        
         v-for="(item, index) in [1,2,3,4,5,6,7,8]"
      :key="index"
        v-slot="{ active, toggle }"
      >
      <ProductLoaders :key="index" />
      </v-slide-item>
    </v-slide-group>


      <v-slide-group
      v-else
      key="2"

      class="pa-4"
      mandatory
      show-arrows
    >
      <v-slide-item
        
         v-for="(item, index) in (type=='popular'?populars:discunts)"
      :key="item.id"
        v-slot="{ active, toggle }"
      >
      <Product :key="item.id"   :product="item" />
      </v-slide-item>
    </v-slide-group>
     
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import ProductLoaders from './ProductLoaders.vue';
import Product from './Product.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Product,ProductLoaders},
       computed: {
      ...mapGetters({
           populars: 'home/populars',
           discunts: 'home/discunts'
            ,isLoading:"home/isLoading"
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
       
    })
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
