<template>
  <div>
    <v-select
      :options="options"
      @search="search"
      :filterable=false
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import vSelect from 'vue-select'

export default Vue.extend({ 
  name: "m-select",
  props: {
    value: {
      // ID of select field can be of type: Integer, Long, String etc.
      type: [String, Number],
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    onSearch: {
      type: Function,
      required: false
    }
  },
  methods: {
    search (term, loading) {
      this.$emit('search', term, loading)
    }
  },
  components: {
    'v-select': vSelect
  }
})
</script>
