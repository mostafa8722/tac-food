<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           <div class="flex relative" style="height:40px;">
                              <font-awesome-icon class="  mt-2 mr-3 font-7" :icon="`fa-solid fa-arrow-right`" />

            <h5 class="absolute text-center w-100 top-2">انتخاب موقعیت </h5>
           </div>
            <span class="desc-text block mb-2 mr-3">
               موقعیت مکانی خود را برروی نقشه مشخص کنید
           </span>
        <div style="position:relative;height: 200px"><Map /></div>
         <div class="flex justify-center mb-5 mt-5">
             <div class="btn-gps ml-5  relative">
             
               <font-awesome-icon class="  white" :icon="`fa-solid fa-location-crosshairs`" />

           </div>
             <div class="btn-location relative">
               <span class="white" style="font-size: 0.8rem;">انتخاب محل</span>
               <font-awesome-icon class=" mr-5  icon-item red" :icon="`fa-solid fa-location-dot`" />

           </div>
         </div>
      </div>
      <div class="close" @click="$emit('close-modal')">
          
      </div>
    </div>
  </transition>
</template>

<script>
import Map from "./Map"

import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
)

export default {
    components:{Map}
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height:calc(100% - 40px);
  width:calc(100% - 60px);
  margin:20px  30px;

  border-radius: 20px;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.desc-text{
    color:#696969;
    font-size: 0.65rem;
    text-align: right;
}
.font-7{font-size: 0.7rem;}
.btn-location{
    height:40px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}
.btn-gps{
    height:40px ;
    width:40px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}
.white{
    color:#ffffff;
}
.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>