<template>
  <div class="container">
    <div class="container">
      <div class="row"><total-counter></total-counter></div>
    </div>
    <div class="container">
      <div class="row">
        <h1>Caffeine Counter</h1>
        <h2>- an amateurs vuejs project -</h2>
      </div>
      <div class="row">
        <div class="row">
          <div class="col">
            <span @click="toggleAddForm" v-if="!showAddForm" class="link"
              >[+] Track new beverage</span
            >
            <span @click="toggleAddForm" v-if="showAddForm" class="link"
              >[-] Track new beverage</span
            >
          </div>
          <div class="col">
            <form-add v-if="showAddForm"></form-add>
          </div>
        </div>
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
import FormAdd from "./FormAdd.vue";
import List from "./List.vue";
import TotalCounter from "./TotalCounter.vue";

@Options({
  components: { List, FormAdd, TotalCounter },
  props: {
    msg: String,
  },
  data: () => {
    return {
      showAddForm: false,
    };
  },
  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
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
