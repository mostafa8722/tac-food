<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           
         <div class="mt-5 mr-2 ml-2 mb-2">
             <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="کد تخفیف"
              hint="کد تخفیف خود را وارد کنید"
           
             v-model="mobile"
          ></v-text-field>
         <div class="flex">
          
           <span class="desc-text block mr-2">{{text_character}}</span>
         </div>
         <div class="flex justify-evenly mb-5 mt-5 ">
                      <button @click.prevent="handleAddDescription" class="btn-save pointer mt-4"> بررسی کد </button>

         </div>
         </div>
         
      </div>
      
    </div>
  </transition>
</template>

<script>


import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
)

export default {
   
   data : ()=>({
   
    description :"",
   }),
    methods:{
    handleAddDescription(){
      //.$store.dispatch('products/addDescriptionCart',this.description)
      this.$emit('close-modal');
    }

    },
   


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
  z-index: 101;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height:250px;
  width:400px;
  margin:40px  30px;

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
.btn-save{
   background-color:#fd5e63;
   color: #ffffff;
    padding:0.3rem 1.5rem;
    border-radius: 0.3rem;
    flex:1;
}
div ::v-deep .v-label.v-label--active.theme--light {
  right: -16px!important;
    top: -12px !important;;
    left: auto!important;
}

div ::v-deep .v-input__slot fieldset legend {
 background:#ffffff!important;
}

</style>