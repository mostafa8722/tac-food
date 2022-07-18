<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="mt-3 flex flex-col ml-3 mr-3">
        <SkeletonLoaders v-if="isLoading" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index"  />
     <div  v-if="!isLoading" v-for="(item, index) in products">
  
        <Product   @select-product="showProduct" :key="item.id"  :product="item" />
      </div>
      <Empty v-show="products.length==0 && !isLoading" />
     </div>
     <ModalShowProduct :product="selectedProduct"  v-show="showModal" @close-modal="showModal = false" />
    </section>

</template>
<script>
import ModalShowProduct from '~/components/modals/ModalShowProduct.vue'
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import SkeletonLoaders from './SkeletonLoaders';
import Empty from './Empty';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderSection ,Product,ModalShowProduct,SkeletonLoaders,Empty},
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
             ...mapGetters({
                 products: 'products/products',
                  isLoading: 'home/isLoading',
                 })
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
