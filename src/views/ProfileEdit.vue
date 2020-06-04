<template>
  <div class="container">
    <div class="home">
      <Header></Header>
      <main class="flex">
        <Sidebar></Sidebar>
        <div class="box-container">
          <div class="profile-title">
            <h1>プロフィール編集</h1>
          </div>

          <form class="form">
            <div class="box">
              <label for="user_name">ユーザー名</label>
              <input
                v-model="screen_name"
                type="text"
                placeholder="hanako"
                class="text"
                id="user_name"
              />
            </div>
            <div class="box">
              <label for="nickname">ニックネーム</label>
              <input v-model="name" type="text" placeholder="はなこ" class="text" id="nickname" />
            </div>
            <div class="box">
              <label for="introduction">自己紹介</label>
              <textarea
                v-model="introduction"
                placeholder="ここに自己紹介を書きましょう！"
                name="introduction"
                id="introduction"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button @click="edit" type="button" class="edit_button">更新</button>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default {
  data() {
    return {
      active: true,
      screen_name: this.$store.state.user.screen_name,
      name: this.$store.state.user.name,
      introduction: this.$store.state.user.introduction
    };
  },
  methods: {
    edit() {
      if (!this.active) {
        const vm = this;
        axios
          .put("http://127.0.0.1:8000/user", {
            email: this.$store.state.user.email,
            screen_name: this.screen_name,
            name: this.name,
            introduction: this.introduction
          })
          .then(response => {
            this.$store.dispatch("changeIntroduction", {
              introduction: this.introduction
            });
            this.$store.dispatch("changeName", {
              name: this.name
            });
            this.$store.dispatch("changeScreenName", {
              screen_name: this.screen_name
            });
            vm.$router.push("/home");
            console.log(response);
          });
      }
      this.active = !this.active;
    }
  },
  components: {
    Header,
    Sidebar
  }
};
</script>

<style scoped>
.box-container {
  width: 77%;
}
.box {
  width: 100%;
  margin-top: 20px;
  text-align: left;
}
label {
  display: inline-block;
  margin: 0 0 10px 120px;
  font-size: 22px;
}
.text {
  display: block;
  width: 80%;
  height: 60px;
  margin: 0 auto;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  outline: none;
  font-size: 20px;
}
#introduction {
  display: block;
  width: 80%;
  height: 150px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ff6c94;
  outline: none;
  font-size: 20px;
  resize: none;
}
.edit_button {
  display: block;
  width: 90%;
  height: 60px;
  margin: 40px auto 0;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  background-color: #ff6c94;
  color: #fff;
  font-size: 25px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;
}
.edit_button:hover {
  border: 1px solid #ff6c94;
  background-color: #fff;
  color: #000;
  transition: 0.2s;
}
.profile-title {
  text-align: center;
}
.profile-title h1 {
  margin: 30px 0 60px;
  font-size: 35px;
}
</style>
