<template>
  <div class="list-group">
    <a
      v-for="(val, key) in consumedBeverages"
      :key="val.date"
      :href="'#/' + key"
      :class="{ selected: visibility === key }"
      @click="visibility = key"
      class="list-group-item list-group-item-action d-flex gap-3 py-3"
      aria-current="true"
    >
      <img
        src="https://github.com/twbs.png"
        alt="twbs"
        width="32"
        height="32"
        class="rounded-circle flex-shrink-0"
      />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">{{ val.beverage.name }}</h6>
          <p class="mb-0 opacity-75">
            {{ val.amount / 100 }}l {{ val.beverage.caffeine }}mg/100ml
            {{ (val.amount / 100) * val.beverage.caffeine }}mg
          </p>
        </div>
        <small class="opacity-50 text-nowrap">{{
          val.date.toLocaleString()
        }}</small>
      </div>
    </a>
  </div>
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
