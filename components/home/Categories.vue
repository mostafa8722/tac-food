<template>
   <section>
     <HeaderSection title="دسته بندی"/>
   
     
     <div  class="mt-3 flex flex-row mr-3">
   

  <v-slide-group
      v-model="model"
      class="pa-4"
      mandatory
      show-arrows
      v-if="isLoading"
      
    >
    
      <v-slide-item
      
        v-for="(item, index) in [1,2,3,4,5,6,7,8]"
      :key="index"
  
      >
       <CategoryLoaders   :key="index"  />
      </v-slide-item>
    </v-slide-group>
     <v-slide-group
     v-else
      v-model="model"
      class="pa-4"
      mandatory
      show-arrows
      
    >
    
      <v-slide-item
      
        v-for="(item, index) in categories"
      :key="item.id"
  
      >
       <Category  :key="item.id" :category="item" />
      </v-slide-item>
    </v-slide-group>
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Category from './Category.vue';
import CategoryLoaders from './CategoryLoaders.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Category,CategoryLoaders},
      computed: {
    ...mapGetters({
       categories: 'home/categories'
       ,title:"home/status"
       ,isLoading:"home/isLoading"

        })
  },
  data :()=>(()=>{
    model : null
  })
  
   
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
