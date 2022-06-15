<template>
<div class="flex flex-col items-center mr-3 mt-2 ml-3">
  <v-card
    class="flex items-center overflow-hidden  rounded-xl"
    width="100%"
    height="50"
     
     dir="rtl"
    outlined 
 
  >
    
<v-img
      height="40"
      width="40"
      class="flex-none  rounded mr-2"
      :src="product.img"
    
    ></v-img>


  <div class="flex flex-col mr-2 mt-1">
      <span class=" title">  {{product.title}}</span>
 
  <span class=" price">  2*3000</span>
  </div>

 <v-btn
      class="mx-2 btn-custom"
      fab
      dark
      small
      

      color="primary"
    >
      <v-icon class="icon-custom"  >
        mdi-minus
      </v-icon>
    </v-btn>

     <v-btn
      class="mx-2 btn-custom"
      fab
      dark
      small
      color="primary"
    >
      <v-icon class="icon-custom"  >
        mdi-plus
      </v-icon>
    </v-btn>
  
  </v-card>
  
</div>


</template>
<script>

export default {
  props : ["product"]
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0.3rem!important;
  border: 1px solid  #dddddd;
}
.rounded{
  border-radius:50%!important;
   border: 1px solid  #dddddd;
  
}
.title{
  color:#717171;
  font-size:0.75rem;
}
.price{
  color:#717171;
    font-size:0.5rem;
  font-family: yekanNumRegular!important;
  
}
.type{
  color:#8d8d8d;
    font-size:0.6rem;
}
.btn-custom{
  background-color:#ffffff!important;
  border:1px solid #717171;
  height:30px!important;
  width:30px!important;
}
.icon-custom{
  color:#717171!important;

}
</style>
