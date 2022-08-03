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
    <div v-if="getShopInfo(shops,products)" class="custom-active-time" >
        <div class="active-time-shape">
          <div class="active-time-shape-inline"></div>
        </div>
        <span class="active-time-text mr-2">فعالیت از {{getShopInfo(shops,products)}}</span>
      </div>
     <HeaderSection class="mt-2" :title= "title"/>
     
     <div class="mt-1 flex flex-col ml-3 mr-3 pb-70">
        <SkeletonLoaders v-if="isLoading" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index"  />
    
  
        <Product   v-if="!isLoading" v-for="(item, index) in catProducts"  @select-product="showProduct" page="store" :key="item.id"  :product="item" />
      
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
                    shops: 'categories/shops',
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
            },
              getShopInfo(shops,products){
            
           
           
           let product = products[0];
          

                  
           let shop = shops.filter(item=> item.id == product.store_id)[0];
        
        if(shop){
            this.$store.dispatch('products/setTitle',product.store_name)
            let hour_start = parseInt(shop.activity_times[0].start.substring(0,2));
            let min_start =parseInt( shop.activity_times[0].start.substring(3,5));
              
          let hour_end = parseInt(shop.activity_times[0].end.substring(0,2));
            let min_end = parseInt(shop.activity_times[0].end.substring(3,5));

              let date  = new Date();
              let hour = date.getHours();
              let min = date.getMinutes();
               if( hour< hour_start || hour>hour_end ){
                return false;
               }else  if( hour== hour_start || min<min_start ){
                return false;
               }
               else  if( hour== hour_end || min>min_end ){
                return false;
               }
         return  hour_start + ":"+min_start +" الی "+hour_end + ":"+min_end;
        }
        
           
      return false;
            
          
           

      },
         }
         ,
         watch :{
            products(new_val ,old_val){
             this.title = this.catgoriesStore[0].name;
           this.catProducts = new_val.filter(item=> item.category==this.title);

                   setTimeout(()=>{
                        this.show_tab = true;
                    
                   },150);

                    
            },
            isLoading(new_val,old_val){

             
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
.custom-active-time{
  border-top: 0.05rem solid #e5e5e5;
  background-color: #ffffff;
  height: 30px;
  display: flex;
  padding-right: 1rem;
  align-items: center;
}
.active-time-text{
  color:#fe5c67;
  font-size: 0.7rem;
  font-family: IranYekanFN!important;

}
.active-time-shape{
  height: 12px;
  width: 12px;
  border:0.05rem solid #fe5c67;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active-time-shape-inline{
  height: 7px;
  width: 7px;
  background-color: #fe5c67;
  border-radius: 50%;
}
.pb-70{padding-bottom: 70px;}
</style>
