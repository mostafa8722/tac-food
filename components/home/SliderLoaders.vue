<template>
 <v-sheet
    
   class="slider-skeleton " 
  >
    <v-responsive
    
    >
   

      <v-skeleton-loader
        ref="skeleton"
        :boilerplate="boilerplate"
        :type="type"
        :tile="tile"
        
        class="mx-auto"
      >
       
      </v-skeleton-loader>
    </v-responsive>
  </v-sheet>


</template>
<script>

  export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
  

    data: () => ({
      boilerplate: false,
      tile: true,
      type: 'image',
      types: [],
      loading: true,
      transition: 'scale-transition',
    }),

    mounted () {
      this.types = Object.keys(this.$refs.skeleton.rootTypes)
    },
  }
</script>
<style scoped>
.slider-skeleton{
  position: absolute;
  top:0px;
  width: 100%;;
  height: 100%;
} 



    

    
  
</style>
