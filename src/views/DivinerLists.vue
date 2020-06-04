<template>
  <div class="container">
    <Header></Header>
    <main class="flex">
      <Sidebar></Sidebar>
      <div class="users">
        <h2 class="title">占い師・ユーザーを探す</h2>
        <div class="md-form">
          <input class="form-control" type="text" placeholder="Search" />
        </div>
        <div class="users-box flex" v-for="user in users" :key="user.id">
          <div class="left">
            <img
              class="tweet-thumb-img_2"
              src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg"
              alt
            />
            <font-awesome-icon icon="phone" class="icon phone" />
            <font-awesome-icon icon="envelope" class="icon envelope" />
          </div>
          <div class="right">
            <h3>{{ user.name }}</h3>
            <p>{{ user.introduction }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    let vm = this;
    axios.get("http://127.0.0.1:8000/users").then((response) => {
      vm.users = response.data;
    });
  },
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped>
.users {
  width: 77%;
}
.title {
  font-size: 40px;
  margin: 20px 0;
}
.users-box {
  width: 100%;
  margin: 20px 0;
  box-shadow: 0px 4px 14px #f8e7fb;
  padding-bottom: 10px;
}
.left {
  width: 10%;
}
.tweet-thumb {
  box-sizing: border-box;
}
.tweet-thumb-img_2 {
  width: 60px;
  height: 60px;
  margin: 10px auto 0;
  border-radius: 100px;
}
.phone {
  width: 50%;
  margin: 10px 0;
  color: #ff9100;
}
.envelope {
  width: 50%;
  margin: 10px 0;
  color: #85e967;
}
.right {
  width: 90%;
  box-sizing: border-box;
  padding: 0 10px;
}
.right h3 {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
.right p {
  font-size: 16px;
  line-height: 1.2;
}
input.form-control {
  width: 40%;
  height: 30px;
  border: none;
  border-bottom: solid 2px #ff6c94;
  outline: none;
  font-size: 20px;
  margin: 20px 0;
  padding: 3px 10px;
}
</style>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>
