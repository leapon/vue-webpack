<template>
  <p>species data: {{ species_data|json }}</p>
  <p>fields: {{ fields|json }}</p>
  <p>data url: {{ dataurl }}</p>
  <p>users #: {{ users.length }}</p>
  <hr/>
  <barplot :data="species_data"></barplot>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Barplot from './Barplot.vue'

export default {
  props: ['dataitems'],
  data () {
    return {
      categorydata: {
        x: ["Pear", "Orange"],
        y: [42, 18]
      }
    }
  },
  computed: {
    filter2: function() {
      return JSON.stringify(this.filter) + '-2';
    },
    dataurl: function() {
      return './lib/data/vuetable-example-users.json' + '?filter=' + JSON.stringify(this.filter)
    },
    species_data: function() {
      var data = { x:[], y:[] };
      if (this.filter && this.filter.species) {
        for (var species of this.filter.species) {
          data.x.push(species.name);
          data.y.push(Math.floor(Math.random() * 100));
        }
      }
      return data;
    }
  },
  vuex: {
    getters: {
      filter: state => state.filter,
      fields: state => state.fields,
      users: state => state.users
    }
  },
  activate: function (done) {
    console.log('>>> activate DataPlot');
    done();
  },
  components: {
    Barplot
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
