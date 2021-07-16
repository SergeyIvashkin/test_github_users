<template>
  <div id="app">
    <SearchUsers />
  </div>
</template>

<script>
import SearchUsers from "./components/SearchUsers.vue";

export default {
  name: "App",
  components: {
    SearchUsers,
  },
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
