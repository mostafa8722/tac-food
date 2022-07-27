<template>
   <section >
     
<div id="map-wrap">
 <client-only>
  <l-map style="height: 150px;width:100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng">
    <l-icon
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :icon-url="icon.iconUrl"
        />
    </l-marker>
  </l-map>
</client-only>
</div>
    </section>

</template>
<script>

import Vue from 'vue';



import { mapGetters } from 'vuex'
export default {
  props: ["center","markerLatLng"],
     data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,

   icon: {
        iconUrl: "/icons/gps_fixed.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      },
    };
  }
   
}
</script>
<style>

</style>
