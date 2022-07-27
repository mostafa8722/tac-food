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
              <v-icon>mdi-phone</v-icon>
              <span class="header-title mt-1">حداقل سفارش</span>
              <span class="header-value  mt-1">{{lat}} </span>
              
        </div>

           <div class="flex flex-col justify-center  items-center "> 
              <v-icon>mdi-phone</v-icon>
              <span  class="header-title  mt-1" > هزینه ارسال</span>
              <span class="header-value  mt-1">{{lng}}  </span>
              
        </div>
     </v-card>

     <div class="mt-3">
           <v-icon class="address" >mdi-phone</v-icon> 
           <span class="address">شهرک فجر بلوار شهید </span>
     </div>
     

    
           <div class="mt-10 mb-3 mr-2 ml-2 rounded-xl relative" style="position:relative;height: 130px">
           
           <Map :center="[lat, lng]"  :markerLatLng="[lat, lng]" v-if="show_map" /></div>
    

     <div class="mt-10">
           <v-icon class="title-item" >mdi-phone</v-icon> 
           <span class="title-item">ساعات کاری </span>
           <p class="item-value">11 الی 19 </p>
     </div>

      <div class="mt-3">
           <v-icon class="title-item" >mdi-phone</v-icon> 
           <span class="title-item">روزهای تعطیل  </span>
           <p class="item-value">11 الی 19 </p>
     </div>

      <div class="mt-3 mb-10">
           <v-icon class="title-item" >mdi-information-outline</v-icon> 
           <span class="title-item"> درباره ی فروشگاه  </span>
           <p class="item-value">11 الی 19 </p>
     </div>

     </div>
    </section>

</template>
<script>
import HeaderComment from './HeaderComment.vue';
import Comment from './Comment.vue';
import Map from "../modals/Map"
import {LOCATION_DEFAULT} from "~/data/default"
export default {
    components: { HeaderComment ,Comment,Map},
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
    }
}
</script>
<style scoped>
.bg{ background-color: #f6f6f6;}
.border-a{border:0.07rem solid #aeaeae!important;}
.header-title{font-size: 0.75rem;color:#565656;font-weight: bold;}
.header-value{font-size: 0.65rem;color:#b2b2b2}
.address,.title-item{font-size:0.75rem;color:#565656;font-weight: bold;}
.item-value{font-size:0.7rem;color:#a1a1a1}
</style>
