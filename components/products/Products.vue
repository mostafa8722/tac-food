<template>
   <section class="product-tab">

     <v-tabs
     v-if="show_tab"
      v-model="tab"
      background-color="#f5f5f5"
      centered
      dark
      icons-and-text
       fixed-tabs
       class="tabs-style"
       id="tabss"
      >
     

      <v-tab v-for="(cat,index) in catgoriesStore" :href="`#tab-${index+1}`" @click.prevent="handleTab" >
       
      <a class="tab-title" :href="`#tab-${index+1}`">{{cat.name}}</a>

        
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
    
    <div v-show="!is_active && shop_clock!=''" class="custom-active-time" >
        <div class="active-time-shape">
          <div class="active-time-shape-inline"></div>
        </div>
        
        <span class="active-time-text mr-2">فعالیت از {{shop_clock}}</span>
      </div>
    
     
     <SkeletonLoaders  v-for="(item,index) in [1,2,3,4,5,6,7,8]"  v-if="isLoading && title==''"  :key="index"  />
    
     <div @scroll="handleScroll(true)"  id="tab-content" :style="`height:${height}`"  class="mt-1 flex flex-col items-center ml-3 mr-3 pb-70 ">
         
         <div class="w-100 d-flex flex-col items-center"  v-for="(cat, index) in catgoriesStore" :id='`tab-${index+1}`' >
            <HeaderSection class="mt-2" :title= "cat.name"/>
            <Product   v-for="(item) in handleTabSelected(cat)" :index="index" :is_store_online="!is_active" @select-product="showProduct" page="store" :key="item.id"  :product="item" />
      
         </div>
     
         
     
     </div>
        
      <Empty v-show="products.length==0 && !isLoading" />

     <ModalShowProduct :product="selectedProduct" :is_store_online="!is_active"  v-show="showModal" @close-modal="showModal = false" />
    </section>

</template>
<script>
import ModalShowProduct from '~/components/modals/ModalShowProduct.vue'
import HeaderSection from '../app/HeaderSection.vue';
import Product from './Product.vue';
import SkeletonLoaders from './SkeletonLoaders';
import Empty from './Empty';
import { mapGetters } from 'vuex'
import { off } from 'process';
export default {
    components: { HeaderSection ,Product,ModalShowProduct,SkeletonLoaders,Empty},
    data:()=>({
        selectedProduct :{},
        catProducts :[],
        showModal: false,
        title :"",
        show_tab :false,
        isScrolling :true,
        tab:null,
        height :"750px",
        shop_clock :"",
        is_active : false,
        path: "",
        
    }),
      
      created(){
       this.path =  this.$route.path ;
         let prevInfo = this.$nuxt.context.from;
        if(prevInfo){
        this.getShopInfo(this.shops,this.products);
          this.catProducts = this.products.filter(item=> item.category==this.title);
          this.show_tab = true;
        }

      },
      
       computed: {
             ...mapGetters({
                 products: 'products/products',
                 catgoriesStore: 'products/catgoriesStore',
                  isLoading: 'home/isLoading',
                    shops: 'categories/shops',
                       title: 'products/title',
                 })
         },
         methods:{
       
            showProduct(product){
              this.showModal = true;
              this.selectedProduct = product
            },
            handleTabSelected(cat){
              
            return   this.products.filter(item=> item.category==cat.name);
            },
            
            handleTab(e){
           

             this.isScrolling = false;
                 setTimeout(()=>{
                        this.isScrolling = true;
                    
                   },150);
            },
            handleScroll(event){

 let scroll_top = document.getElementById("tab-content").scrollTop ;

              if(this.isScrolling){
              
            

             let cats = this.catgoriesStore;
             let initial = 0;
             let is_set = false;
             let selected_index = 0;
 
             for(let i=0;i<=cats.length-1;i++){
               let products = this.products.filter(item=> item.category==cats[i].name);
               console.log("ttt4_scroll_",i+"==>"+products.length)
              
             if(initial<=scroll_top && scroll_top < (initial+products.length*155 +40)){
               
             
                this.isScrolling = true
               this.tab = "tab-"+(i+1);
             
               }
                initial += products.length*155 +40;
                        window.scrollTo({
                        top: 10,
                        left: 10,
                        behavior: 'smooth'
                      });
                
          
             }
             
           // document.getElementById("content-product-3610").scrollTop  = 0;
              }
            },
              getShopInfo(shops,products){
                

           

           
         
           let product = products[0];
          

                  
           let shop = shops.filter(item=> item.id == product.store_id)[0];
        
        if(shop){
       
          
         
            shop.activity_times.map((item,index)=>{

          
            let hour_start = parseInt(item.start.substring(0,2));
            let min_start =parseInt( item.start.substring(3,5));
              
          let hour_end = parseInt(item.end.substring(0,2));
            let min_end = parseInt(item.end.substring(3,5));

              
              let date  = new Date();
              let hour = date.getHours();
              let min = date.getMinutes();
                    
             
         if( hour> hour_start &&   hour<hour_end ){
                this.is_active = true;
               }else  if( hour== hour_start &&  min>=min_start ){
                this.is_active = true;
               }
               else  if( hour== hour_end &&  min<=min_end ){
                this.is_active = true;
               }

                  let index_txt =  index==0?"":" - " ;
                    hour_start = hour_start<10?("0"+hour_start):hour_start ;
                    hour_end = hour_end<10?("0"+hour_end):hour_end ;
                    min_start = min_start<10?("0"+min_start):min_start ;
                    min_end = min_end<10?("0"+min_end):min_end ;
                    
                  this.shop_clock += index_txt + hour_start +":"+min_start + " الی " + hour_end+":"+min_end;
                  
                 });
        
        }
        
           
   
            
          
           

      },
     

         }
         ,
         watch :{
            products(new_val ,old_val){
             this.title = this.catgoriesStore[0].name;
            // this.height = (window.innerHeight-204)+"px";
            this.height = "450px";
            
           this.catProducts = new_val.filter(item=> item.category==this.title);

             
                   setTimeout(()=>{
                        this.show_tab = true;
                    
                   },150);

                    
            },
             shops(new_val ,old_val){
            
              this.getShopInfo(this.shops,this.products)
                   

                    
            },
            tab(new_val,old_val){

            
              let ele = document.getElementById(new_val); 
              let products = this.handleTabSelected( this.catgoriesStore[new_val.substring(4)-1])  
               var topPos = ele.offsetTop;
              
                
             if(!this.isScrolling){
            
              let cats = this.catgoriesStore;
             let initial = 0;
             let is_set = false;
             let selected_index = new_val.substring(4);

             for(let i=0;i<=selected_index-2;i++){
            let products = this.products.filter(item=> item.category==cats[i].name);
             
              if(i<=selected_index-1){
               initial += products.length*155 +40;
              }
              
  
              if(i>selected_index-1)
              break;
                
                
          
             }

               //document.getElementById("tab-content").scrollTop = initial+offset;

               if(selected_index==1)
               document.getElementById("tab-content").scrollTop  = 0;
              else 
               document.getElementById(new_val).scrollIntoView() ;
              

             }
             
             
            },
            
           
            
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
  position: relative;
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
  position: absolute;
  right: 8px;
}
.active-time-shape-inline{
  height: 7px;
  width: 7px;
  background-color: #fe5c67;
  border-radius: 50%;
}
.pb-70{padding-bottom: 70px;}
.mt-100{margin-top: 100px;}
#tab-content{margin-top: 10px;overflow-y: scroll;


}
::-webkit-scrollbar {
  width: 0.0001rem;
}

::-webkit-scrollbar-thumb {
  background: #fe5c67; 
  border-radius: 1px;
}
</style>
