<template>
  <form>
    <label for="name">Name</label>
    <input v-model="name" name="name" type="text" placeholder="Club Mate" />
    <label for="amount">Amount</label>
    <input v-model="amount" name="quantity" type="number" />
    <label for="caffeine">Caffine mg/100ml</label>
    <input v-model="caffeine" name="caffeine" type="number" />
    <button @click="saveConsumption($event)" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Consumption } from "@/model/beverage";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      amount: 0,
      caffeine: 0,
    };
  },
  computed: {
    consumedBeverages(): Array<Consumption> {
      return this.$store.state.beverageData;
    },
  },
  methods: {
    saveConsumption(event: any) {
      if (event) {
        event.preventDefault();
      }
      let cons: Consumption = {
        amount: this.amount,
        beverage: {
          name: this.name,
          caffeine: this.caffeine,
        },
        date: new Date(),
      };
      this.$store.dispatch("add", cons);
      this.$emit("newConsumption", cons);
      this.name = "";
      this.amount = 0;
      this.caffeine = 0;
    },
  },
});
</script>
