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

            <v-text-field :rules="rules"></v-text-field>

                <v-btn class="btn-add">
                     <span class="white"> افزایش</span>
                    <font-awesome-icon class="absolute white left-0" :icon="`fa-solid fa-credit-card`" />
              
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

export default {
    components: {  },
    
  
    data: () => ({
      rules: [
        value => !!value || 'تومان',
        value => (value || '').length <= 20 || 'تعداد ارقام بیش از حد مجاز می باشد',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'تومان'
        },
      ],
    }),
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
</style>
