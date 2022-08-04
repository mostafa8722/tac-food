<template>
     <div class=" bg-comment  ">
       <div class="flex justify-between ">
            <div class="d-flex items-center">
             <v-icon  color="#4caf50">mdi-emoticon-happy-outline</v-icon>
           <span class="mr-2 comment-title">{{comment.name}}</span>
            </div>
           <span class="date-c">{{comment.date}}</span>

           
       </div>
       <p class="comment-body mt-2">{{comment.body}}</p>
      <div class="flex justify-between mt-2 mb-1">
          <p class=" title">{{comment.products[0]}}</p>
          <div class="flex flex-row-reverse">
            <font-awesome-icon class="icon-item pointer ml-2" icon="fa-solid fa-thumbs-up" />
            <p class=" title ml-2">{{comment.like}}</p>
            <font-awesome-icon class="icon-item pointer ml-2" icon="fa-solid fa-trash" />
          </div>
           
      </div>


     
     </div>

</template>
<script>

import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash,faThumbsUp} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTrash,faThumbsUp)


export default {
    components: { },
      props: {
          comment:{
              type:Object,
              require :true
          }
      },
  
   
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.bg-comment{
    background:#ffffff;
    min-height:120px;
    padding:10px;

}
span{
    font-size:0.7rem;
}
p{
    font-size:0.6rem;
}
.title{
font-size:0.8rem;
color:#ababab;
 font-family: IranYekanFN !important;
}
.comment-body{
 
font-size:0.75rem;
color:#606060;
 font-family: yekanNumRegular !important;
 min-height: 70px;

}
.comment-title{
 
font-size:0.85rem;
color:#606060;
 font-family: IranYekanFN !important;

}
.icon-item{
    color:#9c9c9c;
    font-size: 0.7rem;
}
.d-flex{display: flex;}
.date-c{
    font-size:0.65rem;
color:#ababab;
 font-family: IranYekanFN !important;
}    
</style>
