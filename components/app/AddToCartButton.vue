<template>
 <div>

  
  <NuxtLink  v-if="totalCart>0 && show_button" :to="url">
      <div @click.prevent.stop="handleUrl($event)" class="cart-container relative flex" :class="`${isDataSent?'justify-center items-center':''}  ${url=='/payment'?'cart-mb-10':''}`">
       <v-progress-circular
       v-show="url=='/payment' && isDataSent"
      indeterminate
      color="#ffffff"
    ></v-progress-circular>
          
  <font-awesome-icon v-show="!isDataSent" @click.prevent="clearCart"   class="absolute white right-3 top-4 pr-1 pl-1 pointer" icon="fa-solid fa-trash" />
          <span v-show="!isDataSent" class="white absolute white right-10 top-3 number-format"> {{formatPrice(totalCart)}} تومان</span>  
          <span v-show="!isDataSent" class="white absolute white left-6 top-3"> {{title}}</span>  
           <font-awesome-icon    class="absolute  white left-3 top-4" icon="fa-solid fa-angle-left" />

      </div>
  </NuxtLink>
   
  <ModalDelete v-show="showDelete" @close-modal="showDelete = false" 

  :data="deleteData"
  @confirm-delete="confirmDeleteCart"   />
 </div>
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft,faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalDelete from '~/components/modals/ModalDelete.vue'
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faAngleLeft,faTrash)

import { mapGetters } from 'vuex'
import { LOCATION_DEFAULT } from "~/data/default"
import {GetStorage} from "~/utils/helpers"

export default {
    components:{

    ModalDelete
   
},
   computed: {
      ...mapGetters({
           totalCart: 'carts/totalCart',
           carts: 'carts/carts',
             isDataSent: 'home/isDataSent',
        
            })
         },
  data :()=>({
    url : "/payment",
    title : "پرداخت",
    showDelete : false,
    show_button : true,
    deleteData :{title:"حذف",description:"آیا برای حذف سبد  مطمئن هستید؟",cancelBtn:"خیر",confirmBtn:"بله" },
    

  }),
  created(){
   // this.url = this.$route.path
    this.$store.dispatch("home/addDataSent",false);
  
     if(this.$router.history.current.name=="products-id"){
this.url = "/cart" ,
this.title = "سبد خرید"
     }else  if(this.$router.history.current.name=="cart"){
     this.url = "/payment" ;
      this.title = " پرداخت";
     }
     
  },
  mounted() {
  window.addEventListener("scroll", this.onScroll)
},
beforeDestroy() {
  console
  window.removeEventListener("scroll", this.onScroll)
},

methods :{
  onScroll(e) {
    //console.log(e)
  //  this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
   //this.show_button = false;
    setTimeout(()=>{
    //   this.show_button = true;
  }, 300);
  },
  clearCart(){
    this.showDelete = true;
       //this.$store.dispatch('carts/clearCart')

   
  },

  confirmDeleteCart(){

     this.$store.dispatch('carts/clearCart', {});
      
  
 this.showDelete = false;
  },
  formatPrice(price) {
    return  Number(price).toLocaleString();
},
async handleUrl(e){
  e.preventDefault();
   e.stopPropagation();

  

   if(this.url=="/cart")
   this.$router.push("/cart")
   else{
  
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
       show_payemnt :true
     }
 this.$store.dispatch('orders/updateOrder',data);
   // this.$router.push("/payment")
   }
    
}
}
}
</script>
<style scoped>


.cart-container{
  background-color:#fd5e63;
  height: 50px;
  width: 80%;
 
 max-width: 500px;
  position: fixed;
  bottom: 75px;
  border-radius: 5px;
  left: 50%;
    transform: translate(-50%, 0);
  
  
}
.cart-mb-10{
  bottom: 10px;
}
.white{
  color:#ffffff;
  font-size: 0.8rem;
}
.number-format{
   font-family: yekanNumRegular !important;
}
</style>
