<template>
  <div class="list-group-item" aria-current="true">
    <div class="w-100">
      <p class="">{{ beverage.name }}</p>
      <p class="opacity-75">
        {{ amount / 100 }}l {{ beverage.caffeine }}mg/100ml
        {{ ((amount / 100) * beverage.caffeine).toFixed(2) }}mg
      </p>
      <small class="">{{ date.toLocaleString() }}</small>
      <span @click="removeItem(id)">X</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    beverage: Object,
    amount: Number,
    date: Object,
    id: String,
  },
  methods: {
    removeItem(id: String) {
      console.log("removing item", id);
      this.$store.dispatch("remove", id);
      this.$emit("removeConsumption", id);
    },
  },
});
</script>
