<template>
  <div class="tweet-box">
    <div v-for="(value, key, index) in tweets" :key="index">
      <div class="tweet-contents flex">
        <div class="tweet-thumb">
          <img class="tweet-thumb-img_1" src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg" alt />
        </div>
        <div class="tweet-content">
          <h3 class="tweet-name">{{ value.name }}</h3>
          <p
            class="tweet-text"
            v-if="profile"
            @click="
              $router.push({
                path: '/detail/' + value.item.id,
                params: { id: value.item.id },
              })
            "
          >{{value.item.text}}</p>
          <!-- <p class="tweet-time">{{ tweet.created_at }}</p> -->
          <div class="tweet-bottom flex">
            <div class="tweet-bottom-content flex">
              <font-awesome-icon icon="comment" class="icon" />
              <p class="reply-number">0</p>
            </div>
            <div class="tweet-bottom-content flex">
              <font-awesome-icon @click="fav(key)" icon="heart" class="icon LikesIcon-fa-heart" />
              <p class="heart-number">{{value.favolite.length}}</p>
            </div>
            <p @click="del(key)" v-if="path&&profile">ツイートを消す</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      tweets: [],
      path: true,
      profile: true
    };
  },
  methods: {
    fav(index) {
      let result = this.tweets[index].favolite.some(value => {
        return value.user_id == this.$store.state.user.id;
      });
      if (result) {
        this.tweets[index].favolite.forEach(element => {
          if (element.user_id == this.$store.state.user.id) {
            axios
              .delete("http://127.0.0.1:8000/favorite", {
                data: {
                  tweet_id: this.tweets[index].item.id,
                  user_id: this.$store.state.user.id
                }
              })
              .then(response => {
                console.log(response);
              });
          }
        });
      } else {
        axios
          .post("http://127.0.0.1:8000/favorite", {
            tweet_id: this.tweets[index].item.id,
            user_id: this.$store.state.user.id
          })
          .then(response => {
            console.log(response);
          });
      }
    },
    del(index) {
      axios
        .delete("http://127.0.0.1:8000/tweet/" + this.tweets[index].item.id)
        .then(response => {
          console.log(response);
        });
    },
    async getTweets() {
      let data = [];
      let tweets = await axios.get("http://127.0.0.1:8000/tweet");
      for (let i = 0; i < tweets.data.length; i++) {
        console.log(tweets);
        await axios
          .get("http://127.0.0.1:8000/tweet/" + tweets.data[i].id)
          .then(response => {
            if (this.$route.name == "profile") {
              if (response.data.item.user_id == this.$store.state.user.id) {
                data.push(response.data);
              } else if (this.$route.name == "detail") {
                if (response.data.item.id == this.id) {
                  data.push(response.data);
                } else {
                  data.push(response.data);
                }
              }
            }
          });
      }
      this.tweets = data;
    }
  },
  created() {
    if (this.$route.name === "home") {
      this.path = false;
    }
    if (this.$route.name === "detail") {
      this.profile = false;
    }
    this.getTweets();
  }
};
</script>

<style scoped>
/* tweet-box */
.tweet-box {
  width: 100%;
  height: auto;
  border: 1px solid rgb(209, 209, 209);
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
  border-bottom: 1px solid rgb(209, 209, 209);
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
