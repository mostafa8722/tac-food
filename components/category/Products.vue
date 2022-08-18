<template>
   <section>
     <HeaderSection :title= "title"/>
     
  
     <div class="flex flex-col mb-70  ">
       <SkeletonLoaders v-if="isLoading" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index" />

     <div  v-if="!isLoading" v-for="(item, index) in selected_shops">
  
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
          },
          tab : {
            type:Number
          }
      },
  
    data : ()  =>({
        selected_shops : [],
    }),

    created(){
  let prevInfo = this.$nuxt.context.from;



    let params = this.$route.params;
    let id = params.id;
 //  if(prevInfo  &&  prevInfo.name=="products-id")
    this.selected_shops = this.shops ;

    },
    methods:{
      isCat(cats,cat){
       
        let is_cat = cats.filter(item=>item==cat);

         return is_cat.length;
      }
    },
    watch:{
      isLoading(new_val,old_val){
        if(!new_val)
        this.selected_shops = this.shops;
      },

       tab(new_val,old_val){
        let selected_tab = new_val;
         let tab_name = selected_tab ==1 ? "همه": selected_tab ==2 ? "فست فود":selected_tab ==3 ? "ایرانی":"بین الملل";


        if(selected_tab==1)
        this.selected_shops = this.shops;
        else
        this.selected_shops = this.shops
        .filter(item =>  this.isCat(item.categories,tab_name)
        
        
        );
       

      },


    }
}
</script>
<style>
.flex-none{
    flex:none;
}
.mb-70{margin-bottom: 70px;}
</style>
