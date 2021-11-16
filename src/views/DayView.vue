<template>
  <div class="container">
    <div class="container">
      <div class="row"><total-counter></total-counter></div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <h1>{{ dayDate.toLocaleDateString() }}</h1>
      </div>
      <div class="row">
        <div class="col">
          <list></list>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "../components/List.vue";
import TotalCounter from "../components/TotalCounter.vue";

@Options({
  components: { List, TotalCounter },
  props: {
    day: String,
  },
  data() {
    return {
      dayDate: new Date(),
    };
  },
  mounted() {
    const selectedDate: Date = new Date(parseInt(this.day)) ?? new Date();
    this.dayDate = selectedDate;
    this.$store.dispatch("loadDaily", selectedDate);
  },
})
export default class DayView extends Vue {}
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
