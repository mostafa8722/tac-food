<template>
 <v-card
    class=" overflow-hidden pb-3 pt-3 mt-2  rounded-xl"
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
        :src="orderState.courier_photo"
    
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
      <span class=" title">{{orderState.courier_name}}</span>
 
  <span class=" price"> سفیر</span>
  </div>
    </div>

 <div class="flex flex-row-reverse mt-2 ml-5">
      <a :href="`tel:${orderState.courier_phone}`">
             <font-awesome-icon    class=" height-20 ml-1" icon="fa-solid fa-phone" />

      </a>
   </div>
 
 
 </div>
  </v-card>


</template>
<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faPhone} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  
  props : ["orderState"],
  
  methods:{
    openPhone(){

    }
    
  },
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0.35rem!important;

  border: 0.1rem solid  #dddddd;
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
  font-family: yekanBold!important;
  
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