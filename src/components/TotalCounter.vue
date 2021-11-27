<template>
  <div class="bg-info">
    <span>{{ percentLimitReached }}% of daily limit</span>
    /
    <span v-if="totalFluids < 1000"
      >{{ totalCaffeine }}mg with {{ totalFluids }}ml today</span
    >
    <span v-if="totalFluids >= 1000"
      >{{ totalCaffeine }}mg with {{ totalFluids / 1000 }}l today</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    totalCaffeine(): number {
      return this.$store.getters.dailyTotalCaffeine;
    },
    totalFluids(): number {
      return this.$store.getters.dailyTotalFluids;
    },
    percentLimitReached(): number {
      return this.$store.getters.percentLimitReached;
    },
  },
});
</script>
