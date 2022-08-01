<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
           <font-awesome-icon class=" icon-triangle mt-5 " :icon="`fa-solid fa-triangle-exclamation`" />
              
         <p class="mt-2">شما سفارشی ندارید!</p>
         
                 
           

                
        
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
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.icon-triangle{
    color :#cccccc;
    font-size:3rem;
    height: 30px;
}
</style>
