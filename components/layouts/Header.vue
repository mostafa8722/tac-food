<template>
  <div>
       <div v-if="!isSendingData" class=" flex justify-center items-center flex-col mt-2">
              <div class="flex justify-center ">
                <span  class="text-sm ml-2">
                  {{location_address.address_title}}
                </span>
                <font-awesome-icon @click.prevent="handleMap"  class="pointer h-4 text-sm" icon="fa-solid fa-angle-down" />
                
              </div>
              <span class="text-xs">{{location_address.address_postal}}</span>
         
      </div>
       <div v-else class=" flex justify-center items-center  mt-2">
              <v-progress-circular
                 class="progress-circular"
              
               indeterminate
               
              color="#676767"/>
      </div>
       <ModalMap  v-show="showModalMap" :showModal="showModalMap" @close-modal="showModalMap = false" @set-location="handleSetLocation"  />

       <ModalAddress    v-show="showModal" @close-modal="showModal = false" @add-address="handleAddAddress" @delete-address="handleDeleteAddress"  />
       <ModalAddAddress  :latlng="latlng"  :showModal="showAddAddress"  v-show="showAddAddress" @close-modal="showAddAddress = false"  :editAddress="editAddress" />
      
      <ModalDelete :data="deleteData" v-show="showDeleteAddress" @close-modal="showDeleteAddress = false" @confirm-delete="confirmDeleteAddress"   />

       
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

import ModalAddress from '~/components/modals/ModalAddress.vue'
import ModalAddAddress from '~/components/modals/ModalAddAddress.vue'
import ModalDelete from '~/components/modals/ModalDelete.vue'

import { mapGetters } from 'vuex'
import Cookies from "js-cookie"
import {GetStorage} from "~/utils/helpers"

  export default {
    components:{
    ModalMap,ModalAddress,ModalAddAddress,ModalDelete
    },
    computed: {
      ...mapGetters({
           
           isSendingData: 'general/isSendingData',
           location_address: 'general/location_address',
            selected_address: 'user/selected_address',
          
            })
         },
    data: () => ({
      showModal  :false,
      showModalMap  :false,
      showAddAddress  :false,
      isLogin : false,
      editAddress : "",
      showDeleteAddress :false,
      deleteData :{title:"هشدار!",description:"آیا برای حذف این آیتم مطمئن هستید؟",cancelBtn:"انصراف",confirmBtn:"بله" },
       latlng :[]
        
    }),  
    created(){
      if(Cookies.get("user")){
      this.isLogin  = true;
        let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token
                    };
                 
               this.$store.dispatch('user/userAddresses',token)    
      }else
      this.isLogin = false

      if(!GetStorage("latlng"))
      setTimeout(()=>{this.showModalMap = true},200)
      
    },
    methods:{
      handleMap(){
        
        if(this.isLogin)
        this.showModal = !this.showModal;
        else 
        this.showModalMap = !this.showModalMap;
      },
      handleSetLocation(data){
      this.showModalMap  = false  
    
        
      if(this.isLogin){
           this.showAddAddress = true;
        
      }else {
     this.$store.dispatch('general/addLocationAddress', data)
      }
      this.latlng = [data.lat ,data.lng] ;

      },
       handleAddAddress(address){
                
                     this.showModalMap = true;
                     if(address=="")
                     this.editAddress = "";
                     else
                       this.editAddress = this.selected_address;
            },
            handleDeleteAddress(){
                
                     this.showDeleteAddress = true;
            },
            confirmDeleteAddress(){
             
              let user = JSON.parse (Cookies.get("user"));
                 let data  = {
                       api_token: user.api_token,
            
                        id: `${this.selected_address.id}`,
                       
                    };
                
                this.$store.dispatch('user/deleteAddress',data)
                   this.showDeleteAddress = false;
            }

    }
  }
</script>
<style scoped>
.progress-circular{
  height: 25px!important;
  width: 25px!important;

}
</style>