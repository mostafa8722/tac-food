<template>
   <div
    class="flex flex-col mt-2 ml-2 overflow-hidden   category-home-skeleton"

 
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
 
</div>


</template>
<script>

  export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: ['theme'],

    data: () => ({
      boilerplate: false,
      tile: true,
      type: 'image,text',
      types: [],
      loading: true,
      transition: 'scale-transition',
    }),

    mounted () {
      this.types = Object.keys(this.$refs.skeleton.rootTypes)
    },
  }
</script>
<style >
.flex-none{
    flex:none;
}

.category-home-skeleto{
  border-radius:0.3rem!important;

  width:80px!important;
  height:80px!important;
}






    

    
  
</style>
