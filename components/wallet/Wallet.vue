<template>
   <section>
     
     
     <div class="mt-3 flex flex-col items-center mr-3">

         <div class="circle-border flex flex-col justify-center items-center">
             <span>موجودی</span>
             <span>0</span>
             <span>تومان</span>
         </div>
         <p class="mt-2">مبلغ مورد نظر را در فیلد پایین وارد کنید</p>
         <p class="mt-1">حداقل افزایش 5000 تومان</p>

            <v-text-field
            
            v-model="payment"
               class="custom-text-field" 
                 @keypress="handleOnPress"
                 :rules="rules"
                single-line
               ></v-text-field>

                <v-btn @click.prevent="sendPyment" class="btn-add">
                     <span  v-if="!isDataSent" class="white"> افزایش</span>
                    <font-awesome-icon  v-if="!isDataSent" class="absolute white left-0" :icon="`fa-solid fa-credit-card`" />
              
               <div  v-if="isDataSent" class="container-progress">
                <span class="white ml-2">لطفا صبر کنید</span>
                <v-progress-circular
                 class="progress-circular"
              
               indeterminate
               
              color="#ffffff"/>
               </div>
                </v-btn>
         <p class="mt-3 mb-3">با افزایش کیف پول خود با اطمینان و با سرعت پرداخت کنید</p>
        
     </div>
    </section>

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCreditCard } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCreditCard)

import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

export default {
    components: {  },
      computed: {
      ...mapGetters({
           isDataSent: 'home/isDataSent',
        
            })
         },
  
    data: () => ({
        payment : 0,
       
      rules: [
        value => !!value || 'تومان',
        value => (value || '').length <= 20 || 'تعداد ارقام بیش از حد مجاز می باشد',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'تومان'
        },
      ],
    }),
    methods:{
            sendPyment(){
          if(this.isDataSent)
           return ;
           
           let payment = this.payment?this.payment : "0";
            let data = {
                payment : payment.replaceAll(",","")
            }
            if(Cookies.get("user")){
              let user = JSON.parse (Cookies.get("user"));
               data . api_token = user.api_token;
               
             this.$store.dispatch('home/addPyment', data)
            }else
             this.$router.push('/login')
            },
             formatPrice(price) {
             return  Number(price).toLocaleString();
           
             },
              handleOnPress(e) {
             
                 var validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            if (validkeys.indexOf(e.key) < 0)
                e.preventDefault();
                else 
                return true

              
              }  
    },
    watch:{
   payment(new_val,old_val){
      
        this.payment = this.formatPrice(new_val.replaceAll(",",""))
   
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
    margin-top: 1rem;
   
}
.white{
  
    color : #ffffff!important;
}
.progress-circular{
  height: 25px!important;
  width: 25px!important;

}
.container-progress{
display: flex;
  position:absolute!important;
}
.custom-text-field{
  direction:ltr;
  text-align: right;
    font-family: yekanNumRegular !important;
}
</style>
