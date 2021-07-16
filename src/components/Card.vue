<template>
  <div class="main-container" @click="showUserData">
    <div class="profile">
      <div class="img-name">
        <span class="name" id="name"> {{ dataUser.name }} </span><br />
        <a :href="dataUser.html_url" class="username" id="username"
          >link to the repository</a
        >
      </div>
      <div class="bio" id="bio">{{ dataUser.bio }}</div>
      <div class="other">
        <a id="flwrs-link"
          ><span id="followers">forks</span>{{ dataUser.forks }}</a
        >
        <a id="flwin-link"
          ><span id="following">star</span>{{ dataUser.stargazers_count }}</a
        >
      </div>
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
.main-container {
  margin: 15px;
}
.search-container {
  width: 300px;
  margin: 0 auto;
  margin-top: 90px;
  background: #fff;
  display: flex;
  padding-left: 7px;
  border-radius: 15px;
  overflow: hidden;
  height: 40px;
  gap: 1%;
}
.input {
  border: none;
  outline: none;
  width: 90%;
}
.input:focus {
  border-bottom: 1px solid rgba(0, 0, 0, 0.219);
}
.search {
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  height: 100%;
  background-color: rgb(59, 128, 255);
}
.profile {
  width: 300px;
  background-color: cadetblue;
  margin-top: 40px;
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
.other a {
  width: 50%;
  border: 1px solid rgba(128, 128, 128, 0.438);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
}
#followers,
#following {
  font-size: 20px;
  font-weight: bold;
}
</style>
