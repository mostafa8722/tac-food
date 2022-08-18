<template>
   <section>
     <HeaderSection title="دسته بندی"/>
   
     
     <div    class="mt-3 flex flex-row mr-3">
   

 
     <v-slide-group
     v-if="show_slider "
      v-model="model"
    
      class="pa-4 "
    :class="slider_class" 
      mandatory
      show-arrows

      @change="change"

   
    >
    
      <v-slide-item
      
        v-for="(item, index) in categories"
      :key="item.id"
     v-slot="{ active, toggle }"
      >
       <Category  :key="item.id" :active="active" :category="item" />
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
  data :()=>({
    model : null,
    slider_class:"slider--class",
    show_slider :false
  }),
  created(){
    let prevInfo = this.$nuxt.context.from;
    if(prevInfo)
      this.show_slider=true

     
  }
  ,
  watch:{
    isLoading(e1,e2){
      if(!e1)
     setTimeout(()=>{
         this.show_slider = true;
     },100)
    }
  }
  
   
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
