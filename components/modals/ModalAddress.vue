<template>
  <transition name="modal-fade">
    <div class="modal-overlay " @click="$emit('close-modal')">
   
      <div class="modal relative" @click.stop>
           
            <div class="modal-header pt-3">
              <span>آدرس های من</span>
            </div>
         <div class="mt-2 mr-2 ml-2 mb-2">
         
         <div class="flex flex-col address-container">
          <AddressCard  v-for="address in addresses" :key="address.id" @handle-click="handleClickAddress" :address="address" :active="selected_address?selected_address.id==address.id?true:false:false" />
          
         
         </div>
         <div class="grid grid-cols-4 footer-address ">
          <div class="line-h-40">   <font-awesome-icon class="pointer"  @click.prevent="$emit('close-modal')"   :icon="`fa-solid fa-check`" /></div>
          <div class="line-h-40">   <font-awesome-icon  class="pointer"  @click.prevent="$emit('add-address','edit')"  :icon="`fa-solid fa-pen-to-square`" /></div>
          <div class="line-h-40">   <font-awesome-icon  class="pointer"   @click.prevent="$emit('delete-address')" :icon="`fa-solid fa-trash`" /></div>
          <div  class="line-h-40">   <font-awesome-icon class="pointer"  @click.prevent="$emit('add-address','')" :icon="`fa-solid fa-circle-plus`" /></div>
                    
         </div>
         </div>
         
      </div>
      

    </div>
  </transition>
</template>

<script>


import Vue from "vue"
import AddressCard from "./AddressCard.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash,faCirclePlus,faCheck,faPenToSquare
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTrash,faCirclePlus,faCheck,
faPenToSquare
)
import { mapGetters } from 'vuex'
export default {
   
   data : ()=>({
   
    description :"",
    selected_id : 0
   }),
   components:{AddressCard},
    computed: {
      ...mapGetters({
           addresses: 'user/userAddresses',
           selected_address: 'user/selected_address',

          
            })
         },
    methods:{
    handleAddDescription(){
     // this.$store.dispatch('carts/addDescriptionCart',this.description)
      this.$emit('close-modal');
    },
     
    handleClickAddress(address){
       
      this.$store.dispatch('user/changeSelectedAddress',address)
      this.$store.dispatch('general/addLocalLocationAddress',
      {address_title:address.title,address_postal:address.address}
      )
    }

    },
   


    }


</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 100;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: #f6f6f6;
 min-height:350px;
  width:400px;
  margin:20px  30px;

  border-radius: 20px;
  z-index: 100;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.desc-text{
    color:#696969;
    font-size: 0.65rem;
    text-align: right;
}
.font-7{font-size: 0.7rem;}







.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-header{
  height:40px;
}
.footer-address{
  position: absolute;
  background-color: #ffffff;
  height: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;

}
.line-h-40{
  line-height: 40px;
}
.address-container{


  overflow-y: auto;
}
</style>