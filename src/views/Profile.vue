<template>
  <div class="container">
    <Header></Header>
    <main class="flex">
      <Sidebar></Sidebar>
      <div class="profile">
        <div class="home-profile">
          <div class="profile-top flex">
            <font-awesome-icon icon="user-circle" class="user-circle" />
            <p>プロフィール</p>
          </div>
          <div class="profile-detail">
            <div class="top-profile flex">
              <img
                class="tweet-thumb-img_2"
                src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg"
                alt
              />
              <h3 class="profile-name">{{name}}</h3>
            </div>
            <div class="bottom-profile">
              <p class="screen_name">@{{screen_name}}</p>
              <p class="profile-text">{{introduction}}</p>
              <div @click="$router.push('/profileedit')" class="profile-edit">
                <font-awesome-icon icon="edit" class="edit" />編集
              </div>

              <div class="tweet-container">
                <div class="tweet-box">
                  <p>ツイート</p>
                </div>
              </div>
              <div class="tweet-contents flex">
                <div class="tweet-thumb">
                  <img
                    class="tweet-thumb-img_1"
                    src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg"
                    alt
                  />
                </div>
                <div class="tweet-content">
                  <h3 class="tweet-name">ペンたそ</h3>
                  <p class="tweet-text">あｇづあｄばｌｓｄ</p>
                  <p class="tweet-time">2020/01/01</p>
                  <div class="tweet-bottom flex">
                    <div class="tweet-bottom-content flex">
                      <font-awesome-icon icon="comment" class="icon" />
                      <p class="reply-number">0</p>
                    </div>
                    <div class="tweet-bottom-content flex">
                      <font-awesome-icon icon="heart" class="icon LikesIcon-fa-heart" />
                      <p class="heart-number">3</p>
                    </div>
                    <p @click="deleteTweet(tweet.id)">ツイートを消す</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Header,
    Sidebar
  },
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
.profile {
  width: 77%;
}
.home-profile {
  width: 60%;
  margin: 0 auto;
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
  transition: 0.3s;
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
  margin: 5px 0;
  text-align: right;
  cursor: pointer;
}
.edit {
  font-size: 20px;
  color: rgb(245, 101, 6);
}

.tweet-container {
  width: 100%;
}
.tweet-box {
  margin: 15px 0;
  padding: 15px 0;
  border-top: 1px solid rgb(209, 209, 209);
  border-bottom: 1px solid rgb(209, 209, 209);
  text-align: center;
}
.tweet-box p {
  font-weight: bold;
}
.tweet-thumb {
  width: 15%;
  box-sizing: border-box;
}
.tweet-thumb-img_1 {
  width: 55px;
  height: 55px;
  margin: 10px 0 0 auto;
  border-radius: 100px;
}

.tweet-contents {
  position: relative;
  border-bottom: 1px solid #ada3cb;
}
.tweet-content {
  width: 85%;
  padding: 0 10px;
  box-sizing: border-box;
}
.tweet-name {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
}
.tweet-text {
  font-size: 18px;
  line-height: 1.2;
}
.tweet-time {
  font-size: 13px;
  color: #757575;
  position: absolute;
  top: 10px;
  right: 30px;
}
.tweet-bottom-content {
  margin: 10px 80px 10px 0;
}
.fa-comment {
  color: #ae93ff;
  font-size: 16px;
}
.reply-number {
  color: #666464;
  margin: auto 10px;
  font-size: 15px;
}
.LikesIcon-fa-heart {
  color: #ff5683;
  font-size: 16px;
}
.fa-heart:active {
  color: #ff5683;
  font-size: 16px;
}
.heart-number {
  color: #666464;
  margin: auto 10px;
  font-size: 15px;
}
</style>


