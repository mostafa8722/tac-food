<template>
   <section class="flex   flex-col">
     
     <p class="text-p mr-5">سفارش به آدرس زیر ارسال می شود </p>
     <div class="flex mr-5 mt-1 ">
    
        <font-awesome-icon   class="red height-20" icon="fa-solid fa-check mt-3 " />
            <p class="red mr-2">{{selected_address.address}} </p>
     </div>
      
       <div class="flex justify-center mt-5 mb-20">
         <button  @click.prevent="showModal = true" class="add-discount   pointer mt-2 ">
            <font-awesome-icon   class="text-p2 height-20 " icon="fa-solid fa-check mt-3  " />
            <span class="text-p2 mr-2"> وارد کردن کد تخفیف </span>
         </button>
       
       </div>

       <div class="flex justify-center mt-5">
            <span class="text-p2">مبلغ پرداخت:</span>
            <span class="text-p2 mr-2 ml-2">{{formatPrice(totalCart)}}</span>
            
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
    <div class="flex flex-col items-center flex-1">
          <div class="flex flex-col  mb-1 mr-4">
            <font-awesome-icon :class="`${pay_type=='wallet'?'red':''}  height-20`" :icon="`fa-solid fa-wallet`" />
            <span :class="`mt-1 ${pay_type=='wallet'?'red':''}`">کیف پول</span>
          </div>
<v-radio
     color="#ff2200"
        value="wallet"
      > </v-radio>
     
    </div>

     <div class="flex flex-col items-center flex-1">
          <div class="flex flex-col  mb-1 mr-4">
            <font-awesome-icon :class="`${pay_type=='online'?'red':''} height-20`" :icon="`fa-solid fa-credit-card`" />
            <span :class="`mt-1 ${pay_type=='online'?'red':''}`">درگاه پرداخت</span>
          </div>
<v-radio
     color="#ff2200"
        value="online"
      > </v-radio>
     
    </div>
      
     
      <div class="flex flex-col items-center flex-1">
          <div class="flex flex-col  mb-1 mr-4">
            
            <font-awesome-icon :class="`${pay_type=='cod'?'red':''} height-20`" :icon="`fa-solid fa-money-bills`" />
            <span :class="`mt-1 ${pay_type=='cod'?'red':''}`">در محل</span>
          </div>
<v-radio
     color="#ff2200"
        value="cod"
      > </v-radio>
     
    </div>
      
    </v-radio-group>
             </div>

              <div class="flex justify-center mt-2">
                <span class="text-p2">کیف پول :</span>
                <span class="text-p2 mr-2 ml-2">{{formatPrice(walletCredit)}}</span>
               
              </div>
            </div>
       </div>

        <div class="flex justify-center mb-5 mt-5">
               <div v-if="payment_btn.type!=='login'" @click.prevent =" hanlePayment"  class="btn-send pointer text-center relative mt-3">
                  <span class="white" style="font-size: 0.8rem;"> {{payment_btn.title}} </span>
                   <font-awesome-icon class=" mr-5  icon-item white height-20" :icon="`fa-solid ${payment_btn.icon} `" />
                </div>
                <NuxtLink v-else   class="btn-send pointer text-center relative mt-3" to="/login">
                  <span class="white" style="font-size: 0.8rem;"> {{payment_btn.title}} </span>
                   <font-awesome-icon class=" mr-5  icon-item white height-20" :icon="`fa-solid ${payment_btn.icon} `" />
                </NuxtLink>

           </div>
       
        <ModalConfirmOrder v-show="showModalConfirmOrder" @close-modal="showModalConfirmOrder = false"  @handle-order="sendOrder"  />
        <ModalDiscount v-show="showModal" @close-modal="showModal = false"   />
        
       <ModalDelete :data="deleteData" v-show="showDeleteAddress" @close-modal="showDeleteAddress = false" @confirm-delete-address="confirmDeleteAddress"   />

       
    </section>

</template>
<script>



import ModalDiscount from '~/components/modals/ModalDiscount.vue'
import ModalConfirmOrder from '~/components/modals/ModalConfirmOrder.vue'
import ModalDelete from '~/components/modals/ModalDelete.vue'


import { mapGetters } from 'vuex'
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash,faCheck,faWallet,faCreditCard,faMoneyBills,faClipboardUser } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faTrash,faCheck,faWallet,faCreditCard,faMoneyBills,faClipboardUser)


import Cookies from 'js-cookie';
export default {
    components: { 
      ModalDiscount,ModalConfirmOrder,
    ModalDelete
     },
    
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
           descriptionCart: 'carts/descriptionCart',
           selected_address: 'user/selected_address',
           totalCart: 'carts/totalCart',
           userAddresses: 'user/userAddresses',
             walletCredit: 'home/walletCredit',
            
       
        
            })
         },
         data :()=>({
             showModal: false,
            
             showDeleteAddress: false,
             showModalConfirmOrder: false,
             
             pay_type : "online",
             coupon_code : "",
             editAddress : "",
             payment_btn : {title:"پرداخت ",icon:"fa-credit-card",type:"payment"},
             deleteData :{title:"هشدار!",description:"آیا برای حذف این آیتم مطمئن هستید؟",cancelBtn:"بله",confirmBtn:"انصراف" },
            }),
          created(){
            
               if(Cookies.get("user")){
           let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token
                    };
                 
               this.$store.dispatch('user/userAddresses',token)      
                 this.$store.dispatch('home/walletBill', token)  
                this.payment_btn = {title:"ثبت آدرس ",icon:"fa-credit-card",type:"address" } 
                
                
                }else{
                  this.payment_btn = {title:"ثبت نام ",icon:"fa-clipboard-user" ,type:"login"}
                // this.$store.dispatch('home/authenticatedCode',{status:401})
                }
           
         },
         watch :{
          userAddresses(new_val,old_val){
            if(new_val.length==0)
            this.payment_btn = {title:"ثبت آدرس ",icon:"fa-credit-card",type:"address" } 
            else
             this.payment_btn = {title:"پرداخت ",icon:"fa-credit-card",type:"payment" } 
          }
         },
         methods:{
            hanlePayment(){
              if(this.payment_btn.type =="payment")
                this.showModalConfirmOrder = true;
                else{
                this.$store.dispatch('user/showUserAddresses',false) 
                setTimeout(()=>{this.$store.dispatch('user/showUserAddresses',true)  },100) 
                }
                 
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
               

                if(Cookies.get("user")){
              let user = JSON.parse (Cookies.get("user"));
              

                 let orders = [];
                let orders2 = {};
                 this.carts.map((cart,index)=>{
                       
                    let   orders_store =   cart.products.map((product)=>{
                           
                        
                            //let details2 = "[";
                              let details = product.details.map((detail)=>{
                             return {"id":detail.id,"count":detail.count};

                            }) ;
                            //details = [];
                             return {"product_id":product.id ,"count":product.count,"details":details};

                        });
                       //orders_store += "]";
                       //orders_store  = [{"product_id":1307,"count":2,"details":[]}];
                        if(index ==0)
                       orders2  =  JSON.stringify({"store_id":cart.store_id,"order_time":"null","orders":orders_store});
                       else 
                       orders2 += ","+ JSON.stringify({"store_id":cart.store_id,"order_time":"null","orders":orders_store});
                       
                     

                        //return {"store_id": "13","order_time":"","orders":'[]'} ;
               })
                   orders = "[" + orders2 + "]";
                
              
             
                
               
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
            },
            
            
                 formatPrice(price) {
                     return  Number(price).toLocaleString()+" "+"تومان";
                },
      
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
    padding:0.2rem 1rem;
    border-radius: 0.3rem;
    background-color: #ffffff;
    max-width: 400px;
    width: calc(100% - 2rem);
    margin-right: 1rem;
    margin-left: 1rem;
   
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
.flex-1{
  flex:1;
}
</style>
