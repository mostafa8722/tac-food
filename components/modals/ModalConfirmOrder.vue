<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           
         <div class=" mb-2">
          <h3 class="header-modal pt-2">تایید سفارش</h3>
         <div class="flex flex-col text-right">
          <p class="red mt-4 mr-1 ml-1 text-center bold "> -> در صورت تایید سفارش امکان لغو آن وجود ندارد </p>
           <span class="mt-4 pr-2">سفارش شما -></span>
            <p class="red  mr-1 ml-1  pr-2 ">  {{getTitleCart(carts)}}</p>

          <div class="mt-2 mr-2 ml-2 line-break"></div>
          <span class="mt-4  pr-2">به آدرس  -></span>
            <p class="red mr-1 ml-1  pr-2 ">  {{selected_address.address?selected_address.address:""}} </p>

         </div>
         <div class="flex justify-end mb-5 mt-5 relative ">
                      <button v-if="!isDataSent" @click.prevent="$emit('handle-order')" class="btn-save absolute pointer mt-4"> تایید </button>
                           <div class="btn-save absolute mt-4" v-else>
                            <v-progress-circular
                        
                 class="progress-circular"
               indeterminate
              color="#ffffff"/>
                           </div>
                      <button @click.prevent="$emit('close-modal')" class="btn-close pointer mt-4"> خیر </button>

         </div>
         </div>
         
      </div>
      
    </div>
  </transition>
</template>

<script>


import Vue from "vue"


import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters({
           selected_address: 'user/selected_address',
           carts: 'carts/carts',
                     isDataSent: 'home/isDataSent',

        
            })
         },

   data : ()=>({
   
    description :"",
   }),
    methods:{
    handleAddDescription(){
      this.$store.dispatch('carts/addDescriptionCart',this.description)
      this.$emit('close-modal');
    },
    getTitleCart(carts){
     let title = "";
         carts.map((cart)=>{
                        let new_cart ={};
                        new_cart.store_id = cart.store_id;
                        new_cart.order_time = null;
                        new_cart.orders = cart.products.map((product)=>{
                            title += "- "+ product.count +"عدد" + product.name 
                            product.details.map((detail)=>{
                               title += "- "+ detail.count +"عدد" + detail.name 
                            }) ;

                          
                        });
                    
                      
               })

     return title;
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
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height:350px;
  width:400px;
  margin:20px  30px;

  border-radius: 20px;
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
.header-modal{
  height: 35px;
    background-color:#fd5e63;
   color: #ffffff;
   text-align: right;
   padding-right: 10px;
   border-top-left-radius: 1rem;
   border-top-right-radius: 1rem;
}
.btn-save{
   background-color:#fd5e63;
   color: #ffffff;
    padding:0.3rem 1.5rem;
    border-radius: 0.3rem;
    bottom: 0px;
    height: 40px;
    width: 110px;
    right: 30px;

}
.btn-close{
   background-color:#ffffff;
   color: #454545;
    padding:0.3rem 1.5rem;
    border-radius: 0.3rem;
}
.red{
  font-size: 0.9rem;
  color:#fd5e63;

}
.line-break{
  background-color: #eeeeee;
  height: 0.04rem;
}
.bold{font-weight: bold;}
.h-40{
  height: 40px;
}
</style>