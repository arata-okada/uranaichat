<template>
  <div class="home flex center">
    <div class="card flex">
      <div class="login-title">
        <h1>ログイン</h1>
      </div>
      <div class="mail-adress">
        <h2>メールアドレスでログイン</h2>
        <div class="form">
          <input v-model="email" type="email" placeholder="メールアドレス" class="text" />
          <div class="alert alert-danger" v-text="errors.email" v-if="errors.email"></div>
          <input v-model="password" type="password" placeholder="パスワード" class="text" />
          <div class="alert alert-danger" v-text="errors.password" v-if="errors.password"></div>
          <div class="remember">
            <input type="checkbox" v-model="remember" /> 次回から省略
          </div>
          <button @click="login" type="button">ログイン</button>
          <p @click="$router.push('/signup')" class="to-signup">新規登録はこちら</p>
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
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      remember: "",
      errors: {}
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
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
.remember {
  text-align: left;
  margin-top: 20px;
}
.remember input[type="checkbox"] {
  width: 20px;
  height: 20px;
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
  outline: none;
  transition: 0.2s;
  cursor: pointer;
}
.form button:hover {
  border: 1px solid #ff6c94;
  background-color: #fff;
  color: #000;
  transition: 0.2s;
}
.mail button:focus {
  outline: 0;
}
h2 {
  margin: 40px 0 15px;
  font-size: 23px;
}
.to-signup {
  display: block;
  margin: 30px 0 0;
  padding: 10px;
  border-radius: 30px;
  font-size: 23px;
  cursor: pointer;
}
.to-signup:hover {
  text-decoration: underline;
}
</style>
