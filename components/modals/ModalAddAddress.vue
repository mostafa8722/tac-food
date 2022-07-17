<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>

        <div class="header-modal flex justify-center relative">
          <span>افزودن آدرس</span>
           <font-awesome-icon class=" btn-back absolute right-3 top-3" :icon="`fa-solid fa-arrow-right`" />
           <div class="line-h-40  btn-back absolute left-3 top-2">   <font-awesome-icon class="  " :icon="`fa-solid fa-check`" /></div>
        </div>
           <div class="mt-2 mr-2 ml-2" style="position:relative;height: 130px">
           
           <Map  :center="latlng"  :markerLatLng="latlng" v-if="show_map" /></div>
           
         <div class="mt-5 mr-2 ml-2 mb-2">
             <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="نام آدرس "
              hint="مثال : خونه، محل کار ، خونه دایی ..."
          
             v-model="title"
          ></v-text-field>

          <v-text-field
            outlined
                persistent-hint
                class="input-field mt-2"
            label=" آدرس "
              hint="مثال : میدان مادر ، خیابان زنجانی ، کوچه جهاد ، پلاک 2 "
              maxlength="200"
               counter="200"
             v-model="address"
          ></v-text-field>
       

         <v-text-field
            outlined
                persistent-hint
                class="input-field mt-4"
            label="پلاک (اختیاری) "
              hint="مثال : 12 "
              maxlength="10"
               counter="10"
             v-model="postal_code"
          ></v-text-field>

          
         <v-text-field
            outlined
                persistent-hint
                class="input-field mt-2"
            label="شماره تلفن (اختیاری) "
              hint="مثال : 09123456789 "
              maxlength="11"
               counter="11"
             v-model="phone"
          ></v-text-field>

          <p>*برای آدرس خود یک انتخاب کنید</p>
          <p  class="mt-1">*آدرس دقیق خود را در فیلد آدرس وارد کنید</p>
         <div class="flex justify-evenly mb-2 mt-3 ">
                      <button @click.prevent="handleAddAddress" class="btn-save pointer mt-4">  ذخیره </button>

         </div>
         </div>
         
      </div>
      
    </div>
  </transition>
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

import Map from "./Map"
import {LOCATION_DEFAULT} from "~/data/default"
import  Cookies  from 'js-cookie'
export default {
   components:{
    Map
   },
   props:["editAddress","latlng","showModal"],
   data : ()=>({
     id:"",
    description :"",
    title :"",
    address :"",
    phone :"",
    postal_code :"",
    show_map : false,
    lat :`${LOCATION_DEFAULT.lat}`,
    lng :`${LOCATION_DEFAULT.lng}`,

   }),
   
   watch:{
    editAddress(new_val,old_val){
  
    if(new_val!=""){
         this.id =new_val.id;
    this.title = new_val.title;
    this.address = new_val.address;
    this.phone = new_val.phone;
    this.postal_code = new_val.postal_code;
    this.lat = new_val.lat;
    this.lng = new_val.lng;
    }else{
           this.id ="";
    this.title = "";
    this.address = "";
    this.phone = "";
    this.postal_code ="";
    this.lat = `${LOCATION_DEFAULT.lat}`;
    this.lng =`${LOCATION_DEFAULT.lng}`;
    }
    },

     showModal(new_val,old_val){
        setTimeout(()=>{
          
        this. show_map =  new_val
        },100)
      }
   },
    methods:{
   

     handleAddAddress(){

 if(Cookies.get("user")){
      this.isLogin  = true;
        let user = JSON.parse (Cookies.get("user"));
                let data  = {
                       api_token: user.api_token,
                       title:this.title,
                       address:this.address,
                       postal_code : this.postal_code,
                       phone : this.phone,
                       lat : this.lat,
                       lng: this.lng,
                       id: this.id,
                    };
                    if(this.id=="")
                   this.$store.dispatch('user/addAddress',data);
                   else 
                   this.$store.dispatch('user/updateAddress',data);

                  this.$emit('close-modal');   
      }else
      this.isLogin = false
      
            

  
      
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
  z-index: 101;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height: 100%;
  overflow-y: auto;
  width:400px;
  margin:40px  30px;
    padding-bottom: 50px;
  border-radius: 20px;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.header-modal {
  height:40px;
  line-height:40px;
}
.desc-text{
    color:#696969;
    font-size: 0.65rem;
    text-align: right;
}
.font-7{font-size: 0.7rem;}
.btn-location{
    height:40px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}
.btn-gps{
    height:40px ;
    width:40px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}
.white{
    color:#ffffff;
}
.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.btn-save{
   background-color:#fd5e63;
   color: #ffffff;
    padding:0.3rem 1.5rem;
    border-radius: 0.3rem;
    flex:1;
}
p{
  font-size: 0.9rem;
}
div ::v-deep .v-label.v-label--active.theme--light {
  right: -16px!important;
    top: -12px !important;;
    left: auto!important;
}

div ::v-deep .v-input__slot fieldset legend {
 background:#ffffff!important;
}
div ::v-deep .v-messages__message {
  text-align: right;
}
</style>