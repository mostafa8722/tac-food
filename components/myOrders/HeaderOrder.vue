<template>

     <div class="flex-header-container pr-3 pl-3 flex ">

   <font-awesome-icon    class=" height-15" :icon="`fa-solid ${icon}` " />
  <div class="header-side mr-2">{{title}}</div>
    <h3 class="order-header-center"></h3>
  <div class="header-side header-side-left">{{value}}</div>

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

.header-side {
   font-family: yekanNumRegular!important;
  font-size:0.6rem;
  margin-left:5px;
  margin-right:5px;
}
.height-15{
  height: 15px;
}
.order-header-center {
border-bottom: 0.1rem dotted;
    height: 2px;
  flex: 1;
  padding : 0px 5px;
 
}


</style>
