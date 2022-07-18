<template>
<v-card
    class="flex mb-3 mt-2  ml-2 flex-col items-center overflow-hidden  rounded-xl product-skeleton"
    width="140"
    height="180"
     color="#ffffff"
     dir="ltr"
  
 
 
  >
   <v-sheet
    
  
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
 
  </v-card>


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
      type: 'image,text,text,text,text',
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

.content-product{
  border-radius:0.3rem!important;
  border:0.5rem solid #dddddd;
  width:calc(100% - 10px)
}


.body{
  color:#8d8d8d;
    font-size:0.6rem;
     clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 94%;
}



    

    
  
</style>
