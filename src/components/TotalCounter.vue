<template>
  <span v-if="totalFluids < 1000"
    >{{ totalCaffeine }}mg with {{ totalFluids }}ml today</span
  >
  <span v-if="totalFluids >= 1000"
    >{{ totalCaffeine }}mg with {{ totalFluids / 1000 }}l today</span
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    totalCaffeine(): number {
      return this.$store.getters.totalCaffeine;
    },
    totalFluids(): number {
      return this.$store.getters.totalFluids;
    },
  },
});
</script>
