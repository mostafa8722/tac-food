<template>
<v-card
    class="flex flex-col mt-2  overflow-hidden content-product "
    width="100%"
    height="170"
     color="#ffffff"
  
  outlined
 
  >
    <div class="flex flex-row  ">
      <v-img
      height="60"
      width="60"
      class="flex-none rounded-xl"
      :src="product.img"
    
    ></v-img>

    <div class="flex flex-col mr-2">
      <span class=" title">  {{product.title}}</span>
      <span class=" body">  {{product.body}}</span>
      <span class=" price">   تومان{{product.price}}هر کیلو</span>

    </div>
    </div>
    <div class="flex flex-row-reverse ">
      <v-rating
      v-model="product.rate"
      background-color="warning lighten-1"
      color="red"
      size="10"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>

      <span class=" type flex-100 text-left mt-3 ml-1">  11 نفر</span>

    </div>
<div class="divider"></div>
    
  <div class="flex justify-between items-center mr-2 ml-2">
  <span class=" price"> تومان {{product.price}}</span>
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

  </div>
  </v-card>


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

.content-product{
  border-radius:0.3rem!important;
  border:0.5rem solid #dddddd;
}
.rounded-none{
  border-radius:0rem!important;
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
.type{
  color:#8d8d8d;
    font-size:0.6rem;
 
}
.flex-100{flex:100%;}

.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fe5c67!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}
.divider{height:1px;width:100%;background-color:#f6f6f6}

  .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #fe5c67;
  height:20px!important;
  width:20px!important;
}
.icon-custom{
  color:#fe5c67!important;
  font-size:17px!important;

}
    

    
  
</style>
