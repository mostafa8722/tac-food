<template>
   <section class="flex   flex-col">
     
     <p class="text-p mr-5">سفارش به آدرس زیر ارسال می شود </p>
     <div class="flex mr-5 mt-1 ">
    
        <font-awesome-icon   class="red " icon="fa-solid fa-check mt-3 " />
            <p class="red mr-2">خیابان شهید </p>
     </div>
      
       <div class="flex justify-center mt-5">
         <button  @click.prevent="handleAddDescription" class="add-discount   pointer mt-2">
            <font-awesome-icon   class="text-p2  " icon="fa-solid fa-check mt-3 " />
            <span class="text-p2 mr-2"> وارد کردن کد تخفیف </span>
         </button>
       
       </div>

       <div class="flex justify-center mt-5">
            <span class="text-p2">مبلغ پرداخت:</span>
            <span class="text-p2 mr-2 ml-2">{{formatPrice(150000)}}</span>
            
       </div>

 <p class="text-p mt-5 mr-5">روش پرداخت را انتخاب کنید </p>
       <div class="flex justify-center mt-2">
            <div class="payment-box">
     
             <div class="flex justify-center ">
               <v-radio-group
      v-model="pay_type"
      row
      class="flex radio-group"
    >
    <div class="flex flex-col items-center">
          <div class="flex flex-col  mb-1 mr-4">
            <font-awesome-icon :class="`${pay_type=='type_1'?'red':''}`" :icon="`fa-solid fa-location-dot`" />
            <span :class="`mt-1 ${pay_type=='type_1'?'red':''}`">کیف پول</span>
          </div>
<v-radio
     color="#ff2200"
        value="type_1"
      > </v-radio>
     
    </div>

     <div class="flex flex-col items-center">
          <div class="flex flex-col  mb-1 mr-4">
            <font-awesome-icon :class="`${pay_type=='type_2'?'red':''}`" :icon="`fa-solid fa-location-dot`" />
            <span :class="`mt-1 ${pay_type=='type_2'?'red':''}`">درگاه پرداخت</span>
          </div>
<v-radio
     color="#ff2200"
        value="online"
      > </v-radio>
     
    </div>
      
     
      <div class="flex flex-col items-center">
          <div class="flex flex-col  mb-1 mr-4">
            <font-awesome-icon :class="`${pay_type=='type_3'?'red':''}`" :icon="`fa-solid fa-location-dot`" />
            <span :class="`mt-1 ${pay_type=='type_3'?'red':''}`">در محل</span>
          </div>
<v-radio
     color="#ff2200"
        value="type_3"
      > </v-radio>
     
    </div>
      
    </v-radio-group>
             </div>

              <div class="flex justify-center mt-2">
                <span class="text-p2">کیف پول :</span>
                <span class="text-p2 mr-2 ml-2">{{formatPrice(150000)}}</span>
               
              </div>
            </div>
       </div>

        <div class="flex justify-center mb-5 mt-5">
               <div @click.prevent ="sendOrder"  class="btn-send pointer text-center relative mt-3">
                  <span class="white" style="font-size: 0.8rem;"> پرداخت </span>
                   <font-awesome-icon class=" mr-5  icon-item white" :icon="`fa-solid fa-location-dot`" />
                </div>

           </div>
       
        <ModalConfirmOrder v-show="showModalConfirmOrder" @close-modal="showModalConfirmOrder = false"   />
        <ModalAddress v-show="showModal" @close-modal="showModal = false" @add-address="handleAddAddress" @delete-address="handleDeleteAddress"  />
        <ModalAddAddress v-show="showAddAddress" @close-modal="showAddAddress = false"  :editAddress="editAddress" />
       
       <ModalDelete :data="deleteData" v-show="showDeleteAddress" @close-modal="showDeleteAddress = false" @confirm-delete-address="confirmDeleteAddress"   />

       
    </section>

</template>
<script>



import ModalDiscount from '~/components/modals/ModalDiscount.vue'
import ModalConfirmOrder from '~/components/modals/ModalConfirmOrder.vue'
import ModalDelete from '~/components/modals/ModalDelete.vue'

import ModalAddress from '~/components/modals/ModalAddress.vue'
import ModalAddAddress from '~/components/modals/ModalAddAddress.vue'

import { mapGetters } from 'vuex'
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash,faCheck } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTrash,faCheck)

import Cookies from 'js-cookie';
export default {
    components: { 
      ModalDiscount,ModalConfirmOrder,ModalAddress,
    ModalAddAddress,ModalDelete
     },
    
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
           descriptionCart: 'carts/descriptionCart',
            selected_address: 'user/selected_address',
            
       
        
            })
         },
         data :()=>({
             showModal: false,
             showAddAddress: false,
             showDeleteAddress: false,
             showModalConfirmOrder: false,
             pay_type : "online",
             coupon_code : "",
             editAddress : "",
             deleteData :{title:"هشدار!",description:"آیا برای حذف این آیتم مطمئن هستید؟",cancelBtn:"بله",confirmBtn:"انصراف" },
            }),
          created(){
            
               if(Cookies.get("user")){
           let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token
                    };
                 
               this.$store.dispatch('user/userAddresses',token)                  
                }else{
                
                 this.$store.dispatch('home/authenticatedCode',{status:401})
                }
           
         },
         methods:{
            handleAddDescription(){
                this.showModal = true;
            },
            handleAddAddress(address){
                
                     this.showAddAddress = true;
                     if(address=="")
                     this.editAddress = "";
                     else
                       this.editAddress = this.selected_address;
            },
            handleDeleteAddress(){
                
                     this.showDeleteAddress = true;
            },

             sendOrder(){
                this.showModalConfirmOrder = true;

                if(Cookies.get("user")){
              let user = JSON.parse (Cookies.get("user"));
              

                 let orders = "["
                 this.carts.map((cart)=>{
                        let orders_store = "[";
                         cart.products.map((product)=>{
                           
                            let details = "[";
                             product.details.map((detail)=>{
                              details += JSON.stringify({"id":detail.id,"count":detail.count});

                            }) ;
                            details += "]";
                             orders_store  += JSON.stringify({"product_id":product.id ,"count":product.count,"details":details});

                        });
                       orders_store += "]";
                       orders += JSON.stringify({"store_id":cart.store_id ,"order_time":"","orders":orders_store});
                        return {"store_id": "13","order_time":"","orders":'[]'} ;
               })
                    orders +="]";
               
let formData = new FormData();
formData.append('api_token',  user.api_token);
formData.append("payment","20000");
formData.append("address_id",  `${this.selected_address.id}`);
formData.append("comment", this.descriptionCart);
formData.append("coupon_code",this.coupon_code)
formData.append("method", this.pay_type);
formData.append("orders", orders);
this.$store.dispatch('orders/payment',formData)
              
            }else
             this.$router.push('/login')
            }
                
      
             },

              async confirmDeleteAddress(){
                
                  await DB.users.count(async (count)=> {
                  
            if(count==0  ){
             // this.$router.push('/login')
             
            }else{
               
                 await   DB.users.each( (item)=> {
                       
                

                let data  = {
                       api_token: item.api_token,
            
                        id: `${this.selected_address.id}`,
                       
                    };
                 
                this.$store.dispatch('user/deleteAddress',data)
                   this.showDeleteAddress = false;
                  

                });
              
              // this.isLogin = true;
            }
           
          
            });
               
      
             },
            clearDescription(){
                 this.$store.dispatch('products/addDescriptionCart',"")
      
             },
               formatPrice(price) {
                     return  Number(price).toLocaleString()+" "+"تومان";
                },
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
    font-family: yekanNumRegular!important;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanNumRegular!important;
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
    font-size: 0.75rem;
}
.add-discount{
   
    border:0.1rem solid #959595;
    padding:0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: #ffffff;
}
.payment-box{
   
    border:0.1rem solid #959595;
    padding:0.1rem 1rem;
    border-radius: 0.3rem;
    background-color: #ffffff;
    width: calc(100% - 2rem);
    margin-right: 1rem;
    margin-left: 1rem;
    height: 150px;
}


.text-p{
    color:#acacac;
    font-size: 0.75rem;
}
.text-p2{
    color:#676767;
    font-size: 0.9rem;
     font-family: yekanNumRegular!important;
}
.btn-send{
    height:40px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}

.btn-send svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
}
.white{
    color: #fff;
}
.radio-group{
width:500px;
}
.red{
    color:#ff2200;
    font-size: 0.9rem;
}
</style>
