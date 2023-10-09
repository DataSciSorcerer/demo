<template>
  <div class="container">
    <div class="from">
      <!-- head -->
      <div class="head flex items-center justify-center">
        <h1 class="text-4xl font-bold">Hello register!!!</h1>
        <LottieAnimation :animation-data="WatermelonJSON" :loop="true" />
      </div>
      <!-- main -->
      <div class="main flex flex-col justify-evenly">
        <!-- Email -->
        <div class="from-container ">
          <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
          <button class="btn btn-circle">
            <icon-send-email size="24" />
          </button>
        </div>
        <!-- Captcha -->
        <div class="form-control w-full">
          <input type="text" placeholder="Captcha" class="input input-bordered w-full" />
        </div>
        <!-- password -->
        <div class="form-control relative w-full">
          <input :type="password_type" placeholder="Password" class="input input-bordered w-full pr-10" />
          <label class="swap swap-rotate absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @click="change_password_display" v-model="swap_icon" />
            <icon-preview-open class="swap-on" size="24" />
            <icon-preview-close-one class="swap-off" size="24" />
          </label>
        </div>
      </div>
      <!-- actions -->
      <div class="foot flex items-center justify-center">
        <div class="login flex items-center"><button class="btn btn-block bg-secondary-focus"
            @click="to_home">Login</button></div>
        <div class="register flex items-center"><button @click="to_login" class="btn btn-block base-100">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.from-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.from {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
}

.head {
  height: 30%;
  width: 100%;
  /* background-color: aqua; */
}

.main {
  height: 40%;
  width: 100%;
  /* background-color: blueviolet; */
}

.foot {
  height: 30%;
  width: 100%;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login {
  width: 100%;
  height: 50%;
  /* background-color: cadetblue; */
}

.register {
  width: 100%;
  height: 50%;
}

@media screen and (max-width: 767px) {
  .from {
    width: 100%;
    /* background-color: red; */
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .from {
    width: 65%;
    /* background-color: white; */
  }
}

@media screen and (min-width: 1024px) {
  .from {
    width: 40%;
    /* background-color: yellow; */

  }
}
</style>

<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue"
import WatermelonJSON from "../../assets/lottie/welcome.json"
import router from "../../router";
import { ref } from 'vue';

const to_home = () => {
  router.push("/home")
}

const to_login = () => {
  router.push("/login")
}


var swap_icon = ref(true);
var password_type = ref("password");
const change_password_display = () => {
  password_type.value = swap_icon.value ? "text" : "password"
}
</script>