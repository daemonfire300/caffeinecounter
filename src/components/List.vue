<template>
  <div class="list-group overflow-visible">
    <list-item
      v-for="(val, key) in consumedBeverages"
      :key="val.id"
      :id="val.id"
      :href="'#/' + val.id"
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
