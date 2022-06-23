<template>
 <section class="flex justify-center">
     <div class="mt-20 flex flex-col content-section items-center justify-center ml-3 mr-3">

         
       
                 <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="نام"
              hint="از این پس با این نام شناخته می شوید"
            prepend-inner-icon="mdi-map-marker"
            v-model="name"
          ></v-text-field>

               <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="شماره تلفن"
              hint="شماره همراه خود را وارد کنید"
            prepend-inner-icon="mdi-map-marker"
             v-model="mobile"
          ></v-text-field>
           
           

           <v-text-field
           v-model="invite_code"
            label="کد معرف"
          ></v-text-field>


    <p>
        <span>ثبت نام به معنای پذیرش </span>
        <span class="privcy-link">قوانین و مقررات</span>
        <span>است</span>
    </p>
      <a class="privcy-link" href="https://takfood.ir/privacy-policy.html">
          
              سیاست حفظ حریم خصوصی
          
      </a>

                <v-btn @click.prevent="login" class="btn-add pointer mt-2">
                     <span class="white"> ثبت </span>
                    <font-awesome-icon class="absolute left-2 white mr-5 " :icon="`fa-solid fa-angle-left`" />
              
                </v-btn>
        
     </div>
    </section>

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faAngleLeft)
// this.$vuetify.rtl = true;
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);
export default {
    components: {  },
    
  
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
 

        
        let user = {
        name:this.name,
        phone:this.mobile,
        invite_code:this.invite_code
        }
       
         
        this.$store.dispatch('auth-user/registerUser', user)
        
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
    width:50%;
}
.white{
  
    color : #ffffff!important;
}
.icon-users{
   
    height:25px;
    color :#cccccc;
}
.input-field{
  width:100%;
}
.privcy-link{
    color:#fd5e63;
    font-size:0.7rem;
}
span{
  font-size:0.7rem;   
}
</style>
