<template>
   <section class="flex  items-center flex-col">
     
     
        <Carts v-if="carts.length>0" v-for="cart in carts" :cart="cart"  />
        <div v-if="carts.length==0" > <Empty   /></div>

        <div v-show="carts.length>0 && descriptionCart==''" @click.prevent="handleAddDescription" class="btn-add-desc-cart pointer mt-2">افزودن توضیحات </div>
       
       
        <ModalDescription v-show="showModal" @close-modal="showModal = false"  />

        <div v-show="descriptionCart" class="flex justify-between  mt-5 pt-3 add-desc-cart">
            <p class="txt_description">
                {{descriptionCart}}
            </p>
             <font-awesome-icon @click="clearDescription"  class="red pointer" icon="fa-solid fa-trash" />
        </div>
       
    </section>

</template>
<script>


import Empty from './Empty'
import Carts from './Carts'
import ModalDescription from '~/components/modals/ModalDescription.vue'


import { mapGetters } from 'vuex'
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTrash)

import { LOCATION_DEFAULT } from "~/data/default"
import {GetStorage} from "~/utils/helpers"
export default {
    components: { Empty,Carts,ModalDescription , },
    
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
           descriptionCart: 'carts/descriptionCart',
       
        
            })
         },
         data :()=>({
             showModal: false,
            }),
         created(){

            let lat = GetStorage("latlng")?GetStorage("latlng").split(',')[0]: LOCATION_DEFAULT.lat;
            let lng = GetStorage("latlng")?GetStorage("latlng").split(',')[1]: LOCATION_DEFAULT.lng;
            let id = "[";

            this.carts.map((item,index)=>{
                if(this.carts.length-1 == index)
                id += item.store_id ;
                else 
                id += item.store_id +","
            })
            id += "]";
            let data = {
            lat : lat +"",
            lng : lng +"",
            id : id ,
            show_payemnt :false
            }
        this.$store.dispatch('orders/updateOrder',data);
           

         },
         methods:{
            handleAddDescription(){
                 //this.$router.push("/payment") 
                this.showModal = true;
            },
            clearDescription(){
                
                 this.$store.dispatch('carts/addDescriptionCart',"")
      
             }
         }
         
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.circle-border{
  height:110px;  
  width:110px;  
  border : 4px solid #fe606a;
  border-radius:50%;

}
.circle-border span{
    color :#676767;
    font-size:0.75rem;
    font-family: yekanBold!important;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.btn-add{
    background-color : #fd5e63!important;
    width: 200px;
   
}
.white{
  
    color : #ffffff!important;
}
.red{
  
    color : #fd5e63!important;
}
.btn-add-desc-cart{
    color:#fd5e63;
    border:0.1rem solid #fd5e63;
    padding:0.5rem 1rem;
    border-radius: 0.3rem;
    height: 45px;

}
.add-desc-cart{
    border-top: 0.05rem solid #dedede;
    max-width: 600px;
    width: 100%;
}
.txt_description{
    color:#8e8e8e;
    font-size: 0.85rem;
    font-family: yekanNumRegular  !important;
}
</style>
