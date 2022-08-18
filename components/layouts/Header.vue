<template>
  <header >
    <div class="relative">
       <font-awesome-icon  v-show="layout=='cart'" @click.prevent="handleBackBtn" class="mt-2 mr-2 pointer btn-back p-2 " :icon="`fa-solid fa-arrow-right`" />

       <div v-if="!isSendingData" class=" flex justify-center items-center flex-col mt-4">
              <div  @click.prevent="handleMap" class="flex justify-center ">
                <span  class="text-sm ml-2 pointer">
                  {{location_address.address_title}}
                </span>
                <font-awesome-icon   class="pointer h-4 text-sm" icon="fa-solid fa-angle-down" />
                
              </div>
              <span  @click.prevent="handleMap" class="text-xs pointer">{{location_address.address_postal}}</span>
         
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
  </header>
    
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
import {LOCATION_DEFAULT} from "~/data/default"

  export default {
    props :["layout"],
    components:{
    ModalMap,ModalAddress,ModalAddAddress,ModalDelete
    },
    computed: {
      ...mapGetters({
           
           isSendingData: 'general/isSendingData',
           location_address: 'general/location_address',
            selected_address: 'user/selected_address',
            showUserAddresses: 'user/showUserAddresses',
          
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

      if(!GetStorage("latlng")){
      setTimeout(()=>{this.showModalMap = true},200)
       let data ={
          lat :LOCATION_DEFAULT.lan,
          lng :LOCATION_DEFAULT.lng,
          
        }
      //  this.$store.dispatch('general/addLocationAddress', data)
      }else{
       
        let data ={
          lat :GetStorage("latlng").split(",")[0],
          lng :GetStorage("latlng").split(",")[1],
          
        }
        if(this.location_address.address_title=="" && this.location_address.address_postal=="")
         this.$store.dispatch('general/addLocationAddress', data)
      }
      
    },
    watch:{
      showUserAddresses(new_val,old_val){
        if(new_val)
        this.showModal = true

      },
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
             ,handleBackBtn(){
          this.$router.back();
      }

    }
  }
</script>
<style scoped>
.progress-circular{
  height: 25px!important;
  width: 25px!important;

}
  .btn-back{
    font-size:0.9rem;
    height: 20px;
    position: absolute;
    right: 10px;
  }
  header{
   
    width: 100%;;
      display: flex;
         justify-content: center;
  }
   header>div{
    display: flex;
     max-width: 600px;
    width: 100%;;
    justify-content: center;
  }
</style>