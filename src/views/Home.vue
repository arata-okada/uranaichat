<template>
  <div class="container">
    <div class="home">
      <Header></Header>
      <main class="flex">
        <Sidebar></Sidebar>
        <TweetTimeline></TweetTimeline>
        <Profile></Profile>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TweetTimeline from "../components/TweetTimeline";
import Profile from "../components/Profile";
export default {
  components: {
    Header,
    Sidebar,
    TweetTimeline,
    Profile
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
