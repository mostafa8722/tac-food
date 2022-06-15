<template>
  <header class="flex justify-center items-center ">
    <h4 class="title">{{title}}</h4>
    
         <font-awesome-icon v-if="back" class=" btn-back absolute right-3" :icon="`fa-solid fa-arrow-right`" />
              
  </header>
      
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRight)
  export default {
    props :["back"],
   data : ()=>({
     title:"ورود و ثبت نام"
   }),
   mounted(){
     let url = this.$route.path;
     if(url=="/login")
     this.title = "ورود و ثبت نام"
     else  if(url=="/myOrders")
     this.title = ""
      else  if(url=="/myOrders")
     this.title = "سفارشات"
      else  if(url=="/wallet")
     this.title = "کیف پول"
       else  if(url=="/profile")
     this.title = "پروفایل"
   }
  }
</script>
<style scoped>
  header{
    background-color: #f6f6f6;
    height:30px;
  }
  .title{
    font-size:0.7rem;
  }
  .btn-back{
    font-size:0.7rem;
  }

</style>