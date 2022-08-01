<template>

    
        <v-bottom-sheet
      v-model="showModal"
      inset
      class="bottom-sheet"
    >
     
      <v-sheet
        class="text-center relative custom-sheet"
       
      >
      
        <div class="my-1">
           <div class="flex relative" style="height:40px;">
                              <font-awesome-icon  @click="$emit('close-modal')" class="pointer z-10  h-4 mt-2 mr-3 height:20 color-0" :icon="`fa-solid fa-arrow-right`" />

            <h5 class="absolute text-center w-100 top-2 text-title">انتخاب موقعیت </h5>
           </div>
            <span class="desc-text block mt-3 mr-3">
               موقعیت مکانی خود را برروی نقشه مشخص کنید
           </span>
        <div class="w-100" style="position:absolute;top:80px;bottom: 80px"><Map  @handle-map="handleMapEvent"  @handle-drag-map="handleMapDragEvent"   :markerLatLng="markerLatLng" :center="center" v-if="show_map" /></div>
         <div class="flex justify-center mb-5 mt-5 pointer absolute bottom-0 w-100">
             <div @click.prevent="getCurrentLocation" class="btn-gps ml-5  items-center justify-center  relative">
             
               <font-awesome-icon class="  white" :icon="`fa-solid fa-location-crosshairs height-20`" />

           </div>
             <div @click.prevent="selecLocation" class="btn-location items-center justify-center pointer relative">
               <span class="white" style="font-size: 0.9rem;">انتخاب محل</span>
               <font-awesome-icon class=" mr-5  icon-item white height-20" :icon="`fa-solid fa-location-dot`" />

           </div>
         </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
           
         
    

</template>

<script>
import Map from "./Map"

import Vue from "vue"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRightFromBracket,faLocationDot,faLocationCrosshairs,faArrowRight
)
import { LOCATION_DEFAULT } from "~/data/default"
import {GetStorage,SetStorage} from "~/utils/helpers"
export default {
    components:{Map},
    props : ["showModal"],
    created(){
     if(typeof navigator !== "undefined")
       this.getCurrentLocation();
    },
    data :()=>({
      latlng :[GetStorage("latlng")?GetStorage("latlng").split(',')[0]:
        LOCATION_DEFAULT.lat, 
        GetStorage("latlng")?GetStorage("latlng").split(',')[1]:
        LOCATION_DEFAULT.lng],
      show_map :false,
   
      center: [GetStorage("latlng")?GetStorage("latlng").split(',')[0]:
        LOCATION_DEFAULT.lat, 
        GetStorage("latlng")?GetStorage("latlng").split(',')[1]:
        LOCATION_DEFAULT.lng],
      markerLatLng: [
        GetStorage("latlng")?GetStorage("latlng").split(',')[0]:
        LOCATION_DEFAULT.lat, 
        GetStorage("latlng")?GetStorage("latlng").split(',')[1]:
        LOCATION_DEFAULT.lng
        ]
    }),
    methods:{

      handleMapEvent(e){

     
          this.latlng  = [e.latlng.lat,e.latlng.lng];
         
          this.markerLatLng =  [e.latlng.lat,e.latlng.lng];
          this.center =  [e.latlng.lat,e.latlng.lng];
         
      },
        handleMapDragEvent(e){

        
          this.latlng  = [e.lat,e.lng];
         
          this.markerLatLng =  [e.lat,e.lng];
          this.center =  [e.lat,e.lng];
         
      },

         selecLocation(){
      
          SetStorage("latlng",this.latlng);
          this.markerLatLng =  this.latlng;
          this.center =  this.latlng;
          let data = {
            lat:this.latlng[0],
            lng:this.latlng[1],};
            
           this.$emit('set-location',data)

      },
      getCurrentLocation(){
        
        if(! navigator.geolocation){
alert("not support location")
return ;
        }

        navigator.geolocation.getCurrentPosition(this.geoSuccess,this.geoError,{})
      },
      geoSuccess(e){
         this.latlng  = [e.coords.latitude,e.coords.longitude];
         this.markerLatLng =  [e.coords.latitude,e.coords.longitude];
          this.center =  [e.coords.latitude,e.coords.longitude];
       
      },
      geoError(err){
     console.log(err.message);
     switch(err.code){
      case 0 :
        console.log("unknown error");
        break;
          case 1 :
        console.log("User denied Geolocation");
        break;
        default :
        break;

     }
      }

    },
    watch:{
      showModal(new_val,old_val){
        setTimeout(()=>{
          
        this. show_map =  new_val
        },100)
      }
    }

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
  z-index: 1000;

}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  /*height:calc(100% - 40px);*/
  height: 400px;
  width:calc(100% - 60px);
  max-width: 600px;
  margin:20px  30px;

  border-radius: 20px;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.text-title{
  color:#000000;
  font-size: 0.95rem;
  font-family: "yekanBold"!important;
}
.desc-text{
    color:#939393;
    font-size: 0.85rem;
    text-align: right;
}
.font-7{font-size: 0.7rem;}
.btn-location{
    height:46px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
    display: flex;
}
.btn-gps{
    height:46px ;
    width:46px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
    display: flex;
}
.white{
    color:#ffffff;
}
.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
    height:20px;
}
.btn-gps svg{
    height:18px ;
  
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
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
button {
  background-color: #fd5e63;
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
.bottom-sheet,.custom-sheet{
  top: 0px;
  bottom: 0px;
  height: 100%;
}
.color-0{color:#000000}
</style>