<template>
 
  <NuxtLink to="/cart">
      <div class="cart-container relative flex">
       
          
  <font-awesome-icon  class="absolute white right-3 top-4" icon="fa-solid fa-magnifying-glass" />
          <span class="white absolute white right-10 top-3"> {{totalCart}} تومان</span>  
          <span class="white absolute white left-6 top-3">سبد خرید</span>  
           <font-awesome-icon   class="absolute  white left-3 top-4" icon="fa-solid fa-angle-left" />

      </div>
  </NuxtLink>
   
  
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faAngleLeft)

import { mapGetters } from 'vuex'


export default {
   computed: {
      ...mapGetters({
           totalCart: 'products/totalCart',
        
            })
         },
  data :()=>({
    url : ""
  }),
  created(){
    this.url = this.$route.path
  },
methods :{
  handleEvent(){

   this.$router.push("/search")
  }
}
}
</script>
<style scoped>


.cart-container{
  background-color:#ea7c85;
  height: 45px;
  width: 80%;
  left:10%;
  right:10%;
  position: fixed;
  bottom: 50px;
  border-radius: 5px;
  
}
.white{
  color:#ffffff;
  font-size: 0.8rem;
}
</style>
