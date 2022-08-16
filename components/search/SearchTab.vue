<template>
 
     <div class="mt-2 flex flex-col items-center justify-center ">

         
       
        <div class="tab-box flex items-center justify-center">
            <button @click="changeTab(0)" :class="`${selected_tab==0?'active':''}`">محصول</button>
            <button  @click="changeTab(1)" :class="`${selected_tab==1?'active':''}`">فروشگاه </button>
            
        </div>          
           

                
        
     </div>
       

</template>
<script>



export default {
     data : () =>({
            selected_tab : 0
        }),
    methods : { 

       
        changeTab(index){
              this.selected_tab = index;
              this.$emit("change-tab",this.selected_tab==0 ?"product":"category")
        }
    }
    

}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.tab-box{
    height:45px;
    border-radius : 5px;
    background-color : #ffffff;
    color : #9a9a9a;
    width:150px;
    overflow:hidden;
}
.active{
    color:#ffffff;
    background-color :#fd5e63;
     cursor:unset;
     height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tab-box button{
    flex: 50%;
    text-align: center;
    line-height: 36px;
    cursor:pointer;
}
</style>
