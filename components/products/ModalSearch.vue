<template>

    
        <v-bottom-sheet
      v-model="showModalSearch"
      inset
      class="bottom-sheet"
    >
     
      <v-sheet
        class="text-center relative custom-sheet"
       
      >
      
        <div class="mr-1 ml-1" >

             <div class="flex header-search relative  items-center" >
               <font-awesome-icon   @click.prevent="$emit('close-modal')" class=" mr-2 pointer btn-back p-2 " :icon="`fa-solid fa-arrow-right`" />
               <span class="mr-2"> برگشت</span>
               
           </div>

           <div class="flex relative mt-4" >
                 <v-text-field
            outlined
                persistent-hint
                class="input-field"
            label="جستجو محصول در فروشگاه  "
          
           
             v-model="search"
              prepend-inner-icon="mdi-magnify"
          >
         
          </v-text-field>
           </div>
            
            <div>
             <Product   v-for="(item) in searchProducts" :index="index" :is_store_online="!is_active" @select-product="showProduct" page="store" :key="item.id"  :product="item" />

            </div>
       
        </div>
      </v-sheet>
    </v-bottom-sheet>
           
         
    

</template>

<script>


import Vue from "vue"


import {mapGetters} from "vuex"
import Product from "./Product.vue"

export default {
    components:{Product},
    props : ["showModalSearch","is_active"],
    computed: {
             ...mapGetters({
                 products: 'products/products',
                 
                 })
         },
    created(){
   
    },
    data :()=>({
      search:"",
      searchProducts :[]
    }),
    methods:{
 showProduct(product){
             this.$emit('select-product',product)
            },
   
    },
    watch:{
      search(new_val,old_val){
        if(new_val.length>=3){
       this. searchProducts = this.products.filter(item => item.name.includes(new_val))
      
        }
        
      }
    }

}
</script>

<style scoped>
.header-search {
  height: 45px;
  border-bottom: 0.05rem solid #c1c1c1;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 1000;

}
.w-100{width:100%;font-size: 0.75rem;}
.bottom-sheet .custom-sheet{  background-color: #f5f5f5;}
.modal {
  text-align: center;
  background-color: #f5f5f5;
  /*height:calc(100% - 40px);*/
  height: 400px;
  width:calc(100% - 60px);
  max-width: 600px;
  margin:20px  30px;

  border-radius: 20px;
}
.close {
  margin: 20px 0 0 16px;
  cursor: pointer;
}
.text-title{
  color:#000000;
  font-size: 0.95rem;
  font-family: "yekanBold"!important;
}
.desc-text{
    color:#939393;
    font-size: 0.85rem;
    text-align: right;
}
.font-7{font-size: 0.7rem;}
.btn-location{
    height:46px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
    display: flex;
}
.btn-gps{
    height:46px ;
    width:46px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
    display: flex;
}
.white{
    color:#ffffff;
}
.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
    height:20px;
}
.btn-gps svg{
    height:18px ;
  
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
p {
  /* font-weight: 500; */
  font-size: 16px;
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
.bottom-sheet,.custom-sheet{
  top: 0px;
  bottom: 0px;
  height: 100%;
}
.color-0{color:#000000}
</style>