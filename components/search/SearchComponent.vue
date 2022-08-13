<template>
   <section class="flex  items-center flex-col " :class="type=='product'?'mr-4 ml-4':''">
        <SearchTab  @change-tab="handleTab" />
        <Empty v-if="products.length==0 && shops.length==0"/>
       
         <Product   v-if="!isDataSent && type=='product'" v-for="(item, index) in products" page="search" :key="item.id"  :product="item" />
      
        <ProductCat v-if="!isDataSent && type=='category'" v-for="(item, index) in shops" :key="item.id" page="search"  :product="item" />
     
    </section>

</template>
<script>


import Empty from './Empty'
import SearchTab from './SearchTab'
import Carts from './Carts'
import Product from '~/components/products/Product.vue';
import ProductCat from '~/components/category/Product.vue';

import {mapGetters} from "vuex"


export default {
    props :{
        type:{
            type:String
        }
    },
    components: { Empty,Carts,SearchTab ,Product,ProductCat},
      computed: {
             ...mapGetters({
                 products: 'products/searchProducts',
                 shops: 'categories/searchShops',
                  isDataSent: 'home/isDataSent',
                 })
         },
    methods:{
        handleTab (e){
          this.$emit('change-tab',e); 
        }
    }
    
  
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.circle-border{
  height:110px;  
  width:110px;  
  border : 4px solid #fe606a;
  border-radius:50%;

}
.circle-border span{
    color :#676767;
    font-size:0.75rem;
    font-family: yekanBold!important;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.btn-add{
    background-color : #fd5e63!important;
    width: 200px;
   
}
.white{
  
    color : #ffffff!important;
}
</style>
