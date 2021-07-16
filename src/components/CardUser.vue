<template>
  <div class="main-container">
    <div class="profile">
      <img :src="data.avatar_url" />
      <div class="name">
        <h3>Login:</h3>
        {{ data.login }}
      </div>
      <div class="bio" id="bio">{{ data.bio }}</div>
      <div class="location">
        <h3>Country:</h3>
        {{ data.location }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardUser",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.location,
.name {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
