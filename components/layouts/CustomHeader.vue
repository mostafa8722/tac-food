<template>
  <header class="flex justify-center items-center ">
    <h4 class="title">{{getUrl()}}</h4>
  
    
         <font-awesome-icon v-if="back" @click.prevent="handleBackBtn"  class="pointer btn-back absolute right-3 top-2" :icon="`fa-solid fa-arrow-right`" />
                <v-icon v-if="url=='/myOrders'" @click.prevent="refreshOrders"  class="pointer icon-refresh left-5 top-1">mdi-refresh</v-icon>
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
    url :"",
   
   }),
   mounted(){


     let url = this.$route.path;
     this.url = url;
     if(url=="/login")
     this.title = "ورود و ثبت نام"
     else  if(url=="/myOrders")
     this.title = ""
      else  if(url=="/myOrders")
     this.title = "سفارشات"
      else  if(url=="/wallet")
     this.title = "کیف پول"
     
     else  if(url=="/profile/comments")
     this.title = "نظرات "
       else  if(url=="/profile/comments")
     this.title = "سوابق پرداخت"
       else  if(url=="/profile/proposals")
     this.title = "انتقادات و پیشنهادات"


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
             else  if(url=="/profile/comments")
      return "نظرات ";
       else  if(url=="/profile/payments")
      return "سوابق پرداخت";
       else  if(url=="/profile/proposals")
      return "انتقادات و پیشنهادات";
          else if(url=="/login" )
        return "ورود و ثبت نام";  
         else if(url=="/login/verifyCode" )
        return " کد تایید  "; 
        else
          return "";
           
      },
      handleBackBtn(){
          this.$router.back();
      },
      refreshOrders(){
       this.$router.go();
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
    font-size:0.95rem;
    color:#606060;
  }
  .btn-back{
    font-size:0.7rem;
    height: 20px;
  }
.icon-refresh{position: absolute!important;}
</style>