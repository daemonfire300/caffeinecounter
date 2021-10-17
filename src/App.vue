<template>
  <main>
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style="width: 280px"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Caffeine Counter</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home" />
            </svg>
            Overview
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/add">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2" />
            </svg>
            Add
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="container">
        <div class="row"><total-counter></total-counter></div>
      </div>
    </div>
    <router-view></router-view>
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
