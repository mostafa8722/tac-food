<template>
   <section>
     <HeaderSection title="دسته بندی"/>
     
     <div class="mt-3 flex flex-row mr-3">
     <div  v-for="(item, index) in categories">
        <Category   :category="item" />
      </div>
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
    ...mapGetters({ categories: 'home/categories' })
  },
  
   
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
