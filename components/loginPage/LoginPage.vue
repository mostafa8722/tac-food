<template>
 <section class="flex justify-center">
     <div class="mt-20 flex flex-col content-section  items-center justify-center ml-3 mr-3">

        <div class="login-page-component  flex flex-col ">
       
                 <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="نام"
              hint="از این پس با این نام شناخته می شوید"
           
            v-model="name"
          >
           <v-icon slot="prepend" class="icon-prepend" >
           mdi-lightbulb-outline
           </v-icon>
          </v-text-field>

               <v-text-field
            outlined
                persistent-hint
                class="input-field input-phone mt-5"
            label="شماره تلفن"
              hint="شماره همراه خود را وارد کنید"
            
             v-model="mobile"
              counter="11"
              maxlength="11"
            @keypress="handleOnPress"
          >
           <v-icon slot="prepend" class="icon-prepend" >
            mdi-cellphone
           </v-icon>
          </v-text-field>
           
       </div>
       <div class="flex flex-col ">

           <v-text-field
           v-model="invite_code"
            label="کد معرف"
          ></v-text-field>


    <p>
        <span>ثبت نام به معنای پذیرش </span>
        <span class="privcy-link">قوانین و مقررات</span>
        <span>است</span>
    </p>
      <a class="privcy-link  flex justify-center mt-3" href="https://takfood.ir/privacy-policy.html">
          
              سیاست حفظ حریم خصوصی
          
      </a>

                <v-btn @click.prevent="login" class="btn-add pointer mt-10">
                     <span    v-if="!isDataSent" class="white"> ثبت </span>
                    <font-awesome-icon  v-if="!isDataSent" class="absolute left-2 white mr-5 h-20" :icon="`fa-solid fa-angle-left`" />
              <div  v-if="isDataSent" class="container-progress">
                <span class="white ml-2">لطفا صبر کنید</span>
                <v-progress-circular
                 class="progress-circular"
              
               indeterminate
               
              color="#ffffff"/>
               </div>
                </v-btn>
        
     </div>
     </div>
    </section>

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft, faL } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faAngleLeft)
// this.$vuetify.rtl = true;
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);
import { mapGetters } from "vuex"
export default {
computed: {
      ...mapGetters({
           isDataSent: 'home/isDataSent',
        
            })
         },
    
  
    data: () => ({
       name:"",
       mobile:"",
       invite_code :"",
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
      login(){
       if(this.isDataSent)
        return ;
        let user = {
        name:this.name,
        phone:this.mobile,
        invite_code:this.invite_code,
        send_again: false,
        }
       
         
        this.$store.dispatch('auth-user/registerUser', user)
        
      },
       handleOnPress(e) {
             
                 var validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            if (validkeys.indexOf(e.key) < 0)
                e.preventDefault();
                else 
                return true

              
              }  
      

    }
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.content-section{
    max-width:600px;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanNumRegular!important;
}
.btn-add{
    background-color : #fd5e63!important;
    width:200px;
}
.white{
  
    color : #ffffff!important;
}
.icon-users{
   
    height:25px;
    color :#cccccc;
}
.input-field{
  width:400px;
  margin-top:1.2rem;
}
.privcy-link{
    color:#fd5e63;
    font-size:0.7rem;
}
span{
  font-size:0.7rem;   
}
.h-20{
  height:20px;
}
.icon-prepend{
    color:#fd5e63;
    font-size:1.4rem;
    position:absolute;
    right:5px;
}
.container-progress{
display: flex;
align-items: center;
  position:absolute!important;
}
.progress-circular{
  height: 25px!important;
  width: 25px!important;

}
.custom-text-field{
  direction:ltr;
  text-align: right;
    font-family: yekanNumRegular !important;
}
.input-phone input{text-align: left;}
</style>
