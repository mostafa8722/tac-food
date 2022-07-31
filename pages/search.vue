<template>
  <div class="containers">
    <div>

    <SearchBox />  
    <SearchComponent />
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBox from '~/components/app/SearchBox.vue'
import SearchComponent from '~/components/search/SearchComponent.vue'


export default Vue.extend({
    layout: 'custom',
  components:{
    SearchBox,
    SearchComponent
}
})
</script>

<style scoped>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;
  width: 100%;
  max-width: 600px;

 
  background-color: #f5f5f5;
}


</style>
