<template>
  <div></div>
</template>

<script lang="ts">
import { Consumption } from "@/model/beverage";
import { defineComponent } from "vue";

import { DataPoint2D, Plot } from "../lib/charts/chart";

export default defineComponent({
  computed: {
    totalCaffeine(): number {
      return this.$store.getters.totalCaffeine;
    },
    totalFluids(): number {
      return this.$store.getters.totalFluids;
    },
    consumedBeverages(): Array<Consumption> {
      return this.$store.state.beverageData;
    },
  },
  mounted() {
    let data = new Array<DataPoint2D>();
    let sum = 0;
    for (let e of this.consumedBeverages) {
      sum += e.beverage.caffeine;
      data.push({
        label: e.beverage.name,
        xValue: e.date,
        yValue: sum,
      });
    }
    Plot(this.$el, data);
    /*
    dummy data for debugging
    Array<DataPoint2D>(
        {
          label: "abc",
          xValue: new Date("1995-12-17T03:24:00"),
          yValue: 1,
        },
        {
          label: "abc",
          xValue: new Date("1995-12-17T04:24:00"),
          yValue: 2,
        },
        {
          label: "abc",
          xValue: new Date("1995-12-17T05:24:00"),
          yValue: 3,
        }
      )
    */
  },
});
</script>
