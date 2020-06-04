<template>
  <div class="container">
    <div class="home">
      <Header></Header>
      <main class="flex">
        <Sidebar></Sidebar>
        <TweetTimeLine :id="id" />
        <div class="comment">
          <div class="comment-title">
            <p>コメント</p>
          </div>
          <div class="message" v-for="(comment,index) in data" :key="index">
            <div class="flex">
              <p class="name">{{comment.comments_user[0].name}}</p>
            </div>
            <div>
              <p class="text">{{comment.comment.text}}</p>
            </div>
          </div>
          <input v-model="text" type="text" />
          <div @click="send">
            <button>コメント</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TweetTimeLine from "../components/TweetTimeLine";
import axios from "axios";
export default {
  props: ["id"],
  components: {
    Header,
    Sidebar,
    TweetTimeLine
  },
  dada() {
    return {
      text: "",
      data: ""
    };
  },
  methods: {
    send() {
      axios
        .post("http://127.0.0.1:8000/comment", {
          tweet_id: this.id,
          user_id: this.$store.state.user.id,
          text: this.text
        })
        .then(response => {
          console.log(response);
          this.text = "";
        });
    },
    comment() {
      axios.get("http://127.0.0.1:8000/tweet/" + this.id).then(response => {
        this.data = response.data.comments;
      });
    }
  },
  created() {
    this.comment();
  }
};
</script>

<style scoped>
</style>
