<template>

 <div class="flex mt-2 mb-2 justify-between cart-option">
  <div class="flex">
    <v-img
      height="40"
      width="40"
      class="flex-none  rounded mr-2 mt-2"
     
    
    ></v-img>

  
  <div class="flex flex-col mr-2 mt-1">
      <span :class=" `title ${product.status?'':'unactive'}`">  {{product.name}}</span>
 
  <span :class="`price ${product.status?'':'unactive'}`">{{count==0?1:count}} 	&#215; {{formatPrice(product.price)}} </span>
  </div>
  </div>

 <div class="flex flex-row-reverse mt-2 ml-2">

  <div class="flex flex-col ltr">
  <ToggleButton  :currentState="count>0?false:true" @changeSwitch="changeSwitch" />
 
            <div class="mt-3">
               <font-awesome-icon @click.prevent="addToCart" :class="`icon-custom ml-2 pointer ${product.status?'':'unactive-cart'}`" :icon="`fa-solid  fa-add`" />
      
        <font-awesome-icon  @click.prevent="removeFromCart" :class="`icon-custom ml-2 pointer ${product.status?'':'unactive-cart'}`"  :icon="`fa-solid  fa-minus`" />
            </div>
  </div>
   
   </div>
   </div>


</template>
<script>
import ToggleButton from "../app/ToggleButton.vue"
import { mapGetters } from 'vuex'
export default {
  props : {
    product:{
      type:Object,
      require:true
    },
    currentCart:{
      type:Object,
      require:true
    }
  },
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
              totalCart: 'carts/totalCart',
       
        
            })
         },
  components: {ToggleButton},
  data () {
      return {
        switch1: false,
        count :1,
      }
    },
    created(){
      console.log("eeeee",this.$vuetify.breakpoint.width)
      this.count  = this.product.count;
    },
  methods:{
     formatPrice(price) {
         return  Number(price).toLocaleString();
      },
      addToCart(){
       let data = {
          cart : this.currentCart,
          detail : this.product,
          count:this.product.count+1,
        }

        console.log("count",this.product.count)
      if(this.product.status)
       this.$store.dispatch('carts/addCartOption', data);
      },
      removeFromCart(){
            let data = {
          cart : this.currentCart,
          detail : this.product,
          count:this.count-1,
        }
        
         if(this.product.status)
       this.$store.dispatch('carts/addCartOption', data);
       

      },
      changeSwitch(val){
        let data = {
          cart : this.currentCart,
          detail : this.product,
          count:val?0:1,
        }
       this.$store.dispatch('carts/addCartOption', data);

       
       
      }

  },
  watch:{
      totalCart(new_val,old_val){
            console.log("total1",old_val)
            console.log("total1", this.product.count)
            
            this.count =this.product.count ;
          // this.product = data;
                
         
        }
    
  }
}
</script>
<style scoped>
.flex-none{
    flex:none;
}

.cart-option{
  border-top: 0.01rem solid #dddddd;
}
.title{
  color:#717171;
  font-size:0.75rem;
}
.price{
  color:#717171;
    font-size:0.5rem;
  font-family: yekanNumRegular!important;
  
}
.type{
  color:#8d8d8d;
    font-size:0.6rem;
}
   .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #717171;
  height:30px!important;
  width:30px!important;
}
.icon-custom{
  color:#717171!important;
  font-size:0.9rem!important;
  padding:0.1rem;
  border:0.1rem solid #717171;
  border-radius: 50%;

}
.unactive-cart{
    color:#cdcdcd!important;

  border:0.1rem solid #cdcdcd;
}
.unactive{
    color:#cdcdcd!important;

 
}
</style>