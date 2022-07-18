<template>
    <v-sheet
    
    class="px-3 pt-3 pb-12"
  >
    <v-responsive
      :max-width="type.indexOf('table') > -1 ? 900 : 500"
      class="mx-auto"
    >
      <v-responsive
        class="mx-auto mb-12"
        max-width="500"
      >
       
      </v-responsive>

      <v-skeleton-loader
        ref="skeleton"
        :boilerplate="boilerplate"
        :type="type"
        :tile="tile"
        class="mx-auto"
      ></v-skeleton-loader>
    </v-responsive>
  </v-sheet>

</template>
<script>


  export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: ['theme'],

    data: () => ({
      boilerplate: false,
      tile: true,
      type: 'list-item-avatar-three-line,text',
      types: [],
    }),

    mounted () {
      this.types = Object.keys(this.$refs.skeleton.rootTypes)
    },
  }
</script>
<style scoped>
.v-skeleton-loader--tile .v-skeleton-loader__bone{
    margin-left: 5px!important;
}

</style>
