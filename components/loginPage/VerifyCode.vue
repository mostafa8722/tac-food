<template>
 

    
     
        <div class="mt-20 flex flex-col ml-3 flex-items profile-container  mr-3">



            <p class="red text-center mt-2">شما یک پیام حاوی کد تایید به شماره زیر دریافت خواهید کرد</p>

            <div class="flex justify-center mt-3">
             
                <font-awesome-icon class=" ml-2  icon-item green" :icon="`fa-solid fa-solid fa-circle-check`" />
                <span>{{mobile}}</span>

            </div>
            
           
            <p class="mt-2 text-center">کد دریافتی را در قسمت زیر وارد کنید </p>
             <div class="flex justify-center ltr mt-5">
            
                <v-otp-input
                 v-model="otp"
                length="5"
                plain
                type="number"
                ></v-otp-input>
            </div>
            <p class="mt-5 text-center">{{showTime}}</p>
            <p class="mt-1 text-center">زمان باقی مانده  </p>
            <div class="flex justify-center mb-5 mt-5">
               <div @click.prevent="confirm" class="btn-location text-center pointer relative mt-3">
                  <span class="white" style="font-size: 0.8rem;"> تایید </span>
                   <font-awesome-icon class=" mr-5  icon-item white" :icon="`fa-solid fa-clipboard-check`" />
               
                </div>

           </div>
         
      

          
        </div>
    
   
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faClipboardCheck,faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faClipboardCheck,faCircleCheck)
import { mapGetters } from 'vuex'

export default {
    components: {},
     computed: {
             ...mapGetters({ 
                 isRegisterIn: 'auth-user/isRegisterIn'
                 ,mobile: 'auth-user/mobile'
                 ,inviteCode: 'auth-user/inviteCode'
                 })
         },
    data :()=>({
      otp: "",
       countDown : 180,
       showTime  : '03:00',
    }),

     methods: {
  
    confirm() {
       let data = {
        invite_code:this.inviteCode,
        phone:this.mobile,
        code:this.otp
        }
       
         
        this.$store.dispatch('auth-user/loginUser', data)
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
      
  }
    
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.profile-container{
    width: 400px;
    margin:  0px auto;
}
p{
    color :#747474;
    font-size:0.6rem;
    font-family: yekanNumRegular!important;
}

.red{
  
    color : #f75c67!important;
    font-size:0.7rem;
}
.btn-location{
    height:40px ;
    width:250px;
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
</style>
