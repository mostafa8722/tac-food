<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
         <img  class="icon-users" src="/icons/users.svg" />
         <p class="mt-3">شما ثبت نام نکردید</p>

                <v-btn class="btn-add mt-5">
                      <NuxtLink to="/login">
                     <span class="white"> ثبت نام</span>
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
   
    height:30px;
    font-size:1rem;
    color :#cccccc;
    filter: invert(89%) sepia(0%) saturate(83%) hue-rotate(136deg) brightness(95%) contrast(87%);
}
.h-15{
    height:15px;
}
</style>
