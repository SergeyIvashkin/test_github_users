<template>
  <div>
    <input type="text" v-model="search" @keyup="searchUsers" />

    <Pagination :listData="listDataUsers" v-if="listDataUsers" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Pagination from "../components/Pagination.vue";

export default {
  name: "SearchUsers",
  components: {
    Pagination,
  },
  data() {
    return {
      listDataUsers: null,
      search: "",
    };
  },
  methods: {
    ...mapActions(["USERS", "USER_DATA"]),
    async searchUsers() {
      await this.USERS(this.search);
      this.listDataUsers = await this.GET_USERS;
    },
  },
  computed: {
    ...mapGetters(["GET_USERS"]),
  },
};
</script>

<style scoped>
</style>
