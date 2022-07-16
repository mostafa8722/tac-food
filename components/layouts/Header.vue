<template>
      <div class=" flex justify-center mt-2">
              <font-awesome-icon @click.prevent="handleMap"  class="pointer h-4 " icon="fa-solid fa-angle-down" />
              <span></span>
          <ModalMap v-show="showModal" :showModal="showModal" @close-modal="showModal = false"  />
      </div>
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ModalMap from '~/components/map/ModalMap.vue'
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faAngleDown)

import { mapGetters } from 'vuex'


  export default {
    components:{
    ModalMap
    },
    data: () => ({
      showModal  :false
    }),  
    methods:{
      handleMap(){
        this.showModal = !this.showModal;
      }
    }
  }
</script>