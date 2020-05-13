<template>
  <div class="home flex center">
    <div class="card flex">
      <div class="login-title">
        <h1>ログイン</h1>
      </div>
      <div class="mail-adress">
        <h2>メールアドレスでログイン</h2>
        <div class="form">
          <input
            v-model="email"
            type="email"
            placeholder="メールアドレス"
            class="text"
          />
          <div
            class="alert alert-danger"
            v-text="errors.email"
            v-if="errors.email"
          ></div>
          <input
            v-model="password"
            type="password"
            v-show-password-input
            placeholder="パスワード"
            class="text"
          />
          <div
            class="alert alert-danger"
            v-text="errors.password"
            v-if="errors.password"
          ></div>
          <button @click="login" type="button">ログイン</button>
        </div>
      </div>
      <!-- <div class="login-other">
        <div class="login-title">
          <h2>SNSでログイン</h2>
        </div>
        <div class="icon-list">
          <font-awesome-icon icon="fab fa-line" />
          <font-awesome-icon icon="twitter" />
          <font-awesome-icon icon="facebook" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      remember: "",
      errors: {},
    };
  },
  methods: {
    login() {
      this.errors = {};
      var self = this;
      axios
        .post("http://127.0.0.1:8000/login", {
          email: this.email,
          password: this.password,
          remember: this.remember,
        })
        .then((response) => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch((error) => {
          var responseErrors = error.response.data.errors;
          var errors = {};

          for (var key in responseErrors) {
            errors[key] = responseErrors[key][0];
          }
          self.errors = errors;
        });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url(../images/krystal-ng-PrQqQVPzmlw-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  align-items: center;
}
.card {
  max-width: 600px;
  height: auto;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.login-title h1 {
  margin: 20px;
  font-size: 35px;
}
.text {
  width: 95%;
  height: 60px;
  margin-top: 20px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  outline: none;
  font-size: 23px;
}
.check {
  text-align: left;
  margin-top: 20px;
}
.form button {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  background-color: #ff6c94;
  color: #fff;
  font-size: 25px;
  font-weight: bolder;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
}
.form button:hover {
  border: 1px solid #ff6c94;
  background-color: #fff;
  color: #000;
  transition: 0.3s;
}
.mail button:focus {
  outline: 0;
}
h2 {
  margin: 40px 0 15px;
  font-size: 23px;
}
</style>
