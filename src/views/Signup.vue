<template>
  <div class="home flex center">
    <div class="card flex">
      <div class="signup-title">
        <h1>新規登録</h1>
      </div>
      <div class="mail-adress">
        <h2>メールアドレスで登録</h2>
        <div class="form">
          <input v-model="name" type="text" placeholder="ニックネーム" class="text" />
          <input v-model="email" type="email" placeholder="メールアドレス" class="text" />
          <div class="alert alert-danger" v-text="errors.email" v-if="errors.email"></div>
          <input
            v-model="password"
            type="password"
            v-show-password-input
            placeholder="パスワード"
            class="text"
          />
          <div class="alert alert-danger" v-text="errors.password" v-if="errors.password"></div>
          <button @click="signup" type="button">新規登録</button>
        </div>
      </div>
      <div class="login-other">
        <div class="signup-title">
          <h2>SNSで登録</h2>
        </div>
        <div class="icon-list">
          <font-awesome-icon icon="line" class="icon" />
          <font-awesome-icon icon="twitter" class="icon" />
          <font-awesome-icon icon="facebook" class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  },
  methods: {
    signup() {
      this.errors = {};
      var self = this;
      axios
        .post("https://uranaichatapi.herokuapp.com/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.replace("/login");
        })
        .catch(error => {
          var responseErrors = error.response.data.errors;
          var errors = {};

          for (var key in responseErrors) {
            errors[key] = responseErrors[key][0];
          }
          self.errors = errors;
        });
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #f8e7fb;
  align-items: center;
}
.card {
  min-width: 600px;
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
.signup-title h1 {
  font-size: 35px;
}
.text {
  width: 95%;
  height: 45px;
  margin-top: 20px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  outline: none;
}
.form button {
  width: 100%;
  height: 45px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  background-color: #ff6c94;
  color: #fff;
  font-size: 20px;
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
