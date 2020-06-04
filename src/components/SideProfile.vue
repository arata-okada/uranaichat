<template>
  <div class="home">
    <div class="home-profile">
      <div @click="$router.push('/profile')" class="profile-top flex">
        <font-awesome-icon icon="user-circle" class="user-circle" />
        <p>プロフィール</p>
      </div>
      <div @click="$router.push('/profile')" class="profile-detail">
        <div class="top-profile flex">
          <img class="tweet-thumb-img_2" src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg" alt />
          <h3 class="profile-name">{{name}}</h3>
        </div>
        <div class="bottom-profile">
          <p class="screen_name">@{{screen_name}}</p>
          <p class="profile-text">{{introduction}}</p>
        </div>
      </div>
    </div>
    <div @click="$router.push('/profileedit')" class="profile-edit">
      <div class="edit-box">
        <font-awesome-icon icon="edit" class="edit" />
        <p>プロフィールを編集する</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.user.name,
      screen_name: this.$store.state.user.screen_name,
      introduction: this.$store.state.user.introduction
    };
  }
};
</script>

<style scoped>
/* home-right */
.home {
  width: 32%;
}
.home-profile {
  width: 90%;
  margin-left: auto;
}
.fa-user-circle {
  font-size: 35px;
  color: #ff6c94;
  margin-right: 20px;
}
.profile-top {
  margin-bottom: 10px;
  cursor: pointer;
}
.profile-top p {
  font-size: 18px;
  font-weight: bolder;
  margin: auto 0;
}
.profile-detail {
  border: 2px solid #ff6c94;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
}
.profile-detail:hover {
  background: rgb(231, 231, 231);
  transition: 0.2s;
}
.tweet-thumb {
  width: 15%;
  box-sizing: border-box;
}

.tweet-thumb-img_2 {
  width: 60px;
  height: 60px;
  border-radius: 100px;
}
.top-profile {
  width: 95%;
  margin: 0 auto;
}
.bottom-profile {
  width: 90%;
  margin: 0 auto;
}
.profile-name {
  font-size: 20px;
  font-weight: bold;
  margin: auto 10px;
}
.screen_name {
  margin: 10px 0;
  font-size: 15px;
  color: grey;
}
.profile-text {
  font-size: 16px;
  line-height: 1.2;
}
.profile-edit {
  margin: 5px 0 0 auto;
  text-align: right;
  cursor: pointer;
}
.edit {
  margin-right: 5px;
  font-size: 20px;
  color: rgb(245, 101, 6);
}
.edit-box {
  display: inline-flex;
}
.edit-box p {
  margin: auto 0;
}
</style>
