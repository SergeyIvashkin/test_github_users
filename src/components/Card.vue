<template>
  <div class="profile" @click="showUserData">
    <div class="img-name">
      <span class="name" id="name"> {{ dataUser.name }} </span><br />
      <a :href="dataUser.html_url" class="username" id="username"
        >link to the repository</a
      >
    </div>
    <div class="bio" id="bio">{{ dataUser.bio }}</div>
    <div class="other">
      <p><span class="followers">forks</span>{{ dataUser.forks }}</p>
      <p><span class="following">star</span>{{ dataUser.stargazers_count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dataUser: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    showUserData() {
      this.$emit("showUserData", this.dataUser.owner.login);
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 300px;
  background-color: cadetblue;
  border-radius: 10px;
}
.img-name {
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.384);
}

.bio {
  padding: 30px 10px;
  text-align: center;
}
.username {
  color: rgb(53, 52, 52);
  font-size: 15px;
  text-decoration: none;
}
.other {
  display: flex;
  height: 90px;
  border-top: 1px solid grey;
}
.other p {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
}
.followers,
.following {
  font-size: 20px;
  font-weight: bold;
}
</style>
