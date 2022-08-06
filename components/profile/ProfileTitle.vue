<template>
 
      <NuxtLink v-if="item.id!=5 &&  item.id!=6 " class="w-85" :to="`${item.link}`">
      <div class="flex justify-between mt-5">
          <div class="flex">
            <v-icon v-if="item.id==1"  class=" mr-5 icon-item-pre">mdi-message-reply-text</v-icon>
            <v-icon v-else-if="item.id==2"  class=" mr-5 icon-item-pre">mdi-credit-card-outline</v-icon>
            <v-icon v-else-if="item.id==3"  class=" mr-5 icon-item-pre">mdi-alert-box-outline</v-icon>
            <v-icon v-else-if="item.id==4"  class=" mr-5 icon-item-pre">mdi-update</v-icon>
            <v-icon v-else-if="item.id==5"  class=" mr-5 icon-item-pre">mdi-share-variant-outline</v-icon>
            <v-icon v-else-if="item.id==6"  class=" mr-5 icon-item-pre">mdi-phone-hangup-outline</v-icon>
            
              <span class="text-profile-title mr-5"> {{item.title}}</span>
          </div>
          <font-awesome-icon class=" mr-5  icon-item-arrow" :icon="`fa-solid fa-angle-left`" />
      </div>
      </NuxtLink>

        <a v-else-if="item.id==5  "  @click.prevent="handleShare" class="w-85" :href="`${item.link}`">
      <div class="flex justify-between mt-5">
          <div class="flex">
            <v-icon v-if="item.id==1"  class=" mr-5 icon-item-pre">mdi-message-reply-text</v-icon>
            <v-icon v-else-if="item.id==2"  class=" mr-5 icon-item-pre">mdi-credit-card-outline</v-icon>
            <v-icon v-else-if="item.id==3"  class=" mr-5 icon-item-pre">mdi-alert-box-outline</v-icon>
            <v-icon v-else-if="item.id==4"  class=" mr-5 icon-item-pre">mdi-update</v-icon>
            <v-icon v-else-if="item.id==5"  class=" mr-5 icon-item-pre">mdi-share-variant-outline</v-icon>
            <v-icon v-else-if="item.id==6"  class=" mr-5 icon-item-pre">mdi-phone-hangup-outline</v-icon>
            
              <span class="text-profile-title mr-7"> {{item.title}}</span>
          </div>
          <font-awesome-icon class=" mr-5  icon-item-arrow" :icon="`fa-solid fa-angle-left`" />
      </div>
      </a>

        <a  v-else-if="item.id==6  " class="w-85" :href="`${item.link}`">
      <div class="flex justify-between mt-5">
          <div class="flex">
            <v-icon v-if="item.id==1"  class=" mr-5 icon-item-pre">mdi-message-reply-text</v-icon>
            <v-icon v-else-if="item.id==2"  class=" mr-5 icon-item-pre">mdi-credit-card-outline</v-icon>
            <v-icon v-else-if="item.id==3"  class=" mr-5 icon-item-pre">mdi-alert-box-outline</v-icon>
            <v-icon v-else-if="item.id==4"  class=" mr-5 icon-item-pre">mdi-update</v-icon>
            <v-icon v-else-if="item.id==5"  class=" mr-5 icon-item-pre">mdi-share-variant-outline</v-icon>
            <v-icon v-else-if="item.id==6"  class=" mr-5 icon-item-pre">mdi-phone-hangup-outline</v-icon>
            
              <span class="text-profile-title mr-5"> {{item.title}}</span>
          </div>
          <font-awesome-icon class=" mr-5  icon-item-arrow" :icon="`fa-solid fa-angle-left`" />
      </div>
      </a>
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.component('font-awesome-icon', FontAwesomeIcon)


export default {
    components: {  },
    props:{
        item :{
            type:Object,
            require:true,
        }
    },
    methods:{
        handleShare(){
            if (navigator.share) {
  navigator.share({
    title: "",
    text: "",
    url: "https://cafebazaar.ir/app/ir.takfood"
  })
  .then(() => console.log('Successful share'))
  .catch(error => console.log('Error sharing:', error));
}
        }
    }
  
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}

.text-profile-title{
    color : #606060;
       font-size:0.85rem;
     font-family: yekanNumRegular !important;
  
}
.w-85{width:85%;}
.icon-item-arrow{color:#9e9e9e}
.icon-item-pre{color:#9e9e9e}
</style>
