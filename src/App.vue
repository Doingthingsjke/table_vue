<template>
  <div id="app">
    <v-table :employees_data="EMPLOYEES" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import vTable from "./components/v-table";

export default {
  name: "App",
  data: function() {
    return {};
  },
  components: {
    vTable
  },
  created: function() {
    const ws = new WebSocket("ws://localhost:3000/");
    console.log("Starting connection to WS server");

    ws.onopen = function(event) {
      console.log(event);
      console.log("Successfully connected");
    };

    ws.onmessage = function(event) {
      console.log(event);
    };
  },
  computed: mapGetters(["EMPLOYEES"]),
  methods: mapActions(["GET_EMPLOYEES"]),
  mounted() {
    this.GET_EMPLOYEES();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
