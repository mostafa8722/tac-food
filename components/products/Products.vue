<template>
   <section class="product-tab">

     <v-tabs
     v-if="show_tab"
      v-model="tab"
      background-color="#f5f5f5"
      centered
      dark
      icons-and-text
      
    >
     

      <v-tab v-for="(cat,index) in catgoriesStore" :href="`#tab-${index+1}`" @click.prevent="handleTabSelected(cat)">
         <span class="tab-title">{{cat.name}}</span>
        
      </v-tab>

     

    
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="tab_item in catgoriesStore"
        :key="tab_item.id"
        :value="'tab-' + tab_item.id"
        class="tab-item"
    
      >
        
         
       
      </v-tab-item>
    </v-tabs-items>
     <HeaderSection class="mt-2" :title= "title"/>
     
     <div class="mt-3 flex flex-col ml-3 mr-3">
        <SkeletonLoaders v-if="isLoading" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index"  />
     <div  v-if="!isLoading" v-for="(item, index) in catProducts">
  
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
        selectedProduct :{},
        catProducts :[],
        showModal: false,
        title :"",
        show_tab :false
    }),
      
      
      
       computed: {
             ...mapGetters({
                 products: 'products/products',
                 catgoriesStore: 'products/catgoriesStore',
                  isLoading: 'home/isLoading',
                 })
         },
         methods:{
            showProduct(product){
                this.showModal = true;
             this.selectedProduct = product
            },
            handleTabSelected(cat){
               
            this.title = cat.name;
             this.catProducts =  this.products.filter(item=> item.category==this.title);
            }
         }
         ,
         watch :{
            products(new_val ,old_val){
             this.title = this.catgoriesStore[0].name;
           this.catProducts = new_val.filter(item=> item.category==this.title);

                   setTimeout(()=>{
                        this.show_tab = true;
                    
                   },150);
            }
         }
  
   
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.v-tab .tab-title{
    color:#565656;
}
.v-tab--active .tab-title{
  color:#fe5c67!important;;
}
.v-tabs-slider{
      background-color:#fe5c67!important;;
}
</style>
