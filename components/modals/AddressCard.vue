<template>
         <div :class="`container-address mt-2 flex justify-between items-center ${active?'active':''} `">
              <div class="flex">
                 <div class="circle-address">و</div>
                 <div class="flex flex-col text-right mr-1">
                    <span class="title">وو</span>
                    <span class="body">نممم</span>
                 </div>
              </div>
              <span class="left-circle ">
                <span class="inline-left-circle"></span>
              </span>
         </div>
</template>

<script>


import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
)

export default {
    props:{
        active:{
            type:Boolean,
            default :false
        }
    },
   
   data : ()=>({
   
    description :"",
   }),
   
   


    }


</script>

<style scoped>

.container-address{
  height:70px;
  border-radius: 5px;
  border:0.1rem solid #d0d0d0;
  background-color: #ffffff;
  padding:0rem 1rem;
  
}
.circle-address{
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color: #cccccc;
  color:#ffffff;
  line-height: 50px;;
}
.left-circle{
  border:0.09rem solid #cccccc;
    width:20px;
  height:20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.inline-left-circle{
  background-color: #fd5e63;
    width:12px;
  height:12px;
  border-radius: 50%;
  display: none;

}
.active .left-circle{ border:0.09rem solid #fd5e63;}
.active .circle-address{ background-color: #fd5e63;}
.active{  border:0.1rem solid #fd5e63!important;}
.active .inline-left-circle{  display: block;}
.title{
  color:#464646 ;
}
.body{
  color:#959595 ;
}
</style>