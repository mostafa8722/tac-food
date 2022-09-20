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
import {mapGetters} from "vuex"
import Cookies from "js-cookie"

export default Vue.extend({
   layout: 'store',
   validate(data:any){
     return /^\d+$/.test(data.params.id);
   },
  components:{

    ProductsComponents,ModalMap,CartButton,ModalDelete
   
},
 computed: {
      ...mapGetters({
           
           prevousPage: 'general/prevousPage',
            products: 'products/products',
          
          
            }),

         },
data :()=>({
   showModal: false,
}),
  created(){

  




let prevInfo = this.$nuxt.context.from;



    let params = this.$route.params;
    let id = params.id;


   
   if( !prevInfo || prevInfo.name!="cart" || this.products.length==0){
    //this.$store.dispatch('products/clearSearch');

   this.$store.dispatch('products/productsPage',{store_id:id})
   if(Cookies.get("user")){
    let user = JSON.parse (Cookies.get("user")!);
    this.$store.dispatch('products/commentSection',{store_id:id,api_token:user.api_token})
   }else
   this.$store.dispatch('products/commentSection',{store_id:id})
    }
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
