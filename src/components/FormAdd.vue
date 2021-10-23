<template>
  <form>
    <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input
        v-model="name"
        class="form-control"
        name="name"
        type="text"
        placeholder="Club Mate"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="amount">Amount</label>
      <input
        v-model="amount"
        class="form-control"
        name="quantity"
        type="number"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="caffeine">Caffine mg/100ml</label>
      <input
        v-model="caffeine"
        class="form-control"
        name="caffeine"
        type="number"
      />
    </div>
    <div class="col-auto">
      <button
        @click="saveConsumption($event)"
        class="btn btn-primary mb-3"
        type="submit"
      >
        Submit
      </button>
    </div>
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
        id: "",
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
