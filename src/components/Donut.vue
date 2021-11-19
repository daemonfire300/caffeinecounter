<template>
  <svg>
    <div class="bg-info">
      <span>Donut should be here soon</span>
    </div>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import { DonutChart } from "../lib/charts/donut";

import * as d3 from "d3";

export default defineComponent({
  computed: {
    totalCaffeine(): number {
      return this.$store.getters.totalCaffeine;
    },
    totalFluids(): number {
      return this.$store.getters.totalFluids;
    },
  },
  mounted() {
    const svg = d3
      .select(this.$el)
      .append("svg")
      .attr("width", 200)
      .attr("height", 200);
    svg.append("circle").attr("r", 20).attr("cx", 20).attr("cy", 20);
    // DonutChart(this.$el, [
    //   ["a", 12],
    //   ["b", 7],
    // ]);
  },
});
</script>
