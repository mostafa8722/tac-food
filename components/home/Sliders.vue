<template>
   <section >
     <HeaderSection title="پیشنهادات"/>
     <div class="sliders-section">
       <v-carousel
       hide-delimiters
    cycle
    height="400"
    hide-delimiter-background
    :show-arrows="false"
  >
  
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
     
       <div class="costom-image-cover">
          

                

    <img  class="flex-none custom-image-slider"
      :src="slide" />
          </div>

    </v-carousel-item>
  </v-carousel>
  </div>

    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';

export default {
    components: { HeaderSection },
    data :()=>({
        
        slides: [
          '/images/tac1.png',
          '/images/tac2.png',
          '/images/tac3.png',
          '/images/tac4.png',
          
          
          
          
        ],
    })
}
</script>
<style>
.sliders-section{
    width:100%;
    overflow:hidden;
    position:relative;
    margin:10px;
    width:95%;
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
</style>
