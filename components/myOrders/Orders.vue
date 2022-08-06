<template>
 

     
     <div class="mt-3 content-section ">
         <v-card
    class=" items-center card-content pt-3 pb-3 pl-3 pr-3  rounded-xl"

    
     dir="rtl"
  outlined
 
  >
 
    <v-card
    class=" items-center card-content pt-2 pb-2 pl-1 pr-1  rounded-xl"

    
     dir="rtl"
  outlined
 
  >


  <HeaderOrder class="mt-2" title="نام فروشگاه "  icon="mdi-storefront-outline"  :value="orderState.store_name" />
  <HeaderOrder class="mt-3" title="زمان تحویل "  icon="mdi-clock-time-four-outline"  :value="deliveryTime()" />
  <HeaderOrder class="mt-3" title=" هزینه ارسال "  icon="mdi-motorbike"  :value="formatPrice(order.delivery)" />
  <HeaderOrder class="mt-2" title=" تخفیف "  icon="mdi-tag-outline"  :value="formatPrice(order.discount)" />
  <HeaderOrder class="mt-2" title=" نوع پرداخت "  icon="mdi-cached"  :value="order.type" />
  <HeaderOrder class="mt-2" title="مبلغ "  icon="mdi-cash-multiple"  :value="formatPrice(order.payment)" />
 

  <div @click.prevent="showOrders=!showOrders" class="flex-header-container  mt-10 mb-5 pointer pr-3 pl-3 flex ">

    <v-icon   class=" height-20 mr-5  custom-icon-size color-60"  :class="`${showOrders?'show-orders-active':''}`" >mdi-basket</v-icon>
   
  <div class="header-side mr-10 color-60 custom-text-size" :class="`${showOrders?'show-orders-active':''}`" > لیست خرید</div>
    <h3 class="order-header-center"></h3>
 <font-awesome-icon    class=" height-15 ml-5  color-60" :class="`${showOrders?'show-orders-active':''}`" :icon="`fa-solid ${showOrders?'fa-angle-up':'fa-angle-down'} ` " />    


   </div>
   <div v-if="showOrders">
       <Order v-for="product in order.products"  :key="product.id" :product="product" />
   
   </div>
   
  
   </v-card>


  <OrderState :orderState="orderState" />
  <Courier v-if="orderState.state!=1" :orderState="orderState" />

   <div class="flex justify-between mt-5 mr-5 items-center">
    <div class="btn-report" v-if="orderState.state!=3"  :class="`${canReport?' pointer report-active':''}`" @click="sendReport">
     <div  v-if="isDataSent" class="container-progress">
                <span class="white ml-2">لطفا صبر کنید</span>
                <v-progress-circular
                 class="progress-circular"
              
               indeterminate
               
              color="#ffffff"/>
               </div>
      <font-awesome-icon  v-if="!isDataSent"   class="white ml-1" icon="fa-solid fa-circle-info" />
       <span v-if="!isDataSent"  class="white">گزارش تاخیر</span>
    </div>

      <div v-else class="btn-comment pointer" @click="sendComment(0,0)">
    
      <font-awesome-icon    class="white ml-1" icon="fa-solid fa-circle-check" />
       <span  class="white">تایید و رای </span>
    </div>
    <span class="ml-5 timer-text"> {{showTime}}</span>
   </div>
  </v-card>
   <ModalComment :data="modalData" v-show="showModalComment"  @close-modal="showModalComment = false" @next-step="sendComment" @send-comment="ConfirmComment" />

    
     </div>
    

</template>
<script>

import Order from './Order.vue';
import HeaderOrder from './HeaderOrder.vue';
import OrderState from './OrderState.vue';
import Courier from './Courier.vue';
import ModalComment from './ModalComment.vue';
import { mapGetters } from 'vuex'
import Vue from "vue"
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faAngleLeft,faAngleDown,faAngleUp,faBasketShopping,faCircleInfo ,faCircleCheck} from '@fortawesome/free-solid-svg-icons'


library.add(faAngleLeft,faAngleDown,faBasketShopping,faCircleInfo,faAngleUp,faCircleCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default {
    components: { HeaderOrder, Order, OrderState, Courier,ModalComment },
      computed: {
      ...mapGetters({
          
          isDataSent: 'home/isDataSent',
          
        
            })
         },
  
      props: {
        order :{
            type:Object,
            require :true,
            
        },
         orderState :{
            type:Object,
            require :true,
            
        },
         
      },

      data :() =>({
        countDown : 600,
        showTime  : '',
        showOrders:false,
        canReport : false,
        showModalComment : false,
        step_comment :0,
           rating : [],
              modalData :{img:"",description:"",cancelBtn:"انصراف",confirmBtn:"بله" },

      }),
    
       created(){


          const diffTime = Math.abs(new Date() - new Date(this.orderState.date));
                    let seconds = Math.ceil(diffTime / (1000 )); 

                   
                    this.countDown = Math.ceil(600 - seconds);
                    
                    if(this.orderState.state ==2)
                    this.countDown =(this.orderState.prep_time -this.orderState.time );


                      if(this.orderState.state ==1 &&  this.countDown>0)
                     this.countDownTimer();
                       else if(this.orderState.state ==2 &&  this.countDown>0)
                     this.countDownTimer();
                      else if((this.orderState.state ==1 || this.orderState.state ==2) &&  this.countDown<=0)
                     this.canReport = true;
                     
       },
      methods:{
             
              formatPrice(price) {
                 return  Number(price).toLocaleString() +" "+"تومان";
                 },
                  countDownTimer() {
        
                if(this.countDown > 0 && (this.orderState.state ==1 || this.orderState.state ==2)) {
                    setTimeout(() => {
                        this.countDown -= 1
                        
                        let min = parseInt(this.countDown/60);
                        let sec = this.countDown%60
                        if(sec<10)
                        sec = `0${sec}`;

                        this.showTime = `0${min}:${sec}`
                        this.countDownTimer();
                       
                    }, 1000)
                }
            },
            deliveryTime(){
              return this.orderState.state==1?
              (this.orderState.delivered_at==null?'نامشخص':this.orderState.delivered_at)
              :(this.orderState.prep_time/60)+"دقیقه" ;
            },
            sendReport(){
              if(!this.canReport)
              return ;

                      if(Cookies.get("user")){
           let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token,
                       order_id : this.order.order_id,
                       step : this.orderState.state,
                    };
                 
               this.$store.dispatch('orders/sendReport',token)      
              
              
              
                
                }

              
            },
            sendComment(step,data){
       


            if(step>0){
             this.rating[step-1] = {"product_id":data.product_id,"rating":data.rating,"is_courier":data.is_courier};
            }
              console.log("data3",this.rating)
              this.step_comment = step ;

             this.showModalComment=true;

             if( step==0){
             this.modalData  = {
                  product_id : this.orderState.courier_id,
              img:this.orderState.courier_photo,
              description : `${this.orderState.courier_name}  هستم سفیر تک فود `,
              text : "به عملکرد من امتیاز بدهید",
              step : step,
              send:false
              }
             }else  if(this.order.products.length==step-1) {
                this.modalData  = {
                  product_id : 0,
              img:'',
              description :''   ,
              text : '',
               step : step,
                send:true,
              } 
              
              }else{
               let product = this.order.products[step-1];
               this.modalData  = {
                   product_id : product.id,
              img:product.logo,
              description : `${product.name}   `,
              text : '',
               step : step,
                send:false
              } 

              } 
             

              
            },
             ConfirmComment(step,data){
            

         


            
             // this.step_comment = step ;

            // this.showModalComment=false;

             
let rating2 = {};
this.rating.map((item,index)=>{
    if(index ==0)
      rating2  =  JSON.stringify({"product_id":item.product_id,"rating":item.rating,"is_courier":item.is_courier});
      else 
      rating2 += ","+ JSON.stringify({"product_id":item.product_id,"rating":item.rating,"is_courier":item.is_courier});
                       
                     
})

 let  rating = "[" + rating2 + "]";
                      if(Cookies.get("user")){
           let user = JSON.parse (Cookies.get("user"));
                 let data_comment  = {
                       api_token: user.api_token,
                       store_id : this.orderState.store_id,
                     body : data.body,
                     rating:rating
                    };

                     let formData = new FormData();
                       formData.append('api_token',  user.api_token);
                       formData.append('store_id',  this.orderState.store_id);
                       formData.append('body',   data.body);
                       formData.append('rating',   rating);
                 
                 
              this.$store.dispatch('orders/sendComment'
              ,{formData:formData,api_token:user.api_token,order_id:this.order.order_id})      
              
              
              
                
                }
             
             

              
            },
           
      },
      watch:{
        countDown(new_val,old_val){
           if(new_val<1){
             this.canReport = true;
             this.showTime = "";
                        }
        },
         isDataSent(new_val,old_val){
           if(!new_val){
            this.step_comment = 0 ;

             this.showModalComment=false;
                        }
        },
      }
     
  
   
}
</script>
<style scoped>
h3{
    font-size: 0.85rem;
}
.flex-none{
    flex:none;
}
.content-section{
 
    display: flex;
    justify-content: center;
     width:90%;
     margin-left: 5%;
     margin-right: 5%;
       padding-bottom: 10px;
}
.card-content{
 border:0.1rem solid #dddddd;
 max-width: 500px;
 width:100%;
}
.txt-ago{
  font-size: 0.6rem;
  color:#ff2200;
}
.order-header-center{
  flex:1;
}
.height-15{
  height:15px;
}

.btn-report{
  padding:0.5rem 1.5rem;
  border-radius: 0.4rem;
   background-color: #cccccc;
}
.btn-comment{
  padding:0.5rem 1.5rem;
  border-radius: 0.4rem;
   background-color: #61b15a;
}
.white{color:#ffffff;}
.show-orders-active{
    color:#ff4d5c;
}
.timer-text{
    font-family: yekanNumRegular!important;
    color:#8e8e8e;
}
.report-active{
  background-color:#fd5e63 ;
}
</style>
