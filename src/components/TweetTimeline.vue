<template>
  <!-- TweetTimeline -->
  <div class="tweetTimeline">
    <div class="tweet-message">
      <form action="" method="post" name="">
        <div class="share-message" contenteditable="true">
          <button type="submit" class="share-button">シェアする</button>
        </div>
      </form>
    </div>

    <div class="tweet-box">
      <div class="tweet-contents flex">
        <div class="tweet-thumb">
          <img
            class="tweet-thumb-img_1"
            src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="tweet-content">
          <h3 class="tweet-name">ぺんたそ＠恋で悩む30代OL</h3>
          <p class="tweet-text">
            現在彼氏がいるのですがもう付き合ってから１年になります。
            前に、3年付き合ってた元カレがいたんですが、今になってもその人のことが忘れられません！
            もう忘れようと思っているのですが、忘れることができません。
            今の彼との今後と、元カレとの復縁について知りたい！
          </p>
          <p class="tweet-time">3時間前</p>
          <div class="tweet-bottom flex">
            <div class="tweet-bottom-content flex">
              <i class="far fa-comment"></i>
              <p class="reply-number">4</p>
            </div>
            <div class="tweet-bottom-content flex">
              <i class="far fa-heart"></i>
              <p class="heart-number">23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* tweetTimeline */
.tweetTimeline {
  width: 45%;
}
.tweet-message {
  width: auto;
  margin: -1px auto 15px;
  border: 2px solid #ff6c94;
  border-radius: 10px;
}
.share-message {
  width: 100%;
  height: 100px;
  border: none;
  position: relative;
}
.share-button {
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #ff6c94;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  position: absolute;
  bottom: 2px;
  right: 2px;
}

/* tweet-box */
.tweet-box {
  width: 100%;
  height: auto;
  border: 1px solid #e7dfff;
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
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
}
.tweet-text {
  font-size: 15px;
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
  color: rgb(18, 201, 49);
  font-size: 16px;
}
.reply-number {
  color: #666464;
  margin: auto 10px;
  font-size: 15px;
}
.fa-heart {
  color: #ff6c94;
  font-size: 16px;
}
.heart-number {
  color: #666464;
  margin: auto 10px;
  font-size: 15px;
}
</style>
