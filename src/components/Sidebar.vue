<template>
  <!-- sidebar -->
  <div class="sidebar">
    <ul class="sidebar-ul">
      <li>
        <font-awesome-icon icon="home" class="icon" />
        <a @click="$router.push('/home')">ホーム</a>
      </li>
      <li>
        <font-awesome-icon icon="search" class="icon" />
        <a @click="$router.push('/divinerlists')">占い師を探す</a>
      </li>
      <li>
        <font-awesome-icon icon="flag" class="icon" />
        <a>お知らせ</a>
      </li>
      <li>
        <font-awesome-icon icon="envelope" class="icon" />
        <a>鑑定チャット</a>
      </li>
      <li>
        <font-awesome-icon icon="sign-out-alt" class="icon" />
        <a @click="$store.dispatch('logout')">ログアウト</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* sidebar */
.sidebar {
  width: 23%;
}
.sidebar-ul li {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bolder;
  list-style-type: none;
}
li a {
  cursor: pointer;
}
.sidebar a {
  color: #000;
}
.icon {
  color: #ff6c94;
  padding-right: 15px;
  font-size: 24px;
}
</style>
