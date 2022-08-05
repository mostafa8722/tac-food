<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         



        <v-img
      height="50"
      width="50"
       class="comment-image"
     src="/icons/comment.svg"
    
    ></v-img>
         <p class="mt-2 p-red-text">  تاکنون نظری ثبت نکردید </p>
         
                 
           

                
        
     </div>
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTriangleExclamation)

export default {
    
    

}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.p-red-text{
      color : #fd5e63;
    font-size:0.95rem;
     font-family: yekanNumRegular !important;
}
.comment-image{
      filter: invert(39%) sepia(43%) saturate(2653%) hue-rotate(329deg) brightness(113%) contrast(98%);

}
</style>
