<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           
         <div v-if="!data.send" class=" mb-2 flex flex-col items-center mt-3 pt-2 pb-2" >

            <v-img
      height="55"
      width="55"
      class="flex-none  mr-2 rounded-cl "
        :src="data.img?data.img:'/icons/food.svg'"
    
    >
    <template v-slot:placeholder>
         <v-img
        src="/icons/food.svg"
       height="55"
      width="55"
      class="flex-none   rounded-cl"
    
    
    ></v-img>
        </template>
    </v-img>
         
        
         <p class="desc-text mr-1 ml-1  mt-3  ">  {{data.description}}</p>
         <p class="desc-text mr-1 ml-1   pr-2 ">  {{data.text}}</p>
       <div class="bg-rating mt-5">
          <v-rating
      v-model="vote"
      background-color="warning lighten-1"
      color="red"
      size="32"
       value="0"
       dir="ltr"
         hover
      class="rating-section "
        
    />
       </div>

         <div class="flex justify-between absolute bg-bottom items-center w-100 pr-4 pl-4  mt-5 ">
                    <button  @click.prevent="handleNext(vote,data.step +1)" class=" pointer ">بعدی </button>

                     <button v-if="data.step!=0"  @click.prevent="handleNext(1,data.step -1)"  class=" pointer ">برگشت</button>


         </div>
         </div>

         <div v-else class=" mb-2 flex flex-col items-center mt-3  pb-2 pl-2 pr-2" >
           <div class="flex items-center pr-2 w-100 mb-3">
              <v-checkbox
              v-model="checkBox"
            
              color="#ff3300"
             
              hide-details
            ></v-checkbox>
            <span class="text-check-box">ارسال نظر (اختیاری)</span>
           </div>
          
              <v-textarea
           v-model="description"
          solo
          class="w-100"
          name="input-7-4"
        maxlength="150"
        counter="150"
        ></v-textarea>

         <div class="flex justify-between absolute bg-bottom items-center w-100 pr-4 pl-4  mt-5 ">
                    <button v-if="!isDataSent"  @click.prevent="$emit('send-comment',data.step +1,{body:description})" class=" pointer ">تایید </button>

                         <v-progress-circular
                         v-else
                 class="progress-circular"
               indeterminate
              color="#ff2200"/>
                     <button v-if="data.step!=0"  @click.prevent="handleNext(1,data.step -1)"  class=" pointer ">برگشت</button>


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
          
          isDataSent: 'home/isDataSent',
          
        
            })
         },
   props:{
    data:{
      type:Object,
      require:true,
    }
   },
   data : ()=>({
     vote:0,
     description :'',
     checkBox : null
    
   }),
    methods:{
    handleAddDescription(){
     // this.$store.dispatch('carts/addDescriptionCart',this.description)
      this.$emit('close-modal');
    },
    handleNext(vote,step){
      if(vote!=0)
      this.$emit('next-step',
      step,
      {product_id:this.data.product_id,rating:this.vote,is_courier:this.data.step==0?true:false})
    }

    },
    watch:{
      data(new_val,old_val){
        this.vote =0;
      }
    }
   


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
  z-index: 101;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height:300px;
  width:300px;
  margin:50px  30px 0px 30px;
  position: relative;

  border-radius: 5px;
  overflow: hidden;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.desc-text{
    color:#696969;
    font-size: 0.7rem;
    text-align: right;
     font-family: yekanBold !important;
}
.font-7{font-size: 0.7rem;}

.white{
    color:#ffffff;
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
   
   color: #fd5e63;
   text-align: right;
   padding-right: 10px;
   font-size: 1.1rem;
 
}
.btn-save{

   color: #fd5e63;
    padding:0.3rem 1.5rem;
     font-family: yekanBold !important;
}
.btn-close{

   color: #fd5e63;
    padding:0.3rem 1.5rem;
     font-family: yekanBold !important;
  
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
.rounded-cl{
  border-radius: 0.35rem;
}
.bg-bottom{
  bottom: 0px;
  background-color: #f0f0f0;
  height: 40px;
}
.bg-rating{
  background-color: #f0f0f0;
  padding:0.1rem 1rem;
  border: 0.15rem  solid #c0c0c0;
  border-radius: 0.2rem;
}
.text-check-box{
  font-size: 0.7rem;
  color:#898989;
  margin-right: 1rem;
  margin-top:1rem;
}
</style>