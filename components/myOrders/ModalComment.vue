<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           
         <div class=" mb-2">
          <h3 class="header-modal pt-2">{{data.title}}</h3>
        
         <p class="desc-text mr-1 ml-1  mt-5 pr-2 ">  {{data.description}}</p>

         <div class="flex flex-row-reverse mb-5 mt-5 ">
                    <button  @click.prevent="$emit('confirm-delete')" class="btn-save pointer mt-4"> {{data.confirmBtn}} </button>

                     <button @click.prevent="$emit('close-modal')" class="btn-close pointer mt-4"> {{data.cancelBtn}} </button>


         </div>
         </div>
         
      </div>
      
    </div>
  </transition>
</template>

<script>


import Vue from "vue"



export default {
   
   props:{
    data:{
      type:Object,
      require:true,
    }
   },
   data : ()=>({
   
    
   }),
    methods:{
    handleAddDescription(){
     // this.$store.dispatch('carts/addDescriptionCart',this.description)
      this.$emit('close-modal');
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
  z-index: 101;
}
.w-100{width:100%;font-size: 0.75rem;}
.modal {
  text-align: center;
  background-color: white;
  height:200px;
  width:300px;
  margin:50px  30px;

  border-radius: 5px;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.desc-text{
    color:#696969;
    font-size: 0.9rem;
    text-align: right;
     font-family: yekanNumRegular !important;
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
     font-family: yekanNumRegular !important;
}
.btn-close{

   color: #fd5e63;
    padding:0.3rem 1.5rem;
     font-family: yekanNumRegular !important;
  
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
</style>