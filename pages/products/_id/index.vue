<template>
  <div class="containers">
   
     <ProductsComponents />
      <ModalMap v-show="showModal" @close-modal="showModal = false"  />
      <CartButton />
              

  </div>
</template>

<script lang="ts">

import Vue from "vue"
import ModalMap from '~/components/map/ModalMap.vue'
import CartButton from '~/components/app/AddToCartButton.vue'
import ProductsComponents from '~/components/products/ProductsComponents.vue'
import ModalDelete from '~/components/modals/ModalDelete.vue'


export default Vue.extend({
   layout: 'custom',
   validate(data:any){
     return /^\d+$/.test(data.params.id);
   },
  components:{

    ProductsComponents,ModalMap,CartButton,ModalDelete
   
},
data :()=>({
   showModal: false,
}),
  created(){

  
    let params = this.$route.params;
    let id = params.id;

 
   this.$store.dispatch('products/productsPage',{store_id:id})
   this.$store.dispatch('products/commentSection',{store_id:id})
   this.$store.dispatch('categories/categoriesPage',{lat:35.022731 , lng : 50.357277 ,type:1})
    }
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea, span, .v-application {
  font-family: yekanBold !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;
 max-width: 600px;
  background-color: #f5f5f5;
}


</style>
