<template>
  <div class="container">
    <div class="home">
      <Header></Header>
      <main class="flex">
        <Sidebar></Sidebar>
        <div class="tweet">
          <Tweet></Tweet>
          <TweetTimeLine></TweetTimeLine>
        </div>
        <SideProfile></SideProfile>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import TweetTimeLine from "../components/TweetTimeLine";
import SideProfile from "../components/SideProfile";
export default {
  components: {
    Header,
    Sidebar,
    Tweet,
    TweetTimeLine,
    SideProfile
  }
};
</script>

<style scoped>
.tweet {
  width: 45%;
}
</style>
