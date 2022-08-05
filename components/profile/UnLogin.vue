<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
         <img  class="icon-users" src="/icons/users.svg" />
         <p class="mt-3 text-unregister">شما ثبت نام نکردید</p>

                <v-btn class="btn-add mt-5">
                      <NuxtLink to="/login">
                     <span class="white" style="font-size:0.94rem;"> ثبت نام</span>
                    <font-awesome-icon class=" white mr-5 h-15" :icon="`fa-solid fa-user`" />
                     </NuxtLink>
                </v-btn>
        
     </div>
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUser)

export default {
    components: {  },
    
  
    data: () => ({
      rules: [
        value => !!value || 'تومان',
        value => (value || '').length <= 20 || 'تعداد ارقام بیش از حد مجاز می باشد',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'تومان'
        },
      ],
    }),
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.btn-add{
    background-color : #fd5e63!important;
  
}
.white{
  
    color : #ffffff!important;
    font-size:0.8rem;
}
.icon-users{
   
    height:45px;
    font-size:1.5rem;
    color :#cccccc;
 filter: invert(81%) sepia(0%) saturate(156%) hue-rotate(224deg) brightness(80%) contrast(79%);
}
.text-unregister{
font-size: 0.95rem;
color:#9e9e9e;
}
.h-15{
    height:15px;
}
</style>
