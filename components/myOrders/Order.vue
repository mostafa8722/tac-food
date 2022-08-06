<template>
 <v-card
    class=" overflow-hidden pb-2 mt-2  rounded-xl"
    width="100%"
  
     
     dir="rtl"
    outlined 
 
  >
 
    <div class="flex mt-2 justify-between">
    <div class="flex">
      <v-img
      height="40"
      width="40"
      class="flex-none  mr-2 rounded "
        :src="product.logo"
    
    >
    <template v-slot:placeholder>
         <v-img
        src="/icons/food.svg"
       height="40"
      width="40"
      class="flex-none  rounded"
    
    
    ></v-img>
        </template>
    </v-img>


  <div class="flex flex-col mr-2 mt-1">
      <span class=" title color-60">{{product.name}}</span>
 
  <span class=" price color-60"> {{formatPrice(product.count)}} عدد </span>
  </div>
    </div>

 <div class="flex flex-row-reverse mt-2 ml-2">
      <span class=" price color-60"> {{formatPrice(product.price)}} ت  </span>
   </div>
 
 
 </div>
  </v-card>


</template>
<script>



export default {
  props : ["product"],
  
  methods:{
     formatPrice(price) {
         return  Number(price).toLocaleString() ;
      },
    
  },
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0rem!important;
  border:unset;
  border-bottom: 0.1rem solid  #dddddd;
}
.rounded{
  border-radius:50%!important;
   border: 1px solid  #dddddd;
  
}
.title{


      font-size:0.75rem;
  font-family: yekanNumRegular!important;
}
.price{
 
    font-size:0.75rem;
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
  font-size:0.9rem!important;
  padding:0.1rem;
  border:0.1rem solid #717171;
  border-radius: 50%;

}
</style>