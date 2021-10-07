<template>
  <div class="hello">
    <h1>Caffeine Counter</h1>
    <h3>- an amateurs vuejs project -</h3>
    <button @click="addStaticBeverage">add static</button>
    <list></list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "./List.vue";

@Options({
  components: { List },
  props: {
    msg: String,
  },
  methods: {
    addStaticBeverage(): void {
      this.$store.commit("add", {
        amount: 500,
        beverage: {
          name: "Club Mate",
          caffeine: 30,
        },
        date: new Date(),
      });
    },
  },
})
export default class Overview extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
