<template>
   <section>
     <HeaderSection title="دسته بندی"/>
     
     
     <div class="mt-3 flex flex-row mr-3">
   
  <v-slide-group
      v-model="model"
      class="pa-4"
      mandatory
      show-arrows
    >
      <v-slide-item
        v-for="(item, index) in categories"
      :key="item.id"
        v-slot="{ active, toggle }"
      >
       <Category   :key="item.id" :category="item" />
      </v-slide-item>
    </v-slide-group>
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Category from './Category.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Category},
      computed: {
    ...mapGetters({ categories: 'home/categories',title:"home/status" })
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
