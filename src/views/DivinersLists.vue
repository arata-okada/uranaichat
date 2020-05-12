<template>
  <div class="container">
    <Header></Header>
    <main class="flex">
      <Sidebar></Sidebar>
      <div class="diviners">
        <h2 class="title">占い師を探す</h2>
        <div class="choice-bottom flex">
          <div class="left-choice">総合</div>
          <div class="right-choice">人気</div>
        </div>
        <div class="diviners-box flex" v-for="diviner in deivinerlists" :key="diviner.id">
          <div class="left">
            <img class="tweet-thumb-img_2" src="../images/omid-armin-6G2G6_rq-B0-unsplash.jpg" alt />
            <font-awesome-icon icon="phone" class="icon phone" />
            <font-awesome-icon icon="envelope" class="icon envelope" />
          </div>
          <div class="right">
            <h3>{{diviner.name}}</h3>
            <p>{{diviner.performance}}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      divinerlists: []
    };
  },
  methods: {
    mounted() {
      axios
        .get("https://uranaichatapi.herokuapp.com/divinerlists")
        .then(response => {
          this.divinerlists = response.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
.diviners {
  width: 77%;
}
.title {
  font-size: 40px;
  margin: 20px 0;
  color: #490083;
}
.choice-bottom {
  margin-bottom: 30px;
}
.left-choice {
  padding: 15px 40px;
  background: #ff6c94;
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  border: 1px solid #ff6c94;
}
.right-choice {
  padding: 15px 40px;
  font-size: 23px;
  border: 1px solid #ff6c94;
}

.diviners-box {
  width: 100%;
  height: auto;
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
</style>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Header,
    Sidebar
  }
};
</script>
