<template>
   <section class=" bg mb-5 ">
     
     
     <div class="  mr-10 ml-10  ">

          
    
           <v-card 
    class="flex items-center border-a justify-around rounded-xl pt-2 mt-3 pb-2 "
    width="100%"
    height="80"
    
     color="#ffffff"
   outlined
  
  >
         <div class="flex flex-col justify-center items-center  "> 
              <v-icon>mdi-wallet</v-icon>
              <span class="header-title mt-1">حداقل سفارش</span>
              <span class="header-value  mt-1">{{getShopInfo(shops,products,"min_cost")}} </span>
              
        </div>

           <div class="flex flex-col justify-center  items-center "> 
              <v-icon>mdi-motorbike</v-icon>
              <span  class="header-title  mt-1" > هزینه ارسال</span>
              <span class="header-value  mt-1">{{getShopInfo(shops,products,"delivery_cost")}} </span>
              
        </div>
     </v-card>

     <div class="mt-3">
           <v-icon  >mdi-map-marker-outline</v-icon> 
           <span class="address"> {{getShopInfo(shops,products,"address")}}    </span>
     </div>
     

    
           <div class="mt-2 mb-3 mr-2 ml-2 rounded-xl relative" style="position:relative;height: 130px">
           
           <Map :center="getShopInfo(shops,products,'lat')"  :markerLatLng="getShopInfo(shops,products,'lat') " v-if="show_map" /></div>
    

     <div class="mt-7">
           <v-icon  >mdi-clock-outline</v-icon> 
           <span class="title-item">ساعات کاری </span>
           <p class="item-value">{{getShopInfo(shops,products,"activeTime")}}  </p>
     </div>

      <div class="mt-3">
           <v-icon  >mdi-calendar-today</v-icon> 
           <span class="title-item">روزهای تعطیل  </span>
           <p class="item-value">{{getShopInfo(shops,products,"activeTime")}} </p>
     </div>

      <div class="mt-3 mb-10">
           <v-icon  >mdi-information-outline</v-icon> 
           <span class="title-item"> درباره ی فروشگاه  </span>
           <p class="item-value">{{getShopInfo(shops,products,"description")}} </p>
     </div>

     </div>
    </section>

</template>
<script>
import HeaderComment from './HeaderComment.vue';
import Comment from './Comment.vue';
import Map from "../modals/Map"
import {LOCATION_DEFAULT} from "~/data/default"
import { mapGetters } from 'vuex';
export default {
    components: { HeaderComment ,Comment,Map},
     computed: {
             ...mapGetters({ 
                  shops: 'categories/shops',
                  isLoading: 'home/isLoading',
                  products: 'products/products',
                 })
         },
  
      props: {
          title:{
              type:String
          }
      },
  
    data : ()  =>({
         show_map : false,
          lat :`${LOCATION_DEFAULT.lat}`,
    lng :`${LOCATION_DEFAULT.lng}`,
    }),
    created (){
       setTimeout(()=>{
          
        this. show_map =  true
        },100)
    },
    methods:{
      getShopInfo(shops,products,type){
            
           
           
           let product = products[0];
          
                  
           let shop = shops.filter(item=> item.id == product.store_id)[0];
                 
          if(type=="lat")
           return [shop.lat,shop.lng];
           else if(type=="activeTime")
           return shop.activity_times[0].start.substring(0,5) +" الی "+shop.activity_times[0].end.substring(0,5);
            else if(type=="delivery_cost")
           return shop.delivery_cost==0?"رایگان":this.formatPrice(shop.delivery_cost);
           else if(type=="min_cost")
           return shop.min_cost?this.formatPrice(shop.min_cost):0;
           else if(type=="description")
           return shop.description;
           else if(type=="address")
           return shop.address;
           

      },
        formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"تومان";
      },
    }
}
</script>
<style scoped>
.bg{ background-color: #f5f5f5;}
.border-a{border:0.07rem solid #aeaeae!important;}
.header-title{font-size: 0.75rem;color:#565656;font-weight: bold;}
.header-value{font-size: 0.65rem;color:#b2b2b2}
.address,.title-item{font-size:0.75rem;color:#565656;font-weight: bold;}
.item-value{font-size:0.7rem;color:#a1a1a1}
</style>
