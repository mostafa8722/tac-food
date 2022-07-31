<template>
  <header class="flex justify-center items-center ">
    <h4 class="title">{{getUrl()}}</h4>
  
    
         <font-awesome-icon v-if="back" @click.prevent="handleBackBtn"  class="pointer btn-back absolute right-3 top-2" :icon="`fa-solid fa-arrow-right`" />
              
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


   },
   methods:{
       getUrl(){
        let url = this.$route.path;
       
       
        if(url=="/" )
        return true
        else if(url=="/myOrders" )
        return "سفارشات";
        else if(url=="/wallet")
        return "کیف پول";
        else if(url=="/profile" )
        return "پروفایل";
          else if(url=="/login" )
        return "ورود و ثبت نام";  
         else if(url=="/login/verifyCode" )
        return " کد تایید  "; 
          return "";
           
      },
      handleBackBtn(){
          this.$router.back();
      }
   }
  }
</script>
<style scoped>
  header{
    background-color: #f5f5f5;
    height:30px;
  }
  .title{
    font-size:0.7rem;
  }
  .btn-back{
    font-size:0.7rem;
    height: 20px;
  }

</style>