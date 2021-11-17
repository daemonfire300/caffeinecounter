<template>
  <div class="container">
    <div class="container fixed-top">
      <div class="row"><total-counter></total-counter></div>
    </div>
    <div class="container content">
      <div class="row">
        <p>Overview</p>
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
})
export default class Overview extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}

.content {
  margin-top: 1.8em;
}
</style>
