<template>
   <section class=" bg mb-5 ">
     
     
     <div class="  mr-10 ml-10  ">

          
    
           <v-card 
    class="flex items-center border-a justify-center rounded-xl pt-2 mt-3 pb-2 "
    width="100%"
    height="80"
    
     color="#ffffff"
   outlined
  
  >
         <div class="flex flex-col justify-center items-center  "> 
              <v-icon>mdi-phone</v-icon>
              <span class="header-title mt-1">حداقل سفارش</span>
              <span class="header-value  mt-1">30000 تومان </span>
              
        </div>

           <div class="flex flex-col justify-center  items-center "> 
              <v-icon>mdi-phone</v-icon>
              <span  class="header-title  mt-1" > هزینه ارسال</span>
              <span class="header-value  mt-1">30000 تومان </span>
              
        </div>
     </v-card>

     <div class="mt-3">
           <v-icon class="address" >mdi-phone</v-icon> 
           <span class="address">شهرک فجر بلوار شهید </span>
     </div>
     

        <v-card 
    class="flex items-center border-a justify-center rounded-xl pt-2 mt-3 pb-2 "
    width="100%"
    height="150"
    
     color="#ffffff"
   outlined
  
  >
        
     </v-card>

     <div class="mt-3">
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
           <v-icon class="title-item" >mdi-phone</v-icon> 
           <span class="title-item"> درباره ی فروشگاه  </span>
           <p class="item-value">11 الی 19 </p>
     </div>

     </div>
    </section>

</template>
<script>
import HeaderComment from './HeaderComment.vue';
import Comment from './Comment.vue';
export default {
    components: { HeaderComment ,Comment},
      props: {
          title:{
              type:String
          }
      },
  
    data : ()  =>({
        comments : [
            {title:"گوجه فرنگی ",name:"علی",comment:"استقلال فصل بیست و یکم یکی از بهترین تیم‌های تاریخ این باشگاه بود. از قضا کم‌ستاره‌ترین تیم تاریخ هم بود، ولی نتایج خوبی از خود به جا گذاشت. ولی رفتن مجیدی استقلال را دوباره در موضع ضعف قرار داد",date:"14/03"},
            {title:"گوجه فرنگی ",name:"علی",comment:"استقلال فصل بیست و یکم یکی از بهترین تیم‌های تاریخ این باشگاه بود. از قضا کم‌ستاره‌ترین تیم تاریخ هم بود، ولی نتایج خوبی از خود به جا گذاشت. ولی رفتن مجیدی استقلال را دوباره در موضع ضعف قرار داد",date:"14/03"},
            {title:"گوجه فرنگی ",name:"علی",comment:"استقلال فصل بیست و یکم یکی از بهترین تیم‌های تاریخ این باشگاه بود. از قضا کم‌ستاره‌ترین تیم تاریخ هم بود، ولی نتایج خوبی از خود به جا گذاشت. ولی رفتن مجیدی استقلال را دوباره در موضع ضعف قرار داد",date:"14/03"},
            {title:"گوجه فرنگی ",name:"علی",comment:"استقلال فصل بیست و یکم یکی از بهترین تیم‌های تاریخ این باشگاه بود. از قضا کم‌ستاره‌ترین تیم تاریخ هم بود، ولی نتایج خوبی از خود به جا گذاشت. ولی رفتن مجیدی استقلال را دوباره در موضع ضعف قرار داد",date:"14/03"},
         
      ]
    })
}
</script>
<style scoped>
.bg{ background-color: #f6f6f6;}
.border-a{border:0.07rem solid #aeaeae!important;}
.header-title{font-size: 0.7rem;color:#6a6a6a}
.header-value{font-size: 0.65rem;color:#b2b2b2}
.address,.title-item{font-size:0.6rem;color:#888888}
.item-value{font-size:0.55rem;color:#a1a1a1}
</style>
