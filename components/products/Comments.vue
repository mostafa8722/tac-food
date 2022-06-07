<template>
   <section class=" bg ">
     
     
     <div class="  mr-2 ml-2 ">

            <HeaderComment class="mb-2" />
     <div  class="mt-1" v-for="(item, index) in comments">
         <Comment :comment="item" />
           
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
.flex-none{
    flex:none;
}
.bg{
      background-color: #f6f6f6;
}
</style>
