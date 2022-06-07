<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
           <font-awesome-icon class=" icon-triangle mt-2 " :icon="`fa-solid  fa-magnifying-glass`" />
              
         <p class="mt-5">  موردی یافت نشد !</p>
         
                 
           

                
        
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
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanNumRegular!important;
}
.icon-triangle{
    color :#cccccc;
    font-size:3rem;
}
</style>
