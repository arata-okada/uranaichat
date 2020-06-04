<template>
  <header class="flex between">
    <a @click="$router.push('/home')">
      <h1 class="title">占いチャット</h1>
    </a>
    <div class="right flex">
      <font-awesome-icon icon="search" class="icon" />
      <!-- <p class="login" @click="$router.push('/login')">ログイン</p>
      <p class="signup" @click="$router.push('/signup')">新規登録</p> -->
    </div>
  </header>
</template>

<style scoped>
/* header */
header {
  align-items: center;
  width: 100%;
}
header a {
  font-size: 42px;
  margin: 20px 0;
  color: #ff6c94;
  text-decoration: none;
  cursor: pointer;
}
.form-control {
  border: #ff6c94;
  background-color: #f8e7fb;
}
.right {
  align-items: center;
}
.icon {
  color: #ff6c94;
  font-size: 25px;
  cursor: pointer;
}
/* .login {
  padding: 15px 15px;
  margin-left: 10px;
  border-radius: 50px;
  transition: 0.3s;
}
.signup {
  background-color: #ff6c94;
  color: #fff;
  padding: 15px 15px;
  margin-left: 10px;
  border-radius: 50px;
  transition: 0.3s;
}
.login:hover {
  cursor: pointer;
}
.signup:hover {
  padding: 15px 15px;
  margin-left: 10px;
  border-radius: 50px;
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
} */
</style>
