<template>
   <section  >
    
     <HeaderSection title="پیشنهادات"/>

 
     <div class="sliders-section">
     
       <v-carousel
      
       hide-delimiters
   :cycle="false"
    height="400"
    hide-delimiter-background
    :show-arrows="false"
     reverse
       transition="fade-transition"
  >
  
    <v-carousel-item
      v-for="(slide, i) in sliders"
      :key="i"
      
       :value="i"
       v-touch="{
      left: () => swipe('left'),
      right: () => swipe('right'),
   
    }"
    >
     
       <div class="costom-image-cover">
          

                
      <NuxtLink :to="`/products/${sliders[currentIndex].store_id}`">
    <img  class="flex-none custom-image-slider"
      :src="sliders[currentIndex].url" />
      </NuxtLink>
          </div>

    </v-carousel-item>
  </v-carousel>
  <SliderLoaders v-if="isLoading" />

  </div>
  
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import SliderLoaders from './SliderLoaders.vue';
import { mapGetters } from 'vuex'

export default {
    components: { HeaderSection, SliderLoaders },
        computed: {
    ...mapGetters({
       sliders: 'home/sliders',
       isLoading: 'home/isLoading',
        })
      },
      data :()=>({
        currentIndex : 0,
        interavl : null,
      }),
      created(){
          this.customInterval();
      }
       
      ,
      methods :{
         swipe (direction) {

clearInterval(this.interavl);
       if(direction=="left"){
    if(this.currentIndex>0)
      this.currentIndex = Math.max(this.currentIndex - 1, 0)
       }else if(direction=="right"){
    
              if(this.currentIndex<this.sliders.length-1)
              this.currentIndex = Math.min(this.currentIndex + 1, this.sliders.length-1)
       }
         this.customInterval();
       
           
      },
      customInterval(){
      this.interavl =   setInterval(() => {
           if(this.currentIndex ==this.sliders.length-1 )
           this.currentIndex=0
           else
           this.currentIndex++;
        }, 7000);
      }
      }
   
}
</script>
<style>
.sliders-section{
    width:100%;
    overflow:hidden;
    position:relative;
    margin:10px;
    width:95%;
    height: 350px;
}
.custom-image-slider{
    border-radius:10px;
 
    overflow:hidden;
  
    
    object-fit:cover;
    background-size : cover;
}
.costom-image-cover3{
        border-radius:10px;
        background-color:#ffffff;
         margin : 10px;
         padding : 10px;
       
}
@media screen and (max-width:600px){
.sliders-section{
  height: 220px;
}
}
</style>
