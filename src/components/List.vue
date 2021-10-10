<template>
  <table>
    <thead>
      <th>Date</th>
      <th>Name</th>
      <th>Amount (l)</th>
      <th>Caffeine (mg/100ml)</th>
      <th>Caffeine (total)</th>
    </thead>
    <tr v-for="(val, key) in consumedBeverages" :key="val.date">
      <td
        :href="'#/' + key"
        :class="{ selected: visibility === key }"
        @click="visibility = key"
      >
        {{ val.date.toLocaleString() }}
      </td>
      <td>{{ val.beverage.name }}</td>
      <td>{{ val.amount / 100 }}l</td>
      <td>{{ val.beverage.caffeine }}mg/100ml</td>
      <td>{{ (val.amount / 100) * val.beverage.caffeine }}mg</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Consumption } from "@/model/beverage";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    items: [],
  },
  computed: {
    consumedBeverages(): Array<Consumption> {
      return this.$store.state.beverageData;
    },
  },
});
</script>
