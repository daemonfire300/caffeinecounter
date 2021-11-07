<template>
  <main>
    <router-view></router-view>

    <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="nav-link" to="/">Overview</router-link>
        <router-link
          class="nav-link"
          :to="{ name: 'day', params: { day: today.getTime() } }"
          >Today</router-link
        >
        <router-link class="nav-link" to="/add">Add</router-link>
      </div>
    </nav>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Overview from "./views/Overview.vue";
import TotalCounter from "./components/TotalCounter.vue";

@Options({
  components: {
    Overview,
    TotalCounter,
  },
  data() {
    return {
      today: new Date(),
    };
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
