<template>
 
     <div class="mt-20 flex flex-col items-center justify-center mr-3">

         
           <font-awesome-icon class=" icon-triangle mt-5 " :icon="`fa-solid fa-triangle-exclamation`" />
              
         <p class="mt-5 p-cart">سبد خرید خالی می باشد!</p>
         <p class="mt-2 p-cart"> از طریق صفحه ای فروشگاه محصول خود را به سبد اضافه کنید.</p>
          <button @click.prevent="handleButton" class="btn-add-return pointer mt-5"> فروشگاه </button>
         
                 
           

                
        
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
  methods:{
    handleButton(){
        this.$router.push("/")
    }
  }   
    

}
</script>
<style scoped>
.flex-none{
    flex:none;
}

.p-cart{
    color :#8e8e8e;
    font-size:0.95rem;
    font-family: yekanNumRegular!important;
}
.icon-triangle{
    color :#cccccc;
    font-size:4rem;
    height: 50px;
}
.btn-add-return {
    background-color:#fd5e63;
   color: #ffffff;
    padding:0rem 1.5rem;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    height:50px;

}
</style>
