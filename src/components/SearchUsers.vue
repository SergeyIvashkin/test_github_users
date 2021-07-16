<template>
  <div>
    <input type="text" v-model="search" @keyup="searchUsers" />
    <div class="main">
      <div class="cards">
        <Card
          v-for="item in arr"
          :key="item.id"
          :dataUser="item"
          @showUserData="showUserData"
        />
      </div>
      <div class="userData">
        <CardUserData :data="GET_USER_DATA" v-if="GET_USER_DATA" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Card from "./Card.vue";
import CardUserData from "./CardUserData.vue";

export default {
  name: "SearchUsers",
  components: {
    Card,
    CardUserData,
  },
  data() {
    return {
      arr: null,
      search: "",
    };
  },
  methods: {
    showUserData(login) {
      this.USER_DATA(login);
      console.log(login);
    },
    ...mapActions(["USERS", "USER_DATA"]),
    async searchUsers() {
      await this.USERS(this.search);
      this.arr = await this.GET_USERS;
    },
  },
  computed: {
    ...mapGetters(["GET_USERS", "GET_USER_DATA"]),
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em 20px;
  width: 55%;
}
.main {
  display: flex;
}
.userData {
  display: flex;
  flex-direction: column;
  max-width: 352px;
}
</style>
