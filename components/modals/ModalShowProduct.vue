<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
   
      <div class="modal" @click.stop>
           
           
         <div class=" mb-2">
        
         <div class="flex flex-col text-right">
          <v-card
    class="flex flex-col   overflow-hidden content-product pointer "
    width="100%"
    height="300"
     color="#ffffff"
  
  outlined
  
  >
    <div class="flex flex-col  ">
      <v-img
      height="200"
      width="400"
      class="flex-none rounded-xl"
      :src="product.logo"
    
    >
     <template v-slot:placeholder>
         <v-img
        src="/icons/logo_.svg"
       height="200"
      width="400"
      class="flex-none rounded-xl"
    
    
    ></v-img>
        </template> 
    </v-img>

<div class="flex flex-row-reverse justify-center ">
      <v-rating
      v-model="product.rating"
      background-color="warning lighten-1"
      color="#fd5e63"
      size="20"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>

      
    </div>
    <div class="flex flex-row justify-between mr-2">
      <span class=" title unset-flex mr-1">  {{product.name}}</span>
     <span class=" price unset-flex ml-1 ">  {{formatPrice(product.price)}}</span>
      

    </div>
    </div>
    


  </v-card>
         </div>
         <div class="flex justify-between mb-5 mr-2 ml-2 mt-5 ">
                                <button @click.prevent="$emit('close-modal')" class="btn-close pointer "> بستن </button>

                      <button @click.prevent="addToCart" class="btn-save pointer "> افزودن </button>

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
     product : {
    type:Object,
    default : true,
   }
  },
   data : ()=>({
   
    description :"",
   }),
    methods:{
    handleAddDescription(){
    //  this.$store.dispatch('carts/addDescriptionCart',this.description)
      this.$emit('close-modal');
    },
     addToCart(){
      
     
      this.$store.dispatch('carts/addCart', this.product)
        this.$emit('close-modal');
    },
     removeFromCart(){
    //  console.log(this.product)
      this.$store.dispatch('carts/removeCart', this.product)
    },
      formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"تومان";
      },

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
  height:450px;
  width:300px;
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
  background-color: #fd5e63;
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
.unset-flex{
  flex:unset
}
.line-break{
  background-color: #eeeeee;
  height: 0.04rem;
}
.bold{font-weight: bold;}
.price span{
  color:#606060;
    font-size:0.9rem;
 
</style>