<template>
  <div class="main-container">
    <div class="profile">
      <img :src="data.avatar_url" />
      <div class="img-name">
        {{ data.login }}
      </div>
      <div class="bio" id="bio">{{ data.bio }}</div>
      <div class="other"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardUserData",
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
.main-container {
  position: fixed;
  top: 200px;
  right: 42px;
}
img {
  width: 100%;
}
</style>
