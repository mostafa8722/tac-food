<template>
   <section  >
    
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
      v-for="(slide, i) in sliders"
      :key="i"
    >
     
       <div class="costom-image-cover">
          

                
      <NuxtLink :to="`/products/${slide.store_id}`">
    <img  class="flex-none custom-image-slider"
      :src="slide.url" />
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
