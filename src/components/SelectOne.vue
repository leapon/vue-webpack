<template>
  <div>
    <p>{{ label }}</p>
    <multiselect
      :options="source",
      :selected.sync="value",
      :multiple="false",
      :searchable="true",
      placeholder="Select one",
      label="name",
      :close-on-select="true",
      :clear-on-select="false"
      key="name"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: ['name', 'label', 'values'],
  components: { Multiselect },
  data () {
    return {
      value: null,
      source: this.$get('values')
    }
  }
}
</script>

<style scoped>
</style>