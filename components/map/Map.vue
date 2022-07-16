<template>
   <section >
     
<div id="map-wrap">
 
 <client-only>
  <l-map  @click="$emit('handle-map',$event)" style="height: 200px;width:100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker  :lat-lng="markerLatLng"></l-marker>
  </l-map>
</client-only>
</div>
    </section>

</template>
<script>

import Vue from 'vue';



import { mapGetters } from 'vuex'
import { LOCATION_DEFAULT } from "~/data/default"
import {GetStorage,SetStorage} from "~/utils/helpers"
import 'leaflet/dist/leaflet.css';
export default {
    props: ["markerLatLng","center"],
     data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
     
    };
  },
  methods:{
    handleClickMap(e){
        // console.log(e)
         this.markerLatLng  = [e.latlng.lat,e.latlng.lng];
    }

  }
   
}
</script>
<style>

</style>
