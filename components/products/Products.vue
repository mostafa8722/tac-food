<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="mt-3 flex flex-col ml-3 mr-3">
     <div  v-for="(item, index) in products">
  
        <Product   :product="item" />
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
      props: {
          title:{
              type:String
          }
      },
       computed: {
             ...mapGetters({ products: 'products/products' })
         },
  
   
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
