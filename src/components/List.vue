<template>
  <ul class="filters">
    <li v-for="(val, key) in consumedBeverages" :key="val.date">
      <a
        :href="'#/' + key"
        :class="{ selected: visibility === key }"
        @click="visibility = key"
        >{{ val.date.toLocaleString() }}</a
      >
      {{ val.beverage.name }} {{ (val.amount / 100) * val.beverage.caffeine }}mg
    </li>
  </ul>
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
