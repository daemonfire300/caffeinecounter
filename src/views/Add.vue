<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <h1>Add new entry</h1>
      </div>
      <div class="row">
        <div class="col">
          <form-add></form-add>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormAdd from "../components/FormAdd.vue";

@Options({
  components: { FormAdd },
})
export default class Add extends Vue {
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
