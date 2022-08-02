<template>
   <section>
     <HeaderSection :title= "title"/>
     
     <div class="flex flex-col ml-3 mr-3">
       <SkeletonLoaders v-if="isLoading" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index" />

     <div  v-if="!isLoading" v-for="(item, index) in shops">
  
        <Product :key="item.id"  page="category" :product="item" />
      </div>
      <Empty v-if="shops.length==0 && !isLoading" />
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import { mapGetters } from 'vuex';
import Empty from './Empty';
import SkeletonLoaders from './SkeletonLoaders';
export default {
    components: { HeaderSection ,Product,Empty,SkeletonLoaders},
        computed: {
             ...mapGetters({ 
                shops: 'categories/shops',
                  isLoading: 'home/isLoading',
                 })
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
