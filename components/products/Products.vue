<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="mt-3 flex flex-col ml-3 mr-3">
     <div  v-for="(item, index) in products">
  
        <Product   @select-product="showProduct" :key="item.id"  :product="item" />
      </div>
     </div>
     <ModalShowProduct :product="selectedProduct"  v-show="showModal" @close-modal="showModal = false" />
    </section>

</template>
<script>
import ModalShowProduct from '~/components/modals/ModalShowProduct.vue'
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Product,ModalShowProduct},
    data:()=>({
        selectedProduct :[],
        showModal: false
    }),
      props: {
          title:{
              type:String
          }
      },
       computed: {
             ...mapGetters({ products: 'products/products' })
         },
         methods:{
            showProduct(product){
                this.showModal = true;
             this.selectedProduct = product
            }
         }
  
   
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
