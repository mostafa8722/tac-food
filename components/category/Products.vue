<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="flex flex-col ml-3 mr-3">
     <div  v-for="(item, index) in shops">
  
        <Product :key="item.id"  :product="item" />
      </div>
      <Empty v-if="shops.length==0" />
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import { mapGetters } from 'vuex'
import Empty from './Empty'
export default {
    components: { HeaderSection ,Product,Empty},
        computed: {
             ...mapGetters({ shops: 'categories/shops' })
         },
  
      props: {
          title:{
              type:String
          }
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
