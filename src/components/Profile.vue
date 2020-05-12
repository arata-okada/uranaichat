<template>
  <div class="home">
    <div class="home-profile">
      <div class="profile-top flex">
        <i class="far fa-user-circle"></i>
        <p>プロフィール</p>
      </div>
      <div class="profile-detail">
        <div class="top-profile">
          <img
            class="tweet-thumb-img_2"
            src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="bottom-profile">
          <h3 class="profile-name">ぺんたそ＠恋で悩む30代OL</h3>
          <p class="profile-text">
            30代女性で都内で事務系の仕事をしています！
            最近では元カレのことが気になって気になって仕方がない今日この頃
            どなたか、これからの私と元カレとのこれからの運命を占ってほしいです！
            普段は昼静かに暮らしていますが、夜になると超活発になる夜行性です！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* home-right */
.home {
  width: 32%;
}
.home-profile {
  width: 90%;
  margin: 10px 0 0 auto;
}
.fa-user-circle {
  font-size: 40px;
  color: #ff6c94;
  margin-right: 20px;
}
.profile-top {
  margin: 10px 0;
}
.profile-top p {
  font-size: 20px;
  margin: auto 0;
}
.profile-detail {
  border: 2px solid #ff6c94;
  border-radius: 20px;
  padding: 10px 0 15px;
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
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
}
.profile-text {
  font-size: 15px;
  line-height: 1.2;
}
</style>
