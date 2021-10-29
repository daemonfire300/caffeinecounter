<template>
  <div class="list-group">
    <list-item
      v-for="(val, key) in consumedBeverages"
      :key="val.date"
      :href="'#/' + key"
      :class="{ selected: visibility === key }"
      @click="visibility = key"
      :beverage="val.beverage"
      :amount="val.amount"
      :date="val.date"
    >
    </list-item>
  </div>
</template>

<script lang="ts">
import { Consumption } from "@/model/beverage";
import ListItem from "@/components/ListItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ListItem,
  },
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
