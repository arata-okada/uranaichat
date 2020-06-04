<template>
  <div class="home flex center">
    <div class="card flex">
      <div class="signup-title">
        <h1>新規登録</h1>
      </div>
      <div class="box-container">
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
          <!-- <div class="profile">
            <p>プロフィール画像</p>
            <input type="file" @change="fileSelected" />
            <button @click="fileUpload">アップロード</button>
           <p v-show="showUserImage">
              <img :src="user.file_path" />
            </p>
          </div>-->
          <div class="box">
            <label for="email">メールアドレス</label>
            <input
              v-model="email"
              type="email"
              placeholder="example@example.com"
              class="text"
              id="email"
            />
          </div>
          <div class="alert alert-danger" v-text="errors.email" v-if="errors.email"></div>
          <div class="box">
            <label for="password">パスワード</label>
            <input
              v-model="password"
              type="password"
              class="text"
              name="password"
              autocomplete="on"
            />
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
          <div class="alert alert-danger" v-text="errors.password" v-if="errors.password"></div>
          <button @click="signup" type="button" class="signup_button">新規登録</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      screen_name: "",
      name: "",
      email: "",
      password: "",
      sex: "",
      introduction: "",
      errors: {}
      // fileInfo: "",
      // user: "",
      // showUserImage: false
    };
  },
  methods: {
    signup() {
      this.errors = {};
      var self = this;
      axios
        .post("http://127.0.0.1:8000/register", {
          screen_name: this.screen_name,
          name: this.name,
          email: this.email,
          password: this.password,
          // sex: this.sex,
          introduction: this.introduction
        })
        .then(response => {
          console.log(response);
          alert("新規登録完了");
          this.$router.replace("/");
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
    // fileSelected(event) {
    //   this.fileInfo = event.target.files[0];
    // },
    // fileUpload() {
    //   const formData = new FormData();

    //   formData.append("file", this.fileInfo);

    //   axios
    //     .post("http://127.0.0.1:8000/api/fileupload", formData)
    //     .then(response => {
    //       console.log(response);
    //       // this.user = response.data;
    //       // if (response.data.file_path) this.showUserImage = true;
    //     });
    // }
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
  width: 100%;
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
.signup-title h1 {
  margin: 20px;
  font-size: 35px;
}
.box {
  width: 100%;
  margin-top: 20px;
  text-align: left;
}
label {
  display: inline-block;
  margin: 0 0 10px 20px;
  font-size: 22px;
}
.text {
  display: block;
  width: 85%;
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
  width: 85%;
  height: 150px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ff6c94;
  outline: none;
  font-size: 20px;
  resize: none;
}
.mail button:focus {
  outline: 0;
}
h2 {
  margin: 40px 0 15px;
  font-size: 23px;
}
.profile {
  margin-top: 20px;
  text-align: left;
}
.profile p {
  font-size: 16px;
  padding-bottom: 10px;
}
.signup_button {
  width: 100%;
  height: 60px;
  margin-top: 40px;
  border-radius: 30px;
  border: 1px solid #ff6c94;
  background-color: #ff6c94;
  color: #fff;
  font-size: 25px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;
}
.signup_button:hover {
  border: 1px solid #ff6c94;
  background-color: #fff;
  color: #000;
  transition: 0.2s;
}
.radioArea {
  height: 40px;
}
.radioArea input[type="radio"] {
  width: 13pt; /* 大きさ：横 */
  height: 13pt; /* 大きさ：縦 */
  vertical-align: top; /* 並び位置   */
  display: none; /* チェックボックス非表示 */
}
/* --- チェックボックス直後のlabel --- */
.radioArea input[type="radio"] + label {
  padding: 0 4px; /* labelの余白 */
  font-size: 20px; /* labelの文字サイズ */
  border: 3px solid rgba(0, 0, 0, 0); /* labelの枠線 */
  border-radius: 5px; /* labelの角丸 */
  cursor: pointer; /* カーソル設定 */
  transition: 0.2s; /* なめらか変化 */
}
/* --- 選択されたチェックボックス直後のlabel --- */
.radioArea input[type="radio"]:checked + label {
  border: 3px solid #ff6c94; /* labelの枠線 */
  padding: 5px;
  margin: 0 50px;
}
/* --- 選択されていないチェックボックス直後のlabelにマウスが乗った --- */
.radioArea input[type="radio"]:not(:checked) + label:hover {
  background: #ffd9e3; /* lebelの背景 */
}
</style>
