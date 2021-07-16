<template>
  <div>
    <div class="main">
      <div class="cards">
        <Card
          v-for="item in paginatedData"
          :key="item.id"
          :dataUser="item"
          @showUserData="showUserData"
        />
      </div>
      <div class="userData">
        <CardUser :data="GET_USER_DATA" v-if="GET_USER_DATA" />
      </div>
    </div>

    <div class="page">
      <button :disabled="pageNumber === 0" @click="prevPage">Previous</button>
      <p>{{ pageNumber }} of {{ pageCount }}</p>
      <button :disabled="pageNumber >= pageCount - 1" @click="nextPage">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Card from "./Card.vue";
import CardUser from "./CardUser.vue";

export default {
  components: {
    Card,
    CardUser,
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  props: {
    listData: {
      type: Array,
    },
    size: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  methods: {
    ...mapActions(["USER_DATA"]),
    showUserData(login) {
      this.USER_DATA(login);
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    ...mapGetters(["GET_USER_DATA"]),
    pageCount() {
      let length = this.listData.length;
      let size = this.size;
      return Math.ceil(length / size) - 1;
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    },
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
  margin: 11px 0 11px 0;
}
.userData {
  display: flex;
  flex-direction: column;
  max-width: 352px;
  margin: auto;
}
.page {
  display: flex;
  justify-content: center;
}
</style>