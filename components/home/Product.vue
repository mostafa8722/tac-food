<template>
<div class="flex flex-col items-center ml-3 relative">
 <NuxtLink :to="`/products/${product.store_id}`">
 <v-card
    class="flex mb-3 mt-2 flex-col items-center overflow-hidden  rounded-xl"
    width="140"
    height="180"
     color="#ffffff"
     dir="ltr"
  
 
  >
    
<v-img
      height="100"
      width="140"
      class="flex-none rounded-none"
      :src="product.logo"
    
    >
   <template v-slot:placeholder>
         <v-img
        src="/icons/logo_.svg"
       height="100"
      width="140"
      class="flex-none rounded-none"
    
    
    ></v-img>
        </template> 
    </v-img>

<div v-if="product.discount!=0" class="shape-octagon"><span>{{product.discount}}%</span></div>
    <v-rating
      v-model="product.vote"
      background-color="warning lighten-1"
      color="red"
      size="10"
      class="rating-section"
        
    ></v-rating>
  <span class=" title">  {{product.name}}</span>
  <span class=" type">  {{product.category}}</span>
  <span class=" price">   تومان{{product.price}}هر کیلو</span>

  </v-card>
  </NuxtLink>
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
.type{
  color:#8d8d8d;
    font-size:0.6rem;
}
.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fe5c67!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}

  
    

    
    .shape-octagon {
      background: red;
      width: 20px;
      height: 20px;
      top:5px;
      left:5px;
          border-radius: 2px;
      position: absolute;
      text-align: center;
      transform: rotate(20deg);
      color:#fff;
      display:flex;
      justify-centent:center;
      align-items :center;
    }
    .shape-octagon:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
          border-radius: 2px;
      background: red;
      transform: rotate(135deg);
    }
   .shape-octagon span {
      position: absolute;
      font-size: 0.5rem;
      transform: rotate(-20deg);
      left:4px;
       font-family: yekanNumRegular!important;
    }
  
</style>
