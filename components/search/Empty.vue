<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
           <font-awesome-icon class=" icon-triangle mt-2 " :icon="`fa-solid  fa-magnifying-glass`" />
              
         <p class="mt-5 text-search-empty">  موردی یافت نشد !</p>
         
                 
           

                
        
     </div>
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faMagnifyingGlass)

export default {
    
    

}
</script>
<style scoped>
.flex-none{
    flex:none;
}
 .text-search-empty{
    color :#cccccc;
    font-size:0.95rem;
    font-family: yekanBold!important;
}
.icon-triangle{
    color :#cccccc;
    font-size:3rem;
}
</style>
