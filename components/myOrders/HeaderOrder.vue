<template>

     <div class="flex-header-container pr-3 pl-3 flex ">


   <v-icon class="color-60 pre-icon-size">{{icon}}</v-icon>
  <div class="header-side mr-2 color-60">{{title}}</div>
    <h3 class="order-header-center"></h3>
  <div class="header-side header-side-left color-8e">{{value}}</div>

   </div>
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft,faStore,faTag,faClock,faMotorcycle,faMoped} from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft,faStore,faTag,faClock,faMotorcycle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default {
   props:{
        title :{type:String},
        value :{type:String},
        icon :{type:String},
    }
}
</script>
<style scoped>



.flex-header-container {
  display: flex;
  align-items: center;
  
}
.color-60{
  color:#606060;
}
.color-8e{
  color:#8e8e8e;
}
.header-side {
   font-family: yekanNumRegular!important;
  font-size:0.85rem;
  margin-left:5px;
  margin-right:5px;
}
.height-15{
  height: 15px;
}
.order-header-center {
    border-bottom: 0.05rem dashed #cccccc;
    height: 2px;
  flex: 1;
  padding : 0px 5px;
 
}
.pre-icon-size{
  font-size: 1.6rem;
}


</style>
