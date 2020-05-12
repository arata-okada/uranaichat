<template>
  <!-- sidebar -->
  <div class="sidebar">
    <ul class="sidebar-ul">
      <li>
        <font-awesome-icon icon="home" class="icon" />
        <a href="#">ホーム</a>
      </li>
      <li>
        <font-awesome-icon icon="search" class="icon" />
        <a @click="$router.push('/divinerslists')">占い師を探す</a>
      </li>
      <li>
        <font-awesome-icon icon="flag" class="icon" />
        <a href="#">お知らせ</a>
      </li>
      <li>
        <font-awesome-icon icon="envelope" class="icon" />
        <a href="#">鑑定チャット</a>
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
  padding: 15px 0;
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
