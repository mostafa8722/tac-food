<template>
   <section >
     
<div id="map-wrap">
 <client-only>
  <l-map style="height: 200px;width:100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</client-only>
</div>
    </section>

</template>
<script>

import Vue from 'vue';



import { mapGetters } from 'vuex'
import { LOCATION_DEFAULT } from "~/data/default"
export default {
     data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [LOCATION_DEFAULT.lat, LOCATION_DEFAULT.lng],
      markerLatLng: [LOCATION_DEFAULT.lat, LOCATION_DEFAULT.lng]
    };
  }
   
}
</script>
<style>

</style>
