<template>
 

    
     
        <div class="mt-20 flex flex-col ml-3 justify-center  profile-container  mr-3">



            <p class="text-verify-red text-center mt-4">شما یک پیام حاوی کد تایید به شماره زیر </p>
            <p class="text-verify-red text-center "> دریافت خواهید کرد</p>

            <div class="flex justify-center mt-4">
             
                <font-awesome-icon class=" ml-2 h-20  icon-item green" :icon="`fa-solid fa-solid fa-circle-check`" />
                <span class="text-verify-number">{{mobile}}</span>

            </div>
            
           
            <p class="mt-2 text-center text-verify-code mt-3">کد دریافتی را در قسمت زیر وارد کنید </p>
             <div class="flex justify-center ltr mt-5">
            
                <v-otp-input
                 v-model="otp"
                length="5"
                plain
                type="number"
                ></v-otp-input>
            </div>
            <p class="mt-5 text-center text-verify-code">{{showTime}}</p>
            <p class="mt-1 text-center text-verify-code">زمان باقی مانده  </p>
            <div class="flex justify-center mb-2 mt-20">
               <div @click.prevent="confirm" class="btn-location text-center pointer relative mt-3">
                  <span class="white" v-if="!isDataSent && countDown>0" style="font-size: 0.95rem;"> تایید </span>
                  <span class="white" v-if="!isDataSent && countDown==0" style="font-size: 0.95rem;"> تلاش دوباره  </span>
                   <font-awesome-icon v-if="!isDataSent && countDown>0" class=" mr-5 h-20 icon-item white" :icon="`fa-solid fa-clipboard-check`" />
                   <font-awesome-icon v-else-if="!isDataSent && countDown==0" class=" mr-5 h-20 icon-item white" :icon="`fa-solid fa-rotate-right`" />
                <div  v-if="isDataSent" class="container-progress">
                <span class="white ml-2">لطفا صبر کنید</span>
                <v-progress-circular
                 class="progress-circular"
                     indeterminate
                    color="#ffffff"/>
               </div>
                </div>

           </div>
         
      

          
        </div>
    
   
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faClipboardCheck,faCircleCheck,faRotateRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faClipboardCheck,faCircleCheck,faRotateRight)
import { mapGetters } from 'vuex'

export default {
    components: {},
     computed: {
             ...mapGetters({ 
                 isRegisterIn: 'auth-user/isRegisterIn'
                 ,mobile: 'auth-user/mobile'
                 ,name: 'auth-user/name'
                 ,inviteCode: 'auth-user/inviteCode',
                 refresh_code: 'auth-user/refresh_code',
                 isDataSent: 'home/isDataSent',

                 })
         },
    data :()=>({
      otp: "",
       countDown : 180,
       showTime  : '03:00',
    }),

     methods: {
  
    confirm() {

        if(this.isDataSent)
        return ;


       if(this.countDown>0){
         let data = {
              invite_code:this.inviteCode,
              phone:this.mobile,
              code:this.otp
        }
         this.$store.dispatch('auth-user/loginUser', data)
       }else{
     let user = {
        name:this.name,
        phone:this.mobile,
        invite_code:this.invite_code,
        send_again: true,
        }
       
         
        this.$store.dispatch('auth-user/registerUser', user)
       }
      
    },
      countDownTimer() {
        
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        let min = parseInt(this.countDown/60);
                        let sec = this.countDown%60
                        if(sec<10)
                        sec = `0${sec}`;

                        this.showTime = `0${min}:${sec}`
                        this.countDownTimer()
                    }, 1000)
                }
            }
  },
  created(){

   


      if(this.isRegisterIn)
        this.countDownTimer()
      else
         this.$router.push('/login')
      
  },
  watch:{
   refresh_code(new_val,old_val){
      
      if(new_val){
        this.countDown = 180
         this.countDownTimer()
      }
    }
  }
    
   
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.profile-container{
    max-width: 400px;
    margin:  0px auto;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    
}
p{
    color :#747474;
    font-size:0.6rem;
    font-family: yekanBold!important;
}

.text-verify-red{
  
    color : #fe5c67!important;
    font-size:0.9rem;
       font-family: yekanNumRegular!important;
}
.text-verify-code{
  
    color : #606060!important;
    font-size:0.9rem;
       font-family: yekanNumRegular!important;
}
.text-verify-number{
  
    color : #606060!important;
    font-size:0.9rem;
 
}
.btn-location{
    height:45px ;
    width:86%;
    margin-right: 7%;
    margin-left:7%;
    max-width:450px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}

.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
}
.white{
    color: #fff;
}

.green{
    color:#53bd5b;
}
.ltr{direction: ltr;}
.container-progress{
display: flex;
align-items: center;
justify-content: center;
width: 100%;
  position:absolute!important;
}
.custom-text-field{
  direction:ltr;
  text-align: right;
    font-family: yekanBold !important;
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
.h-20{
    height: 20px;
}
</style>
