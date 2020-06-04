<template>
  <!-- TweetTimeline -->
  <div class="tweetTimeline">
    <div class="tweet-message">
      <textarea v-model="text" class="message" cols="30" rows="10"></textarea>
      <div @click="send" class="tweet_box">
        <button class="tweet-button">{{message}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      message: "ツイートする"
    };
  },
  methods: {
    send() {
      if (this.text === "") {
        alert("内容を入力してください");
      } else {
        axios
          .post("http://127.0.0.1:8000/tweet", {
            user_id: this.$store.state.user.id,
            text: this.text
          })
          .then(response => {
            console.log(response);
            alert(
              "ツイート完了！（自分のツイートを見たいときはリロードしてください。）"
            );
            this.text = "";
          });
      }
    }
  }
};
</script>

<style scoped>
/* tweetTimeline */
.tweet-message {
  width: auto;
  height: auto;
  margin: -1px auto 15px;
  border: 2px solid #ff6c94;
  border-radius: 10px;
}
.message {
  width: 99%;
  height: 100px;
  font-size: 16px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  resize: none;
}
.tweet_box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.tweet-button {
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #ff6c94;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px;
  margin: 0 6px 6px;
  cursor: pointer;
  transition: 0.2s;
}
.tweet-button:hover {
  color: rgb(82, 82, 82);
  background-color: #ffcdf4;
  transition: 0.2s;
}
</style>
