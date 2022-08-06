<template>
 

     

   
  <div class="flex-header-container    flex-col " :class="`${data.active?'active-order':''}`">



     <v-img
        :src="`/icons/${data.icon}`"
       height="30"
      width="30"
   
    
    
    ></v-img>
  <div class="header-side mt-3 unActive" :class="`${data.active?'active':''}`" >  {{data.title}}</div>
 
 <font-awesome-icon    class=" height-20 mt-3 unActive" :class="`${data.active?'active':''}`" :icon="`fa-solid fa-circle-check` " />    


   </div>

    
   

</template>
<script>


import { mapGetters } from 'vuex'
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faCircleCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default {

      computed: {
      ...mapGetters({
           carts: 'carts/carts',
              totalCart: 'carts/totalCart',
       
        
            })
         },
  
      props: {
        data :{
            type:Object,
            require :true,
            
        },
         
      },

      data :() =>({
        totalPrice : 0,
      }),
      created(){
        // this.totalPrice2(this.cart);
      },

    
  
  
   
}
</script>
<style scoped>
.flex-header-container{
  display:flex;
   margin: 0rem 0.5rem;
}
h3{
    font-size: 0.85rem;
}
.flex-none{
    flex:none;
}
.content-section{
 
    display: flex;
    justify-content: center;
     width:92%;
   
}
.card-content{
 border:0.1rem solid #dddddd;
 max-width: 500px;
 width:100%;
 display: flex;
}
.txt-ago{
  font-size: 0.6rem;
  color:#ff2200;
}
.order-header-center{
  flex:1;
  height: 0.12rem;
  background-color: #dddddd;
}
.height-15{
  height:15px;
}

.btn-report{
  padding:0.5rem 1.5rem;
  border-radius: 0.4rem;
   background-color: #dddddd;
}
.white{color:#ffffff;}
.unActive{color:#cccccc}
.active{color:#61b15a}
.bg-active{background-color:#61b15a}

</style>
