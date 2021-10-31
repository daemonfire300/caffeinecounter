<template>
  <div
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
      <div class="row">
        <h6 class="mb-0">{{ beverage.name }}</h6>
        <p class="mb-0 opacity-75">
          {{ amount / 100 }}l {{ beverage.caffeine }}mg/100ml
          {{ ((amount / 100) * beverage.caffeine).toFixed(2) }}mg
        </p>
      </div>
      <div class="row">
        <div class="d-flex gap-2 w-100 justify-content-between">
          <small class="opacity-50 text-nowrap">{{
            date.toLocaleString()
          }}</small>
          <span @click="removeItem(id)">X</span>
        </div>
      </div>
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
